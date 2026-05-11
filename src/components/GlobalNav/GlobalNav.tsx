import React from 'react';
import { NavLeft } from './NavLeft';
import { NavRight } from './NavRight';
import './GlobalNav.css';

export interface GlobalNavProps {
  companyName: string;
  userName: string;
  userAvatar?: string;
  notificationCount?: number;
  onSearch?: () => void;
  onQuickActions?: () => void;
  onHome?: () => void;
  onNotifications?: () => void;
  onTasks?: () => void;
  onHelp?: () => void;
  onCopilot?: () => void;
  onCompanyClick?: () => void;
  onUserMenu?: () => void;
}

export const GlobalNav: React.FC<GlobalNavProps> = ({
  companyName,
  userName,
  userAvatar,
  notificationCount,
  onSearch,
  onQuickActions,
  onHome,
  onNotifications,
  onTasks,
  onHelp,
  onCopilot,
  onCompanyClick,
  onUserMenu,
}) => {
  return (
    <nav className="global-nav">
      <div className="global-nav-container">
        <NavLeft companyName={companyName} onCompanyClick={onCompanyClick} />
        <NavRight
          userName={userName}
          userAvatar={userAvatar}
          notificationCount={notificationCount}
          onSearch={onSearch}
          onQuickActions={onQuickActions}
          onHome={onHome}
          onNotifications={onNotifications}
          onTasks={onTasks}
          onHelp={onHelp}
          onCopilot={onCopilot}
          onUserMenu={onUserMenu}
        />
      </div>
    </nav>
  );
};

export default GlobalNav;
