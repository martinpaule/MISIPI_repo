import { Download, ExternalLink, MapPin, Calendar, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  sectionImages,
  pressArticles,
  residencies,
  workExperience,
  staggerDelay,
  animationDelays,
  site,
  images,
  SectionKey,
} from "@/config";
import type { TranslationKey } from "@/lib/translations";

const AboutMe = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<SectionKey>("profile");

  // Preload all images after initial render
  useEffect(() => {
    const imagesToPreload = [
      ...Object.values(sectionImages),
      ...pressArticles.flatMap((a) => [a.coverImage, a.secondImage]),
      ...residencies.flatMap((r) => r.images),
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="about" className="py-24 bg-muted/30 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="space-y-8 mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground text-center">
            {t("about.title")}
          </h2>

          <Tabs defaultValue="profile" className="w-full" onValueChange={(v) => setActiveTab(v as SectionKey)}>
            <TabsList className="flex flex-wrap justify-center gap-1 mb-8 h-auto p-1 bg-muted/50 max-w-4xl mx-auto">
              <TabsTrigger value="profile" className="font-display font-medium text-xs md:text-sm py-2 px-3 data-[state=active]:bg-background data-[state=active]:text-primary">
                {t("about.profile")}
              </TabsTrigger>
              <TabsTrigger value="art" className="font-display font-medium text-xs md:text-sm py-2 px-3 data-[state=active]:bg-background data-[state=active]:text-primary">
                {t("about.artInterest")}
              </TabsTrigger>
              <TabsTrigger value="travelling" className="font-display font-medium text-xs md:text-sm py-2 px-3 data-[state=active]:bg-background data-[state=active]:text-primary">
                {t("about.travelingArtist")}
              </TabsTrigger>
              <TabsTrigger value="exhibitions" className="font-display font-medium text-xs md:text-sm py-2 px-3 data-[state=active]:bg-background data-[state=active]:text-primary">
                {t("about.exhibitions")}
              </TabsTrigger>
              <TabsTrigger value="teaching" className="font-display font-medium text-xs md:text-sm py-2 px-3 data-[state=active]:bg-background data-[state=active]:text-primary">
                {t("about.teaching")}
              </TabsTrigger>
            </TabsList>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Image */}
              <div className="animate-fade-in-up" style={staggerDelay(1, animationDelays.medium)}>
                <div className="relative overflow-hidden rounded-3xl shadow-medium">
                  <img
                    src={sectionImages[activeTab]}
                    alt={`${activeTab} section`}
                    className="w-full h-auto object-cover transition-all duration-300"
                  />
                </div>
              </div>

              {/* Right: Tab Content */}
              <div className="animate-fade-in-up" style={staggerDelay(2, animationDelays.medium)}>
                {/* Profile Tab */}
                <TabsContent value="profile" className="mt-0">
                  <div className="space-y-6">
                    <div className="font-body space-y-4 text-muted-foreground leading-relaxed">
                      <p>{t("about.bio")}</p>
                      <p>{t("about.bio2")}</p>
                    </div>
                    <Button size="lg" variant="default" className="rounded-full" asChild>
                      <a href={site.cvPath} download>
                        <Download className="w-4 h-4 mr-2" />
                        {t("about.downloadCV")}
                      </a>
                    </Button>
                  </div>
                </TabsContent>

                {/* Art Interest Tab */}
                <TabsContent value="art" className="mt-0">
                  <div className="font-body space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t("about.artInterestText")}</p>
                    <p>{t("about.artInterestText2")}</p>
                  </div>
                </TabsContent>

                {/* Teaching Tab */}
                <TabsContent value="teaching" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {t("work.experienceTitle")}
                    </h3>
                    <div className="space-y-6">
                      {workExperience.map((job) => (
                        <Card key={job.id} className="p-6 border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
                          <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                            {t(job.titleKey as TranslationKey)}
                          </h4>
                          <p className="font-body text-sm text-primary mb-3">
                            {t(job.companyKey as TranslationKey)}
                          </p>
                          <p className="font-body text-sm text-muted-foreground/70 mb-3">
                            {t(job.periodKey as TranslationKey)}
                          </p>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {t(job.descriptionKey as TranslationKey)}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Traveling Artist Tab */}
                <TabsContent value="travelling" className="mt-0">
                  <div className="space-y-6">
                    {residencies.map((residency) => (
                      <Card
                        key={residency.id}
                        className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 dark:border-white"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-primary mb-2">
                            <MapPin className="w-4 h-4" />
                            <h4 className="font-display font-semibold text-lg text-foreground">
                              {t(residency.locationKey as TranslationKey)}
                            </h4>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Calendar className="w-4 h-4" />
                            <span className="font-body text-sm">{t(residency.periodKey as TranslationKey)}</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {residency.images.map((image, imgIndex) => (
                              <div key={imgIndex} className="relative overflow-hidden rounded-lg aspect-square">
                                <img
                                  src={image}
                                  alt={`${t(residency.locationKey as TranslationKey)} artwork ${imgIndex + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-2">
                            <p>{t(residency.descriptionKey as TranslationKey)}</p>
                            {expandedId === residency.id && (
                              <p className="animate-fade-in-up">{t(residency.extendedDescriptionKey as TranslationKey)}</p>
                            )}
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(residency.id)}
                            className="mt-3 text-primary hover:text-accent"
                          >
                            {expandedId === residency.id ? t("common.showLess") : t("common.readMore")}
                            <ChevronDown
                              className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedId === residency.id ? "rotate-180" : ""}`}
                            />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Exhibitions Tab */}
                <TabsContent value="exhibitions" className="mt-0">
                  <div className="space-y-8">
                    {pressArticles.map((article) => (
                      <Card
                        key={article.id}
                        className="overflow-hidden hover:shadow-medium transition-shadow duration-300 border-border/50 dark:border-white"
                      >
                        <div className="p-6 space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <a href={article.link} target="_blank" rel="noopener noreferrer" className="group inline-block">
                                <h4 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                                  {t(article.titleKey as TranslationKey)}
                                </h4>
                              </a>
                              <p className="font-body text-sm text-muted-foreground mb-1">
                                {t(article.descriptionKey as TranslationKey)}
                              </p>
                              <p className="font-body text-xs text-muted-foreground/70">
                                {t(article.publicationKey as TranslationKey)}
                              </p>
                            </div>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="group">
                              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                            </a>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="col-span-2 relative overflow-hidden rounded-lg cursor-pointer group">
                                  <img
                                    src={article.coverImage}
                                    alt={`${t(article.titleKey as TranslationKey)} cover`}
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl p-2">
                                <img
                                  src={article.coverImage}
                                  alt={`${t(article.titleKey as TranslationKey)} cover`}
                                  className="w-full h-auto rounded-lg"
                                />
                              </DialogContent>
                            </Dialog>

                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                                  <img
                                    src={article.secondImage}
                                    alt={`${t(article.titleKey as TranslationKey)} detail`}
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl p-2">
                                <img
                                  src={article.secondImage}
                                  alt={`${t(article.titleKey as TranslationKey)} detail`}
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