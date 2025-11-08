import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div 
      onClick={handleToggle}
      className="flex items-center gap-2 border-2 border-foreground/20 rounded-md p-2 cursor-pointer hover:bg-accent/50 transition-colors"
    >
      <Label htmlFor="light" className="flex items-center gap-1 pointer-events-none text-xs">
        <Sun className="h-4 w-4" />
        <span>Light</span>
      </Label>
      <RadioGroup
        value={theme || 'light'}
        onValueChange={setTheme}
        className="flex items-center gap-1 pointer-events-none"
      >
        <RadioGroupItem value="light" id="light" />
        <RadioGroupItem value="dark" id="dark" />
      </RadioGroup>
      <Label htmlFor="dark" className="flex items-center gap-1 pointer-events-none text-xs">
        <Moon className="h-4 w-4" />
        <span>Dark</span>
      </Label>
    </div>
  );
};

export default ThemeToggle;
