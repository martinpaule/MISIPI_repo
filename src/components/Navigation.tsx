import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MisipiLogo from "./MisipiLogo";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-green/10 backdrop-blur-sm shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-semibold text-lg tracking-wide uppercase"
          >
            <MisipiLogo animated={false} />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="font-display text-sm tracking-wider uppercase text-foreground hover:text-primary transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="font-display text-sm tracking-wider uppercase text-foreground hover:text-primary transition-colors"
            >
              {t("nav.works")}
            </button>

            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
