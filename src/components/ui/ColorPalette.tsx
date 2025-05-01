type ColorSwatch = {
  name: string;
  variable: string;
  cssVar: string;
};

const colorSwatches: ColorSwatch[] = [
  { name: "Background", variable: "bg-background", cssVar: "--background" },
  { name: "Foreground", variable: "bg-foreground", cssVar: "--foreground" },
  { name: "Primary", variable: "bg-primary", cssVar: "--primary" },
  {
    name: "Primary Foreground",
    variable: "bg-primary-foreground",
    cssVar: "--primary-foreground",
  },
  { name: "Secondary", variable: "bg-secondary", cssVar: "--secondary" },
  {
    name: "Secondary Foreground",
    variable: "bg-secondary-foreground",
    cssVar: "--secondary-foreground",
  },
  { name: "Accent", variable: "bg-accent", cssVar: "--accent" },
  {
    name: "Accent Foreground",
    variable: "bg-accent-foreground",
    cssVar: "--accent-foreground",
  },
  { name: "Muted", variable: "bg-muted", cssVar: "--muted" },
  {
    name: "Muted Foreground",
    variable: "bg-muted-foreground",
    cssVar: "--muted-foreground",
  },
  { name: "Border", variable: "bg-border", cssVar: "--border" },
  { name: "Input", variable: "bg-input", cssVar: "--input" },
  { name: "Destructive", variable: "bg-destructive", cssVar: "--destructive" },
  {
    name: "Destructive Foreground",
    variable: "bg-destructive-foreground",
    cssVar: "--destructive-foreground",
  },
];

export function ColorPalette() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {colorSwatches.map((swatch) => (
        <div key={swatch.name} className="space-y-2">
          <div
            className="h-16 rounded-md shadow-sm"
            style={{ backgroundColor: `hsl(var(${swatch.cssVar}))` }}
          />
          <div className="text-sm">
            <p className="font-medium">{swatch.name}</p>
            <p className="text-xs text-muted-foreground">{swatch.variable}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
