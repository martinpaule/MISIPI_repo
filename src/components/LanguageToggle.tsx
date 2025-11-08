import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'sk' : 'en')}
      className="flex items-center gap-2 border-2 border-foreground/20"
    >
      {language === 'en' ? (
        <>
          <span className="text-lg">🇸🇰</span>
          <span className="text-xs">SK</span>
        </>
      ) : (
        <>
          <span className="text-lg">🇬🇧</span>
          <span className="text-xs">EN</span>
        </>
      )}
    </Button>
  );
};

export default LanguageToggle;
