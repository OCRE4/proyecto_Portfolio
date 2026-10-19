import React from 'react';
import { User, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = ({ isDark }) => {
  return (
    <section id="about" className={`py-16 border-t scroll-mt-24 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      {/* Title with icon matching all other sections */}
      <div className="flex items-center gap-3 mb-8">
        <span className="p-2.5 rounded-xl bg-[#3B83F7]/10 text-[#3B83F7]">
          <User className="w-6 h-6" />
        </span>
        <div>
          <h2 className={`font-bebas text-3xl sm:text-4xl tracking-wider ${
            isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
          }`}>
            Sobre Mí
          </h2>
        </div>
      </div>

      {/* Bio text directly without the 'BIO' subtitle */}
      <div className="mb-10">
        <p className={`text-base leading-relaxed max-w-4xl font-normal ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
Soy un desarrollador web enfocado en la planificación, arquitectura y construcción de aplicaciones modernas utilizando herramientas y agentes de IA.

Mi fuerte está en la preparación metódica de cada proyecto: defino la estructura, el flujo de usuario, la interfaz estética y la pila tecnológica adecuada (como React, TypeScript, Vite y Tailwind CSS). Utilizo agentes de IA como aceleradores de desarrollo, supervisando minuciosamente la calidad, la lógica interna y el rendimiento para entregar software optimizado, funcional y libre de errores.

Me caracterizo por un enfoque autónomo en la resolución de problemas, una gran atención al detalle visual y una alta disciplina y organización en cada etapa del trabajo.        </p>
      </div>

      {/* Cards Grid: Education and Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Education Box */}
        <div className={`p-6 rounded-2xl border transition-all duration-300 hover:border-[#3B83F7]/50 ${
          isDark 
            ? 'bg-[#050b1d]/70 border-white/10' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className={`flex items-center gap-2.5 mb-5 pb-3 border-b ${
            isDark ? 'border-white/5' : 'border-slate-100'
          }`}>
            <GraduationCap className="w-5 h-5 text-[#3B83F7]" />
            <h3 className={`font-bebas text-2xl tracking-wide ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Educación
            </h3>
          </div>

          <div className="space-y-5">
            {portfolioData.education.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className={`text-base font-semibold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.degree}
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {item.institution}
                </p>
                <div className={`flex items-center gap-3 text-xs font-mono pt-0.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span className="text-[#3B83F7]">{item.period}</span>
                  {item.details && (
                    <>
                      <span>•</span>
                      <span>{item.details}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Box */}
        <div className={`p-6 rounded-2xl border transition-all duration-300 hover:border-[#3B83F7]/50 ${
          isDark 
            ? 'bg-[#050b1d]/70 border-white/10' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className={`flex items-center gap-2.5 mb-5 pb-3 border-b ${
            isDark ? 'border-white/5' : 'border-slate-100'
          }`}>
            <Briefcase className="w-5 h-5 text-[#3B83F7]" />
            <h3 className={`font-bebas text-2xl tracking-wide ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Experiencia
            </h3>
          </div>

          <div className="space-y-5">
            {portfolioData.experience.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className={`text-base font-semibold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.role}
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {item.company}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono pt-0.5">
                  <span className="text-[#3B83F7]">{item.period}</span>
                </div>
                <p className={`text-xs pt-1 leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <a 
          href="#projects"
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-[#3B83F7] text-sm sm:text-base font-medium transition-colors"
        >
          <span>Mis Proyectos</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
