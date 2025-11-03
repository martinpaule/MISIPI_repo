import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import artistPortrait from "@/assets/artist-portrait.jpg";

const pressArticles = [
  {
    title: "The Color of Memory: An Interview",
    description: "Exploring the artist's approach to abstraction",
    publication: "Art Monthly",
    link: "#",
  },
  {
    title: "Studio Visit: Abstract Expressions",
    description: "Inside the creative process",
    publication: "Contemporary Art Review",
    link: "#",
  },
  {
    title: "Between Landscape and Emotion",
    description: "A profile on emerging abstract artists",
    publication: "Art Forum",
    link: "#",
  },
];

const AboutMe = () => {
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
                About Me
              </h2>
              <div className="font-body space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <Button size="lg" variant="default" className="rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Download CV (PDF)
            </Button>

            {/* Press & Articles */}
            <div className="pt-8">
              <h3 className="font-display font-semibold text-2xl tracking-wide mb-6 text-foreground">
                Articles & Interviews
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
                          {article.title}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground mb-1">
                          {article.description}
                        </p>
                        <p className="font-body text-xs text-muted-foreground/70">
                          {article.publication}
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
