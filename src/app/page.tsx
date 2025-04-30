import { ThemeSwitcher } from '../components/theme/ThemeSwitcher';
import { CustomThemeEditor } from '../components/theme/CustomThemeEditor';
import { ThemePresets } from '../components/theme/ThemePresets';
import { ColorPalette } from '../components/ui/ColorPalette';
import { Typography } from '../components/ui/Typography';
import { FormControls } from '../components/ui/FormControls';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold">Theme Tester</h1>
            <p className="text-muted-foreground">Test and customize UI themes in real-time</p>
          </div>
          <ThemeSwitcher />
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <aside className="space-y-6">
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Theme Editor</h2>
              <CustomThemeEditor />
            </Card>
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Theme Presets</h2>
              <ThemePresets />
            </Card>
          </aside>

          <section className="space-y-12">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
              <ColorPalette />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Typography</h2>
              <Typography />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">UI Components</h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <FormControls />
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
