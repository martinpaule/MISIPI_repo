import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";
import Teaching from "@/components/Teaching";
import TravellingArtist from "@/components/TravellingArtist";
import Contact from "@/components/Contact";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        
        {/* Tabbed Sections */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="art" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto p-2 bg-muted/50">
                <TabsTrigger 
                  value="art" 
                  className="font-display font-semibold text-base md:text-lg py-3 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  My Art
                </TabsTrigger>
                <TabsTrigger 
                  value="teaching" 
                  className="font-display font-semibold text-base md:text-lg py-3 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Teaching
                </TabsTrigger>
                <TabsTrigger 
                  value="travelling" 
                  className="font-display font-semibold text-base md:text-lg py-3 data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Travelling Artist
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="art" className="mt-0">
                <MyWorks />
              </TabsContent>
              
              <TabsContent value="teaching" className="mt-0">
                <Teaching />
              </TabsContent>
              
              <TabsContent value="travelling" className="mt-0">
                <TravellingArtist />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
};

export default Index;
