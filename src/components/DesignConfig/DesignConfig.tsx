import { useState } from 'react';
import './DesignConfig.css';

export type DesignOption = 'A' | 'B' | 'C' | 'D' | 'E';

interface DesignConfigProps {
  currentDesign: DesignOption;
  onDesignChange: (design: DesignOption) => void;
}

const designOptions: { value: DesignOption; label: string; description: string }[] = [
  { value: 'A', label: 'Option A', description: 'Current design with sections' },
  { value: 'B', label: 'Option B', description: 'Recent searches only' },
  { value: 'C', label: 'Option C', description: 'Coming soon' },
  { value: 'D', label: 'Option D', description: 'Coming soon' },
  { value: 'E', label: 'Option E', description: 'Coming soon' },
];

export default function DesignConfig({ currentDesign, onDesignChange }: DesignConfigProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="design-config">
      <button
        className="design-config-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Configure command bar design"
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="10" cy="10" r="3"></circle>
          <path d="M10 1v2m0 14v2M19 10h-2M3 10H1m15.364-5.364l-1.414 1.414M6.05 14.95l-1.414 1.414m10.728 0l-1.414-1.414M6.05 6.05L4.636 4.636"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="design-config-panel">
          <div className="design-config-header">
            <h3>Command Bar Design</h3>
            <button
              className="design-config-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5 L15 15 M15 5 L5 15"></path>
              </svg>
            </button>
          </div>
          <div className="design-config-options">
            {designOptions.map((option) => (
              <button
                key={option.value}
                className={`design-option ${currentDesign === option.value ? 'active' : ''} ${
                  option.value !== 'A' && option.value !== 'B' ? 'disabled' : ''
                }`}
                onClick={() => {
                  if (option.value === 'A' || option.value === 'B') {
                    onDesignChange(option.value);
                  }
                }}
                disabled={option.value !== 'A' && option.value !== 'B'}
              >
                <div className="design-option-label">{option.label}</div>
                <div className="design-option-description">{option.description}</div>
                {currentDesign === option.value && (
                  <div className="design-option-check">✓</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
