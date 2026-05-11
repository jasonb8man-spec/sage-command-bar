import React from 'react';

interface CopilotButtonProps {
  onClick?: () => void;
}

export const CopilotButton: React.FC<CopilotButtonProps> = ({ onClick }) => {
  return (
    <button className="nav-item nav-copilot" onClick={onClick}>
      <div className="nav-copilot-content">
        <span className="copilot-icon">S+</span>
        <span className="nav-label">Copilot</span>
      </div>
    </button>
  );
};
