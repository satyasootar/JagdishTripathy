import { Hero } from "@/components/ui/animated-hero";
import NavHeader from "@/components/nav-header";
import { About } from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { CallToAction } from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      {/* Navbar for larger screens (top-10) */}
      <div className="hidden md:block sticky top-10 z-50 w-full bg-transparent dark:bg-transparent">
        <NavHeader />
      </div>

      {/* Navbar for mobile screens (bottom-0) */}
      <div className="block md:hidden fixed bottom-14 z-50 w-full bg-transparent dark:bg-transparent">
        <NavHeader />
      </div>

      {/* Main Content Sections */}
      <main>
        <section id="home" className="relative min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen ">
          <About />
        </section>

        <section id="skills" className="min-h-screen pt-10 ">
          <Skills />
        </section>


        <section id="projects" className="min-h-screen ">
          <Projects />
        </section>

        <section id="CallToAction" className=" flex justify-center ">
          <CallToAction />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
