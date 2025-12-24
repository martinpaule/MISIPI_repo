import { useState } from "react";
import { Instagram, FileText, Download } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { artworks, staggerDelay, animationDelays } from "@/config";
import conversationsOfColorsAndClayPdf from "@/assets/documents/Conversations_of_Colors_and_Clay.pdf";
import pollysProjectPdf from "@/assets/documents/Pollys_Project.pdf";

const documents = [
  {
    id: 1,
    titleKey: "works.document1.title" as const,
    descriptionKey: "works.document1.description" as const,
    file: conversationsOfColorsAndClayPdf,
  },
  {
    id: 2,
    titleKey: "works.document2.title" as const,
    descriptionKey: "works.document2.description" as const,
    file: pollysProjectPdf,
  },
];

const MyWorks = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[number] | null>(null);
  const { t } = useLanguage();

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-foreground">
          Art Gallery
        </h2>
      </div>

      <Tabs defaultValue="selected" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-muted/50 max-w-3xl mx-auto">
          <TabsTrigger
            value="selected"
            className="font-display text-sm tracking-wider uppercase py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {t("works.selected")}
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="font-display text-sm tracking-wider uppercase py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {t("works.documents")}
          </TabsTrigger>
          <TabsTrigger
            value="instagram"
            className="font-display text-sm tracking-wider uppercase py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {t("works.instagram")}
          </TabsTrigger>
        </TabsList>

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
                  style={staggerDelay(index, animationDelays.medium)}
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

        <TabsContent value="documents" className="animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {documents.map((doc, index) => (
                <a
                  key={doc.id}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl border border-border/50 hover:border-primary/50 bg-card hover:bg-accent/5 transition-all duration-300 animate-fade-in-up"
                  style={staggerDelay(index, animationDelays.medium)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {t(doc.titleKey)}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mb-3">
                        {t(doc.descriptionKey)}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                        {t("works.viewDocument")}
                        <Download className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="instagram" className="animate-fade-in">
          <div className="max-w-3xl mx-auto text-center py-12">
            <Instagram className="w-16 h-16 text-primary mx-auto mb-6" />
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("works.instagramDescription")}
            </p>
            <a
              href="https://www.instagram.com/martinaemisipi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-base tracking-wider uppercase text-primary hover:text-accent transition-colors border border-primary hover:border-accent px-6 py-3 rounded-full"
            >
              <Instagram className="w-5 h-5" />
              {t("works.follow")}
            </a>
          </div>
        </TabsContent>
      </Tabs>

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