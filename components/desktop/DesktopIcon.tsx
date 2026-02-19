'use client';

import React, { useState } from 'react';
import { Icon } from './ui/Icon';

interface DesktopIconProps {
  id: string;
  label: string;
  icon: string;
  onDoubleClick: () => void;
}

export function DesktopIcon({ id, label, icon, onDoubleClick }: DesktopIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center gap-1 p-2 rounded-lg cursor-pointer transition-all duration-150 w-20
        ${isHovered ? 'bg-white/10' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={onDoubleClick}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-mint-500/20 to-mint-600/10 border border-mint-500/30 shadow-lg">
        <Icon name={icon} size={28} className="text-mint-400" />
      </div>
      <span className="text-xs text-white text-center leading-tight drop-shadow-md line-clamp-2">
        {label}
      </span>
    </div>
  );
}

export default DesktopIcon;

