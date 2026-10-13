import React from 'react';
import { Moon, Sun, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ isDark, setIsDark }) => {
  return (
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
          className="group flex items-center gap-1 font-bebas text-3xl tracking-widest transition-transform hover:scale-105"
        >
          <span className="text-[#3B83F7] glow-text transition-colors duration-300">
            {portfolioData.personal.shortName}
          </span>
        </a>

        {/* Right Actions: Theme Toggle & CV Button */}
        <div className="flex items-center space-x-3 sm:space-x-4">
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

          {/* Glowing CV Button */}
          <a
            href={portfolioData.personal.resumeUrl}
            className="font-bebas tracking-wider text-base bg-[#3B83F7] hover:bg-[#2563eb] text-white px-5 py-2 rounded-xl transition-all duration-300 shadow-md glow-blue hover:scale-105 flex items-center gap-2 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            CV
          </a>
        </div>
      </div>
    </header>
  );
};
