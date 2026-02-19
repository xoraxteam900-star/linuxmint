'use client';

import { useState, useCallback, useEffect } from 'react';
import { WindowState } from '@/types';

const INITIAL_WINDOWS: WindowState[] = [
  {
    id: 'about',
    title: 'About Me',
    icon: 'user',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 100, y: 50 },
    size: { width: 600, height: 500 },
    zIndex: 1,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: 'folder',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 120, y: 70 },
    size: { width: 800, height: 600 },
    zIndex: 2,
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: 'code',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 140, y: 90 },
    size: { width: 700, height: 550 },
    zIndex: 3,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: 'mail',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 160, y: 110 },
    size: { width: 500, height: 600 },
    zIndex: 4,
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: 'terminal',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 180, y: 130 },
    size: { width: 600, height: 400 },
    zIndex: 5,
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'settings',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 200, y: 150 },
    size: { width: 550, height: 500 },
    zIndex: 6,
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: 'file-text',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 220, y: 170 },
    size: { width: 700, height: 800 },
    zIndex: 7,
  },
];

let globalZIndex = 10;

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowState[]>(INITIAL_WINDOWS);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const openWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          globalZIndex += 1;
          return {
            ...win,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: globalZIndex,
          };
        }
        return win;
      })
    );
    setActiveWindow(windowId);
  }, []);

  const closeWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          return { ...win, isOpen: false, isMinimized: false };
        }
        return win;
      })
    );
    setActiveWindow((prev) => (prev === windowId ? null : prev));
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          return { ...win, isMinimized: true };
        }
        return win;
      })
    );
    setActiveWindow(null);
  }, []);

  const maximizeWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          return { ...win, isMaximized: !win.isMaximized };
        }
        return win;
      })
    );
  }, []);

  const restoreWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          globalZIndex += 1;
          return {
            ...win,
            isMinimized: false,
            zIndex: globalZIndex,
          };
        }
        return win;
      })
    );
    setActiveWindow(windowId);
  }, []);

  const focusWindow = useCallback((windowId: string) => {
    globalZIndex += 1;
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          return { ...win, zIndex: globalZIndex, isMinimized: false };
        }
        return win;
      })
    );
    setActiveWindow(windowId);
  }, []);

  const updateWindowPosition = useCallback((windowId: string, position: { x: number; y: number }) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          return { ...win, position };
        }
        return win;
      })
    );
  }, []);

  const getOpenWindows = useCallback(() => {
    return windows.filter((win) => win.isOpen || win.isMinimized);
  }, [windows]);

  const getWindowById = useCallback((id: string) => {
    return windows.find((win) => win.id === id);
  }, [windows]);

  return {
    windows,
    activeWindow,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    focusWindow,
    updateWindowPosition,
    getOpenWindows,
    getWindowById,
  };
}

