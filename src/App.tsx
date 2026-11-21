import { MotionConfig } from 'framer-motion';
import DrawingFrame from './components/layout/DrawingFrame';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import LanguageProvider from './i18n/LanguageProvider';

export default function App() {
  return (
    <LanguageProvider>
      {/* Respect the OS "reduce motion" setting for every framer-motion animation. */}
      <MotionConfig reducedMotion="user">
        <DrawingFrame />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LanguageProvider>
  );
}
