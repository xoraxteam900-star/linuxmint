# TeleBoost - Portfolio OS

A unique portfolio website that looks and behaves like a Linux Mint desktop environment. Built with Next.js, TypeScript, and Tailwind CSS.

![TeleBoost](https://img.shields.io/badge/Version-1.0.0-green)
![Next.js](https://img.shields.io/badge/Next.js-14-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

- **Desktop Environment**: Realistic Mint-style desktop with icons, taskbar, and windows
- **Window Management**: Draggable, minimizable, maximizable, closable windows
- **Start Menu**: Searchable application launcher with categories
- **Terminal**: Fake terminal with portfolio commands (help, about, projects, skills, contact)
- **Mobile Responsive**: OS Launcher view on mobile devices
- **Persistent Settings**: Wallpaper and sound preferences saved to localStorage
- **Portfolio Content**: About, Projects, Skills, Contact, Resume windows

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/teleboost.git
cd teleboost

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy with Git

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign up
3. Click "Add New Project" → Import from GitHub
4. Select your repository
5. Click "Deploy"

Your site will be live at `https://teleboost.vercel.app`

## 🎨 Customization

### Edit Personal Information

Edit `data/portfolio.ts`:

```typescript
export const portfolio = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  email: 'your@email.com',
  // ... more fields
};
```

### Edit Projects

In `data/portfolio.ts`, modify the `projects` array:

```typescript
export const projects = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'Description...',
    techStack: ['React', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://...',
    featured: true,
  },
  // Add more projects
];
```

### Edit Skills

In `data/portfolio.ts`, modify the `skills` array:

```typescript
export const skills = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  // Add more skills
];
```

### Add Custom Wallpapers

In `data/portfolio.ts`, add to `wallpapers` array:

```typescript
{
  id: 'custom',
  name: 'Custom Wallpaper',
  gradient: 'linear-gradient(135deg, #color1, #color2)',
}
```

### Change Social Links

In `data/portfolio.ts`, modify `socialLinks`:

```typescript
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/...', icon: '🐙' },
  // Add more links
];
```

## 🧩 Project Structure

```
teleboost/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx        # Main page
├── components/
│   ├── apps/           # Window content components
│   ├── desktop/        # Desktop and icons
│   ├── mobile/         # Mobile launcher
│   ├── start-menu/     # Start menu
│   ├── taskbar/        # Taskbar
│   ├── ui/             # Reusable UI (Icon)
│   └── windows/        # Window component
├── data/
│   └── portfolio.ts     # Portfolio data
├── hooks/
│   ├── useLocalStorage.ts
│   ├── useStartMenu.ts
│   └── useWindowManager.ts
├── types/
│   └── index.ts        # TypeScript types
├── public/
│   └── resume.pdf      # Resume file
└── package.json
```

## ⌨️ Terminal Commands

When you open the Terminal app, you can use these commands:

| Command | Description |
|---------|-------------|
| `help` | Show available commands |
| `about` | Display bio |
| `projects` | List projects |
| `skills` | Show skills |
| `contact` | Show contact info |
| `whoami` | Display current user |
| `clear` | Clear terminal |
| `date` | Show current date |
| `echo [text]` | Echo text |
| `welcome` | Show welcome message |

## 🎯 Key Features

- **Smooth Animations**: Windows open/close with scale and fade animations
- **Keyboard Navigation**: Use Escape to close start menu, Super key to toggle
- **Z-Index Management**: Clicking a window brings it to front
- **Responsive Design**: Desktop and mobile layouts
- **Sound Toggle**: Enable/disable click sounds in settings
- **Watermark**: Subtle "TeleBoost OS Portfolio" in corner

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Inspired by Linux Mint UI
- Built with Next.js and Tailwind CSS
- Icons from custom SVG paths

