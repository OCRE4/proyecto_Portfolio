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

export const GitIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22.6 10.9L13.1 1.4a2.2 2.2 0 00-3.1 0L8.2 3.2l3.4 3.4a2.6 2.6 0 013.3 3.3l3.2 3.2a2.6 2.6 0 012.5 1 2.6 2.6 0 01-3.6 3.6l-3.1-3.1v4.4a2.6 2.6 0 11-2.2 0V14a2.6 2.6 0 01-1.4-3.4L7 7.2 1.4 12.8a2.2 2.2 0 000 3.1l9.5 9.5a2.2 2.2 0 003.1 0l8.6-8.6a2.2 2.2 0 000-3.1z" fill="#F05032" />
  </svg>
);

export const VsCodeIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M17.8 2.2l-9.1 8.5L3.6 6.8 2 7.7v8.6l1.6.9 5.1-3.9 9.1 8.5 4.2-2V4.2l-4.2-2zm0 4.5l-5.6 5.3 5.6 5.3V6.7z" fill="#007ACC" />
  </svg>
);
