import { useState, useEffect } from "react";
import artistPortrait from "@/assets/artist-portrait.jpg";
import MisipiLogo from "./MisipiLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { ANIMATION } from "@/lib/constants";
import { TEXT_OUTLINES } from "@/lib/styles";

const Hero = () => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageBlur, setImageBlur] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? currentScrollY / documentHeight : 0;

      // Update parallax scroll progress
      setScrollProgress(progress);

      // If scrolling down from very top (even slightly), expand and blur
      if (currentScrollY > 0 && lastScrollY === 0 && !isLogoExpanded) {
        setIsLogoExpanded(true);
      }
      // If scrolling back to top, collapse and clear blur
      else if (currentScrollY === 0 && isLogoExpanded) {
        setIsLogoExpanded(false);
      }

      // Calculate blur: starts at 0, reaches max blur after scrolling threshold
      const blurAmount = Math.min(
        (currentScrollY / ANIMATION.HERO.BLUR_SCROLL_THRESHOLD) * ANIMATION.HERO.MAX_BLUR,
        ANIMATION.HERO.MAX_BLUR
      );
      setImageBlur(blurAmount);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLogoExpanded]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={artistPortrait}
          alt="Artist portrait background"
          className="w-full h-full object-cover transition-all duration-300 ease-out"
          style={{
            transform: `translateY(${scrollProgress * 100}%)`,
            objectPosition: `center ${scrollProgress * 100}%`,
            filter: `blur(${imageBlur}px)`,
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90 transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 text-foreground">
          <MisipiLogo
            className="text-5xl md:text-7xl lg:text-8xl"
            onHoverChange={setIsLogoExpanded}
            isExpanded={isLogoExpanded}
          />
        </h1>
        <div 
          className="transition-all duration-400 ease-out"
          style={{ transform: isLogoExpanded ? `translateY(${ANIMATION.HERO.TEXT_MOVE_DISTANCE})` : 'translateY(0)' }}
        >
          <p
            className="font-display text-xl md:text-2xl tracking-wider uppercase mb-4 text-foreground dark:text-foreground"
            style={TEXT_OUTLINES.thinWhite}
          >
            <span className="dark:hidden" style={TEXT_OUTLINES.thinWhite}>{t("hero.subtitle")}</span>
            <span className="hidden dark:inline" style={TEXT_OUTLINES.thin}>{t("hero.subtitle")}</span>
          </p>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto text-foreground leading-relaxed"
          >
            <span className="dark:hidden" style={TEXT_OUTLINES.thinWhite}>{t("hero.description")}</span>
            <span className="hidden dark:inline" style={TEXT_OUTLINES.thin}>{t("hero.description")}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
