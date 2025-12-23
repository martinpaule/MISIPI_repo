import { useState, useEffect, useRef, useCallback } from "react";
import MisipiLogo from "./MisipiLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { images, heroAnimation, textOutline, logoAnimation } from "@/config";

const Hero = () => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageBlur, setImageBlur] = useState(0);
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const animationStartedRef = useRef(false);
  const { t } = useLanguage();

  // Calculate animation duration (longest delay + slide duration)
  const totalAnimationDuration = Math.max(
    logoAnimation.delay.martina,
    logoAnimation.delay.solarova,
    logoAnimation.delay.pauleova
  ) + logoAnimation.duration.letterSlide + 100; // +100ms buffer

  // Scroll lock threshold (10% of viewport height)
  const scrollLockThreshold = window.innerHeight * 0.1;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? currentScrollY / documentHeight : 0;

    // If animation hasn't completed and user tries to scroll past threshold, lock scroll
    if (!isAnimationComplete && currentScrollY > scrollLockThreshold) {
      window.scrollTo({ top: scrollLockThreshold, behavior: "instant" });
      return;
    }

    setScrollProgress(progress);

    if (currentScrollY > 0 && lastScrollY === 0 && !isLogoExpanded) {
      setIsLogoExpanded(true);
      
      // Start animation timer if not already started
      if (!animationStartedRef.current) {
        animationStartedRef.current = true;
        setTimeout(() => {
          setIsAnimationComplete(true);
        }, totalAnimationDuration);
      }
    } else if (currentScrollY === 0 && isLogoExpanded) {
      setIsLogoExpanded(false);
      // Reset animation state when scrolled back to top
      animationStartedRef.current = false;
      setIsAnimationComplete(false);
    }

    const blurAmount = Math.min(
      (currentScrollY / heroAnimation.scroll.blurThreshold) * heroAnimation.scroll.maxBlur,
      heroAnimation.scroll.maxBlur
    );
    setImageBlur(blurAmount);
    setLastScrollY(currentScrollY);
  }, [lastScrollY, isLogoExpanded, isAnimationComplete, scrollLockThreshold, totalAnimationDuration]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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