import { Project, Skill, SocialLink, AppInfo, Category, Wallpaper } from '@/types';

export const portfolio = {
  name: 'Alex Johnson',
  title: 'Full Stack Developer',
  bio: `Hi, I'm a passionate Full Stack Developer with 5+ years of experience building modern web applications. I love creating intuitive user experiences and solving complex problems.

I specialize in React, Next.js, Node.js, and cloud technologies. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.

Let's build something amazing together!`,
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  avatar: '/avatar.png',
};

export const projects: Project[] = [
  {
    id: 'teleboost',
    title: 'TeleBoost',
    description: 'A comprehensive telehealth platform enabling virtual consultations between patients and healthcare providers. Features include real-time video calls, appointment scheduling, prescription management, and secure messaging.',
    image: '/projects/teleboost.png',
    techStack: ['Next.js', 'TypeScript', 'WebRTC', 'Socket.io', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://teleboost.vercel.app',
    githubUrl: 'https://github.com/alexjohnson/teleboost',
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    title: 'ShopFlow E-commerce',
    description: 'A modern e-commerce platform with advanced product filtering, shopping cart functionality, payment integration, and admin dashboard for inventory management.',
    image: '/projects/shopflow.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    liveUrl: 'https://shopflow.demo',
    githubUrl: 'https://github.com/alexjohnson/shopflow',
    featured: true,
  },
  {
    id: 'task-manager',
    title: 'TaskFlow Pro',
    description: 'A collaborative task management application with real-time updates, team workspaces, Gantt charts, and productivity analytics.',
    image: '/projects/taskflow.png',
    techStack: ['Vue.js', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://taskflow.demo',
    githubUrl: 'https://github.com/alexjohnson/taskflow',
    featured: false,
  },
  {
    id: 'weather-app',
    title: 'WeatherNow',
    description: 'A beautiful weather application with 7-day forecasts, interactive maps, severe weather alerts, and location-based recommendations.',
    image: '/projects/weathernow.png',
    techStack: ['React', 'OpenWeather API', 'Leaflet', 'Framer Motion'],
    liveUrl: 'https://weathernow.demo',
    githubUrl: 'https://github.com/alexjohnson/weathernow',
    featured: false,
  },
  {
    id: 'social-media',
    title: 'ConnectHub',
    description: 'A social networking platform with posts, likes, comments, real-time messaging, and user profiles. Includes content moderation and analytics.',
    image: '/projects/connecthub.png',
    techStack: ['Next.js', 'GraphQL', 'Apollo', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://connecthub.demo',
    githubUrl: 'https://github.com/alexjohnson/connecthub',
    featured: false,
  },
  {
    id: 'crypto-dashboard',
    title: 'CryptoTrack',
    description: 'A cryptocurrency portfolio tracker with real-time prices, market analysis, price alerts, and portfolio performance charts.',
    image: '/projects/cryptotrack.png',
    techStack: ['React', 'CoinGecko API', 'Recharts', 'Zustand'],
    liveUrl: 'https://cryptotrack.demo',
    githubUrl: 'https://github.com/alexjohnson/cryptotrack',
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'frontend' },
  { name: 'HTML/CSS', icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '💨', category: 'frontend' },
  { name: 'Vue.js', icon: '💚', category: 'frontend' },
  { name: 'Framer Motion', icon: '✨', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Python', icon: '🐍', category: 'backend' },
  { name: 'Express', icon: '🚀', category: 'backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'backend' },
  { name: 'MongoDB', icon: '🍃', category: 'backend' },
  { name: 'GraphQL', icon: '◼️', category: 'backend' },
  { name: 'REST APIs', icon: '🔌', category: 'backend' },
  
  // Tools
  { name: 'Git', icon: '📂', category: 'tools' },
  { name: 'Docker', icon: '🐳', category: 'tools' },
  { name: 'AWS', icon: '☁️', category: 'tools' },
  { name: 'Figma', icon: '🎯', category: 'tools' },
  { name: 'VS Code', icon: '💻', category: 'tools' },
  { name: 'Postman', icon: '📮', category: 'tools' },
  
  // Other
  { name: 'Agile', icon: '🔄', category: 'other' },
  { name: 'CI/CD', icon: '⚙️', category: 'other' },
  { name: 'Testing', icon: '🧪', category: 'other' },
  { name: 'Security', icon: '🔒', category: 'other' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/alexjohnson', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/alexjohnson', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/alexjohnson', icon: '🐦' },
  { name: 'Instagram', url: 'https://instagram.com/alexjohnson', icon: '📸' },
  { name: 'Dribbble', url: 'https://dribbble.com/alexjohnson', icon: '🏀' },
];

export const apps: AppInfo[] = [
  { id: 'about', name: 'About Me', icon: 'user', description: 'Learn more about me', category: 'about' },
  { id: 'projects', name: 'Projects', icon: 'folder', description: 'View my work', category: 'projects' },
  { id: 'skills', name: 'Skills', icon: 'code', description: 'My technical skills', category: 'skills' },
  { id: 'contact', name: 'Contact', icon: 'mail', description: 'Get in touch', category: 'contact' },
  { id: 'terminal', name: 'Terminal', icon: 'terminal', description: 'Command line interface', category: 'terminal' },
  { id: 'settings', name: 'Settings', icon: 'settings', description: 'System preferences', category: 'settings' },
];

export const categories: Category[] = [
  {
    id: 'about',
    name: 'About',
    icon: 'user',
    apps: ['about'],
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: 'folder',
    apps: ['projects'],
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: 'code',
    apps: ['skills'],
  },
  {
    id: 'services',
    name: 'Services',
    icon: 'briefcase',
    apps: [],
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: 'mail',
    apps: ['contact'],
  },
  {
    id: 'resume',
    name: 'Resume',
    icon: 'file-text',
    apps: [],
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: 'settings',
    apps: ['settings'],
  },
];

export const wallpapers: Wallpaper[] = [
  {
    id: 'mint',
    name: 'Mint Green',
    gradient: 'linear-gradient(135deg, #1a472a 0%, #2d5a3f 50%, #1a472a 100%)',
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    gradient: 'linear-gradient(135deg, #0c1929 0%, #1a3a5c 50%, #0c1929 100%)',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    gradient: 'linear-gradient(135deg, #2d1f3d 0%, #614385 50%, #516395 100%)',
  },
  {
    id: 'forest',
    name: 'Forest',
    gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  },
];

export const desktopIcons = [
  { id: 'about', label: 'About Me', icon: 'user' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
  { id: 'resume', label: 'Resume.pdf', icon: 'file-text' },
  { id: 'terminal', label: 'Terminal', icon: 'terminal' },
  { id: 'trash', label: 'Recycle Bin', icon: 'trash-2' },
];

