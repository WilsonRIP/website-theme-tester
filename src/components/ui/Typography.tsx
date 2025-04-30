export function Typography() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Headings</h3>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Heading 1</h1>
          <h2 className="text-3xl font-bold">Heading 2</h2>
          <h3 className="text-2xl font-bold">Heading 3</h3>
          <h4 className="text-xl font-semibold">Heading 4</h4>
          <h5 className="text-lg font-semibold">Heading 5</h5>
          <h6 className="text-base font-semibold">Heading 6</h6>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Paragraphs</h3>
        <div className="space-y-4">
          <p className="text-base">
            This is a regular paragraph with base text size. The theme defines the color and appearance
            of the text. You can customize the look and feel using the theme editor.
          </p>
          <p className="text-sm">
            This is a smaller paragraph with reduced text size. It inherits the text color from the theme.
          </p>
          <p className="text-xs">
            This is an extra small paragraph, useful for captions or auxiliary information.
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Text Styles</h3>
        <div className="space-y-2">
          <p className="font-bold">Bold text</p>
          <p className="font-semibold">Semi-bold text</p>
          <p className="font-medium">Medium text</p>
          <p className="font-normal">Normal text</p>
          <p className="italic">Italic text</p>
          <p className="underline">Underlined text</p>
          <p className="text-primary">Primary colored text</p>
          <p className="text-muted-foreground">Muted text</p>
        </div>
      </div>
    </div>
  );
}
