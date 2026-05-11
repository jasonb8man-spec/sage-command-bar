import React from 'react';
import { NavItem } from './NavItem';
import { UserMenu } from './UserMenu';
import { CopilotButton } from './CopilotButton';

interface NavRightProps {
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
  onUserMenu?: () => void;
}

export const NavRight: React.FC<NavRightProps> = ({
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
  onUserMenu,
}) => {
  return (
    <div className="nav-right">
      {/* Search */}
      <NavItem icon="🔍" label="Search" onClick={onSearch} />

      {/* Quick Actions */}
      <NavItem icon="➕" label="Quick actions" onClick={onQuickActions} />

      {/* Home */}
      <NavItem icon="🏠" label="Home" onClick={onHome} />

      {/* Notifications */}
      <NavItem
        icon="🔔"
        label="Notifications"
        onClick={onNotifications}
        badge={notificationCount}
      />

      {/* Tasks */}
      <NavItem icon="☑" label="Tasks" onClick={onTasks} />

      {/* User Menu */}
      <UserMenu name={userName} avatar={userAvatar} onClick={onUserMenu} />

      {/* Help */}
      <NavItem icon="" label="Help" showChevron onClick={onHelp} />

      {/* Divider */}
      <div className="nav-divider nav-divider-vertical" />

      {/* Copilot Button */}
      <CopilotButton onClick={onCopilot} />
    </div>
  );
};
