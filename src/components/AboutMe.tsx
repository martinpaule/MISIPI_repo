import { Download, ExternalLink, GraduationCap, Users, Palette, MapPin, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import profileImage from "@/assets/profile-section.jpg";
import artInterestImage from "@/assets/art-interest-section.jpg";
import teachingImage from "@/assets/teaching-section.jpg";
import travellingArtistImage from "@/assets/travelling-artist-section.jpg";
import exhibitionsImage from "@/assets/exhibitions-section.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { workshops } from "@/data/workshops";
import { residencies } from "@/data/residencies";
import { exhibitions } from "@/data/exhibitions";

// Data imported from centralized files

const AboutMe = () => {
  const { language, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  const sectionImages = {
    profile: profileImage,
    art: artInterestImage,
    teaching: teachingImage,
    travelling: travellingArtistImage,
    exhibitions: exhibitionsImage,
  };

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Header and Tabs */}
        <div className="space-y-8 mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground text-center">
            {t('about.title')}
          </h2>

          <Tabs defaultValue="profile" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 mb-8 h-auto p-1 bg-muted/50 max-w-4xl mx-auto">
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

            {/* Grid with Image and Content */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Image - Changes based on active tab */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="relative overflow-hidden rounded-3xl shadow-medium">
                  <img
                    src={sectionImages[activeTab as keyof typeof sectionImages]}
                    alt={`${activeTab} section`}
                    className="w-full h-auto object-cover transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Right: Tab Content */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
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
                <div className="space-y-8">
                  {exhibitions.map((article, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-medium transition-shadow duration-300 border-border/50"
                    >
                      <div className="p-6 space-y-4">
                        {/* Header with title and link */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-block"
                            >
                              <h4 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                                {article.title[language]}
                              </h4>
                            </a>
                            <p className="font-body text-sm text-muted-foreground mb-1">
                              {article.description[language]}
                            </p>
                            <p className="font-body text-xs text-muted-foreground/70">
                              {article.publication[language]}
                            </p>
                          </div>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          </a>
                        </div>

                        {/* Images Grid */}
                        <div className="grid grid-cols-3 gap-3">
                          {/* Large cover image - spans 2 columns */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="col-span-2 relative overflow-hidden rounded-lg cursor-pointer group">
                                <img
                                  src={article.coverImage}
                                  alt={`${article.title[language]} cover`}
                                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-2">
                              <img
                                src={article.coverImage}
                                alt={`${article.title[language]} cover`}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>

                          {/* Small second image - spans 1 column */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                                <img
                                  src={article.secondImage}
                                  alt={`${article.title[language]} detail`}
                                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-2">
                              <img
                                src={article.secondImage}
                                alt={`${article.title[language]} detail`}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
