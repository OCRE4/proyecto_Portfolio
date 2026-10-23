import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Sidebar = ({ activeSection, onSelectSection, isDark }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`relative shrink-0 hidden lg:block sticky top-20 h-[calc(100vh-5rem)] select-none transition-all duration-300 ${
        isCollapsed ? 'w-12 pr-0' : 'w-64 pr-6'
      } border-r py-8 ${
        isDark ? 'border-white/10' : 'border-slate-200'
      }`}
    >
      {/* Botón flotante para colapsar / expandir el aside */}
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        title={isCollapsed ? "Expandir barra lateral" : "Ocultar barra lateral"}
        className={`absolute -right-3.5 top-8 z-20 flex items-center justify-center w-7 h-7 rounded-full border shadow-md transition-all duration-200 ${
          isDark 
            ? 'bg-[#0b1329] border-white/20 text-slate-300 hover:text-white hover:border-[#3B83F7] hover:bg-[#3B83F7]/20' 
            : 'bg-white border-slate-300 text-slate-600 hover:text-slate-900 hover:border-[#3B83F7] hover:bg-blue-50'
        }`}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Vista Colapsada */}
      {isCollapsed ? (
        <div className="flex flex-col items-center gap-4 pt-2">
          <div className="space-y-3">
            {portfolioData.sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => onSelectSection && onSelectSection(sec.id)}
                  title={sec.label}
                  className="flex items-center justify-center p-2 rounded-lg group"
                >
                  <span className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#3B83F7] shadow-[0_0_8px_#3B83F7] scale-125' 
                      : isDark 
                        ? 'bg-white/20 group-hover:bg-[#3B83F7]' 
                        : 'bg-slate-300 group-hover:bg-[#3B83F7]'
                  }`} />
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        /* Vista Expandida normal */
        <div className="overflow-y-auto h-full">
          <div className="mb-6 px-3 flex items-center justify-between">
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
                        ? 'bg-white/20 group-hover:bg-[#3B83F7]'
                        : 'bg-slate-300 group-hover:bg-[#3B83F7]'
                  }`} />
                  <span className="truncate">{sec.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </aside>
  );
};

