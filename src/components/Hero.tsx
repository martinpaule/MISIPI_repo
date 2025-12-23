import { useState, useEffect, useRef } from "react";
import MisipiLogo from "./MisipiLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { images, heroAnimation, textOutline, logoAnimation } from "@/config";

const Hero = () => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageBlur, setImageBlur] = useState(0);
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  // Calculate animation duration (longest delay + slide duration)
  const totalAnimationDuration = Math.max(
    logoAnimation.delay.martina,
    logoAnimation.delay.solarova,
    logoAnimation.delay.pauleova
  ) + logoAnimation.duration.letterSlide + 200; // +200ms buffer

  // Lock/unlock body scroll via CSS
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isScrollLocked]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? currentScrollY / documentHeight : 0;

      setScrollProgress(progress);

      // Trigger animation when user starts scrolling
      if (currentScrollY > 0 && lastScrollY === 0 && !isLogoExpanded) {
        setIsLogoExpanded(true);
        setIsScrollLocked(true);
        
        // Clear any existing timer
        if (animationTimerRef.current) {
          clearTimeout(animationTimerRef.current);
        }
        
        // Unlock scroll after animation completes
        animationTimerRef.current = setTimeout(() => {
          setIsScrollLocked(false);
        }, totalAnimationDuration);
      } else if (currentScrollY === 0 && isLogoExpanded) {
        setIsLogoExpanded(false);
      }

      const blurAmount = Math.min(
        (currentScrollY / heroAnimation.scroll.blurThreshold) * heroAnimation.scroll.maxBlur,
        heroAnimation.scroll.maxBlur
      );
      setImageBlur(blurAmount);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLogoExpanded, totalAnimationDuration]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  // Preload high-res image
  useEffect(() => {
    const img = new Image();
    img.src = images.artistPortrait;
    img.onload = () => setIsHighResLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Low-res placeholder */}
        <img
          src={images.artistPortraitLowres}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHighResLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transform: `translateY(${scrollProgress * 100}%)`,
            objectPosition: `center ${scrollProgress * 100}%`,
            filter: `blur(${imageBlur}px)`,
          }}
        />
        {/* High-res image */}
        <img
          src={images.artistPortrait}
          alt="Artist portrait background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHighResLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${scrollProgress * 100}%)`,
            objectPosition: `center ${scrollProgress * 100}%`,
            filter: `blur(${imageBlur}px)`,
          }}
        />
      </div>

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
            transform: isLogoExpanded ? `translateY(${heroAnimation.subtitleTransform})` : "translateY(0)",
          }}
        >
          <p
            className="font-display text-xl md:text-2xl tracking-wider uppercase mb-4 text-white"
            style={textOutline(2, "black")}
          >
            {t("hero.subtitle")}
          </p>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto text-white leading-relaxed"
            style={textOutline(2, "black")}
          >
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;