import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight,
  Compass,
  User,
  FolderGit2,
  Wrench,
  Mail,
  BarChart3
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Mapeo de iconos para las secciones en el menú expandido
const SECTION_ICONS = {
  intro: Sparkles,
  about: User,
  projects: FolderGit2,
  skills: Wrench,
  contact: Mail,
  stats: BarChart3,
};

export const Navbar = ({ isDark, setIsDark, activeSection }) => {
  const [isCompact, setIsCompact] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  // Detección de scroll y dirección para alternar el modo compacto de la isla
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // Si scrollea hacia abajo y pasa de 70px -> compacto
      if (currentScrollY > 70 && delta > 4) {
        setIsCompact(true);
      } else if (delta < -8 || currentScrollY <= 50) {
        // Si scrollea hacia arriba o está arriba del todo -> expandido
        setIsCompact(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú mobile al presionar Escape o al redimensionar a pantalla grande
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Evita el scroll del body cuando el menú móvil expandido está abierto
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileOpen(false);
      }
    };
    if (isMobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  // Sección activa actual
  const currentSectionData = portfolioData.sections.find((s) => s.id === activeSection) || portfolioData.sections[0];
  const CurrentIcon = SECTION_ICONS[currentSectionData?.id] || Compass;

  // En desktop, si está compactado pero el usuario pasa el mouse (hover), se expande
  const showFullDesktopControls = !isCompact || isHovered;

  const springTransition = {
    type: 'spring',
    stiffness: 420,
    damping: 32,
    mass: 0.9,
  };

  return (
    <>
      {/* Backdrop oscuro translúcido en móvil cuando la isla está abierta */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Contenedor flotante de la Dynamic Island */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.header
          ref={navRef}
          layout
          transition={springTransition}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`pointer-events-auto transition-colors duration-300 relative overflow-hidden ${
            isMobileOpen 
              ? 'w-full max-w-sm rounded-[28px] p-4 shadow-2xl' 
              : 'rounded-full px-3 py-2 shadow-xl'
          } ${
            isDark
              ? 'bg-[#030816]/85 backdrop-blur-2xl border border-white/15 text-slate-100 shadow-[0_16px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5'
              : 'bg-white/85 backdrop-blur-2xl border border-slate-200/90 text-slate-900 shadow-[0_16px_35px_rgba(15,23,42,0.12)] ring-1 ring-black/5'
          }`}
          style={{ willChange: 'transform, border-radius' }}
        >
          {/* Fila Principal de la Isla */}
          <motion.div layout="position" className="flex items-center justify-between gap-2.5 sm:gap-3.5">
            {/* Logo 'LB.' con indicador dinámico */}
            <a
              href="#intro"
              onClick={() => setIsMobileOpen(false)}
              className="group flex items-center gap-1.5 pl-1.5 font-bebas text-2xl tracking-widest transition-transform hover:scale-105 active:scale-95"
            >
              <span className="text-[#3B83F7] glow-text transition-colors duration-300">
                {portfolioData.personal.shortName}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B83F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B83F7]" />
              </span>
            </a>

            {/* Separador sutil */}
            <div className={`h-4 w-px transition-colors ${isDark ? 'bg-white/15' : 'bg-slate-300'}`} />

            {/* Indicador interactivo de Sección Activa (Píldora interior) */}
            <motion.div 
              layout="position"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                isDark 
                  ? 'bg-white/5 text-slate-300 border border-white/10' 
                  : 'bg-slate-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              <CurrentIcon className="w-3.5 h-3.5 text-[#3B83F7]" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSectionData?.id}
                  initial={{ opacity: 0, y: 3, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -3, filter: 'blur(2px)' }}
                  transition={{ duration: 0.2 }}
                  className="max-w-[120px] sm:max-w-[160px] truncate"
                >
                  {currentSectionData?.label}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Acciones del lado derecho */}
            <motion.div layout="position" className="flex items-center gap-1 sm:gap-2">
              {/* Botón de Modo Oscuro / Claro */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => setIsDark(!isDark)}
                aria-label="Alternar tema"
                className={`p-2 rounded-full transition-all duration-200 ${
                  isDark
                    ? 'text-slate-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
                }`}
                title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {isDark ? (
                  <Moon className="w-4 h-4 text-slate-200" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
              </motion.button>

              {/* Botón de CV (Desktop) — Se colapsa en scroll down y se expande en hover o scroll up */}
              <div className="hidden lg:flex items-center overflow-hidden">
                <AnimatePresence>
                  {showFullDesktopControls && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.8, width: 0 }}
                      animate={{ opacity: 1, scale: 1, width: 'auto' }}
                      exit={{ opacity: 0, scale: 0.8, width: 0 }}
                      transition={springTransition}
                      href={portfolioData.personal.resumeUrl}
                      className="font-bebas tracking-wider text-sm bg-[#3B83F7] hover:bg-[#2563eb] text-white px-3.5 py-1.5 rounded-full transition-all shadow-md glow-blue hover:scale-105 active:scale-95 flex items-center gap-1.5 whitespace-nowrap ml-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>CV</span>
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>

              {/* Botón de Menú Móvil (dispara la expansión directa de la isla) */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                aria-label={isMobileOpen ? 'Cerrar navegación' : 'Abrir navegación'}
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isDark
                    ? 'text-slate-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Menú Expandido hacia abajo en Móviles (Fluid Island Expansion) */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={springTransition}
                className="lg:hidden mt-3 pt-3 border-t overflow-hidden flex flex-col gap-2"
                style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(226,232,240,0.9)' }}
              >
                <p className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Navegación
                </p>

                {/* Lista de Secciones */}
                <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-1">
                  {portfolioData.sections.map((sec, idx) => {
                    const isActive = activeSection === sec.id;
                    const SecIcon = SECTION_ICONS[sec.id] || Compass;

                    return (
                      <motion.a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setIsMobileOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                          isActive
                            ? isDark
                              ? 'bg-blue-500/20 text-[#3B83F7] border border-blue-500/30 font-semibold shadow-sm'
                              : 'bg-blue-50 text-[#3B83F7] border border-blue-200 font-semibold shadow-sm'
                            : isDark
                              ? 'text-slate-300 hover:text-white hover:bg-white/5'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <SecIcon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                            isActive ? 'text-[#3B83F7]' : isDark ? 'text-slate-400' : 'text-slate-500'
                          }`} />
                          <span>{sec.label}</span>
                        </div>
                        {isActive && (
                          <span className="flex items-center gap-1 text-[11px] text-[#3B83F7] font-semibold">
                            Activo
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B83F7]" />
                          </span>
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Botón de CV prominente dentro de la isla móvil */}
                <div className="pt-2 border-t mt-1" style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)' }}>
                  <a
                    href={portfolioData.personal.resumeUrl}
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full font-bebas tracking-wider text-base bg-[#3B83F7] hover:bg-[#2563eb] text-white py-2.5 px-4 rounded-xl transition-all shadow-md glow-blue flex items-center justify-center gap-2 active:scale-98"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Descargar Curriculum Vitae</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </>
  );
};
