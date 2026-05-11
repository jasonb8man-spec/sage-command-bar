import React, { useState } from 'react';
import { GlobalNav } from './GlobalNav';

export const GlobalNavDemo: React.FC = () => {
  const [notificationCount] = useState(3);

  const handleSearch = () => console.log('Search clicked');
  const handleQuickActions = () => console.log('Quick actions clicked');
  const handleHome = () => console.log('Home clicked');
  const handleNotifications = () => console.log('Notifications clicked');
  const handleTasks = () => console.log('Tasks clicked');
  const handleHelp = () => console.log('Help clicked');
  const handleCopilot = () => console.log('Copilot clicked');
  const handleCompanyClick = () => console.log('Company selector clicked');
  const handleUserMenu = () => console.log('User menu clicked');

  return (
    <div>
      <GlobalNav
        companyName="Leda Construction LTD"
        userName="Simon"
        notificationCount={notificationCount}
        onSearch={handleSearch}
        onQuickActions={handleQuickActions}
        onHome={handleHome}
        onNotifications={handleNotifications}
        onTasks={handleTasks}
        onHelp={handleHelp}
        onCopilot={handleCopilot}
        onCompanyClick={handleCompanyClick}
        onUserMenu={handleUserMenu}
      />

      {/* Add padding to account for fixed nav */}
      <div style={{ paddingTop: '52px', padding: '52px 16px 16px' }}>
        <h1>GlobalNav Component Demo</h1>
        <p>
          The GlobalNav component is displayed above. It features a dark enterprise header with:
        </p>
        <ul>
          <li>Apps launcher (waffle icon)</li>
          <li>Sage logo and company selector</li>
          <li>Search, quick actions, home, notifications, and tasks buttons</li>
          <li>User profile menu with avatar</li>
          <li>Help menu</li>
          <li>Copilot button with green gradient accent</li>
        </ul>

        <div style={{ marginTop: '24px' }}>
          <h2>Features</h2>
          <ul>
            <li>Fixed positioning at top of viewport</li>
            <li>Responsive design (icons only on small screens)</li>
            <li>Notification badge support</li>
            <li>Green accent for Sage branding</li>
            <li>Copilot button with distinct styling</li>
            <li>User avatar with initials fallback</li>
            <li>Hover and active states on all interactive items</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavDemo;
