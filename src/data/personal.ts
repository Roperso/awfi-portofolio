export const personal = {
  name: 'Awfi Muhammad',
  title: 'Informatics Student | Software Developer | Creative Designer',
  location: 'Sariwangi, Bandung Barat, Indonesia',
  email: 'muhammadawfi60@gmail.com',
  languages: [
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'Bahasa Inggris', level: 'Intermediate' },
    { name: 'Bahasa Jepang', level: 'Basic' },
  ],
  education: [
    {
      institution: 'SMPN 01 Comal',
      program: '',
      period: '2017–2020',
    },
    {
      institution: 'SMKN 01 Ampelgading',
      program: 'Teknik Kendaraan Otomotif',
      period: '2020–2023',
    },
    {
      institution: 'Politeknik TEDC Bandung',
      program: 'D4 Teknik Informatika',
      period: '2023–2027 (expected)',
    },
  ],
  experience: [
    {
      role: 'Freelance Graphic Designer',
      organization: '',
      period: '2020–2023',
    },
    {
      role: 'Ketua Divisi Infokom',
      organization: 'HMTI',
      period: '2024–2025',
    },
  ],
  softSkills: ['Leadership', 'Teamwork', 'Communication', 'Problem Solving'],
} as const;
