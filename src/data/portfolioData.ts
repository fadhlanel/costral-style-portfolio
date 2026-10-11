import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'NAMA ANDA',
  tagline: 'Software Developer',
  education: 'Pendidikan & Pengalaman Anda',
  status: 'Terbuka untuk peluang baru',
  bio: 'Pengembang perangkat lunak dengan minat pada pembuatan produk digital, arsitektur sistem, dan pengalaman pengguna yang bermakna. Terus belajar dan berkontribusi pada proyek yang berdampak.',
  experienceStart: 'Mulai berkarya',
  avatarUrl: '/avatar.svg',
  interests: ['Pengembangan Web', 'Aplikasi Mobile', 'Desain Sistem', 'Open Source', 'Teknologi Baru'],
  contact: {
    email: 'email@contoh.com',
    phone: '',
    github: 'https://github.com/username-anda',
    linkedin: 'https://www.linkedin.com/in/username-anda/',
    location: 'Indonesia'
  }
};

export const techStackData: TechItem[] = [
  { name: 'React', category: 'frontend', layer: 'client', iconKey: 'react', color: '#0284c7', roleTag: 'UI Library', usageContext: 'Component-based web interfaces and single page applications', projectLinks: ['fintech-dashboard', 'saas-management'] },
  { name: 'Tailwind CSS', category: 'frontend', layer: 'client', iconKey: 'tailwindcss', color: '#0284c7', roleTag: 'Utility CSS', usageContext: 'Responsive styling and design system structuring', projectLinks: [] },
  { name: 'Flutter', category: 'mobile', layer: 'client', iconKey: 'flutter', color: '#0284c7', roleTag: 'Mobile App', usageContext: 'Cross-platform mobile application development', projectLinks: ['mobile-ecommerce'] },
  { name: 'TypeScript', category: 'frontend', layer: 'client', iconKey: 'typescript', color: '#3178C6', roleTag: 'Type Safety', usageContext: 'Type-safe application development', projectLinks: ['fintech-dashboard', 'saas-management'] },
  { name: 'JavaScript', category: 'frontend', layer: 'client', iconKey: 'javascript', color: '#eab308', roleTag: 'Scripting Core', usageContext: 'Web scripting and frontend interactivity', projectLinks: [] },
  { name: 'Node.js', category: 'backend', layer: 'backend', iconKey: 'nodejs', color: '#22c55e', roleTag: 'Runtime', usageContext: 'Backend runtime and asynchronous services', projectLinks: ['fintech-dashboard', 'saas-management'] },
  { name: 'MySQL', category: 'backend', layer: 'database', iconKey: 'mysql', color: '#0284c7', roleTag: 'Database', usageContext: 'Relational data storage and management', projectLinks: [] },
  { name: 'Vite', category: 'tools', layer: 'devops', iconKey: 'vite', color: '#646cff', roleTag: 'Build Tool', usageContext: 'Fast frontend bundling and development', projectLinks: [] },
  { name: 'Git', category: 'tools', layer: 'devops', iconKey: 'git', color: '#f97316', roleTag: 'Version Control', usageContext: 'Source code management and collaboration', projectLinks: ['fintech-dashboard', 'mobile-ecommerce', 'saas-management'] }
];

const demoImages = {
  dashboard: '/projects/dashboard-demo.svg',
  mobile: '/projects/mobile-ecommerce.svg',
  saas: '/projects/saas-management.svg'
};

