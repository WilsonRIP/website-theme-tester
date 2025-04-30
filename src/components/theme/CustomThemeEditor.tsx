"use client";

import { useState } from 'react';
import { useTheme } from './ThemeProvider';

type ColorVariable = {
  name: string;
  cssVar: string;
  hue: number;
  saturation: number;
  lightness: number;
};

const colorVariables: ColorVariable[] = [
  { name: 'Background', cssVar: '--background', hue: 0, saturation: 0, lightness: 100 },
  { name: 'Foreground', cssVar: '--foreground', hue: 240, saturation: 10, lightness: 3.9 },
  { name: 'Primary', cssVar: '--primary', hue: 221.2, saturation: 83.2, lightness: 53.3 },
  { name: 'Primary Foreground', cssVar: '--primary-foreground', hue: 210, saturation: 40, lightness: 98 },
  { name: 'Secondary', cssVar: '--secondary', hue: 210, saturation: 40, lightness: 96.1 },
  { name: 'Secondary Foreground', cssVar: '--secondary-foreground', hue: 222.2, saturation: 47.4, lightness: 11.2 },
  { name: 'Accent', cssVar: '--accent', hue: 262.1, saturation: 83.3, lightness: 57.8 },
  { name: 'Accent Foreground', cssVar: '--accent-foreground', hue: 210, saturation: 40, lightness: 98 },
  { name: 'Muted', cssVar: '--muted', hue: 210, saturation: 40, lightness: 96.1 },
  { name: 'Muted Foreground', cssVar: '--muted-foreground', hue: 215.4, saturation: 16.3, lightness: 46.9 },
  { name: 'Border', cssVar: '--border', hue: 214.3, saturation: 31.8, lightness: 91.4 },
  { name: 'Input', cssVar: '--input', hue: 214.3, saturation: 31.8, lightness: 91.4 },
  { name: 'Destructive', cssVar: '--destructive', hue: 0, saturation: 84.2, lightness: 60.2 },
  { name: 'Destructive Foreground', cssVar: '--destructive-foreground', hue: 210, saturation: 40, lightness: 98 },
];

// Convert HSL values to CSS HSL string
function hslToString(hue: number, saturation: number, lightness: number): string {
  return `${hue} ${saturation}% ${lightness}%`;
}

// Convert HSL string to hex for color input
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
  const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
  const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

// Approximate hex to HSL (not perfect but good enough for preview)
function hexToHsl(hex: string): {h: number, s: number, l: number} {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse hex to rgb
  let r = 0, g = 0, b = 0;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16) / 255;
    g = parseInt(hex[1] + hex[1], 16) / 255;
    b = parseInt(hex[2] + hex[2], 16) / 255;
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16) / 255;
    g = parseInt(hex.substring(2, 4), 16) / 255;
    b = parseInt(hex.substring(4, 6), 16) / 255;
  }

  // Calculate HSL
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else if (max === b) {
      h = (r - g) / d + 4;
    }
    
    h *= 60;
  }

  return { h, s: s * 100, l: l * 100 };
}

export function CustomThemeEditor() {
  const { theme, setTheme, availableThemes, setAvailableThemes } = useTheme();
  const [customThemeName, setCustomThemeName] = useState('custom');
  const [colorValues, setColorValues] = useState<Record<string, {h: number, s: number, l: number}>>(
    colorVariables.reduce((acc, { cssVar, hue, saturation, lightness }) => {
      acc[cssVar] = { h: hue, s: saturation, l: lightness };
      return acc;
    }, {} as Record<string, {h: number, s: number, l: number}>)
  );

  const applyCustomTheme = () => {
    // Add custom theme to available themes if not already added
    if (!availableThemes.includes(customThemeName)) {
      setAvailableThemes([...availableThemes, customThemeName]);
    }

    // Apply the colors to root element
    Object.entries(colorValues).forEach(([cssVar, {h, s, l}]) => {
      document.documentElement.style.setProperty(cssVar, `${h} ${s}% ${l}%`);
    });

    // Switch to the custom theme
    setTheme(customThemeName);
  };

  const handleColorChange = (cssVar: string, hexValue: string) => {
    const hslValue = hexToHsl(hexValue);
    setColorValues({
      ...colorValues,
      [cssVar]: hslValue
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Custom Theme Name</label>
        <input
          type="text"
          value={customThemeName}
          onChange={(e) => setCustomThemeName(e.target.value)}
          className="w-full px-3 py-2 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Colors</h3>
        {colorVariables.map(({ name, cssVar, hue, saturation, lightness }) => {
          const hexColor = hslToHex(colorValues[cssVar].h, colorValues[cssVar].s, colorValues[cssVar].l);
          return (
            <div key={cssVar} className="flex items-center justify-between gap-2">
              <label className="text-sm">{name}</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={hexColor}
                  onChange={(e) => handleColorChange(cssVar, e.target.value)}
                  className="w-8 h-8 p-0 border rounded"
                />
                <input
                  type="text"
                  value={hexColor}
                  onChange={(e) => handleColorChange(cssVar, e.target.value)}
                  className="w-20 px-2 py-1 text-sm bg-background text-foreground border border-input rounded"
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={applyCustomTheme}
        className="w-full px-4 py-2 mt-4 text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
      >
        Apply Custom Theme
      </button>
    </div>
  );
}
