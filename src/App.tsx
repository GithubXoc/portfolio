import { useState, useEffect, type WheelEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import NavDots from './components/NavDots';
import { sections } from './components/NavDots';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isWheeling = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (isWheeling.current) return;
    isWheeling.current = true;

    if (e.deltaY > 0) {
      setActiveIndex((prev) => Math.min(prev + 1, sections.length - 1));
    } else if (e.deltaY < 0) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => {
      isWheeling.current = false;
    }, 1000); // Debounce time
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActiveIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <AnimatedBackground />
      <NavDots activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      
      <div 
        ref={containerRef}
        className="h-screen overflow-hidden" 
        onWheel={handleWheel}
      >
        <motion.div
          className="h-full w-full flex flex-col md:flex-row"
          animate={isMobile ? { y: `-${activeIndex * 100}vh` } : { x: `-${activeIndex * 100}vw` }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Render all sections */}
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </motion.div>
      </div>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-50">
        <div className="flex gap-4 bg-gray-800/50 p-2 rounded-full backdrop-blur-sm">
          {sections.map((_, index) => (
             <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-accent scale-125' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

