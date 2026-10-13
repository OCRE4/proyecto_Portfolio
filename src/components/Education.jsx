import React from 'react';
import { GraduationCap, Award, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = ({ isDark }) => {
  return (
    <section id="education" className={`py-16 border-t scroll-mt-24 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      <div className="flex items-center gap-3 mb-8">
        <span className="p-2.5 rounded-xl bg-[#3B83F7]/10 text-[#3B83F7]">
          <GraduationCap className="w-6 h-6" />
        </span>
        <div>
          <h2 className={`font-bebas text-3xl sm:text-4xl tracking-wider ${
            isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
          }`}>
            Educación & Certificaciones
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Formación académica y capacitación continua
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {portfolioData.education.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition-all duration-300 hover:border-[#3B83F7]/40 flex flex-col justify-between ${
              isDark 
                ? 'bg-white/[0.03] border-white/10' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-[#3B83F7]/10 text-[#3B83F7]">
                  <Award className="w-5 h-5" />
                </span>
                <span className={`text-xs font-mono px-2.5 py-1 rounded border ${
                  isDark ? 'text-slate-400 bg-white/5 border-white/5' : 'text-slate-500 bg-slate-100 border-slate-200'
                }`}>
                  {item.period}
                </span>
              </div>
              <h3 className={`font-bebas text-2xl tracking-wide mb-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {item.degree}
              </h3>
              <p className="text-sm font-medium text-[#3B83F7] mb-3">
                {item.institution}
              </p>
              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {item.details}
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
