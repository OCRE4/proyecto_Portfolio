import React from 'react';
import { ArrowRight, Sparkles, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ isDark }) => {
  const { name, punchline, bio, location, email, github, linkedin } = portfolioData.personal;

  return (
    <section 
      id="intro" 
      className="min-h-[75vh] flex flex-col justify-center relative py-12 lg:py-16 scroll-mt-24"
    >
      {/* Background glow ambiance */}
      <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10 ${
        isDark ? 'bg-[#3B83F7]/10' : 'bg-[#3B83F7]/15'
      }`} />

      {/* Badge / Status */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium w-fit mb-6 ${
        isDark 
          ? 'bg-white/5 border-white/10 text-slate-300' 
          : 'bg-blue-50 border-blue-200 text-blue-900'
      }`}>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#3B83F7]" />
          Disponible para nuevos proyectos & oportunidades
        </span>
      </div>

      {/* Main Name Heading */}
      <h1 className={`font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide mb-3 leading-none ${
        isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
      }`}>
        {name}
      </h1>

      {/* Subtitle / Punchline */}
      <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-[#3B83F7] glow-text mb-6">
        {punchline}
      </h2>

      {/* Detailed Bio Description */}
      <p className={`text-base sm:text-lg leading-relaxed max-w-3xl mb-6 font-normal ${
        isDark ? 'text-slate-300' : 'text-slate-600'
      }`}>
        {bio}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <a
          href="#projects"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#3B83F7] hover:bg-[#2563EB] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#3B83F7]/25 hover:shadow-[#3B83F7]/40 hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>Ver Proyectos</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm sm:text-base font-medium transition-all duration-200 ${
            isDark
              ? 'border-white/10 text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/20'
              : 'border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-400'
          }`}
        >
          <span>Contáctame</span>
        </a>
      </div>

      {/* Location, Contact & Social Card moved here */}
      <div className={`p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 mb-12 max-w-3xl transition-all ${
        isDark 
          ? 'bg-white/[0.03] border-white/10 shadow-lg shadow-black/20' 
          : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className={`flex flex-wrap items-center gap-6 text-sm ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          <div className="flex items-center gap-2 font-medium">
            <MapPin className="w-4 h-4 text-[#3B83F7]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Mail className="w-4 h-4 text-[#3B83F7]" />
            <span>{email}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={`p-2.5 rounded-xl border transition-colors ${
              isDark 
                ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10' 
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200'
            }`}
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className={`p-2.5 rounded-xl border transition-colors ${
              isDark 
                ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10' 
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200'
            }`}
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom right navigation link */}
      <div className="flex justify-end pt-2">
        <a 
          href="#about"
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-[#3B83F7] text-sm sm:text-base font-medium transition-colors"
        >
          <span>Sobre Mí</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
