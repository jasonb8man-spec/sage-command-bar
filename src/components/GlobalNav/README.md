# GlobalNav Component

A professional enterprise navigation bar component that replicates Sage application header styling.

## Features

- ✅ Dark theme (#1a1a1a background)
- ✅ Fixed positioning at top of viewport (52px height)
- ✅ Left section: Apps launcher, Sage logo, company selector
- ✅ Right section: Search, quick actions, home, notifications, tasks, user menu, help, Copilot
- ✅ Sage green branding (#00dc82)
- ✅ Copilot button with green gradient accent
- ✅ Notification badges with count
- ✅ User avatar with initials fallback
- ✅ Responsive design (icons only on tablets/mobile)
- ✅ Hover and active states
- ✅ Full TypeScript support

## Props

```typescript
interface GlobalNavProps {
  companyName: string;              // Company name to display in selector
  userName: string;                 // User's display name
  userAvatar?: string;              // URL to user avatar image (optional)
  notificationCount?: number;       // Number of notifications to show in badge
  onSearch?: () => void;            // Search button click handler
  onQuickActions?: () => void;      // Quick actions button click handler
  onHome?: () => void;              // Home button click handler
  onNotifications?: () => void;     // Notifications button click handler
  onTasks?: () => void;             // Tasks button click handler
  onHelp?: () => void;              // Help button click handler
  onCopilot?: () => void;           // Copilot button click handler
  onCompanyClick?: () => void;      // Company selector click handler
  onUserMenu?: () => void;          // User menu click handler
}
```

## Usage

```tsx
import { GlobalNav } from './components/GlobalNav';

export function App() {
  return (
    <>
      <GlobalNav
        companyName="Leda Construction LTD"
        userName="Simon"
        notificationCount={3}
        onSearch={() => console.log('Search')}
        onQuickActions={() => console.log('Quick actions')}
        onHome={() => console.log('Home')}
        onNotifications={() => console.log('Notifications')}
        onTasks={() => console.log('Tasks')}
        onHelp={() => console.log('Help')}
        onCopilot={() => console.log('Copilot')}
        onCompanyClick={() => console.log('Company click')}
        onUserMenu={() => console.log('User menu')}
      />
      {/* Your page content goes here */}
    </>
  );
}
```

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ ⋮⋮⋮  Sage  │  Leda Construction LTD ▼  │  🔍  ➕  🏠  🔔  ☑  👤  ❓  │ S+
└─────────────────────────────────────────────────────────────────┘
  Left                                      Right
```

## Component Structure

- **GlobalNav** (root component)
  - **NavLeft**: Apps launcher, logo, company selector
  - **NavRight**: Action items, user menu, Copilot button
    - **NavItem**: Generic nav item (icon + label + optional badge)
    - **UserMenu**: User profile with avatar and dropdown
    - **CopilotButton**: Special Copilot button with gradient

## Styling

- **Height**: 52px
- **Background**: #1a1a1a (near black)
- **Text Color**: #ffffff (white)
- **Font Size**: 13px
- **Font Weight**: Medium (500)
- **Sage Green**: #00dc82
- **Icon Size**: 16-18px

## Responsive Breakpoints

- **Desktop (>1024px)**: Full labels and icons
- **Tablet (768px-1024px)**: Icons only for most items
- **Mobile (<768px)**: Minimal spacing, icons only

## Sub-Components

### NavItem
Generic navigation item with icon, label, and optional badge.

```tsx
<NavItem
  icon="🔍"
  label="Search"
  onClick={handleSearch}
  badge={5}
  showChevron={false}
/>
```

### UserMenu
User profile dropdown with avatar and name.

```tsx
<UserMenu
  name="Simon"
  avatar={avatarUrl}  // Optional
  onClick={handleUserClick}
/>
```

### CopilotButton
Distinct Copilot button with green gradient.

```tsx
<CopilotButton onClick={handleCopilot} />
```

## Notes

- The component uses emoji for icons (🔍, ➕, 🏠, 🔔, ☑) for simplicity
- SVG icons (waffle grid, chevrons) are used for better control
- User avatar generates initials if no image URL is provided
- All click handlers are optional (component works without them)
- Component is fully self-contained and responsive
