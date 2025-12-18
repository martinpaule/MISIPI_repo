import { useState, useEffect } from "react";
import MisipiLogo from "./MisipiLogo";
import SettingsPopover from "@/components/SettingsPopover";
import { useLanguage } from "@/contexts/LanguageContext";
import { navigation } from "@/config";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > navigation.scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navigation.scrollOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/30 backdrop-blur-sm ${
        isScrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-semibold tracking-wide uppercase"
          >
            <MisipiLogo animated={false} className="text-lg sm:text-2xl md:text-3xl" />
          </button>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection("about")}
              className="font-display text-sm sm:text-lg md:text-2xl font-bold tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="font-display text-sm sm:text-lg md:text-2xl font-bold tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
            >
              {t("nav.works")}
            </button>
          </div>

          <SettingsPopover />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;