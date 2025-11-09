import { Download, ExternalLink, MapPin, Calendar, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ANIMATION_DELAYS } from "@/lib/constants";
import { staggerDelay } from "@/lib/styles";
import profileImage from "@/assets/profile-section.jpg";
import artInterestImage from "@/assets/art-interest-section.jpg";
import teachingImage from "@/assets/teaching-section.jpg";
import travellingArtistImage from "@/assets/travelling-artist-section.jpg";
import exhibitionsImage from "@/assets/exhibitions-section.jpg";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import retrospektivaCover from "@/assets/retrospektiva-cover.jpg";
import retrospektivaSecond from "@/assets/retrospektiva-second.jpg";
import bienaleCover from "@/assets/bienale-cover.jpg";
import bienaleSecond from "@/assets/bienale-second.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutMe = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  const sectionImages = {
    profile: profileImage,
    art: artInterestImage,
    teaching: teachingImage,
    travelling: travellingArtistImage,
    exhibitions: exhibitionsImage,
  };

  const pressArticles = [
    {
      title: t("article1.title"),
      description: t("article1.description"),
      publication: t("article1.publication"),
      link: "https://www.rkcpd.sk/hlavna-stranka/podujatia/vystava-retrospektiva.html?page_id=9142",
      coverImage: retrospektivaCover,
      secondImage: retrospektivaSecond,
    },
    {
      title: t("article2.title"),
      description: t("article2.description"),
      publication: t("article2.publication"),
      link: "https://www.archinfo.sk/kalendarium/bienale-forma-13163.html",
      coverImage: bienaleCover,
      secondImage: bienaleSecond,
    },
  ];

  const workshops = [
    {
      id: 1,
      title: t("workshop1.title"),
      description: t("workshop1.description"),
      duration: t("workshop1.duration"),
      level: t("workshop1.level"),
    },
    {
      id: 2,
      title: t("workshop2.title"),
      description: t("workshop2.description"),
      duration: t("workshop2.duration"),
      level: t("workshop2.level"),
    },
    {
      id: 3,
      title: t("workshop3.title"),
      description: t("workshop3.description"),
      duration: t("workshop3.duration"),
      level: t("workshop3.level"),
    },
  ];

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

  // Preload all images after initial render
  useEffect(() => {
    const imagesToPreload = [
      profileImage,
      artInterestImage,
      teachingImage,
      travellingArtistImage,
      exhibitionsImage,
      retrospektivaCover,
      retrospektivaSecond,
      bienaleCover,
      bienaleSecond,
      ...residencies.flatMap((r) => r.images),
    ];

    // Preload images in the background
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
        {/* Header and Tabs */}
        <div className="space-y-8 mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground text-center">
            {t("about.title")}
          </h2>

          <Tabs defaultValue="profile" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 mb-8 h-auto p-1 bg-muted/50 max-w-4xl mx-auto">
              <TabsTrigger
                value="profile"
                className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
              >
                {t("about.profile")}
              </TabsTrigger>
              <TabsTrigger
                value="art"
                className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
              >
                {t("about.artInterest")}
              </TabsTrigger>
              <TabsTrigger
                value="travelling"
                className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
              >
                {t("about.travelingArtist")}
              </TabsTrigger>
              <TabsTrigger
                value="exhibitions"
                className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
              >
                {t("about.exhibitions")}
              </TabsTrigger>
              <TabsTrigger
                value="teaching"
                className="font-display font-medium text-xs md:text-sm py-2 data-[state=active]:bg-background data-[state=active]:text-primary"
              >
                {t("about.teaching")}
              </TabsTrigger>
            </TabsList>

            {/* Grid with Image and Content */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Image - Changes based on active tab */}
              <div className="animate-fade-in-up" style={staggerDelay(1, ANIMATION_DELAYS.INCREMENT_MEDIUM)}>
                <div className="relative overflow-hidden rounded-3xl shadow-medium">
                  <img
                    src={sectionImages[activeTab as keyof typeof sectionImages]}
                    alt={`${activeTab} section`}
                    className="w-full h-auto object-cover transition-all duration-300"
                  />
                </div>
              </div>

              {/* Right: Tab Content */}
              <div className="animate-fade-in-up" style={staggerDelay(2, ANIMATION_DELAYS.INCREMENT_MEDIUM)}>
                {/* Profile Tab */}
                <TabsContent value="profile" className="mt-0">
                  <div className="space-y-6">
                    <div className="font-body space-y-4 text-muted-foreground leading-relaxed">
                      <p>{t("about.bio")}</p>
                      <p>{t("about.bio2")}</p>
                    </div>
                    <Button size="lg" variant="default" className="rounded-full" asChild>
                      <a href="/CV_MISIPI.pdf" download>
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
                      <Card className="p-6 border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
                        <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                          {t("work.job1.title")}
                        </h4>
                        <p className="font-body text-sm text-primary mb-3">
                          {t("work.job1.company")}
                        </p>
                        <p className="font-body text-sm text-muted-foreground/70 mb-3">
                          {t("work.job1.period")}
                        </p>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {t("work.job1.description")}
                        </p>
                      </Card>

                      <Card className="p-6 border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
                        <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                          {t("work.job2.title")}
                        </h4>
                        <p className="font-body text-sm text-primary mb-3">
                          {t("work.job2.company")}
                        </p>
                        <p className="font-body text-sm text-muted-foreground/70 mb-3">
                          {t("work.job2.period")}
                        </p>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {t("work.job2.description")}
                        </p>
                      </Card>

                      <Card className="p-6 border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
                        <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                          {t("work.job3.title")}
                        </h4>
                        <p className="font-body text-sm text-primary mb-3">
                          {t("work.job3.company")}
                        </p>
                        <p className="font-body text-sm text-muted-foreground/70 mb-3">
                          {t("work.job3.period")}
                        </p>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {t("work.job3.description")}
                        </p>
                      </Card>
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
                              {residency.location}
                            </h4>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Calendar className="w-4 h-4" />
                            <span className="font-body text-sm">{residency.period}</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {residency.images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative overflow-hidden rounded-lg aspect-square"
                              >
                                <img
                                  src={image}
                                  alt={`${residency.location} artwork ${imgIndex + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-2">
                            <p>{residency.description}</p>
                            {expandedId === residency.id && (
                              <p className="animate-fade-in-up">{residency.extendedDescription}</p>
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
                              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                                expandedId === residency.id ? "rotate-180" : ""
                              }`}
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
                    {pressArticles.map((article, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden hover:shadow-medium transition-shadow duration-300 border-border/50 dark:border-white"
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
                                  {article.title}
                                </h4>
                              </a>
                              <p className="font-body text-sm text-muted-foreground mb-1">
                                {article.description}
                              </p>
                              <p className="font-body text-xs text-muted-foreground/70">
                                {article.publication}
                              </p>
                            </div>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="group">
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
                                    alt={`${article.title} cover`}
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl p-2">
                                <img
                                  src={article.coverImage}
                                  alt={`${article.title} cover`}
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
                                    alt={`${article.title} detail`}
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl p-2">
                                <img
                                  src={article.secondImage}
                                  alt={`${article.title} detail`}
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
