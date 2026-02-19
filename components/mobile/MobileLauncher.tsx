'use client';

import React from 'react';
import { Icon } from './ui/Icon';
import { desktopIcons } from '@/data/portfolio';

interface MobileLauncherProps {
  onOpenWindow: (id: string) => void;
  backgroundGradient: string;
}

export function MobileLauncher({ onOpenWindow, backgroundGradient }: MobileLauncherProps) {
  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ background: backgroundGradient }}
    >
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold text-white mb-1">TeleBoost</h1>
        <p className="text-mint-400 text-sm">Portfolio OS</p>
      </div>

      {/* App Grid */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          {desktopIcons.map((icon) => (
            <button
              key={icon.id}
              onClick={() => onOpenWindow(icon.id)}
              className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-mint-500/30 to-mint-600/10 border border-mint-500/30 shadow-lg">
                <Icon name={icon.icon} size={28} className="text-mint-400" />
              </div>
              <span className="text-xs text-white text-center leading-tight">
                {icon.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/30 text-xs">Tap an app to open</p>
      </div>

      {/* Watermark */}
      <div className="absolute top-4 right-4 text-xs text-white/20 pointer-events-none">
        TeleBoost OS Portfolio
      </div>
    </div>
  );
}

export default MobileLauncher;

