# TeleBoost - Linux Mint Style Portfolio

## Project Overview
- **Project Name**: TeleBoost
- **Type**: Portfolio Website (Web-based Desktop Environment)
- **Core Functionality**: A portfolio website that mimics a Linux Mint desktop environment with draggable windows, desktop icons, taskbar, and start menu
- **Target Users**: Potential employers, clients, and collaborators viewing the portfolio

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- No additional UI libraries (custom components)

## UI/UX Specification

### Layout Structure

#### Desktop Environment
- Full viewport desktop (100vw x 100vh)
- Desktop icons grid (left-aligned, wrap to next column)
- Bottom taskbar (panel) - fixed position
- Draggable windows with z-index management

#### Taskbar (Panel)
- Height: 46px
- Background: Linear gradient (dark mint to darker green)
- Border-top: 1px solid rgba(255,255,255,0.1)
- Layout:
  - Left (80px): Menu button with Mint logo
  - Middle: Window tabs (app icons + title)
  - Right: System tray (wifi, volume, battery, clock)

#### Start Menu
- Width: 580px, Height: 420px
- Position: Above taskbar, 10px margin from bottom
- Background: Dark gradient with transparency
- Border-radius: 12px 12px 0 0
- Shadow: Large soft shadow
- Layout:
  - Top: Search bar (full width with icon)
  - Left column (40%): Pinned apps grid (6 icons)
  - Right column (60%): Categories list

#### Desktop Icons
- Size: 80x90px (icon 48px + label)
- Label: White text with text-shadow, max 2 lines
- Hover: Semi-transparent background
- Double-click: Opens corresponding window

#### Windows
- Min-width: 400px, Min-height: 300px
- Border-radius: 8px
- Background: #1a1a2e (dark blue-gray)
- Title bar: 36px height with gradient
- Controls: Close (red), Minimize (yellow), Maximize (green) - macOS style
- Shadow: 0 10px 40px rgba(0,0,0,0.5)
- Draggable by title bar

### Visual Design

#### Color Palette
- **Primary Mint**: #00B894 (Mint green)
- **Primary Mint Dark**: #00A884
- **Secondary**: #2D3436 (Dark charcoal)
- **Accent**: #74B9FF (Sky blue)
- **Background Desktop**: Linear gradient #1a472a to #2d5a3f (Mint wallpaper)
- **Window Background**: #1a1a2e
- **Window Title Bar**: Linear gradient #2d2d44 to #1f1f35
- **Text Primary**: #ffffff
- **Text Secondary**: #a0a0b0
- **Taskbar Gradient**: Linear gradient #1e3a2f to #0f1f18
- **Hover State**: rgba(0, 184, 148, 0.2)
- **Close Button**: #ff5f57
- **Minimize Button**: #ffbd2e
- **Maximize Button**: #28ca41

#### Typography
- **Font Family**: 'Ubuntu', 'Segoe UI', system-ui, sans-serif
- **Window Title**: 13px, font-weight 500
- **Desktop Icon Label**: 12px
- **Start Menu Categories**: 14px
- **Window Content**: 14px, line-height 1.6

#### Spacing System
- Desktop icon padding: 8px
- Window content padding: 20px
- Taskbar padding: 0 12px
- Start menu padding: 16px

#### Visual Effects
- Window open: Scale 0.9 → 1, opacity 0 → 1, duration 200ms
- Window close: Scale 1 → 0.9, opacity 1 → 0, duration 150ms
- Start menu slide: TranslateY 20px → 0, opacity 0 → 1, duration 200ms
- Icon hover: Background fade 200ms
- Window drag: Smooth follow cursor

### Components

#### 1. Desktop Component
- Renders desktop icons
- Handles icon double-click
- Background with gradient and optional wallpaper

#### 2. Taskbar Component
- Menu button with hover effect
- Window tabs (click to focus, right-click to close)
- System tray with icons and clock
- Clock updates every second

#### 3. StartMenu Component
- Search input with filtering
- Pinned apps section
- Categories section
- Click outside to close

#### 4. Window Component
- Draggable container
- Title bar with controls
- Content area
- Minimize/Maximize/Close functionality
- Focus management (z-index)

#### 5. Desktop Icons
- About Me (user icon)
- Projects (folder icon)
- Skills (code icon)
- Contact (mail icon)
- Resume (file icon)
- Terminal (terminal icon)
- Recycle Bin (trash icon)

