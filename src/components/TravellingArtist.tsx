import { useState } from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const residencies = [
  {
    id: 1,
    location: "Barcelona, Spain",
    period: "Spring 2024",
    description:
      "A transformative three-month residency exploring the relationship between Mediterranean light and abstract form. Working in a converted industrial space near the Gothic Quarter, I developed a new series combining organic shapes with architectural elements inspired by Gaudí's vision.",
    extendedDescription:
      "The residency allowed me to experiment with new color palettes inspired by the city's tiles and mosaics. Daily walks through the Barri Gòtic influenced the layering techniques in my work, creating depth through historical accumulation.",
    images: [artwork1, artwork2, artwork3],
  },
  {
    id: 2,
    location: "Kyoto, Japan",
    period: "Fall 2023",
    description:
      "An immersive experience in traditional Japanese aesthetics and contemporary art dialogue. The residency at a temple-adjacent studio provided unique insights into wabi-sabi philosophy and its application to abstract painting.",
    extendedDescription:
      "Working alongside local artists, I explored the concept of ma (negative space) and its role in composition. The changing autumn colors and temple gardens deeply influenced my approach to subtle gradation and atmospheric effects.",
    images: [artwork2, artwork3, artwork1],
  },
  {
    id: 3,
    location: "Reykjavik, Iceland",
    period: "Winter 2023",
    description:
      "A winter residency focused on light, darkness, and the sublime landscape. The extreme conditions and minimal daylight hours pushed my work toward more introspective and atmospheric directions.",
    extendedDescription:
      "The volcanic landscape and northern lights provided endless inspiration for color relationships and emotional intensity. Working in near-darkness for much of the day created a meditative studio practice that transformed my approach to painting.",
    images: [artwork3, artwork1, artwork2],
  },
];

const TravellingArtist = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4 text-foreground">
          Travelling Artist
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Residencies, journeys, and creative explorations around the world
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {residencies.map((residency, index) => (
          <Card
            key={residency.id}
            className="overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300 border-border/50 animate-fade-in-up"
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
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                {expandedId === residency.id ? "Show less" : "Read more"}
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
