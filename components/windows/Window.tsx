'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Icon } from './ui/Icon';
import { WindowState } from '@/types';

interface WindowProps {
  window: WindowState;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onFocus: (id: string) => void;
  children: React.ReactNode;
}

export function Window({
  window: win,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
}: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [localPosition, setLocalPosition] = useState(win.position);

  useEffect(() => {
    setLocalPosition(win.position);
  }, [win.position]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    
    onFocus(win.id);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - localPosition.x,
      y: e.clientY - localPosition.y,
    });
  }, [win.id, localPosition, onFocus]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (win.isMaximized) return;
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      setLocalPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, win.isMaximized]);

  if (!win.isOpen && !win.isMinimized) return null;

  return (
    <div
      ref={windowRef}
      className={`absolute flex flex-col rounded-lg overflow-hidden shadow-2xl transition-all duration-200
        ${win.isMaximized ? 'inset-0 rounded-none' : ''}
        ${win.isMinimized ? 'scale-90 opacity-0 pointer-events-none' : 'animate-window-open'}
        bg-window-bg`}
      style={{
        left: win.isMaximized ? 0 : localPosition.x,
        top: win.isMaximized ? 0 : localPosition.y,
        width: win.isMaximized ? '100%' : win.size.width,
        height: win.isMaximized ? 'calc(100% - 46px)' : win.size.height,
        zIndex: win.zIndex,
      }}
      onClick={() => onFocus(win.id)}
    >
      {/* Title Bar */}
      <div
        className={`window-header flex items-center justify-between h-9 px-3 cursor-default select-none
          ${win.zIndex === Math.max(...[win.zIndex]) ? 'bg-window-titleActive' : 'bg-window-title'}`}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <Icon name={win.icon} size={16} className="text-mint-500" />
          <span className="text-sm text-gray-200 font-medium">{win.title}</span>
        </div>
        
        <div className="window-controls flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize(win.id);
            }}
            className="w-8 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
          >
            <Icon name="minus" size={12} className="text-yellow-400" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMaximize(win.id);
            }}
            className="w-8 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
          >
            <Icon name={win.isMaximized ? 'restore' : 'maximize'} size={10} className="text-green-400" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(win.id);
            }}
            className="w-8 h-6 flex items-center justify-center rounded hover:bg-red-500/80 transition-colors group"
          >
            <Icon name="x" size={12} className="text-red-500 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-window-bg">
        {children}
      </div>
    </div>
  );
}

export default Window;

