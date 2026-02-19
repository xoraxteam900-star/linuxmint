export interface WindowState {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AppInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'pinned' | 'about' | 'projects' | 'skills' | 'services' | 'contact' | 'resume' | 'settings' | 'terminal';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  apps: string[];
}

export interface Wallpaper {
  id: string;
  name: string;
  gradient: string;
}

export interface TerminalCommand {
  name: string;
  description: string;
  execute: () => string;
}

