import React, { useState } from 'react';
import styled from 'styled-components';

interface UserMenuProps {
  name: string;
  avatar?: string;
  onClick?: () => void;
}

const UserMenuButton = styled.button`
  position: relative;
  padding: 6px 12px;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;

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

const UserAvatar = styled.div<{ src?: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  background-color: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #ffffff;
  background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
  background-size: cover;
  background-position: center;
`;

const UserLabel = styled.span`
  font-size: 13px;
  font-weight: 500;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const UserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  min-width: 160px;
  z-index: 1000;
  margin-top: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 13px;
  color: #161616;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f4f4f4;
  }

  &:focus {
    outline: 2px solid #00dc82;
    background-color: #f4f4f4;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

const ChevronIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

export const UserMenu: React.FC<UserMenuProps> = ({ name, avatar, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div style={{ position: 'relative' }}>
      <UserMenuButton
        onClick={() => {
          setIsOpen(!isOpen);
          onClick?.();
        }}
        className="nav-user-menu"
        aria-label={`User menu for ${name}`}
        aria-expanded={isOpen}
      >
        <UserContent>
          <UserAvatar src={avatar} title={initials}>
            {!avatar && initials}
          </UserAvatar>
          <UserLabel>{name}</UserLabel>
          <ChevronIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </ChevronIcon>
        </UserContent>
      </UserMenuButton>
      {isOpen && (
        <DropdownMenu>
          <MenuItem onClick={() => setIsOpen(false)}>Profile</MenuItem>
          <MenuItem onClick={() => setIsOpen(false)}>Settings</MenuItem>
          <MenuItem onClick={() => setIsOpen(false)}>Sign out</MenuItem>
        </DropdownMenu>
      )}
    </div>
  );
};
