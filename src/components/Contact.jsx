import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = ({ isDark }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
        {/* Info Column */}
        <div className="lg:col-span-2 space-y-6">
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
              <div className="truncate">
                <span className={`text-xs block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Correo Directo
                </span>
                <span className={`text-sm font-mono truncate block ${isDark ? 'text-white' : 'text-slate-900'}`}>
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
        </div>

        {/* Form Column */}
        <div className="lg:col-span-3">
          <div className={`p-6 sm:p-8 rounded-2xl border ${
            isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            {formSent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className={`font-bebas text-2xl tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ¡Mensaje Enviado con Éxito!
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Gracias por escribir. Me pondré en contacto contigo lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-xs font-medium uppercase tracking-wider mb-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-all text-sm focus:outline-none focus:border-[#3B83F7] focus:ring-1 focus:ring-[#3B83F7] ${
                      isDark 
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-medium uppercase tracking-wider mb-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-all text-sm focus:outline-none focus:border-[#3B83F7] focus:ring-1 focus:ring-[#3B83F7] ${
                      isDark 
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-medium uppercase tracking-wider mb-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Mensaje o Propuesta
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                    className={`w-full px-4 py-3 rounded-xl border transition-all text-sm resize-none focus:outline-none focus:border-[#3B83F7] focus:ring-1 focus:ring-[#3B83F7] ${
                      isDark 
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-bebas text-lg tracking-wider bg-[#3B83F7] hover:bg-[#2563eb] text-white py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md glow-blue hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
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
