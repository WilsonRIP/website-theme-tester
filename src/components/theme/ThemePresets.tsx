"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type ThemePreset = {
  name: string;
  colors: Record<string, { h: number; s: number; l: number }>;
};

// Parse HSL values from CSS variable string
function parseHslValues(value: string): { h: number; s: number; l: number } {
  // Try to parse HSL values (format: "hue sat% light%")
  const parts = value.trim().split(/\s+/);
  if (parts.length >= 3) {
    const h = parseFloat(parts[0]);
    const s = parseFloat(parts[1]);
    const l = parseFloat(parts[2]);

    if (!isNaN(h) && !isNaN(s) && !isNaN(l)) {
      return { h, s, l };
    }
  }

  // Return default values if parsing fails
  return { h: 0, s: 0, l: 100 };
}

export function ThemePresets() {
  const { theme, setTheme } = useTheme();
  const [presets, setPresets] = useState<ThemePreset[]>([]);
  const [presetName, setPresetName] = useState("");

  useEffect(() => {
    const savedPresets = localStorage.getItem("themePresets");
    if (savedPresets) {
      setPresets(JSON.parse(savedPresets));
    }
  }, []);

  const savePreset = () => {
    if (!presetName.trim()) return;

    // Get all CSS variables from root
    const computedStyle = getComputedStyle(document.documentElement);
    const colors: Record<string, { h: number; s: number; l: number }> = {};

    [
      "--background",
      "--foreground",
      "--primary",
      "--primary-foreground",
      "--secondary",
      "--secondary-foreground",
      "--accent",
      "--accent-foreground",
      "--muted",
      "--muted-foreground",
      "--border",
      "--input",
      "--destructive",
      "--destructive-foreground",
    ].forEach((variable) => {
      const value = computedStyle.getPropertyValue(variable).trim();
      colors[variable] = parseHslValues(value);
    });

    const newPreset: ThemePreset = {
      name: presetName,
      colors,
    };

    const updatedPresets = [...presets, newPreset];
    setPresets(updatedPresets);
    localStorage.setItem("themePresets", JSON.stringify(updatedPresets));
    setPresetName("");
  };

  const loadPreset = (preset: ThemePreset) => {
    // Apply the colors to root element
    Object.entries(preset.colors).forEach(([cssVar, { h, s, l }]) => {
      document.documentElement.style.setProperty(cssVar, `${h} ${s}% ${l}%`);
    });

    // Set theme to custom
    setTheme("custom");
  };

  const deletePreset = (index: number) => {
    const updatedPresets = presets.filter((_, i) => i !== index);
    setPresets(updatedPresets);
    localStorage.setItem("themePresets", JSON.stringify(updatedPresets));
  };

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Theme Presets</Label>

      <div className="space-y-2">
        <div className="flex gap-2">
          <Input
            type="text"
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            placeholder="Preset name"
            className="flex-1"
          />
          <Button onClick={savePreset} size="sm">
            Save
          </Button>
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {presets.length === 0 ? (
          <p className="text-sm text-muted-foreground">No saved presets</p>
        ) : (
          presets.map((preset, index) => (
            <Card key={index} className="p-2 flex items-center justify-between">
              <span className="text-sm font-medium">{preset.name}</span>
              <div className="flex gap-2">
                <Button
                  onClick={() => loadPreset(preset)}
                  variant="secondary"
                  size="sm"
                >
                  Load
                </Button>
                <Button
                  onClick={() => deletePreset(index)}
                  variant="destructive"
                  size="sm"
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
