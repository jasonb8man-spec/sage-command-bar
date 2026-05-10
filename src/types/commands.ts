export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  group: string;
  shortcut?: string[];
  action: () => void;
}
