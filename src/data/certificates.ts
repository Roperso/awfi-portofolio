export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  image: string;
  certificateId?: string;
  verificationUrl?: string;
  documentUrl?: string;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: 'it-specialist-data-analytics',
    title: 'IT Specialist — Data Analytics',
    issuer: 'Certiport / Pearson VUE',
    year: '2024',
    category: 'Certification',
    image: '/images/cert-data-analytics.jpg',
    certificateId: 'MQ2C-s4bx',
    verificationUrl: 'https://verify.certiport.com',
    description: 'Comprehensive validation in data manipulation, exploratory data analysis, visualization, and foundational predictive analytics.',
  },
  {
    id: 'mos-excel-2019',
    title: 'Microsoft Office Specialist: Excel 2019 Associate',
    issuer: 'Microsoft / Certiport',
    year: '2024',
    category: 'Certification',
    image: '/images/cert-mos.jpg',
    certificateId: 'MRRC-sFpA',
    verificationUrl: 'https://verify.certiport.com',
    description: 'Demonstrated proficiency in Microsoft Excel spreadsheet management, formulas, data formatting, and charts.',
  },
  {
    id: 'cisco-hardware-basics',
    title: 'Cisco Networking Academy — Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    category: 'Course / Certification',
    image: '/images/cert-cisco-hardware.jpg',
    certificateId: '9fb446f0-71a6-4bb8-9180-64d300d93e86',
    description: 'Foundational skills in computer hardware components, system architecture, assembly, and diagnostics.',
  },
  {
    id: 'cisco-os-basics',
    title: 'Cisco Networking Academy — Operating Systems Basics',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    category: 'Course / Certification',
    image: '/images/cert-cisco-os.jpg',
    certificateId: 'c4ad7996-c63f-4543-872d-45b5eb532c5d',
    description: 'Understanding operating system architecture, file management, terminal commands, and system security.',
  },
  {
    id: 'gdg-bandung-iox-2026',
    title: 'Google Developer Group (GDG) Bandung — IOX 2026',
    issuer: 'Google Developer Group Bandung',
    year: '2026',
    category: 'Seminar / Community Event',
    image: '/images/cert-gdg.jpg',
    description: 'Participation in developer ecosystem keynote sessions, cutting-edge AI technology workshops, and developer networking.',
  },
];
