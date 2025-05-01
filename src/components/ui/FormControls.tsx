import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

export function FormControls() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Input Controls</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="text-input">Text Input</Label>
            <Input id="text-input" placeholder="Regular text input" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="text-area">Text Area</Label>
            <Textarea
              id="text-area"
              placeholder="Text area for longer content"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="select-input">Select Input</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="checkbox" />
            <Label htmlFor="checkbox" className="text-sm font-medium">
              Checkbox
            </Label>
          </div>

          <div className="space-y-2">
            <Label>Radio Buttons</Label>
            <RadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="radio1" />
                <Label htmlFor="radio1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="radio2" />
                <Label htmlFor="radio2">Option 2</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="range">Range Slider</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
