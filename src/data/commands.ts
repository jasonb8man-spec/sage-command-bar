import type { CommandItem } from '../types/commands';

export const commands: CommandItem[] = [
  // Navigation
  {
    id: 'nav-dashboard',
    label: 'Go to Dashboard',
    description: 'View your main dashboard',
    group: 'Navigation',
    shortcut: ['g', 'd'],
    action: () => console.log('Navigate to Dashboard'),
  },
  {
    id: 'nav-transactions',
    label: 'Go to Transactions',
    description: 'View all transactions',
    group: 'Navigation',
    shortcut: ['g', 't'],
    action: () => console.log('Navigate to Transactions'),
  },
  {
    id: 'nav-reports',
    label: 'Go to Reports',
    description: 'View financial reports',
    group: 'Navigation',
    shortcut: ['g', 'r'],
    action: () => console.log('Navigate to Reports'),
  },
  {
    id: 'nav-settings',
    label: 'Go to Settings',
    description: 'Manage your settings',
    group: 'Navigation',
    shortcut: ['g', 's'],
    action: () => console.log('Navigate to Settings'),
  },
  // Actions
  {
    id: 'action-new-transaction',
    label: 'New Transaction',
    description: 'Create a new transaction',
    group: 'Actions',
    shortcut: ['n', 't'],
    action: () => console.log('New Transaction'),
  },
  {
    id: 'action-export-report',
    label: 'Export Report',
    description: 'Export current report to CSV',
    group: 'Actions',
    shortcut: ['e', 'r'],
    action: () => console.log('Export Report'),
  },
  {
    id: 'action-import-data',
    label: 'Import Data',
    description: 'Import data from file',
    group: 'Actions',
    action: () => console.log('Import Data'),
  },
  {
    id: 'action-invite-team',
    label: 'Invite Team Member',
    description: 'Send an invitation to join your team',
    group: 'Actions',
    action: () => console.log('Invite Team Member'),
  },
  // Settings
  {
    id: 'settings-dark-mode',
    label: 'Toggle Dark Mode',
    description: 'Switch between light and dark themes',
    group: 'Settings',
    action: () => console.log('Toggle Dark Mode'),
  },
  {
    id: 'settings-language',
    label: 'Change Language',
    description: 'Select your preferred language',
    group: 'Settings',
    action: () => console.log('Change Language'),
  },
  {
    id: 'settings-billing',
    label: 'Manage Billing',
    description: 'Update payment methods and billing info',
    group: 'Settings',
    action: () => console.log('Manage Billing'),
  },
  {
    id: 'settings-sign-out',
    label: 'Sign Out',
    description: 'Sign out of your account',
    group: 'Settings',
    action: () => console.log('Sign Out'),
  },
];
