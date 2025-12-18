import { useState } from "react";
import { Instagram } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { staggerDelay } from "@/lib/styles";
import { ANIMATION_DELAYS } from "@/lib/constants";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

const artworks = [
  {
    id: 1,
    image: artwork1,
    title: "Studio Mural",
    year: "2024",
    medium: "Mixed media on wall",
    dimensions: "Large scale",
    description: "Striking cat mural in studio workspace with vibrant teal patterns",
  },
  {
    id: 2,
    image: artwork2,
    title: "Interior Studies",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "Various sizes",
    description: "A series exploring domestic spaces and still life compositions",
  },
  {
    id: 3,
    image: artwork3,
    title: "Landscape Journey",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "Framed",
    description: "Atmospheric landscape with flowing colors and emotional depth",
  },
  {
    id: 4,
    image: artwork4,
    title: "Colorful Creature",
    year: "2024",
    medium: "Mixed media on wood",
    dimensions: "Large scale",
    description: "Bold cat face artwork merging graphic design with expressive color",
  },
  {
    id: 5,
    image: artwork5,
    title: "Body Art",
    year: "2024",
    medium: "Tattoo design",
    dimensions: "Various",
    description: "Exploring art on skin with distinctive cat motif designs",
  },
  {
    id: 6,
    image: artwork6,
    title: "Coastal Moment",
    year: "2024",
    medium: "Photography",
    dimensions: "Digital",
    description: "Capturing natural beauty and serene coastal landscapes",
  },
];

const instagramPosts = [
  { id: 1, image: artwork1 },
  { id: 2, image: artwork2 },
  { id: 3, image: artwork3 },
  { id: 4, image: artwork4 },
  { id: 5, image: artwork5 },
  { id: 6, image: artwork6 },
];

const MyWorks = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null);
  const { t } = useLanguage();

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-foreground">
          Art Gallery
        </h2>
      </div>

      <Tabs defaultValue="selected" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1 bg-muted/50 max-w-2xl mx-auto">
          <TabsTrigger 
            value="selected" 
            className="font-display text-sm tracking-wider uppercase py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {t("works.selected")}
          </TabsTrigger>
          <TabsTrigger 
            value="instagram" 
            className="font-display text-sm tracking-wider uppercase py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {t("works.instagram")}
          </TabsTrigger>
        </TabsList>

        {/* Selected Works Tab */}
        <TabsContent value="selected" className="animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <p className="font-body text-muted-foreground mb-8 text-center">
              A curated collection of recent pieces exploring abstraction, memory, and color
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {artworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="group cursor-pointer animate-fade-in-up"
                  style={staggerDelay(index, ANIMATION_DELAYS.INCREMENT_MEDIUM)}
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 aspect-[4/5]">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
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
        </TabsContent>

        {/* Instagram Tab */}
        <TabsContent value="instagram" className="animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <p className="font-body text-muted-foreground mb-4 text-center">
              Latest updates from my studio on Instagram
            </p>
            <a
              href="https://www.instagram.com/martinaemisipi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors mb-8 mx-auto justify-center w-full"
            >
              <Instagram className="w-5 h-5" />
              {t("works.follow")}
            </a>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {instagramPosts.map((post, index) => (
                <a
                  key={post.id}
                  href="https://www.instagram.com/martinaemisipi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl aspect-square animate-fade-in-up"
                  style={staggerDelay(index, ANIMATION_DELAYS.INCREMENT_SMALL)}
                >
                  <img
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border-none transition-colors duration-300">
          {selectedArtwork && (
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative bg-muted transition-colors duration-300">
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
    </div>
  );
};

export default MyWorks;
