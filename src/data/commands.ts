import type { CommandItem } from '../types/commands';

export const commands: CommandItem[] = [
  // Jump to
  {
    id: 'nav-dashboard',
    label: 'Go to Dashboard',
    description: 'View your main dashboard',
    group: 'Jump to',
    shortcut: ['g', 'd'],
    action: () => console.log('Navigate to Dashboard'),
  },
  {
    id: 'nav-transactions',
    label: 'Go to Transactions',
    description: 'View all transactions',
    group: 'Jump to',
    shortcut: ['g', 't'],
    action: () => console.log('Navigate to Transactions'),
  },
  {
    id: 'nav-reports',
    label: 'Go to Reports',
    description: 'View financial reports',
    group: 'Jump to',
    shortcut: ['g', 'r'],
    action: () => console.log('Navigate to Reports'),
  },
  {
    id: 'nav-settings',
    label: 'Go to Settings',
    description: 'Manage your settings',
    group: 'Jump to',
    shortcut: ['g', 's'],
    action: () => console.log('Navigate to Settings'),
  },
  // Create
  {
    id: 'action-new-transaction',
    label: 'New Transaction',
    description: 'Create a new transaction',
    group: 'Create',
    shortcut: ['n', 't'],
    action: () => console.log('New Transaction'),
  },
  {
    id: 'action-export-report',
    label: 'Export Report',
    description: 'Export current report to CSV',
    group: 'Create',
    shortcut: ['e', 'r'],
    action: () => console.log('Export Report'),
  },
  {
    id: 'action-import-data',
    label: 'Import Data',
    description: 'Import data from file',
    group: 'Create',
    action: () => console.log('Import Data'),
  },
  {
    id: 'action-invite-team',
    label: 'Invite Team Member',
    description: 'Send an invitation to join your team',
    group: 'Create',
    action: () => console.log('Invite Team Member'),
  },
  // Recent
  {
    id: 'settings-dark-mode',
    label: 'Toggle Dark Mode',
    description: 'Switch between light and dark themes',
    group: 'Recent',
    action: () => console.log('Toggle Dark Mode'),
  },
  {
    id: 'settings-language',
    label: 'Change Language',
    description: 'Select your preferred language',
    group: 'Recent',
    action: () => console.log('Change Language'),
  },
  {
    id: 'settings-billing',
    label: 'Manage Billing',
    description: 'Update payment methods and billing info',
    group: 'Recent',
    action: () => console.log('Manage Billing'),
  },
  {
    id: 'settings-sign-out',
    label: 'Sign Out',
    description: 'Sign out of your account',
    group: 'Recent',
    action: () => console.log('Sign Out'),
  },
];
