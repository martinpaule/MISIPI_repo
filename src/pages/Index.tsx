import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <MyWorks />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
