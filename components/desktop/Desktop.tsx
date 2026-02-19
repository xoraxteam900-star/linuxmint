'use client';

import React from 'react';
import { DesktopIcon } from './DesktopIcon';
import { desktopIcons } from '@/data/portfolio';

interface DesktopProps {
  onOpenWindow: (id: string) => void;
  backgroundGradient: string;
}

export function Desktop({ onOpenWindow, backgroundGradient }: DesktopProps) {
  return (
    <div
      className="fixed inset-0 pt-0 pb-11 px-2 overflow-hidden"
      style={{ background: backgroundGradient }}
    >
      {/* Desktop Icons Grid */}
      <div className="flex flex-wrap content-start gap-1 pt-2 h-full">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            icon={icon.icon}
            onDoubleClick={() => onOpenWindow(icon.id)}
          />
        ))}
      </div>
      
      {/* Watermark */}
      <div className="absolute bottom-14 right-3 text-xs text-white/20 pointer-events-none select-none">
        TeleBoost OS Portfolio
      </div>
    </div>
  );
}

export default Desktop;

