import React from 'react';

// Social Icons
export const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Tech Icons (Official SVG Logos)
export const Html5Icon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 2l1.8 17.8L12 22l7.2-2.2L21 2H3z" fill="#E34F26" />
    <path d="M12 3.8v16.3l5.5-1.7 1.5-14.6H12z" fill="#EF652A" />
    <path d="M7 6.8h10l-.2 2.3H9.4l.2 2.3h6.9l-.5 5.8-4 1.2-4-1.2-.3-3.1h2.3l.1 1.6 1.9.5 1.9-.5.2-2.1H7.1L7 6.8z" fill="#FFFFFF" />
  </svg>
);

export const Css3Icon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 2l1.8 17.8L12 22l7.2-2.2L21 2H3z" fill="#1572B6" />
    <path d="M12 3.8v16.3l5.5-1.7 1.5-14.6H12z" fill="#33A9DC" />
    <path d="M7 6.8h10l-.2 2.3H9.4l.2 2.3h6.9l-.5 5.8-4 1.2-4-1.2-.3-3.1h2.3l.1 1.6 1.9.5 1.9-.5.2-2.1H7.1L7 6.8z" fill="#FFFFFF" />
  </svg>
);

export const JavascriptIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M7.5 18.5c.8.5 1.8.8 2.8.8 2 0 3.2-1 3.2-3.1v-7.2h-2.1v7.1c0 1-.5 1.4-1.3 1.4-.6 0-1.2-.2-1.6-.5l-1 1.5zm7 0c1 .6 2.3 1 3.6 1 2.3 0 3.9-1.2 3.9-3.2 0-1.7-1-2.6-2.6-3.3-.9-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.2-.9.8 0 1.5.3 2 .7l.9-1.5c-.8-.6-1.8-.9-2.9-.9-2.2 0-3.6 1.3-3.6 3.1 0 1.7 1.1 2.6 2.7 3.3.9.4 1.4.8 1.4 1.4 0 .6-.5 1-1.4 1-.9 0-1.8-.4-2.4-.9l-.7 1.6z" fill="#000000" />
  </svg>
);

export const TypescriptIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path d="M5 10.5h6v1.9H8.6v6.6H6.4v-6.6H5v-1.9zm8.5 4.7c.6.4 1.4.7 2.2.7.9 0 1.4-.4 1.4-.9 0-.6-.5-.9-1.6-1.3-1.4-.5-2.3-1.3-2.3-2.4 0-1.5 1.2-2.6 3.1-2.6 1 0 1.9.3 2.5.7l-.7 1.6c-.5-.3-1.1-.6-1.8-.6-.7 0-1.1.3-1.1.8 0 .5.5.8 1.5 1.2 1.5.6 2.4 1.2 2.4 2.5 0 1.6-1.3 2.6-3.3 2.6-1.1 0-2.2-.3-2.9-.8l.6-1.6z" fill="#FFFFFF" />
  </svg>
);

export const ViteIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21.5 4.3L12.5 21.4a.7.7 0 01-1.2 0L2.5 4.3a.7.7 0 01.8-.9l8.4 1.7a.7.7 0 00.3 0l8.7-1.7a.7.7 0 01.8.9z" fill="url(#vite-gradient)" />
    <path d="M14.6 2.5L8.2 14.8l3.6-.7-2 6.6 7.4-12.7-3.6.7 1-6.2z" fill="#FFC920" />
    <defs>
      <linearGradient id="vite-gradient" x1="2.5" y1="3" x2="21.5" y2="21.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

export const TailwindIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9.5c1.3-1.8 3-2.5 5.1-2.1 1.3.3 2.2 1.2 3.2 2.2 1.6 1.7 3.5 3.6 7.7 3.6 2.3 0 4.2-1.4 5-3.2-1.3 1.8-3 2.5-5.1 2.1-1.3-.3-2.2-1.2-3.2-2.2-1.6-1.7-3.5-3.6-7.7-3.6C8.7 6.3 6.8 7.7 6 9.5zM2 16.5c1.3-1.8 3-2.5 5.1-2.1 1.3.3 2.2 1.2 3.2 2.2 1.6 1.7 3.5 3.6 7.7 3.6 2.3 0 4.2-1.4 5-3.2-1.3 1.8-3 2.5-5.1 2.1-1.3-.3-2.2-1.2-3.2-2.2-1.6-1.7-3.5-3.6-7.7-3.6C4.7 13.3 2.8 14.7 2 16.5z" fill="#38BDF8" />
  </svg>
);

