import { useState, useEffect } from "react";
import MisipiLogo from "./MisipiLogo";
import SettingsPopover from "@/components/SettingsPopover";
import { useLanguage } from "@/contexts/LanguageContext";
import { NAVIGATION } from "@/lib/constants";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAVIGATION.SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVIGATION.SCROLL_OFFSET;
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
            className="font-display font-semibold text-xl tracking-wide uppercase"
          >
            <MisipiLogo animated={false} className="text-3xl" />
          </button>

          <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection("about")}
              className="font-display text-2xl font-bold tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-300"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="font-display text-2xl font-bold tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-300"
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
