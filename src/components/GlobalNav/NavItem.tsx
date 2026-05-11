import React from 'react';
import styled from 'styled-components';

interface NavItemProps {
  icon?: string;
  label: string;
  onClick?: () => void;
  badge?: number;
  showChevron?: boolean;
}

const NavItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid #00dc82;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.2);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ItemIcon = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemLabel = styled.span`
  font-size: 13px;
  font-weight: 500;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const BadgeSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  background-color: #da1e28;
  color: #ffffff;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  margin-left: 4px;
`;

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  onClick,
  badge,
  showChevron,
}) => {
  return (
    <NavItemButton 
      onClick={onClick}
      aria-label={label}
      title={label}
      className="nav-item nav-action-item"
    >
      <ItemContent>
        {icon && <ItemIcon className="nav-icon">{icon}</ItemIcon>}
        <ItemLabel className="nav-label">{label}</ItemLabel>
        {showChevron && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className="chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        )}
      </ItemContent>
      {badge !== undefined && badge > 0 && (
        <BadgeSpan className="nav-badge">
          {badge > 99 ? '99+' : badge}
        </BadgeSpan>
      )}
    </NavItemButton>
  );
};
