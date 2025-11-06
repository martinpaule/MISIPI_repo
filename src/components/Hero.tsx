import { useState, useEffect } from "react";
import heroArtwork from "@/assets/hero-artwork.jpg";
import MisipiLogo from "./MisipiLogo";
import { Button } from "./ui/button";

const Hero = () => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down from very top (even slightly), expand
      if (currentScrollY > 0 && lastScrollY === 0 && !isLogoExpanded) {
        setIsLogoExpanded(true);
      }
      // If scrolling back to top, collapse
      else if (currentScrollY === 0 && isLogoExpanded) {
        setIsLogoExpanded(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLogoExpanded]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroArtwork} alt="Abstract artwork background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />
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
        <div className={`transition-all duration-400 ease-out ${isLogoExpanded ? "translate-y-[18em]" : ""}`}>
          <p className="font-display text-xl md:text-2xl tracking-wider uppercase mb-4 text-primary">Abstract Artist</p>
          <p className="font-body text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Exploring color, memory and movement through abstract forms
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
