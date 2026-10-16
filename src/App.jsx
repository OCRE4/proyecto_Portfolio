import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = portfolioData.sections.map(sec => ({
        id: sec.id,
        el: document.getElementById(sec.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark 
        ? 'bg-[#030816] text-[#F6F8FB] selection:bg-[#3B83F7] selection:text-white' 
        : 'bg-[#f8fafc] text-slate-800 selection:bg-[#3B83F7] selection:text-white'
    }`}>
      {/* Header Superior con LB, Modo Claro/Oscuro y CV */}
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark}
        activeSection={activeSection}
      />

      {/* Contenedor Principal con Sidebar y Secciones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 flex-1 flex flex-col">
        <div className="flex gap-8 lg:gap-12 flex-1">
          {/* Panel Lateral Izquierdo */}
          <Sidebar 
            activeSection={activeSection} 
            onSelectSection={(id) => setActiveSection(id)} 
            isDark={isDark}
          />

          {/* Área Principal de Contenido */}
          <main className="flex-1 min-w-0 max-w-full">
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Projects isDark={isDark} />
            <Skills isDark={isDark} />
            <Contact isDark={isDark} />
            <Stats isDark={isDark} />
          </main>
        </div>
      </div>

      {/* Footer Global */}
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
