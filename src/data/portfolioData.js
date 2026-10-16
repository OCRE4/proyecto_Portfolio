export const portfolioData = {
  personal: {
    name: "Lautaro Barrera",
    shortName: "LB.",
    role: "Full Stack Developer & Software Engineer",
    punchline: "Programador Web",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    location: "Argentina (Berisso, Buenos Aires)",
    email: "lautaro.barrera.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "#resume"
  },
  sections: [
    { id: "intro", label: "Introducción" },
    { id: "about", label: "Sobre Mí" },
    { id: "projects", label: "Mis Proyectos" },
    { id: "skills", label: "Habilidades & Herramientas" },
    { id: "contact", label: "Contacto" },
    { id: "stats", label: "Estadísticas" }
  ],
  stats: [
    { number: "+3", label: "Años de Experiencia", icon: "Clock" },
    { number: "+25", label: "Proyectos Realizados", icon: "FolderGit2" },
    { number: "+15", label: "Tecnologías Dominadas", icon: "Code2" },
    { number: "100%", label: "Compromiso & Calidad", icon: "CheckCircle2" }
  ],
  projects: [
    {
      id: 1,
      title: "Proyecto 1 (Próximamente)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      tags: ["React", "Tailwind CSS", "Node.js"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
      imageGradient: "from-blue-600/30 to-indigo-900/40"
    },
    {
      id: 2,
      title: "Proyecto 2 (Próximamente)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      tags: ["React", "TypeScript", "Express"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
      imageGradient: "from-cyan-600/30 to-blue-900/40"
    }
  ],
  hardSkills: [
    {
      category: "Lenguajes",
      skills: [
        { name: "JavaScript", icon: "Javascript" },
        { name: "TypeScript", icon: "Typescript" },
        { name: "HTML5", icon: "Html5" },
        { name: "CSS3", icon: "Css3" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "Vite", icon: "Vite" },
        { name: "Tailwind CSS", icon: "Tailwind" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "Nodejs" },
        { name: "Express", icon: "Express" },
        { name: "PostgreSQL", icon: "Postgresql" },
        { name: "MySQL", icon: "Mysql" },
        { name: "SQLite", icon: "Sqlite" }
      ]
    },
    {
      category: "Herramientas & Control de Versiones",
      skills: [
        { name: "Git", icon: "Git" },
        { name: "GitHub", icon: "Github" }
      ]
    },
    {
      category: "Herramientas de IA",
      skills: [
        { name: "Antigravity", icon: "Antigravity" },
        { name: "Claude", icon: "Claude" },
        { name: "Géminis", icon: "Gemini" },
        { name: "ChatGPT", icon: "Chatgpt" }
      ]
    },
    {
      category: "Técnicas & Soporte",
      skills: [
        { name: "Administración de Bases de Datos", icon: "Database" },
        { name: "Mantenimiento y Reparación de PC", icon: "Wrench" }
      ]
    }
  ],
  softSkills: [
    {
      title: "Planificación & Arquitectura Previa",
      description: "Definición estructurada de frameworks, componentes y diseño antes de codificar.",
      icon: "Layers"
    },
    {
      title: "Resolución Autónoma de Problemas",
      description: "Diagnóstico metódico, depuración e investigación en documentación técnica.",
      icon: "SearchCode"
    },
    {
      title: "Atención al Detalle",
      description: "Balance entre rendimiento óptimo, código limpio y una interfaz pulida.",
      icon: "Sparkles"
    },
    {
      title: "Mejora Continua",
      description: "Alta receptividad al feedback constructivo para perfeccionar el producto final.",
      icon: "TrendingUp"
    }
  ],
  experience: [
    {
      period: "2023 - Presente",
      role: "Lorem Ipsum Developer",
      company: "Company Name / Freelance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      period: "2022 - 2023",
      role: "Junior Web Developer",
      company: "Studio / Company",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    }
  ],
  education: [
    {
      period: "2026",
      degree: "Programación Web y Administración de Base de Datos (con agentes IA)",
      institution: "Centro de Formación Laboral n°404 (CFL 404)",
      details: "Formación especializada en desarrollo y programación web, diseño y gestión de bases de datos, e integración y flujos de trabajo asistidos por agentes de Inteligencia Artificial."
    }
  ]
};
