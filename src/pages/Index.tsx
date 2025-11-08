import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <main>
        <Hero />
        <section id="about">
          <AboutMe />
        </section>
        <section id="works">
          <MyWorks />
        </section>
      </main>
    </div>
  );
};

export default Index;
