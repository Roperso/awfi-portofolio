import React from 'react';
import {
  SiUnity,
  SiPython,
  SiFigma,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiVite,
  SiHtml5,
  SiCss,
  SiMysql,
  SiCplusplus,
} from 'react-icons/si';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const techColorMap: Record<string, string> = {
  unity: '#FFFFFF',
  csharp: '#239120',
  cplusplus: '#00599C',
  python: '#3776AB',
  figma: '#F24E1E',
  sql: '#4479A1',
  react: '#61DAFB',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  tailwindcss: '#06B6D4',
  git: '#F05032',
  vite: '#646CFF',
  html5: '#E34F26',
  css3: '#1572B6',
};

export function getTechBrandColor(name: string): string {
  const normalizedKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return techColorMap[normalizedKey] || '#A855F7';
}

// C# Official Logo SVG Component for crisp accurate rendering
const CSharpSvgIcon: React.FC<{ size?: number; className?: string; style?: React.CSSProperties }> = ({
  size = 20,
  className = '',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5 2.5a.75.75 0 011 0l7.25 4.186a.75.75 0 01.375.65v8.328a.75.75 0 01-.375.65L12.5 20.5a.75.75 0 01-1 0L4.25 16.314a.75.75 0 01-.375-.65V7.336a.75.75 0 01.375-.65L11.5 2.5zM10.8 7.5a4.3 4.3 0 00-3.05 1.25A4.3 4.3 0 006.5 11.8a4.3 4.3 0 001.25 3.05A4.3 4.3 0 0010.8 16.1c1.5 0 2.6-.7 3.2-1.7l-1.3-.8c-.4.6-1.1 1-1.9 1-1.4 0-2.5-1.1-2.5-2.6 0-1.5 1.1-2.6 2.5-2.6.8 0 1.5.4 1.9 1l1.3-.8c-.6-1-1.7-1.7-3.2-1.7zm4.3 1.5h.9l-.3 1.5h1.2l.3-1.5h.9l-.3 1.5h.7v.9h-.9l-.3 1.5h.9l-.3 1.5h-.9l.3-1.5h-1.2l-.3 1.5h-.9l.3-1.5h-.7v-.9h.9l.3-1.5zm.9 2.4h1.2l.3-1.5h-1.2l-.3 1.5z" />
  </svg>
);

export default function TechIcon({ name, size = 20, className = '', style }: TechIconProps) {
  const normalizedKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalizedKey) {
    case 'unity':
      return <SiUnity size={size} className={className} style={style} />;
    case 'csharp':
    case 'c':
    case 'cs':
      return <CSharpSvgIcon size={size} className={className} style={style} />;
    case 'cplusplus':
    case 'cpp':
      return <SiCplusplus size={size} className={className} style={style} />;
    case 'python':
      return <SiPython size={size} className={className} style={style} />;
    case 'figma':
      return <SiFigma size={size} className={className} style={style} />;
    case 'sql':
    case 'mysql':
    case 'postgresql':
    case 'database':
      return <SiMysql size={size} className={className} style={style} />;
    case 'react':
      return <SiReact size={size} className={className} style={style} />;
    case 'typescript':
    case 'ts':
      return <SiTypescript size={size} className={className} style={style} />;
    case 'javascript':
    case 'js':
      return <SiJavascript size={size} className={className} style={style} />;
    case 'tailwindcss':
    case 'tailwind':
      return <SiTailwindcss size={size} className={className} style={style} />;
    case 'git':
    case 'gitbranch':
      return <SiGit size={size} className={className} style={style} />;
    case 'vite':
      return <SiVite size={size} className={className} style={style} />;
    case 'html5':
    case 'html':
      return <SiHtml5 size={size} className={className} style={style} />;
    case 'css3':
    case 'css':
      return <SiCss size={size} className={className} style={style} />;
    default:
      return <SiUnity size={size} className={className} style={style} />;
  }
}
