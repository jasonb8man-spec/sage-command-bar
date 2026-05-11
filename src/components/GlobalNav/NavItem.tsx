import React from 'react';

interface NavItemProps {
  icon?: string;
  label: string;
  onClick?: () => void;
  badge?: number;
  showChevron?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  onClick,
  badge,
  showChevron,
}) => {
  return (
    <button className="nav-item nav-action-item" onClick={onClick}>
      <div className="nav-item-content">
        {icon && <span className="nav-icon">{icon}</span>}
        <span className="nav-label">{label}</span>
        {showChevron && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className="chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        )}
      </div>
      {badge !== undefined && badge > 0 && (
        <span className="nav-badge">{badge > 99 ? '99+' : badge}</span>
      )}
    </button>
  );
};
