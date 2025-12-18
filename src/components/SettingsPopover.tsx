import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

const SettingsPopover = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
          aria-label="Settings"
        >
          <Settings className="!h-5 !w-5 sm:!h-7 sm:!w-7 md:!h-10 md:!w-10" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Language</h4>
            <div className="space-y-1">
              <button
                className={`flex items-center gap-2 w-full cursor-pointer hover:bg-accent p-2 rounded-md transition-colors duration-300 ${language === "en" ? "bg-accent" : ""}`}
                onClick={() => setLanguage("en")}
              >
                <span className="text-lg">🇬🇧</span>
                <span>English</span>
              </button>
              <button
                className={`flex items-center gap-2 w-full cursor-pointer hover:bg-accent p-2 rounded-md transition-colors duration-300 ${language === "sk" ? "bg-accent" : ""}`}
                onClick={() => setLanguage("sk")}
              >
                <span className="text-lg">🇸🇰</span>
                <span>Slovenčina</span>
              </button>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <h4 className="font-medium text-sm">Theme</h4>
            <RadioGroup value={theme} onValueChange={setTheme}>
              <Label
                htmlFor="theme-light"
                className="flex items-center space-x-2 cursor-pointer hover:bg-accent p-2 rounded-md transition-colors duration-300"
                onClick={() => setTheme("light")}
              >
                <RadioGroupItem value="light" id="theme-light" />
                <span>Light</span>
              </Label>
              <Label
                htmlFor="theme-dark"
                className="flex items-center space-x-2 cursor-pointer hover:bg-accent p-2 rounded-md transition-colors duration-300"
                onClick={() => setTheme("dark")}
              >
                <RadioGroupItem value="dark" id="theme-dark" />
                <span>Dark</span>
              </Label>
            </RadioGroup>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPopover;
