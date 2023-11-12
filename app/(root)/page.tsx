import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
