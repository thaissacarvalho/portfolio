import Header from '../Components/Layout/Header/Header';
import Hero from '../Components/Hero/Hero';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Layout/Footer/Footer';

export default function Home() {
  return (
    <main className="home__page">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <div className="home__line"></div>
      <Footer />
    </main>
  )
}
