type ColorSwatch = {
  name: string;
  variable: string;
};

const colorSwatches: ColorSwatch[] = [
  { name: 'Background', variable: 'bg-background' },
  { name: 'Foreground', variable: 'bg-foreground' },
  { name: 'Primary', variable: 'bg-primary' },
  { name: 'Primary Foreground', variable: 'bg-primary-foreground' },
  { name: 'Secondary', variable: 'bg-secondary' },
  { name: 'Secondary Foreground', variable: 'bg-secondary-foreground' },
  { name: 'Accent', variable: 'bg-accent' },
  { name: 'Accent Foreground', variable: 'bg-accent-foreground' },
  { name: 'Muted', variable: 'bg-muted' },
  { name: 'Muted Foreground', variable: 'bg-muted-foreground' },
  { name: 'Border', variable: 'bg-border' },
  { name: 'Input', variable: 'bg-input' },
  { name: 'Destructive', variable: 'bg-destructive' },
  { name: 'Destructive Foreground', variable: 'bg-destructive-foreground' },
];

export function ColorPalette() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {colorSwatches.map((swatch) => (
        <div key={swatch.name} className="space-y-2">
          <div 
            className={`${swatch.variable} h-16 rounded-md shadow-sm`} 
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
