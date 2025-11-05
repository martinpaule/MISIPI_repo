import heroArtwork from "@/assets/hero-artwork.jpg";

const Hero = () => {
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
          MISIPI
        </h1>
        <p className="font-display text-xl md:text-2xl tracking-wider uppercase mb-4 text-primary">Abstract Artist</p>
        <p className="font-body text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Exploring color, memory and movement through abstract forms
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