export const projectsData: Project[] = [
  {
    id: 'fintech-dashboard', title: 'Dashboard Fintech Analytics', subtitle: 'Platform analytics dan monitoring transaksi real-time', category: 'fullstack',
    summary: 'Dashboard interaktif untuk monitoring transaksi, analitik pengguna, dan metrik kinerja aplikasi fintech.',
    description: 'Dashboard ini membantu tim memonitor kesehatan aplikasi, tren transaksi, dan perilaku pengguna secara real-time.',
    architecture: ['Frontend React dengan chart interaktif', 'Backend Node.js dengan REST API', 'PostgreSQL untuk data transaksi', 'WebSocket untuk update live'],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'], highlights: ['Visualisasi data real-time', 'Filter analytics mendalam', 'Export laporan PDF dan CSV'],
    challenges: 'Optimasi query database untuk volume transaksi besar.', role: 'Full-Stack Developer', githubUrl: 'https://github.com/username-anda/fintech-dashboard', imageUrl: demoImages.dashboard, imageFit: 'cover', featured: true,
    metrics: [{ label: 'Jenis', value: 'Dashboard' }, { label: 'Stack', value: 'React + Node.js' }, { label: 'Data', value: 'Real-time' }]
  },
  {
    id: 'mobile-ecommerce', title: 'Aplikasi E-Commerce Mobile', subtitle: 'Aplikasi shopping dengan pembayaran dan tracking pesanan', category: 'mobile',
    summary: 'Aplikasi mobile e-commerce dengan fitur browsing produk, keranjang, pembayaran, dan tracking pesanan.',
    description: 'Aplikasi mobile untuk platform e-commerce dengan fokus pada pengalaman pengguna dan performa.',
    architecture: ['Flutter cross-platform', 'Provider untuk state management', 'Payment gateway integration', 'SQLite untuk cache lokal'],
    stack: ['Flutter', 'Dart', 'Firebase', 'REST API'], highlights: ['Multiple payment gateway', 'Real-time order tracking', 'Push notification'],
    challenges: 'Optimasi performa pada device dengan spesifikasi rendah.', role: 'Mobile Developer', isMobileApp: true, demoStatusLabel: 'Mobile App (Flutter)', imageUrl: demoImages.mobile, imageFit: 'contain', featured: true,
    metrics: [{ label: 'Platform', value: 'iOS & Android' }, { label: 'Framework', value: 'Flutter' }, { label: 'Fitur', value: 'Payment' }]
  },
  {
    id: 'saas-management', title: 'Platform Manajemen SaaS', subtitle: 'Sistem multi-tenant untuk aplikasi enterprise', category: 'fullstack',
    summary: 'Platform SaaS dengan manajemen organisasi, user roles, billing automation, dan analytics.',
    description: 'Platform SaaS scalable untuk membantu bisnis mengelola operasional, tim, akses, billing, dan reporting.',
    architecture: ['Node.js microservices', 'React dengan TypeScript', 'PostgreSQL multi-tenant', 'Message queue untuk background jobs'],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'], highlights: ['Data isolation multi-tenant', 'Automated billing', 'API-first architecture'],
    challenges: 'Merancang arsitektur multi-tenant yang scalable dan aman.', role: 'Full-Stack Developer', isPrivateRepo: true, privateRepoReason: 'Proyek internal / confidential', imageUrl: demoImages.saas, imageFit: 'cover', featured: true,
    metrics: [{ label: 'Arsitektur', value: 'Microservices' }, { label: 'Skalabilitas', value: 'Multi-tenant' }, { label: 'Target', value: 'Enterprise' }]
  }
];

export const experienceData: ExperienceItem[] = [
  { id: 'edu-highschool', period: '2021 - 2024', role: 'Siswa Rekayasa Perangkat Lunak', organization: 'SMK Negeri Contoh', badge: 'Pendidikan Formal', category: 'education', description: 'Menempuh pendidikan menengah kejuruan dengan fokus pengembangan web, mobile, database, dan software engineering.', highlights: ['Web development', 'Mobile development', 'Database design', 'Object-oriented programming'], tech: ['PHP', 'Laravel', 'Flutter', 'MySQL', 'JavaScript'] },
  { id: 'edu-university', period: '2024 - 2028', role: 'Mahasiswa Teknik Informatika', organization: 'Universitas Teknologi Contoh', badge: 'Pendidikan Tinggi', category: 'education', description: 'Mendalami ilmu komputer, algoritma, rekayasa perangkat lunak, cloud computing, dan pengembangan sistem berskala besar.', highlights: ['Computer science fundamentals', 'Software architecture', 'Cloud computing', 'Team project'], tech: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker'] },
  { id: 'work-internship', period: '2026 - 2027', role: 'Web Developer Intern', organization: 'PT. Tech Solutions Indonesia', badge: 'Magang', category: 'project', description: 'Berkontribusi pada pengembangan fitur backend, maintenance website, optimasi database, dan kolaborasi dengan tim developer.', highlights: ['Production bugfix', 'Backend feature development', 'Database optimization', 'Code review'], tech: ['Laravel', 'PHP', 'MySQL', 'Git', 'REST API'] },
  { id: 'work-junior', period: '2028 - Sekarang', role: 'Junior Full-Stack Developer', organization: 'Digital Innovation Studio', badge: 'Pekerjaan', category: 'project', description: 'Mengembangkan aplikasi web dan mobile untuk klien enterprise, mulai dari arsitektur hingga deployment production.', highlights: ['Full-stack application', 'Scalable database', 'Production optimization', 'Knowledge sharing'], tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'] }
];
