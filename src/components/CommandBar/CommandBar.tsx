import { createPortal } from 'react-dom';
import { useEffect, useState, useRef } from 'react';
import { useCommandBar } from '../../hooks/useCommandBar';
import { useCommandNavigation } from '../../hooks/useCommandNavigation';
import { commands } from '../../data/commands';
import type { CommandItem } from '../../types/commands';
import type { DesignOption } from '../DesignConfig';
import './CommandBar.css';

interface CommandBarProps {
  designOption?: DesignOption;
}

export default function CommandBar({ designOption = 'A' }: CommandBarProps) {
  const { isOpen, close } = useCommandBar();
  const [searchValue, setSearchValue] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [recentSearches] = useState<string[]>([
    'Customer: Acme Corp',
    'Invoice #12345',
    'Expense Report - March',
    'Supplier: Tech Solutions Ltd',
    'Payment to John Doe',
    'Sales Report Q1 2024',
    'Bank Reconciliation',
    'Tax Return 2023',
  ]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = '';
      setSearchValue('');
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      close();
      setIsClosing(false);
    }, 200);
  };

  // Filter commands (flat list for navigation)
  const filteredCommands = searchValue.trim()
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(searchValue.toLowerCase()) ||
          cmd.description?.toLowerCase().includes(searchValue.toLowerCase())
      )
    : commands;

  // Handle command selection
  const handleCommandSelect = (command: CommandItem) => {
    command.action();
    handleClose();
  };

  // Use navigation hook
  const { highlightedIndex, setHighlightedIndex, handleKeyDown: handleNavigationKeyDown } = useCommandNavigation({
    items: filteredCommands,
    onSelect: handleCommandSelect,
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    } else {
      handleNavigationKeyDown(e);
    }
  };

  // Group commands for display
  const groupedCommands: Record<string, CommandItem[]> = {};
  filteredCommands.forEach((cmd) => {
    if (!groupedCommands[cmd.group]) {
      groupedCommands[cmd.group] = [];
    }
    groupedCommands[cmd.group].push(cmd);
  });

  // Auto-scroll highlighted item into view
  useEffect(() => {
    if (resultsRef.current[highlightedIndex]) {
      resultsRef.current[highlightedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [highlightedIndex]);

  if (!isOpen && !isClosing) return null;

  return createPortal(
    <div
      className={`command-bar-backdrop ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`command-bar-modal ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input */}
        <div className="command-bar-search">
          <svg className="command-bar-search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="8" r="6"></circle>
            <path d="m12 12 6 6"></path>
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Find or create anything in Sage"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="command-bar-search-input"
          />
          {searchValue && (
            <button
              className="command-bar-clear-button"
              onClick={() => setSearchValue('')}
              aria-label="Clear search"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5 L15 15 M15 5 L5 15"></path>
              </svg>
            </button>
          )}
        </div>

        {/* Results */}
        <div className="command-bar-results">
          {designOption === 'B' && !searchValue ? (
            // Option B: Show recent searches when no search value
            <div>
              <div className="command-group-header">Recent</div>
              {recentSearches.map((search, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    resultsRef.current[index] = el;
                  }}
                  className={`command-item ${index === highlightedIndex ? 'highlighted' : ''}`}
                  onClick={() => {
                    setSearchValue(search);
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  <div className="command-item-content">
                    <div className="command-item-label">{search}</div>
                  </div>
                  <svg className="command-item-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 15l5-5-5-5"></path>
                  </svg>
                </div>
              ))}
            </div>
          ) : Object.keys(groupedCommands).length === 0 ? (
            <div className="command-bar-no-results">
              <div className="no-results-text">
                No results for "{searchValue}"
              </div>
              <div className="no-results-help">
                <p>Search for customers, suppliers, transactions, reports or accounts.</p>
                <p>Search by name, address, amount, date and more.</p>
                <p>Type create, to add a new invoice, expense, or any type of transaction.</p>
              </div>
            </div>
          ) : (
            Object.entries(groupedCommands).map(([group, groupCommands], groupIndex) => {
              // Calculate the starting index for this group in the flat list
              let itemIndex = 0;
              for (let i = 0; i < groupIndex; i++) {
                const prevGroup = Object.keys(groupedCommands)[i];
                itemIndex += groupedCommands[prevGroup].length;
              }

              return (
                <div key={group}>
                  {groupIndex > 0 && <div className="command-group-divider" />}
                  <div className="command-group-header">{group}</div>
                  {groupCommands.map((command) => {
                    const currentIndex = itemIndex++;
                    const isHighlighted = currentIndex === highlightedIndex;

                    return (
                      <div
                        key={command.id}
                        ref={(el) => {
                          resultsRef.current[currentIndex] = el;
                        }}
                        className={`command-item ${isHighlighted ? 'highlighted' : ''}`}
                        onClick={() => handleCommandSelect(command)}
                        onMouseEnter={() => setHighlightedIndex(currentIndex)}
                      >
                        <div className="command-item-content">
                          <div className="command-item-label">{command.label}</div>
                        </div>
                        {command.shortcut && (
                          <div className="command-item-shortcut">
                            {command.shortcut.map((key, index) => (
                              <kbd key={index}>{key}</kbd>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="command-bar-footer">
          <div className="command-bar-footer-hint">
            <span>
              <kbd>↑</kbd>
              <kbd>↓</kbd> to navigate
            </span>
            <span>
              <kbd>↵</kbd> to select
            </span>
            <span>
              <kbd>esc</kbd> to close
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
