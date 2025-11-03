import { useState } from "react";
import { X, Instagram } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

const artworks = [
  {
    id: 1,
    image: artwork1,
    title: "Bold Expressions",
    year: "2024",
    medium: "Mixed media on canvas",
    dimensions: "120 x 100 cm",
    description: "An exploration of graphic forms and vibrant color relationships",
  },
  {
    id: 2,
    image: artwork2,
    title: "Soft Horizons",
    year: "2024",
    medium: "Acrylic on canvas",
    dimensions: "150 x 100 cm",
    description: "Atmospheric landscape capturing the essence of memory and place",
  },
  {
    id: 3,
    image: artwork3,
    title: "Creature Forms",
    year: "2023",
    medium: "Collage and paint",
    dimensions: "100 x 80 cm",
    description: "Playful abstraction merging organic and geometric elements",
  },
  {
    id: 4,
    image: artwork4,
    title: "Sunset Memory",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "140 x 100 cm",
    description: "A meditation on light, color, and emotional resonance",
  },
];

const instagramPosts = [
  { id: 1, image: artwork1 },
  { id: 2, image: artwork2 },
  { id: 3, image: artwork3 },
  { id: 4, image: artwork4 },
  { id: 5, image: artwork1 },
  { id: 6, image: artwork3 },
];

const MyWorks = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null);

  return (
    <section id="works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Selected Works Gallery */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4 text-center text-foreground">
            Selected Works
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A curated collection of recent pieces exploring abstraction, memory, and color
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 aspect-[4/5]">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-display font-semibold text-lg text-background mb-1">
                      {artwork.title}
                    </h3>
                    <p className="font-body text-sm text-background/90">{artwork.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Gallery */}
        <div className="pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4 text-foreground">
              From Instagram
            </h3>
            <p className="font-body text-muted-foreground mb-4">
              Latest updates from my studio on Instagram
            </p>
            <a
              href="https://instagram.com/artist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Follow @artist_username
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <a
                key={post.id}
                href="https://instagram.com/artist"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl aspect-square animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border-none">
          {selectedArtwork && (
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative bg-muted">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-display font-bold text-3xl mb-2 text-foreground">
                  {selectedArtwork.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  {selectedArtwork.year} • {selectedArtwork.medium}
                </p>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {selectedArtwork.description}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Dimensions: {selectedArtwork.dimensions}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MyWorks;
