import { useState, useEffect } from "react";
import artistPortrait from "@/assets/artist-portrait.jpg";
import MisipiLogo from "./MisipiLogo";
import { useLanguage } from "@/contexts/LanguageContext";

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

      // Calculate blur: starts at 0, reaches max blur of 8px after scrolling 300px
      const blurAmount = Math.min((currentScrollY / 300) * 8, 8);
      setImageBlur(blurAmount);

      // Calculate overlay opacity: starts at 0, gradually increases with scroll
      const overlayAmount = Math.min(currentScrollY / 300, 1);
      // setOverlayOpacity(overlayAmount);

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
        <div className={`transition-all duration-400 ease-out ${isLogoExpanded ? "translate-y-[15em]" : ""}`}>
          <p
            className="font-display text-xl md:text-2xl tracking-wider uppercase mb-4 text-black"
            style={{ 
              textShadow: "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, -2px 0 0 white, 2px 0 0 white, 0 -2px 0 white, 0 2px 0 white"
            }}
          >
            {t("hero.subtitle")}
          </p>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto text-black leading-relaxed"
            style={{ 
              textShadow: "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, -2px 0 0 white, 2px 0 0 white, 0 -2px 0 white, 0 2px 0 white"
            }}
          >
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
