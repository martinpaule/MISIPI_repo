import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";
import artistPortrait from "@/assets/artist-portrait.jpg";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollBlur, setScrollBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500; // Distance to reach full blur
      const blurAmount = Math.min((scrollPosition / maxScroll) * 20, 20);
      setScrollBlur(blurAmount);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-body relative">
      {/* Background Image with Scroll Blur */}
      <div 
        className="fixed inset-0 -z-10 transition-all duration-300"
        style={{
          backgroundImage: `url(${artistPortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          filter: `blur(${scrollBlur}px)`,
        }}
      />
      {/* Overlay for better content readability */}
      <div className="fixed inset-0 -z-10 bg-background/40" />
      
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <MyWorks />
      </main>
    </div>
  );
};

export default Index;
