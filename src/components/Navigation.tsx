import { useState, useEffect } from "react";
import MisipiLogo from "./MisipiLogo";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { SCROLL } from "@/lib/constants";
import { Settings } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL.HEADER_SHADOW_THRESHOLD);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "shadow-soft" : ""
      } dark:bg-black/30 bg-white/30`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-semibold text-lg tracking-wide uppercase"
          >
            <MisipiLogo animated={false} />
          </button>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
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
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-md hover:bg-accent transition-colors">
                  <Settings className="h-5 w-5 text-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-3" align="end">
                <div className="flex flex-col gap-3">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