export const ReactIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const AstroIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.7 18.2c-.3 1.1-.9 2.1-1.7 3 2.1-.7 3.7-2.1 4.5-3.8.4-.9.6-1.9.7-2.9 0 0-1.2.9-2.3 1.7-.5.4-.9 1.2-1.2 2zm6.6-3.7c-.5.4-1.1.9-1.8 1.4.1-1 .3-2 .7-2.9.8-1.7 2.4-3.1 4.5-3.8-.8.9-1.4 1.9-1.7 3-.3.8-.7 1.6-1.7 2.3z"
      fill="#FF5D01"
    />
    <path
      d="M17.8 7.3C15.9 4 12.8 2 12 2c-.8 0-3.9 2-5.8 5.3-2 3.5-1.9 7.6-1.7 9.8.1.7.6 1.2 1.3 1.2h.2c.7 0 1.3-.4 1.5-1.1.8-2.6 2.3-4.4 4.5-4.4s3.7 1.8 4.5 4.4c.2.7.8 1.1 1.5 1.1h.2c.7 0 1.2-.5 1.3-1.2.2-2.2.3-6.3-1.6-9.8z"
      fill="#FFFFFF"
    />
  </svg>
);

export const NodejsIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" fill="#339933" />
    <path d="M12 4.1L5.2 8v8l6.8 3.9 6.8-3.9V8L12 4.1z" fill="#FFFFFF" fillOpacity="0.2" />
    <path d="M11 8.5v7h2v-4.2l2.6 4.2h1.4V8.5h-2v4.2L12.4 8.5H11z" fill="#FFFFFF" />
  </svg>
);

export const ExpressIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#000000" />
    <path d="M4.5 7.5h3.8l1.7 3.5 1.7-3.5h3.8l-3.3 5.5 3.5 6h-3.9l-1.8-3.7-1.8 3.7H4.5l3.5-6-3.5-5.5z" fill="#FFFFFF" />
  </svg>
);

export const MysqlIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {/* Official MySQL Dolphin Silhouette */}
    <path d="M21.2 13.8c-.8-.5-1.8-.7-2.7-.4-.9.3-1.6 1-2.2 1.7-.8 1-1.7 1.7-2.9 2-1.2.3-2.5.1-3.6-.5-1.5-.8-2.6-2.2-3.2-3.8-.5-1.5-.4-3.2.3-4.6.6-1.2 1.6-2.2 2.8-2.8 1.1-.6 2.4-.8 3.7-.5.5.1 1.1.3 1.5.7.2.2.3.4.2.7-.1.3-.4.4-.7.4-.7 0-1.4-.2-2-.1-1.5.2-2.9 1-3.7 2.3-.9 1.4-1 3.1-.4 4.6.6 1.4 1.7 2.5 3.2 2.9 1.3.4 2.7.2 3.9-.5 1-.6 1.8-1.5 2.7-2.3.7-.7 1.5-1.2 2.5-1.3 1.1-.1 2.1.4 2.7 1.2.3.4.4.8.4 1.2 0 .4-.3.7-.6.8-.7.2-1.3-.4-1.9-.9z" fill="#00758F" />
    <path d="M12.8 3.5c-.3.8-.4 1.7-.3 2.5.1.8.4 1.5.8 2.2-1-.2-2-.7-2.7-1.4-.7-.7-1.1-1.6-1.3-2.6.9-.4 2.1-.6 3.5-.7z" fill="#F29111" />
  </svg>
);

export const PostgresqlIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C6.5 2 2 6.5 2 12c0 3.7 2.1 7 5.2 8.6.3-.6.5-1.4.6-2.2-1.5-.4-2.6-1.7-2.6-3.3 0-1.3.7-2.4 1.8-3 .1-.8.4-1.6.8-2.3.9-.2 1.8-.1 2.6.2.8-.7 1.9-1.2 3.1-1.3 1.3 0 2.5.5 3.4 1.3.8-.3 1.7-.4 2.6-.2.4.7.7 1.5.8 2.3 1.1.6 1.8 1.7 1.8 3 0 1.6-1.1 2.9-2.6 3.3.1.8.3 1.6.6 2.2 3.1-1.6 5.2-4.9 5.2-8.6 0-5.5-4.5-10-10-10z" fill="#336791" />
  </svg>
);

