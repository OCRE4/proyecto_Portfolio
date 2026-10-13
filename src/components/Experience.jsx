import React from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = ({ isDark }) => {
  return (
    <section id="experience" className={`py-16 border-t scroll-mt-24 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      <div className="flex items-center gap-3 mb-8">
        <span className="p-2.5 rounded-xl bg-[#3B83F7]/10 text-[#3B83F7]">
          <Briefcase className="w-6 h-6" />
        </span>
        <div>
          <h2 className={`font-bebas text-3xl sm:text-4xl tracking-wider ${
            isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
          }`}>
            Experiencia Laboral
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Trayectoria y proyectos profesionales
          </p>
        </div>
      </div>

      <div className={`space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 mb-10 ${
        isDark ? 'before:bg-white/10' : 'before:bg-slate-200'
      }`}>
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-10 group">
            {/* Timeline bullet */}
            <div className={`absolute left-1.5 top-2 w-4 h-4 rounded-full border-2 border-[#3B83F7] group-hover:bg-[#3B83F7] transition-colors shadow-[0_0_8px_#3B83F7] ${
              isDark ? 'bg-[#030816]' : 'bg-white'
            }`} />

            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:border-[#3B83F7]/40 ${
              isDark 
                ? 'bg-white/[0.03] border-white/10' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className={`font-bebas text-2xl tracking-wide ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#3B83F7] px-3 py-1 rounded-full bg-[#3B83F7]/10 border border-[#3B83F7]/20">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
              </div>

              <div className={`text-sm font-medium mb-3 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {exp.company}
              </div>

              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-4">
        <a 
          href="#contact"
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-[#3B83F7] text-sm sm:text-base font-medium transition-colors"
        >
          <span>Contacto</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
