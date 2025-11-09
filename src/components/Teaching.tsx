import { GraduationCap, Users, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Teaching = () => {
  const { t } = useLanguage();

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

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4 text-foreground">
          {t("teaching.title")}
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("teaching.description")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-8 text-center border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
            {t("teaching.stat1.title")}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {t("teaching.stat1.description")}
          </p>
        </Card>

        <Card className="p-8 text-center border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
            {t("teaching.stat2.title")}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {t("teaching.stat2.description")}
          </p>
        </Card>

        <Card className="p-8 text-center border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
          <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
            {t("teaching.stat3.title")}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {t("teaching.stat3.description")}
          </p>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="font-display font-bold text-2xl text-foreground mb-6">
          {t("teaching.workshopsTitle")}
        </h3>
        {workshops.map((workshop, index) => (
          <Card
            key={workshop.id}
            className="p-6 border-border/50 dark:border-white hover:shadow-medium transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-display font-semibold text-xl mb-2 text-foreground">
                  {workshop.title}
                </h4>
                <p className="font-body text-muted-foreground mb-3">
                  {workshop.description}
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="font-body text-muted-foreground">
                    {t("teaching.workshopDuration")}: {workshop.duration}
                  </span>
                  <span className="font-body text-muted-foreground">
                    {t("teaching.workshopLevel")}: {workshop.level}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="font-body text-muted-foreground mb-4">
          {t("teaching.bookingText")}
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-xl hover:bg-accent transition-colors"
        >
          {t("teaching.getInTouch")}
        </a>
      </div>
    </div>
  );
};

export default Teaching;
