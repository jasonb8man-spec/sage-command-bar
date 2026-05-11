import React from 'react';

interface UserMenuProps {
  name: string;
  avatar?: string;
  onClick?: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ name, avatar, onClick }) => {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <button className="nav-item nav-user-menu" onClick={onClick}>
      <div className="nav-user-content">
        {avatar ? (
          <img src={avatar} alt={name} className="nav-avatar" />
        ) : (
          <div className="nav-avatar nav-avatar-placeholder">{initials}</div>
        )}
        <span className="nav-label">{name}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className="chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </button>
  );
};
