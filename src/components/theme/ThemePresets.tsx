"use client";

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

type ThemePreset = {
  name: string;
  colors: Record<string, { h: number, s: number, l: number }>;
};

// Parse HSL values from CSS variable string
function parseHslValues(value: string): { h: number, s: number, l: number } {
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
  const [presetName, setPresetName] = useState('');

  useEffect(() => {
    const savedPresets = localStorage.getItem('themePresets');
    if (savedPresets) {
      setPresets(JSON.parse(savedPresets));
    }
  }, []);

  const savePreset = () => {
    if (!presetName.trim()) return;
    
    // Get all CSS variables from root
    const computedStyle = getComputedStyle(document.documentElement);
    const colors: Record<string, { h: number, s: number, l: number }> = {};
    
    [
      '--background',
      '--foreground',
      '--primary',
      '--primary-foreground',
      '--secondary',
      '--secondary-foreground',
      '--accent',
      '--accent-foreground',
      '--muted',
      '--muted-foreground',
      '--border',
      '--input',
      '--destructive',
      '--destructive-foreground'
    ].forEach(variable => {
      const value = computedStyle.getPropertyValue(variable).trim();
      colors[variable] = parseHslValues(value);
    });
    
    const newPreset: ThemePreset = {
      name: presetName,
      colors
    };
    
    const updatedPresets = [...presets, newPreset];
    setPresets(updatedPresets);
    localStorage.setItem('themePresets', JSON.stringify(updatedPresets));
    setPresetName('');
  };

  const loadPreset = (preset: ThemePreset) => {
    // Apply the colors to root element
    Object.entries(preset.colors).forEach(([cssVar, { h, s, l }]) => {
      document.documentElement.style.setProperty(cssVar, `${h} ${s}% ${l}%`);
    });
    
    // Set theme to custom
    setTheme('custom');
  };

  const deletePreset = (index: number) => {
    const updatedPresets = presets.filter((_, i) => i !== index);
    setPresets(updatedPresets);
    localStorage.setItem('themePresets', JSON.stringify(updatedPresets));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Theme Presets</h3>
      
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            placeholder="Preset name"
            className="flex-1 px-3 py-2 text-sm bg-background text-foreground border border-input rounded-md"
          />
          <button
            onClick={savePreset}
            className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Save
          </button>
        </div>
      </div>
      
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {presets.length === 0 ? (
          <p className="text-sm text-muted-foreground">No saved presets</p>
        ) : (
          presets.map((preset, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
              <span className="text-sm font-medium">{preset.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => loadPreset(preset)}
                  className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
                >
                  Load
                </button>
                <button
                  onClick={() => deletePreset(index)}
                  className="px-2 py-1 text-xs bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
