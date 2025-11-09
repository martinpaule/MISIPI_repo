import { GraduationCap, Users, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const Teaching = () => {
  const workshops = [
    {
      id: 1,
      title: "Abstract Expression Workshop",
      description: "A hands-on exploration of color, form, and intuitive mark-making",
      duration: "2 days",
      level: "All levels",
    },
    {
      id: 2,
      title: "Mixed Media Techniques",
      description: "Combining collage, paint, and found materials in contemporary art",
      duration: "1 day",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Color Theory in Practice",
      description: "Understanding color relationships and creating dynamic palettes",
      duration: "Half day",
      level: "Beginners",
    },
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4 text-foreground">
          Teaching & Workshops
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Sharing my passion for abstract art through hands-on workshops and creative sessions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-8 text-center border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
            15+ Years Experience
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Teaching abstract painting techniques to students of all levels
          </p>
        </Card>

        <Card className="p-8 text-center border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
            500+ Students
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            From beginners to advanced artists across workshops and residencies
          </p>
        </Card>

        <Card className="p-8 text-center border-border/50 dark:border-white hover:shadow-medium transition-all duration-300">
          <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
            Custom Workshops
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Tailored sessions for groups, schools, and corporate events
          </p>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="font-display font-bold text-2xl text-foreground mb-6">
          Available Workshops
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
                    Duration: {workshop.duration}
                  </span>
                  <span className="font-body text-muted-foreground">
                    Level: {workshop.level}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="font-body text-muted-foreground mb-4">
          Interested in booking a workshop or private session?
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-xl hover:bg-accent transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Teaching;
