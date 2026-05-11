# GlobalNav Quick Reference

## Files Created

```
src/components/GlobalNav/
├── GlobalNav.tsx           # Main component wrapper
├── GlobalNav.css           # All styling
├── GlobalNav.demo.tsx      # Demo/usage example
├── NavLeft.tsx            # Left section (logo, company)
├── NavRight.tsx           # Right section (action items)
├── NavItem.tsx            # Generic nav item
├── UserMenu.tsx           # User profile dropdown
├── CopilotButton.tsx      # Copilot button (special styling)
├── index.ts               # Barrel export
└── README.md              # Full documentation
```

## Quick Start

```tsx
import { GlobalNav } from './components/GlobalNav';

<GlobalNav
  companyName="Leda Construction LTD"
  userName="Simon"
  notificationCount={3}
  onSearch={() => {}}
  onQuickActions={() => {}}
  onHome={() => {}}
  onNotifications={() => {}}
  onTasks={() => {}}
  onHelp={() => {}}
  onCopilot={() => {}}
  onCompanyClick={() => {}}
  onUserMenu={() => {}}
/>
```

## Design System

| Element | Color | Size |
|---------|-------|------|
| Background | #1a1a1a | 52px height |
| Text | #ffffff | 13px |
| Sage Green | #00dc82 | Logo & Copilot accent |
| Icons | White | 16-18px |
| Hover State | rgba(255,255,255,0.1) | - |
| Badge | #ff4444 | 20px |

## Layout (Left to Right)

1. **Waffle Icon** - Apps launcher (9-dot grid)
2. **Sage Logo** - Green text "Sage"
3. **Divider** - Muted vertical line
4. **Company Selector** - "Leda Construction LTD" + chevron
5. **Spacer** - Flexible space
6. **Search** - 🔍 icon + label
7. **Quick Actions** - ➕ icon + label
8. **Home** - 🏠 icon + label
9. **Notifications** - 🔔 icon + badge
10. **Tasks** - ☑ icon + label
11. **User Menu** - Avatar + "Simon" + chevron
12. **Help** - Label + chevron
13. **Divider** - Green vertical line
14. **Copilot** - "S+" + "Copilot" (green gradient bg)

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| >1024px | Full layout, labels visible |
| 768-1024px | Icons only, hide logo/dividers |
| <768px | Minimal spacing, icons only |

## Prop Handlers

All `on*` handlers are optional. Provide them to enable user interactions:

- `onSearch()` - Search button clicked
- `onQuickActions()` - Quick actions button clicked
- `onHome()` - Home button clicked
- `onNotifications()` - Notifications button clicked
- `onTasks()` - Tasks button clicked
- `onHelp()` - Help menu clicked
- `onCopilot()` - Copilot button clicked
- `onCompanyClick()` - Company selector clicked
- `onUserMenu()` - User profile clicked

## Features

✅ TypeScript support
✅ Fixed top positioning
✅ Responsive design
✅ Notification badges
✅ User avatar with initials fallback
✅ Sage green branding
✅ Copilot green gradient accent
✅ Hover & active states
✅ No external dependencies (CSS only)

## Integration Example

```tsx
import React, { useState } from 'react';
import { GlobalNav } from './components/GlobalNav';
import { CommandBar } from './components/CommandBar';

function App() {
  const [currentUser] = useState({ name: 'Simon', avatar: null });

  return (
    <>
      <GlobalNav
        companyName="Leda Construction LTD"
        userName={currentUser.name}
        notificationCount={5}
        onSearch={() => console.log('Search')}
        onCopilot={() => console.log('Open Copilot')}
      />
      <CommandBar />
      <main style={{ paddingTop: '52px' }}>
        {/* Your app content */}
      </main>
    </>
  );
}
```
