import { useState } from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const TravellingArtist = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const residencies = [
    {
      id: 1,
      location: t("residency1.location"),
      period: t("residency1.period"),
      description: t("residency1.description"),
      extendedDescription: t("residency1.extendedDescription"),
      images: [artwork1, artwork2, artwork3],
    },
    {
      id: 2,
      location: t("residency2.location"),
      period: t("residency2.period"),
      description: t("residency2.description"),
      extendedDescription: t("residency2.extendedDescription"),
      images: [artwork2, artwork3, artwork1],
    },
    {
      id: 3,
      location: t("residency3.location"),
      period: t("residency3.period"),
      description: t("residency3.description"),
      extendedDescription: t("residency3.extendedDescription"),
      images: [artwork3, artwork1, artwork2],
    },
  ];

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4 text-foreground">
          {t("travelling.title")}
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("travelling.description")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {residencies.map((residency, index) => (
          <Card
            key={residency.id}
            className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 dark:border-white animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-display font-bold text-2xl text-foreground">
                      {residency.location}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body text-sm">{residency.period}</span>
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {residency.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative overflow-hidden rounded-xl aspect-square"
                  >
                    <img
                      src={image}
                      alt={`${residency.location} artwork ${imgIndex + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="font-body text-muted-foreground leading-relaxed space-y-3">
                <p>{residency.description}</p>
                {expandedId === residency.id && (
                  <p className="animate-fade-in-up">{residency.extendedDescription}</p>
                )}
              </div>

              {/* Read More Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded(residency.id)}
                className="mt-4 text-primary hover:text-accent"
              >
                {expandedId === residency.id ? t("travelling.showLess") : t("travelling.readMore")}
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    expandedId === residency.id ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravellingArtist;
