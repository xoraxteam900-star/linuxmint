'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from './ui/Icon';
import { WindowState } from '@/types';

interface TaskbarProps {
  windows: WindowState[];
  activeWindow: string | null;
  onToggleStartMenu: () => void;
  onFocusWindow: (id: string) => void;
  onMinimizeWindow: (id: string) => void;
}

export function Taskbar({
  windows,
  activeWindow,
  onToggleStartMenu,
  onFocusWindow,
  onMinimizeWindow,
}: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const openWindows = windows.filter((w) => w.isOpen || w.isMinimized);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-11 bg-gradient-to-r from-[#1e3a2f] to-[#0f1f18] border-t border-white/10 z-[100]">
      <div className="flex items-center justify-between h-full px-3">
        {/* Left - Menu Button */}
        <button
          id="menu-button"
          onClick={onToggleStartMenu}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <div className="w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <defs>
                <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B894" />
                  <stop offset="100%" stopColor="#00A884" />
                </linearGradient>
              </defs>
              <rect x="3" y="6" width="18" height="3" rx="1" fill="url(#mintGrad)" />
              <rect x="3" y="10.5" width="18" height="3" rx="1" fill="url(#mintGrad)" />
              <rect x="3" y="15" width="18" height="3" rx="1" fill="url(#mintGrad)" />
            </svg>
          </div>
          <span className="text-sm font-medium text-white/80">Menu</span>
        </button>

        {/* Middle - Window Tabs */}
        <div className="flex-1 flex items-center justify-center gap-1 mx-4">
          {openWindows.map((win) => (
            <button
              key={win.id}
              onClick={() => {
                if (win.isMinimized) {
                  onFocusWindow(win.id);
                } else if (activeWindow === win.id) {
                  onMinimizeWindow(win.id);
                } else {
                  onFocusWindow(win.id);
                }
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all max-w-[160px] group
                ${activeWindow === win.id && !win.isMinimized
                  ? 'bg-white/15 border border-white/20'
                  : 'hover:bg-white/10'
                }`}
            >
              <Icon
                name={win.icon}
                size={14}
                className={`${activeWindow === win.id && !win.isMinimized ? 'text-mint-400' : 'text-gray-400'}`}
              />
              <span className={`text-xs truncate ${activeWindow === win.id && !win.isMinimized ? 'text-white' : 'text-gray-300'}`}>
                {win.title}
              </span>
              {win.isMinimized && (
                <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
              )}
            </button>
          ))}
        </div>

        {/* Right - System Tray */}
        <div className="flex items-center gap-3">
          {/* Wifi */}
          <div className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-default">
            <Icon name="wifi" size={16} className="text-gray-300" />
          </div>

          {/* Volume */}
          <div className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-default">
            <Icon name="volume" size={16} className="text-gray-300" />
          </div>

          {/* Battery */}
          <div className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-default flex items-center gap-1">
            <Icon name="battery" size={16} className="text-gray-300" />
            <span className="text-xs text-gray-300">100%</span>
          </div>

          {/* Clock */}
          <div className="flex flex-col items-end px-2 py-1 hover:bg-white/10 rounded transition-colors cursor-default">
            <span className="text-xs text-white font-medium">{formatTime(currentTime)}</span>
            <span className="text-[10px] text-gray-400">{formatDate(currentTime)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskbar;

