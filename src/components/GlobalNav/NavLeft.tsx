import React, { useState } from 'react';
import styled from 'styled-components';

interface NavLeftProps {
  companyName: string;
  onCompanyClick?: () => void;
}

const NavLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

const WaffleButton = styled.button`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid #00dc82;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.2);
  }

  svg {
    color: #ffffff;
  }
`;

const LogoText = styled.div`
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: #00dc82;
  letter-spacing: 0.5px;
`;

const NavDivider = styled.div`
  width: 1px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const CompanyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  min-width: 180px;
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
  opacity: 0.7;
  transition: opacity 0.2s ease;
`;

export const NavLeft: React.FC<NavLeftProps> = ({ companyName, onCompanyClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavLeftContainer className="nav-left">
      {/* Apps Launcher Icon */}
      <WaffleButton
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
      </WaffleButton>

      {/* Sage Logo */}
      <LogoText className="nav-logo sage-text">Sage</LogoText>

      {/* Vertical Divider */}
      <NavDivider className="nav-divider" />

      {/* Company Name Dropdown */}
      <div style={{ position: 'relative' }}>
        <CompanyButton
          className="nav-item nav-company"
          onClick={() => {
            setIsOpen(!isOpen);
            onCompanyClick?.();
          }}
          aria-label={`Company selector: ${companyName}`}
          aria-expanded={isOpen}
        >
          <span>{companyName}</span>
          <ChevronIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </ChevronIcon>
        </CompanyButton>
        {isOpen && (
          <DropdownMenu>
            <MenuItem onClick={() => setIsOpen(false)}>{companyName}</MenuItem>
            <MenuItem onClick={() => setIsOpen(false)}>Company 2</MenuItem>
            <MenuItem onClick={() => setIsOpen(false)}>Company 3</MenuItem>
          </DropdownMenu>
        )}
      </div>
    </NavLeftContainer>
  );
};
