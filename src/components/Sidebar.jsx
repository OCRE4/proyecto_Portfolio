import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Sidebar = ({ activeSection, onSelectSection, isDark }) => {
  return (
    <aside className={`w-64 shrink-0 hidden lg:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-6 border-r py-8 select-none transition-colors duration-300 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      <div className="mb-6 px-3">
        <h3 className={`font-bebas text-lg tracking-wider uppercase ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          Secciones
        </h3>
      </div>

      <nav className="space-y-1.5">
        {portfolioData.sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => {
                if (onSelectSection) onSelectSection(sec.id);
              }}
              className={`group flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? isDark 
                    ? 'bg-white/10 text-[#3B83F7] shadow-sm border border-white/10 font-semibold'
                    : 'bg-blue-50 text-[#3B83F7] shadow-sm border border-blue-100 font-semibold'
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
              <span className="truncate">{sec.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
