import React, { useState } from 'react';
import { Mail, Check, Copy, MessageSquare, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const Contact = ({ isDark }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    {
      label: 'LinkedIn',
      url: portfolioData.personal.linkedin,
      icon: <LinkedInIcon className="w-5 h-5" />,
      color: 'text-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2] hover:text-white border-[#0A66C2]/20 hover:border-[#0A66C2]',
    },
    {
      label: 'GitHub',
      url: portfolioData.personal.github,
      icon: <GithubIcon className="w-5 h-5" />,
      color: isDark
        ? 'text-slate-200 bg-white/5 hover:bg-white hover:text-slate-900 border-white/10 hover:border-white'
        : 'text-slate-800 bg-slate-100 hover:bg-slate-900 hover:text-white border-slate-200 hover:border-slate-900',
    },
  ];

  return (
    <section id="contact" className={`py-16 border-t scroll-mt-24 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      <div className="flex items-center gap-3 mb-8">
        <span className="p-2.5 rounded-xl bg-[#3B83F7]/10 text-[#3B83F7]">
          <MessageSquare className="w-6 h-6" />
        </span>
        <div>
          <h2 className={`font-bebas text-3xl sm:text-4xl tracking-wider ${
            isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
          }`}>
            Contacto
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            ¿Tienes un proyecto en mente? Hablemos.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-10 max-w-lg">
        {/* Email card */}
        <div className={`p-6 rounded-2xl border ${
          isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <h3 className={`font-bebas text-2xl tracking-wide mb-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Información de Contacto
          </h3>
          <p className={`text-sm leading-relaxed mb-6 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Estoy disponible para nuevas oportunidades, desarrollo de software, colaboraciones y proyectos freelance.
          </p>

          <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3 truncate">
              <Mail className="w-4 h-4 text-[#3B83F7] shrink-0" />
              <span className={`text-sm font-mono truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {portfolioData.personal.email}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-2.5 rounded-lg bg-[#3B83F7]/20 hover:bg-[#3B83F7] text-[#3B83F7] hover:text-white transition-all shrink-0"
              title="Copiar correo"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copied && (
            <p className="text-xs text-emerald-500 mt-2 font-medium">¡Correo copiado al portapapeles!</p>
          )}
        </div>

        {/* Social links */}
        <div className={`p-6 rounded-2xl border ${
          isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <h3 className={`font-bebas text-2xl tracking-wide mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Redes
          </h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${s.color}`}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <a
          href="#stats"
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-[#3B83F7] text-sm sm:text-base font-medium transition-colors"
        >
          <span>Estadísticas</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
