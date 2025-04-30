"use client";

import { useTheme } from './ThemeProvider';

export function ThemeSwitcher() {
  const { theme, setTheme, availableThemes } = useTheme();
  
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border">
      <select 
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-transparent text-foreground px-2 py-1 rounded border border-input outline-none focus:ring-2 focus:ring-primary"
      >
        {availableThemes.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
      <div className="text-sm text-muted-foreground">
        Current theme: <span className="font-medium text-foreground">{theme}</span>
      </div>
    </div>
  );
}
