import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 mt-12 transition-colors duration-300 ${
      isDark ? 'border-white/10 bg-[#02050e]' : 'border-slate-200 bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bebas text-2xl tracking-wider text-[#3B83F7] glow-text">
            {portfolioData.personal.shortName}
          </span>
          <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Todos los derechos reservados.
          </span>
        </div>

        <div className={`flex items-center gap-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-[#3B83F7] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-[#3B83F7] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2 hover:text-[#3B83F7] transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className={`ml-4 p-2.5 rounded-xl border transition-all hover:scale-105 ${
              isDark 
                ? 'bg-white/5 hover:bg-[#3B83F7] text-slate-300 hover:text-white border-white/10' 
                : 'bg-white hover:bg-[#3B83F7] text-slate-700 hover:text-white border-slate-200 shadow-sm'
            }`}
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
