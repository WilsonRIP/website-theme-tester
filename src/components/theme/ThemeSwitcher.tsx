"use client";

import { useTheme } from "./ThemeProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border">
      <Select value={theme} onValueChange={(value) => setTheme(value)}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {availableThemes.map((t) => (
            <SelectItem key={t} value={t}>
              <div className="flex items-center gap-2">
                {t === "light" && <Sun className="h-4 w-4" />}
                {t === "dark" && <Moon className="h-4 w-4" />}
                {t === "system" && <Monitor className="h-4 w-4" />}
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="text-sm text-muted-foreground">
        Current theme:{" "}
        <span className="font-medium text-foreground">{theme}</span>
      </div>
    </div>
  );
}
