import React from 'react';
import { BarChart3, Clock, FolderGit2, Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Stats = ({ isDark }) => {
  const iconMap = {
    Clock: <Clock className="w-6 h-6 text-[#3B83F7]" />,
    FolderGit2: <FolderGit2 className="w-6 h-6 text-[#3B83F7]" />,
    Code2: <Code2 className="w-6 h-6 text-[#3B83F7]" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-[#3B83F7]" />
  };

  return (
    <section id="stats" className={`py-16 border-t scroll-mt-24 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      <div className="flex items-center gap-3 mb-8">
        <span className="p-2.5 rounded-xl bg-[#3B83F7]/10 text-[#3B83F7]">
          <BarChart3 className="w-6 h-6" />
        </span>
        <div>
          <h2 className={`font-bebas text-3xl sm:text-4xl tracking-wider ${
            isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
          }`}>
            Estadísticas & Métricas
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Impacto cuantitativo y dedicación
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {portfolioData.stats.map((st, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition-all duration-300 hover:border-[#3B83F7]/50 text-center flex flex-col items-center group ${
              isDark 
                ? 'bg-white/[0.03] border-white/10' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className={`mb-3 p-3 rounded-xl transition-colors ${
              isDark ? 'bg-white/5 group-hover:bg-[#3B83F7]/20' : 'bg-blue-50 group-hover:bg-blue-100'
            }`}>
              {iconMap[st.icon] || <CheckCircle2 className="w-6 h-6 text-[#3B83F7]" />}
            </div>
            <div className={`font-bebas text-4xl sm:text-5xl tracking-wide glow-text mb-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {st.number}
            </div>
            <div className={`text-xs sm:text-sm font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {st.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
