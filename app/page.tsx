'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Desktop } from '@/components/desktop/Desktop';
import { Taskbar } from '@/components/taskbar/Taskbar';
import { StartMenu } from '@/components/start-menu/StartMenu';
import { Window } from '@/components/windows/Window';
import { MobileLauncher } from '@/components/mobile/MobileLauncher';
import { AboutWindow } from '@/components/apps/AboutWindow';
import { ProjectsWindow } from '@/components/apps/ProjectsWindow';
import { SkillsWindow } from '@/components/apps/SkillsWindow';
import { ContactWindow } from '@/components/apps/ContactWindow';
import { TerminalWindow } from '@/components/apps/TerminalWindow';
import { SettingsWindow } from '@/components/apps/SettingsWindow';
import { ResumeWindow } from '@/components/apps/ResumeWindow';
import { useWindowManager } from '@/hooks/useWindowManager';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { wallpapers } from '@/data/portfolio';

function AppContent() {
  const {
    windows,
    activeWindow,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    focusWindow,
  } = useWindowManager();

  const [wallpaper, setWallpaper] = useLocalStorage('teleboost-wallpaper', 'mint');
  const [soundEnabled, setSoundEnabled] = useLocalStorage('teleboost-sound', true);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileLauncher, setIsMobileLauncher] = useState(true);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Super key / Windows key
      if (e.key === 'Meta' || (e.key === 'Alt' && e.code === 'Space')) {
        e.preventDefault();
        setIsStartMenuOpen((prev) => !prev);
      }
      // Escape to close start menu
      if (e.key === 'Escape' && isStartMenuOpen) {
        setIsStartMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isStartMenuOpen]);

  const handleOpenWindow = useCallback((windowId: string) => {
    // Handle special case for trash - just show an alert
    if (windowId === 'trash') {
      alert('Recycle Bin is empty 🗑️');
      return;
    }
    openWindow(windowId);
    setIsStartMenuOpen(false);
    if (isMobile) {
      setIsMobileLauncher(false);
    }
  }, [openWindow, isMobile]);

  const handleWallpaperChange = useCallback((newWallpaperId: string) => {
    setWallpaper(newWallpaperId);
  }, [setWallpaper]);

  const handleSoundToggle = useCallback(() => {
    setSoundEnabled((prev: boolean) => !prev);
  }, [setSoundEnabled]);

  const currentWallpaper = wallpapers.find((w) => w.id === wallpaper) || wallpapers[0];

  const renderWindowContent = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return <AboutWindow />;
      case 'projects':
        return <ProjectsWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'terminal':
        return <TerminalWindow />;
      case 'settings':
        return (
          <SettingsWindow
            currentWallpaper={wallpaper}
            onWallpaperChange={handleWallpaperChange}
            soundEnabled={soundEnabled}
            onSoundToggle={handleSoundToggle}
          />
        );
      case 'resume':
        return <ResumeWindow />;
      default:
        return null;
    }
  };

  // Mobile view with launcher
  if (isMobile) {
    return (
      <>
        {isMobileLauncher ? (
          <MobileLauncher
            onOpenWindow={handleOpenWindow}
            backgroundGradient={currentWallpaper.gradient}
          />
        ) : (
          <>
            {/* Mobile full-screen window */}
            {windows
              .filter((w) => w.isOpen && !w.isMinimized)
              .map((win) => (
                <Window
                  key={win.id}
                  window={win}
                  onClose={(id) => {
                    closeWindow(id);
                    setIsMobileLauncher(true);
                  }}
                  onMinimize={minimizeWindow}
                  onMaximize={maximizeWindow}
                  onFocus={focusWindow}
                >
                  {renderWindowContent(win.id)}
                </Window>
              ))}
            
            {/* Back button to launcher */}
            <button
              onClick={() => {
                // Close all windows when going back to launcher
                windows.forEach((w) => {
                  if (w.isOpen) closeWindow(w.id);
                });
                setIsMobileLauncher(true);
              }}
              className="fixed top-4 left-4 z-[100] p-3 bg-white/10 rounded-full backdrop-blur-md"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          </>
        )}
      </>
    );
  }

  // Desktop view
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Desktop */}
      <Desktop
        onOpenWindow={handleOpenWindow}
        backgroundGradient={currentWallpaper.gradient}
      />

      {/* Windows */}
      {windows
        .filter((w) => w.isOpen || w.isMinimized)
        .map((win) => (
          <Window
            key={win.id}
            window={win}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onMaximize={maximizeWindow}
            onFocus={focusWindow}
          >
            {renderWindowContent(win.id)}
          </Window>
        ))}

      {/* Start Menu */}
      <StartMenu
        onOpenWindow={handleOpenWindow}
        onClose={() => setIsStartMenuOpen(false)}
      />

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        activeWindow={activeWindow}
        onToggleStartMenu={() => setIsStartMenuOpen((prev) => !prev)}
        onFocusWindow={(id) => {
          const win = windows.find((w) => w.id === id);
          if (win?.isMinimized) {
            restoreWindow(id);
          } else {
            focusWindow(id);
          }
        }}
        onMinimizeWindow={minimizeWindow}
      />
    </div>
  );
}

export default function Home() {
  return <AppContent />;
}

