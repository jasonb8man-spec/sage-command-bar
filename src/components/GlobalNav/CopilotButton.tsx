import React from 'react';
import styled from 'styled-components';

interface CopilotButtonProps {
  onClick?: () => void;
}

const CopilotButtonStyled = styled.button`
  background: linear-gradient(135deg, #00dc82 0%, #00b873 100%);
  color: #1a1a1a;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;

  &:hover {
    background: linear-gradient(135deg, #00e896 0%, #00c480 100%);
    opacity: 0.95;
  }

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  &:active {
    opacity: 0.9;
  }

  @media (max-width: 1024px) {
    padding: 8px 12px;
  }
`;

const CopilotLabel = styled.span`
  font-size: 13px;
  font-weight: 600;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const CopilotIcon = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const CopilotButton: React.FC<CopilotButtonProps> = ({ onClick }) => {
  return (
    <CopilotButtonStyled
      onClick={onClick}
      className="nav-copilot"
      aria-label="Open Copilot"
      title="Copilot"
    >
      <CopilotIcon className="copilot-icon">S+</CopilotIcon>
      <CopilotLabel>Copilot</CopilotLabel>
    </CopilotButtonStyled>
  );
};
