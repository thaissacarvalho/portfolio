import Articles from "./components/sections/Articles";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-r from-mocha-purple-darkness to-mocha-black text-white">
        <Hero />
        <Experience/>
        <Services />
        <Skills />
        <Projects />
        <Articles />
      </main>
  )
}