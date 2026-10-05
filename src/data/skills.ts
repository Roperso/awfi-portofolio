export interface Technology {
  name: string;
  icon: string;
}

export const technologies: Technology[] = [
  { name: 'Unity', icon: 'unity' },
  { name: 'C#', icon: 'csharp' },
  { name: 'C++', icon: 'cplusplus' },
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Figma', icon: 'figma' },
  { name: 'SQL', icon: 'sql' },
  { name: 'Git', icon: 'git' },
  { name: 'Vite', icon: 'vite' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
];


export interface Service {
  category: string;
  name: string;
  description: string;
  price: string;
}

export const services: Service[] = [
  {
    category: 'Design',
    name: 'UI/UX Design',
    description:
      'Designing clean and user-focused interfaces for websites and digital applications.',
    price: 'Starting from custom quote',
  },
  {
    category: 'Design',
    name: 'Graphic Design',
    description:
      'Creating visual assets, digital graphics, thumbnails, and creative materials based on project needs.',
    price: 'Starting from custom quote',
  },
  {
    category: 'Development',
    name: 'Software & Game Development',
    description:
      'Building software and interactive digital projects using modern programming tools and development workflows.',
    price: 'Starting from custom quote',
  },
];

export const credentialChips: string[] = [
  'Informatics Student',
  'Software Developer',
  'Creative Designer',
  'Freelance Experience',
  'Team Leadership',
  'Open to Opportunities',
];

export const heroTechLogos: Technology[] = [
  { name: 'Unity', icon: 'unity' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
];

export const aboutToolsGrid: Technology[] = [
  { name: 'Unity', icon: 'unity' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Python', icon: 'python' },
  { name: 'C#', icon: 'csharp' },
  { name: 'C++', icon: 'cplusplus' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'SQL', icon: 'sql' },
];
