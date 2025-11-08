import { useLanguage } from "@/contexts/LanguageContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 border-2 border-foreground/20 rounded-md p-2">
      <Label htmlFor="en" className="flex items-center gap-1 cursor-pointer text-xs">
        <span className="text-lg">🇬🇧</span>
        <span>EN</span>
      </Label>
      <RadioGroup
        value={language}
        onValueChange={setLanguage}
        className="flex items-center gap-1"
      >
        <RadioGroupItem value="en" id="en" />
        <RadioGroupItem value="sk" id="sk" />
      </RadioGroup>
      <Label htmlFor="sk" className="flex items-center gap-1 cursor-pointer text-xs">
        <span className="text-lg">🇸🇰</span>
        <span>SK</span>
      </Label>
    </div>
  );
};

export default LanguageToggle;
