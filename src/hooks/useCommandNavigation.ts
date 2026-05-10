import { useState, useEffect, useCallback } from 'react';
import type { CommandItem } from '../types/commands';

interface UseCommandNavigationProps {
  items: CommandItem[];
  onSelect: (item: CommandItem) => void;
}

interface UseCommandNavigationReturn {
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
}

export function useCommandNavigation({
  items,
  onSelect,
}: UseCommandNavigationProps): UseCommandNavigationReturn {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Reset highlighted index when items change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [items]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev + 1;
            return next >= items.length ? 0 : next;
          });
          break;

        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev - 1;
            return next < 0 ? items.length - 1 : next;
          });
          break;

        case 'Enter':
          event.preventDefault();
          if (items.length > 0 && items[highlightedIndex]) {
            onSelect(items[highlightedIndex]);
          }
          break;
      }
    },
    [items, highlightedIndex, onSelect]
  );

  return {
    highlightedIndex,
    setHighlightedIndex,
    handleKeyDown,
  };
}