export const SqliteIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 5c0-1.7 4-3 9-3s9 1.3 9 3v14c0 1.7-4 3-9 3s-9-1.3-9-3V5z" fill="#003B57" />
    <path d="M21 5c0 1.7-4 3-9 3S3 6.7 3 5" stroke="#00A2EB" strokeWidth="1.5" />
    <path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3" stroke="#00A2EB" strokeWidth="1.5" />
    <path d="M21 19c0 1.7-4 3-9 3s-9-1.3-9-3" stroke="#00A2EB" strokeWidth="1.5" />
  </svg>
);

export const AntigravityIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#antigravity-grad)" />
    <path d="M12 6l5 10H7l5-10z" fill="#FFFFFF" />
    <circle cx="12" cy="12" r="2.5" fill="#3B83F7" />
    <defs>
      <linearGradient id="antigravity-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B83F7" />
        <stop offset="1" stopColor="#9333EA" />
      </linearGradient>
    </defs>
  </svg>
);

export const ClaudeIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#D97757" />
    <path d="M13.8 6.5l3.7 11h-2.3l-.8-2.6H9.6l-.8 2.6H6.5l3.7-11h3.6zm-1.8 2.4l-1.8 5.2h3.6l-1.8-5.2z" fill="#FFFFFF" />
  </svg>
);

export const GeminiIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
      fill="url(#gemini-grad)"
    />
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4E8BF5" />
        <stop offset="0.5" stopColor="#9B72CB" />
        <stop offset="1" stopColor="#D96570" />
      </linearGradient>
    </defs>
  </svg>
);

export const ChatgptIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#10A37F" />
    <path
      d="M17.5 10.8c-.2-.7-.6-1.3-1.2-1.7V7.5c0-.8-.6-1.5-1.4-1.7-1-.3-2 .1-2.6.9-.4-.3-1-.4-1.6-.3-.7.1-1.3.6-1.6 1.2-.6-.2-1.3-.1-1.8.3-.6.5-.9 1.2-.8 1.9-.6.4-1 1.1-1 1.8 0 .8.4 1.5 1.1 1.9.2.7.6 1.3 1.2 1.7v1.6c0 .8.6 1.5 1.4 1.7 1 .3 2-.1 2.6-.9.4.3 1 .4 1.6.3.7-.1 1.3-.6 1.6-1.2.6.2 1.3.1 1.8-.3.6-.5.9-1.2.8-1.9.6-.4 1-1.1 1-1.8 0-.8-.4-1.5-1.1-1.9z"
      fill="#FFFFFF"
    />
  </svg>
);

export const GitIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22.6 10.9L13.1 1.4a2.2 2.2 0 00-3.1 0L8.2 3.2l3.4 3.4a2.6 2.6 0 013.3 3.3l3.2 3.2a2.6 2.6 0 012.5 1 2.6 2.6 0 01-3.6 3.6l-3.1-3.1v4.4a2.6 2.6 0 11-2.2 0V14a2.6 2.6 0 01-1.4-3.4L7 7.2 1.4 12.8a2.2 2.2 0 000 3.1l9.5 9.5a2.2 2.2 0 003.1 0l8.6-8.6a2.2 2.2 0 000-3.1z" fill="#F05032" />
  </svg>
);

export const VsCodeIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M17.35 1.62a1.2 1.2 0 0 0-.85.34L7.85 9.71 4.3 6.98a.8.8 0 0 0-1.07.07L1.8 8.42a.8.8 0 0 0 0 1.16L5.5 12l-3.7 2.42a.8.8 0 0 0 0 1.16l1.43 1.37a.8.8 0 0 0 1.07.07l3.55-2.73 8.65 7.75a1.2 1.2 0 0 0 1.95-.9V2.52a1.2 1.2 0 0 0-1.05-.9z" fill="#007ACC" />
    <path d="M18.5 4.5v15l-7-7.5 7-7.5z" fill="#1F8AD2" />
  </svg>
);

