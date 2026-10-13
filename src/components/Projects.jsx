import React from 'react';
import { FolderGit2, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ isDark }) => {
  return (
    <section id="projects" className={`py-16 border-t scroll-mt-24 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      <div className="flex items-center gap-3 mb-8">
        <span className="p-2.5 rounded-xl bg-[#3B83F7]/10 text-[#3B83F7]">
          <FolderGit2 className="w-6 h-6" />
        </span>
        <div>
          <h2 className={`font-bebas text-3xl sm:text-4xl tracking-wider ${
            isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
          }`}>
            Mis Proyectos
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {portfolioData.projects.map((proj) => (
          <div
            key={proj.id}
            className={`group rounded-2xl border overflow-hidden hover:border-[#3B83F7]/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
              isDark 
                ? 'bg-white/[0.03] border-white/10' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {/* Visual Header */}
            <div className={`h-40 bg-gradient-to-br ${proj.imageGradient} p-6 flex flex-col justify-between relative overflow-hidden border-b ${
              isDark ? 'border-white/5' : 'border-slate-100'
            }`}>
              <div className="flex justify-between items-center z-10">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-semibold text-white/90 border border-white/10">
                  {proj.featured ? 'Destacado' : 'Proyecto'}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all hover:scale-110"
                    title="Ver Código"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#3B83F7] hover:bg-blue-600 text-white shadow-md glow-blue transition-all hover:scale-110"
                    title="Ver Demo En Vivo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="z-10 flex items-center gap-2 text-white/90 text-xs font-mono">
                <Layers className="w-4 h-4 text-[#3B83F7]" />
                <span>Web Application</span>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className={`font-bebas text-2xl tracking-wide mb-2 group-hover:text-[#3B83F7] transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {proj.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className={`flex flex-wrap gap-2 pt-2 border-t ${
                  isDark ? 'border-white/5' : 'border-slate-100'
                }`}>
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border group-hover:border-[#3B83F7]/30 transition-colors ${
                        isDark 
                          ? 'bg-white/5 text-slate-300 border-white/5' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-4">
        <a 
          href="#skills"
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-[#3B83F7] text-sm sm:text-base font-medium transition-colors"
        >
          <span>Habilidades & Herramientas</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
