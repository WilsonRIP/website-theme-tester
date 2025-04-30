export function FormControls() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Input Controls</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <label htmlFor="text-input" className="text-sm font-medium">Text Input</label>
            <input
              id="text-input"
              type="text"
              placeholder="Regular text input"
              className="w-full px-3 py-2 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="text-area" className="text-sm font-medium">Text Area</label>
            <textarea
              id="text-area"
              placeholder="Text area for longer content"
              rows={3}
              className="w-full px-3 py-2 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="select-input" className="text-sm font-medium">Select Input</label>
            <select
              id="select-input"
              className="w-full px-3 py-2 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              id="checkbox"
              type="checkbox"
              className="h-4 w-4 border border-input rounded bg-background focus:ring-2 focus:ring-primary"
            />
            <label htmlFor="checkbox" className="text-sm font-medium">Checkbox</label>
          </div>
          
          <div className="space-y-2">
            <span className="text-sm font-medium">Radio Buttons</span>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  id="radio1"
                  type="radio"
                  name="radio-group"
                  className="h-4 w-4 border border-input rounded-full bg-background focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="radio1" className="text-sm">Option 1</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="radio2"
                  type="radio"
                  name="radio-group"
                  className="h-4 w-4 border border-input rounded-full bg-background focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="radio2" className="text-sm">Option 2</label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="range" className="text-sm font-medium">Range Slider</label>
            <input
              id="range"
              type="range"
              min="0"
              max="100"
              className="w-full h-2 bg-muted rounded-lg appearance-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
