import { Download, ExternalLink, GraduationCap, Users, Palette, MapPin, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import artistPortrait from "@/assets/artist-portrait.jpg";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
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
      en: "Bienále FORMA",
      sk: "Bienále FORMA"
    },
    description: {
      en: "Seventh edition of applied arts exhibition",
      sk: "Siedmy ročník výstavy úžitkového umenia"
    },
    publication: {
      en: "Slovenská výtvarná únia - Galéria Umelka",
      sk: "Slovenská výtvarná únia - Galéria Umelka"
    },
    link: "https://www.archinfo.sk/kalendarium/bienale-forma-13163.html",
  },
];

const workshops = [
  {
    id: 1,
    title: {
      en: "Abstract Expression Workshop",
      sk: "Workshop abstraktnej expresie"
    },
    description: {
      en: "A hands-on exploration of color, form, and intuitive mark-making",
      sk: "Praktické skúmanie farby, formy a intuitívneho vytvárania stôp"
    },
    duration: {
      en: "2 days",
      sk: "2 dni"
    },
    level: {
      en: "All levels",
      sk: "Všetky úrovne"
    },
  },
  {
    id: 2,
    title: {
      en: "Mixed Media Techniques",
      sk: "Techniky zmiešaných médií"
    },
    description: {
      en: "Combining collage, paint, and found materials in contemporary art",
      sk: "Kombinácia koláže, farby a nájdených materiálov v súčasnom umení"
    },
    duration: {
      en: "1 day",
      sk: "1 deň"
    },
    level: {
      en: "Intermediate",
      sk: "Stredne pokročilí"
    },
  },
  {
    id: 3,
    title: {
      en: "Color Theory in Practice",
      sk: "Teória farieb v praxi"
    },
    description: {
      en: "Understanding color relationships and creating dynamic palettes",
      sk: "Pochopenie vzťahov farieb a vytváranie dynamických paliet"
    },
    duration: {
      en: "Half day",
      sk: "Pol dňa"
    },
    level: {
      en: "Beginners",
      sk: "Začiatočníci"
    },
  },
];

const residencies = [
  {
    id: 1,
    location: {
      en: "Barcelona, Spain",
      sk: "Barcelona, Španielsko"
    },
    period: {
      en: "Spring 2024",
      sk: "Jar 2024"
    },
    description: {
      en: "A transformative three-month residency exploring the relationship between Mediterranean light and abstract form. Working in a converted industrial space near the Gothic Quarter, I developed a new series combining organic shapes with architectural elements inspired by Gaudí's vision.",
      sk: "Transformačná trojmesačná rezidenčná pobyt skúmajúca vzťah medzi stredomorským svetlom a abstraktnou formou. Pracujúc v prestavenom priemyselnom priestore pri Gotickom štvrte, som vyvinula novú sériu kombinujúcu organické tvary s architektonickými prvkami inšpirovanými Gaudího víziou."
    },
    extendedDescription: {
      en: "The residency allowed me to experiment with new color palettes inspired by the city's tiles and mosaics. Daily walks through the Barri Gòtic influenced the layering techniques in my work, creating depth through historical accumulation.",
      sk: "Rezidenčný pobyt mi umožnil experimentovať s novými farebnými paletami inšpirovanými mestskými dlaždicami a mozaikami. Denné prechádzky cez Barri Gòtic ovplyvnili techniky vrstvenia v mojej práci, vytvárajúc hĺbku prostredníctvom historickej akumulácie."
    },
    images: [artwork1, artwork2, artwork3],
  },
  {
    id: 2,
    location: {
      en: "Kyoto, Japan",
      sk: "Kjóto, Japonsko"
    },
    period: {
      en: "Fall 2023",
      sk: "Jeseň 2023"
    },
    description: {
      en: "An immersive experience in traditional Japanese aesthetics and contemporary art dialogue. The residency at a temple-adjacent studio provided unique insights into wabi-sabi philosophy and its application to abstract painting.",
      sk: "Ponorná skúsenosť v tradičnej japonskej estetike a dialógu súčasného umenia. Rezidenčný pobyt v štúdiu priľahlom k chrámu poskytol jedinečné pohľady na filozofiu wabi-sabi a jej aplikáciu na abstraktnú maľbu."
    },
    extendedDescription: {
      en: "Working alongside local artists, I explored the concept of ma (negative space) and its role in composition. The changing autumn colors and temple gardens deeply influenced my approach to subtle gradation and atmospheric effects.",
      sk: "Pracujúc s miestnymi umelcami, som skúmala koncept ma (negatívny priestor) a jeho úlohu v kompozícii. Menšie sa jesenné farby a chrámové záhrady hlboko ovplyvnili môj prístup k jemným gradáciám a atmosférickým efektom."
    },
    images: [artwork2, artwork3, artwork1],
  },
  {
    id: 3,
    location: {
      en: "Reykjavik, Iceland",
      sk: "Reykjavík, Island"
    },
    period: {
      en: "Winter 2023",
      sk: "Zima 2023"
    },
    description: {
      en: "A winter residency focused on light, darkness, and the sublime landscape. The extreme conditions and minimal daylight hours pushed my work toward more introspective and atmospheric directions.",
      sk: "Zimný rezidenčný pobyt zameraný na svetlo, tmu a vznešenú krajinu. Extrémne podmienky a minimálne hodiny denného svetla posunuli moju prácu k introspekatívnejším a atmosférickejším smerom."
    },
    extendedDescription: {
      en: "The volcanic landscape and northern lights provided endless inspiration for color relationships and emotional intensity. Working in near-darkness for much of the day created a meditative studio practice that transformed my approach to painting.",
      sk: "Sopečná krajina a polárna žiara poskytli nekonečnú inšpiráciu pre vzťahy farieb a emocionálnu intenzitu. Práca v takmer tme počas väčšiny dňa vytvorila meditatívnu ateliérovú prax, ktorá transformovala môj prístup k maľbe."
    },
    images: [artwork3, artwork1, artwork2],
  },
];

