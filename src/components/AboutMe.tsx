import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import artistPortrait from "@/assets/artist-portrait.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const pressArticles = [
  {
    title: {
      en: "Retrospective Exhibition",
      sk: "Výstava Retrospektíva"
    },
    description: {
      en: "A comprehensive look at the artist's journey",
      sk: "Komplexný pohľad na umeleckú cestu"
    },
    publication: {
      en: "RKCPD Prievidza",
      sk: "RKCPD Prievidza"
    },
    link: "https://www.rkcpd.sk/hlavna-stranka/podujatia/vystava-retrospektiva.html?page_id=9142",
  },
  {
    title: {
      en: "The Color of Memory: An Interview",
      sk: "Farba pamäti: Rozhovor"
    },
    description: {
      en: "Exploring the artist's approach to abstraction",
      sk: "Skúmanie prístupu umelkyne k abstrakcii"
    },
    publication: {
      en: "Art Monthly",
      sk: "Art Monthly"
    },
    link: "#",
  },
  {
    title: {
      en: "Studio Visit: Abstract Expressions",
      sk: "Návšteva ateliéru: Abstraktné výrazy"
    },
    description: {
      en: "Inside the creative process",
      sk: "Pohľad do tvorivého procesu"
    },
    publication: {
      en: "Contemporary Art Review",
      sk: "Contemporary Art Review"
    },
    link: "#",
  },
  {
    title: {
      en: "Between Landscape and Emotion",
      sk: "Medzi krajinou a emóciou"
    },
    description: {
      en: "A profile on emerging abstract artists",
      sk: "Profil začínajúcich abstraktných umelcov"
    },
    publication: {
      en: "Art Forum",
      sk: "Art Forum"
    },
    link: "#",
  },
];

const AboutMe = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="animate-fade-in-up">
            <div className="relative overflow-hidden rounded-3xl shadow-medium">
              <img
                src={artistPortrait}
                alt="Artist portrait"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6 text-foreground">
                {t('about.title')}
              </h2>
              <div className="font-body space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t('about.bio')}
                </p>
                <p>
                  {t('about.bio2')}
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <Button size="lg" variant="default" className="rounded-full">
              <Download className="w-4 h-4 mr-2" />
              {t('about.downloadCV')}
            </Button>

            {/* Press & Articles */}
            <div className="pt-8">
              <h3 className="font-display font-semibold text-2xl tracking-wide mb-6 text-foreground">
                {t('about.articles')}
              </h3>
              <div className="space-y-4">
                {pressArticles.map((article, index) => (
                  <Card
                    key={index}
                    className="p-5 hover:shadow-medium transition-shadow duration-300 border-border/50"
                  >
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 group"
                    >
                      <div className="flex-1">
                        <h4 className="font-display font-medium text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                          {article.title[language]}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground mb-1">
                          {article.description[language]}
                        </p>
                        <p className="font-body text-xs text-muted-foreground/70">
                          {article.publication[language]}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
