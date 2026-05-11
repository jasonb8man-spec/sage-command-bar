import React from 'react';

interface NavLeftProps {
  companyName: string;
  onCompanyClick?: () => void;
}

export const NavLeft: React.FC<NavLeftProps> = ({ companyName, onCompanyClick }) => {
  return (
    <div className="nav-left">
      {/* Apps Launcher Icon */}
      <button
        className="nav-item nav-waffle"
        title="Apps launcher"
        aria-label="Open apps launcher"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <circle cx="5" cy="5" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="12" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
        </svg>
      </button>

      {/* Sage Logo */}
      <div className="nav-logo">
        <span className="sage-text">Sage</span>
      </div>

      {/* Vertical Divider */}
      <div className="nav-divider" />

      {/* Company Name Dropdown */}
      <button className="nav-item nav-company" onClick={onCompanyClick}>
        <span>{companyName}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className="chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
};
