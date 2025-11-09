import { useState, useEffect } from "react";
import artistPortrait from "@/assets/artist-portrait.jpg";
import MisipiLogo from "./MisipiLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { HERO_ANIMATION } from "@/lib/constants";
import { textOutline } from "@/lib/styles";

const Hero = () => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageBlur, setImageBlur] = useState(0);
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

      // Calculate blur based on scroll position
      const blurAmount = Math.min(
        (currentScrollY / HERO_ANIMATION.SCROLL.BLUR_THRESHOLD) * HERO_ANIMATION.SCROLL.MAX_BLUR,
        HERO_ANIMATION.SCROLL.MAX_BLUR
      );
      setImageBlur(blurAmount);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLogoExpanded]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={artistPortrait}
          alt="Artist portrait background"
          className="w-full h-full object-cover transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${scrollProgress * 100}%)`,
            objectPosition: `center ${scrollProgress * 100}%`,
            filter: `blur(${imageBlur}px)`,
          }}
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
          className="transition-all duration-300 ease-out"
          style={{
            transform: isLogoExpanded ? `translateY(${HERO_ANIMATION.SUBTITLE_TRANSFORM})` : 'translateY(0)',
          }}
        >
          <p
            className="font-display text-xl md:text-2xl tracking-wider uppercase mb-4 text-white"
            style={textOutline(2, 'black')}
          >
            {t("hero.subtitle")}
          </p>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto text-white leading-relaxed"
            style={textOutline(2, 'black')}
          >
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
