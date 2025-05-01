import { ThemeSwitcher } from "../components/theme/ThemeSwitcher";
import { CustomThemeEditor } from "../components/theme/CustomThemeEditor";
import { ThemePresets } from "../components/theme/ThemePresets";
import { ColorPalette } from "../components/ui/ColorPalette";
import { Typography } from "../components/ui/Typography";
import { FormControls } from "../components/ui/FormControls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToastDemo } from "../components/ui/ToastDemo";
import { DialogDemo } from "../components/ui/DialogDemo";
import { SheetDemo } from "../components/ui/SheetDemo";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold">Theme Tester</h1>
            <p className="text-muted-foreground">
              Test and customize UI themes in real-time
            </p>
          </div>
          <ThemeSwitcher />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme Editor</CardTitle>
              </CardHeader>
              <CardContent>
                <CustomThemeEditor />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Theme Presets</CardTitle>
              </CardHeader>
              <CardContent>
                <ThemePresets />
              </CardContent>
            </Card>
          </aside>

          <section className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <ColorPalette />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>UI Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Default</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Dialog</h3>
                    <DialogDemo />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Sheet</h3>
                    <SheetDemo />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Toast Notifications</h3>
                    <ToastDemo />
                  </div>

                  <div className="space-y-4">
                    <FormControls />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
