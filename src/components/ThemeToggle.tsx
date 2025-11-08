import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 border-2 border-foreground/20 rounded-md p-2">
      <Label htmlFor="light" className="flex items-center gap-1 cursor-pointer text-xs">
        <Sun className="h-4 w-4" />
        <span>Light</span>
      </Label>
      <RadioGroup
        value={theme || 'light'}
        onValueChange={setTheme}
        className="flex items-center gap-1"
      >
        <RadioGroupItem value="light" id="light" />
        <RadioGroupItem value="dark" id="dark" />
      </RadioGroup>
      <Label htmlFor="dark" className="flex items-center gap-1 cursor-pointer text-xs">
        <Moon className="h-4 w-4" />
        <span>Dark</span>
      </Label>
    </div>
  );
};

export default ThemeToggle;
