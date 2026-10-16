import React from 'react';
import { 
  Wrench, 
  ArrowRight, 
  Cpu, 
  Brain, 
  Database, 
  Layers, 
  SearchCode, 
  Timer, 
  Sparkles, 
  TrendingUp,
  FolderGit2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { 
  Html5Icon, 
  Css3Icon, 
  JavascriptIcon, 
  TypescriptIcon, 
  ReactIcon,
  ViteIcon, 
  TailwindIcon, 
  GitIcon, 
  GithubIcon,
  NodejsIcon,
  ExpressIcon,
  MysqlIcon,
  PostgresqlIcon,
  SqliteIcon,
  AntigravityIcon,
  ClaudeIcon,
  GeminiIcon,
  ChatgptIcon
} from './Icons';

// Helper for rendering Hard Skill icons
const renderSkillIcon = (iconName) => {
  switch (iconName) {
    case 'Html5':
      return <Html5Icon className="w-5 h-5 flex-shrink-0" />;
    case 'Css3':
      return <Css3Icon className="w-5 h-5 flex-shrink-0" />;
    case 'Javascript':
      return <JavascriptIcon className="w-5 h-5 flex-shrink-0 rounded-xs" />;
    case 'Typescript':
      return <TypescriptIcon className="w-5 h-5 flex-shrink-0 rounded-xs" />;
    case 'React':
      return <ReactIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Vite':
      return <ViteIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Tailwind':
      return <TailwindIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Git':
      return <GitIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Github':
      return <GithubIcon className="w-5 h-5 flex-shrink-0 text-slate-800 dark:text-slate-200" />;
    case 'Nodejs':
      return <NodejsIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Express':
      return <ExpressIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Mysql':
      return <MysqlIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Postgresql':
      return <PostgresqlIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Sqlite':
      return <SqliteIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Antigravity':
      return <AntigravityIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Claude':
      return <ClaudeIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Gemini':
      return <GeminiIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Chatgpt':
      return <ChatgptIcon className="w-5 h-5 flex-shrink-0" />;
    case 'Database':
      return <Database className="w-5 h-5 flex-shrink-0 text-[#3B83F7]" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 flex-shrink-0 text-amber-500" />;
    default:
      return <Cpu className="w-5 h-5 flex-shrink-0 text-[#3B83F7]" />;
  }
};

// Helper for rendering Soft Skill icons
const renderSoftSkillIcon = (iconName) => {
  const iconProps = { className: "w-5 h-5 text-[#3B83F7]" };
  switch (iconName) {
    case 'Layers':
      return <Layers {...iconProps} />;
    case 'SearchCode':
      return <SearchCode {...iconProps} />;
    case 'Timer':
      return <Timer {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'TrendingUp':
      return <TrendingUp {...iconProps} />;
    default:
      return <Brain {...iconProps} />;
  }
};

export const Skills = ({ isDark }) => {
  return (
    <section id="skills" className={`py-16 border-t scroll-mt-24 ${
      isDark ? 'border-white/10' : 'border-slate-200'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="p-2.5 rounded-xl bg-[#3B83F7]/10 text-[#3B83F7]">
          <Cpu className="w-6 h-6" />
        </span>
        <div>
          <h2 className={`font-bebas text-3xl sm:text-4xl tracking-wider ${
            isDark ? 'text-[#F6F8FB]' : 'text-slate-900'
          }`}>
            Habilidades & Herramientas
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Competencias técnicas y habilidades profesionales clave
          </p>
        </div>
      </div>

      {/* BLOQUE 1: HARD SKILLS */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-[#3B83F7] animate-pulse"></span>
          <h3 className={`font-bebas text-xl sm:text-2xl tracking-wide uppercase ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Hard Skills & Herramientas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.hardSkills.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:border-[#3B83F7]/50 ${
                isDark 
                  ? 'bg-white/[0.03] border-white/10' 
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className={`flex items-center gap-2 mb-5 pb-3 border-b ${
                isDark ? 'border-white/10' : 'border-slate-100'
              }`}>
                <FolderGit2 className="w-4 h-4 text-[#3B83F7]" />
                <h4 className={`font-bebas text-xl tracking-wide ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {cat.category}
                </h4>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                      isDark 
                        ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-[#3B83F7]/30' 
                        : 'bg-slate-50 border-slate-150 hover:bg-blue-50/50 hover:border-[#3B83F7]/30'
                    }`}
                  >
                    {renderSkillIcon(skill.icon)}
                    <span className={`text-sm font-medium ${
                      isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-950'
                    }`}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BLOQUE 2: SOFT SKILLS */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <h3 className={`font-bebas text-xl sm:text-2xl tracking-wide uppercase ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Soft Skills & Metodología
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioData.softSkills.map((soft, sIdx) => (
            <div
              key={sIdx}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:border-[#3B83F7]/40 group flex flex-col justify-between ${
                isDark 
                  ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05]' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl transition-colors ${
                    isDark ? 'bg-white/[0.05] group-hover:bg-[#3B83F7]/15' : 'bg-blue-50 group-hover:bg-blue-100'
                  }`}>
                    {renderSoftSkillIcon(soft.icon)}
                  </div>
                  <h4 className={`font-semibold text-sm leading-snug ${
                    isDark ? 'text-slate-100 group-hover:text-[#3B83F7]' : 'text-slate-900 group-hover:text-[#3B83F7]'
                  } transition-colors`}>
                    {soft.title}
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {soft.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation link */}
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