const AboutMe = () => {
  const { language, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
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

          {/* Right: Content with Tabs */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground">
              {t('about.title')}
            </h2>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 h-auto p-1 bg-muted/50">
                <TabsTrigger 
                  value="profile" 
                  className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  {t('about.profile')}
                </TabsTrigger>
                <TabsTrigger 
                  value="art" 
                  className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  {t('about.artInterest')}
                </TabsTrigger>
                <TabsTrigger 
                  value="teaching" 
                  className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  {t('about.teaching')}
                </TabsTrigger>
                <TabsTrigger 
                  value="travelling" 
                  className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  {t('about.travelingArtist')}
                </TabsTrigger>
                <TabsTrigger 
                  value="exhibitions" 
                  className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  {t('about.exhibitions')}
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="mt-0">
                <div className="space-y-6">
                  <div className="font-body space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t('about.bio')}</p>
                    <p>{t('about.bio2')}</p>
                  </div>
                  <Button size="lg" variant="default" className="rounded-full">
                    <Download className="w-4 h-4 mr-2" />
                    {t('about.downloadCV')}
                  </Button>
                </div>
              </TabsContent>

              {/* Art Interest Tab */}
              <TabsContent value="art" className="mt-0">
                <div className="font-body space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('about.artInterestText')}</p>
                  <p>{t('about.artInterestText2')}</p>
                </div>
              </TabsContent>

              {/* Teaching Tab */}
              <TabsContent value="teaching" className="mt-0">
                <div className="space-y-8">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {t('about.teachingIntro')}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-6 text-center border-border/50 hover:shadow-medium transition-shadow">
                      <GraduationCap className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                        15+ Years
                      </h3>
                      <p className="font-body text-xs text-muted-foreground">
                        {language === 'en' ? 'Teaching experience' : 'Skúsenosti s vyučovaním'}
                      </p>
                    </Card>

                    <Card className="p-6 text-center border-border/50 hover:shadow-medium transition-shadow">
                      <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                        500+
                      </h3>
                      <p className="font-body text-xs text-muted-foreground">
                        {language === 'en' ? 'Students taught' : 'Vyučovaných študentov'}
                      </p>
                    </Card>

                    <Card className="p-6 text-center border-border/50 hover:shadow-medium transition-shadow">
                      <Palette className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                        {language === 'en' ? 'Custom' : 'Vlastné'}
                      </h3>
                      <p className="font-body text-xs text-muted-foreground">
                        {language === 'en' ? 'Workshops' : 'Workshopy'}
                      </p>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    {workshops.map((workshop) => (
                      <Card
                        key={workshop.id}
                        className="p-5 border-border/50 hover:shadow-medium transition-all duration-300"
                      >
                        <div className="flex-1">
                          <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                            {workshop.title[language]}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground mb-2">
                            {workshop.description[language]}
                          </p>
                          <div className="flex gap-4 text-xs text-muted-foreground/70">
                            <span>{workshop.duration[language]}</span>
                            <span>{workshop.level[language]}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Traveling Artist Tab */}
              <TabsContent value="travelling" className="mt-0">
                <div className="space-y-6">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {t('about.travelingIntro')}
                  </p>

                  <div className="space-y-6">
                    {residencies.map((residency) => (
                      <Card
                        key={residency.id}
                        className="overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300 border-border/50"
                      >
                        <div className="p-6">
                          <div className="flex flex-col gap-3 mb-4">
                            <div className="flex items-center gap-2 text-primary">
                              <MapPin className="w-4 h-4" />
                              <h3 className="font-display font-bold text-lg text-foreground">
                                {residency.location[language]}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span className="font-body text-sm">{residency.period[language]}</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {residency.images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative overflow-hidden rounded-lg aspect-square"
                              >
                                <img
                                  src={image}
                                  alt={`${residency.location[language]} artwork ${imgIndex + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-2">
                            <p>{residency.description[language]}</p>
                            {expandedId === residency.id && (
                              <p className="animate-fade-in-up">{residency.extendedDescription[language]}</p>
                            )}
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(residency.id)}
                            className="mt-3 text-primary hover:text-accent"
                          >
                            {expandedId === residency.id ? 
                              (language === 'en' ? 'Show less' : 'Zobraziť menej') : 
                              (language === 'en' ? 'Read more' : 'Čítať viac')
                            }
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
              </TabsContent>

              {/* Exhibitions Tab */}
              <TabsContent value="exhibitions" className="mt-0">
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
