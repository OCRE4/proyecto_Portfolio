import React, { useState, useEffect } from 'react';
import { Moon, Sun, FileText, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ isDark, setIsDark, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú con la tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Evita scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isDark 
            ? 'bg-[#030816]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5' 
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo 'LB.' */}
          <a 
            href="#intro" 
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-1 font-bebas text-3xl tracking-widest transition-transform hover:scale-105"
          >
            <span className="text-[#3B83F7] glow-text transition-colors duration-300">
              {portfolioData.personal.shortName}
            </span>
          </a>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Theme Toggle */}
            <button 
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label="Alternar tema oscuro y claro"
              className={`p-2.5 rounded-full transition-all duration-200 ${
                isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-white/10' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100 ring-1 ring-slate-200'
              }`}
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? (
                <Moon className="w-5 h-5 text-slate-300 transition-transform hover:-rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500 transition-transform hover:rotate-45" />
              )}
            </button>

            {/* CV Button — oculto en mobile cuando el menú está abierto */}
            <a
              href={portfolioData.personal.resumeUrl}
              className="font-bebas tracking-wider text-base bg-[#3B83F7] hover:bg-[#2563eb] text-white px-5 py-2 rounded-xl transition-all duration-300 shadow-md glow-blue hover:scale-105 flex items-center gap-2 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              CV
            </a>

            {/* Hamburger — solo visible en mobile (oculto en lg+) */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className={`lg:hidden p-2.5 rounded-full transition-all duration-200 ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 ring-1 ring-slate-200'
              }`}
            >
              {menuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${isDark ? 'bg-black/60' : 'bg-black/30'} backdrop-blur-sm`}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <nav
        className={`lg:hidden fixed top-0 right-0 z-40 h-full w-72 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isDark
            ? 'bg-[#030816]/95 border-l border-white/10 shadow-2xl'
            : 'bg-white/95 border-l border-slate-200 shadow-2xl'
        }`}
        aria-label="Navegación mobile"
      >
        {/* Título */}
        <p className={`font-bebas text-lg tracking-widest uppercase mb-6 ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          Secciones
        </p>

        {/* Links de secciones */}
        <div className="space-y-1.5 flex-1">
          {portfolioData.sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-white/10 text-[#3B83F7] border border-white/10 font-semibold shadow-sm'
                      : 'bg-blue-50 text-[#3B83F7] border border-blue-100 font-semibold shadow-sm'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#3B83F7] shadow-[0_0_8px_#3B83F7] scale-125'
                    : isDark
                      ? 'bg-transparent group-hover:bg-slate-600'
                      : 'bg-transparent group-hover:bg-slate-300'
                }`} />
                {sec.label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};