#### 6. Portfolio Windows

**About Window:**
- Profile avatar (placeholder circle)
- Name: "Your Name"
- Bio text (2-3 paragraphs)
- Action buttons: "Download CV", "Hire Me"

**Projects Window:**
- Grid of project cards (2-3 columns)
- Each card: thumbnail, title, description, tech stack tags, links

**Skills Window:**
- Categories: Frontend, Backend, Tools, Other
- Skill badges with icons

**Contact Window:**
- Form: Name, Email, Subject, Message
- Social links row
- Form validation

**Terminal Window:**
- Black background, green text
- Command prompt: user@teleboost:~
- Supported commands: help, about, projects, skills, contact, clear, whoami

**Settings Window:**
- Wallpaper selector
- Sound toggle
- About section

### Responsive Design

#### Mobile View (< 768px)
- "OS Launcher" style instead of desktop
- Bottom navigation or swipe to show apps
- Full-screen windows
- Simplified taskbar
- Touch-friendly icons (larger)

#### Tablet View (768px - 1024px)
- Adjusted icon sizes
- Collapsible start menu

## Functionality Specification

### Core Features

1. **Window Management**
   - Open window (double-click icon or start menu)
   - Close window (X button)
   - Minimize window (to taskbar)
   - Maximize window (fill screen)
   - Restore minimized window (click taskbar tab)
   - Focus window (click on window or taskbar tab)
   - Drag window (by title bar)
   - Z-index management (recently focused = highest)

2. **Start Menu**
   - Toggle with Menu button or Super key
   - Search filters apps and categories
   - Click outside to close

3. **Taskbar**
   - Shows all open windows
   - Click to focus/focus+minimize toggle
   - Real-time clock
   - System tray icons (decorative)

4. **Desktop Icons**
   - Double-click to open
   - Visual feedback on hover

5. **Settings Persistence (localStorage)**
   - Selected wallpaper
   - Sound enabled/disabled
   - Last open windows (optional)

6. **Terminal Commands**
   - help: Show available commands
   - about: Show brief about info
   - projects: List projects
   - skills: Show skills
   - contact: Show contact info
   - clear: Clear terminal
   - whoami: "visitor"

7. **Mobile Launcher**
   - Grid of app icons
   - Opens full-screen windows
   - Back button to return to launcher

### Data Structure

```typescript
interface Window {
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

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
```

## Acceptance Criteria

1. ✓ Desktop displays with mint gradient background
2. ✓ All 7 desktop icons visible and double-clickable
3. ✓ Taskbar shows at bottom with menu, window tabs, clock
4. ✓ Start menu opens with search, pinned apps, categories
5. ✓ Windows open, close, minimize, maximize, drag correctly
6. ✓ About window shows profile and action buttons
7. ✓ Projects window shows project cards with links
8. ✓ Skills window displays categorized skills
9. ✓ Contact window has working form with validation
10. ✓ Terminal accepts commands and shows output
11. ✓ Settings allows wallpaper change and sound toggle
12. ✓ Mobile shows launcher view with app grid
13. ✓ localStorage persists settings
14. ✓ Smooth animations on all interactions
15. ✓ Watermark "TeleBoost OS Portfolio" visible in corner

## File Structure

```
teleboost/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── fonts.ts
├── components/
│   ├── desktop/
│   │   ├── Desktop.tsx
│   │   ├── DesktopIcon.tsx
│   │   └── Wallpaper.tsx
│   ├── taskbar/
│   │   ├── Taskbar.tsx
│   │   ├── TaskbarItem.tsx
│   │   └── SystemTray.tsx
│   ├── start-menu/
│   │   └── StartMenu.tsx
│   ├── windows/
│   │   ├── Window.tsx
│   │   ├── WindowHeader.tsx
│   │   └── WindowContent.tsx
│   ├── apps/
│   │   ├── AboutWindow.tsx
│   │   ├── ProjectsWindow.tsx
│   │   ├── SkillsWindow.tsx
│   │   ├── ContactWindow.tsx
│   │   ├── TerminalWindow.tsx
│   │   ├── SettingsWindow.tsx
│   │   └── ResumeWindow.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Card.tsx
├── hooks/
│   ├── useWindowManager.ts
│   ├── useStartMenu.ts
│   └── useLocalStorage.ts
├── data/
│   └── portfolio.ts
├── types/
│   └── index.ts
├── public/
│   ├── resume.pdf
│   └── sounds/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

