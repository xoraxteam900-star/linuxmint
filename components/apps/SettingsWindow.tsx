'use client';

import React from 'react';
import { Icon } from './ui/Icon';
import { wallpapers } from '@/data/portfolio';

interface SettingsWindowProps {
  currentWallpaper: string;
  onWallpaperChange: (wallpaperId: string) => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
}

export function SettingsWindow({ 
  currentWallpaper, 
  onWallpaperChange, 
  soundEnabled, 
  onSoundToggle 
}: SettingsWindowProps) {
  const currentWallpaperData = wallpapers.find(w => w.id === currentWallpaper) || wallpapers[0];

  return (
    <div className="p-5 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <Icon name="settings" size={18} className="text-mint-400" />
        System Settings
      </h2>

      {/* Wallpaper Section */}
      <div className="mb-8">
        <h3 className="text-white font-medium mb-4 flex items-center gap-2">
          <Icon name="image" size={16} className="text-gray-400" />
          Wallpaper
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {wallpapers.map((wallpaper) => (
            <button
              key={wallpaper.id}
              onClick={() => onWallpaperChange(wallpaper.id)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                currentWallpaper === wallpaper.id 
                  ? 'border-mint-500 scale-105' 
                  : 'border-transparent hover:border-white/30'
              }`}
            >
              <div
                className="h-24 w-full"
                style={{ background: wallpaper.gradient }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-white text-sm font-medium">{wallpaper.name}</span>
              </div>
              {currentWallpaper === wallpaper.id && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-mint-500 rounded-full flex items-center justify-center">
                  <Icon name="check" size={12} className="text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sound Section */}
      <div className="mb-8">
        <h3 className="text-white font-medium mb-4 flex items-center gap-2">
          <Icon name="volume" size={16} className="text-gray-400" />
          Sound
        </h3>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-mint-500/20 flex items-center justify-center">
                <Icon 
                  name={soundEnabled ? 'volume' : 'volume-x'} 
                  size={18} 
                  className={soundEnabled ? 'text-mint-400' : 'text-gray-500'} 
                />
              </div>
              <div>
                <p className="text-white font-medium">System Sounds</p>
                <p className="text-gray-400 text-xs">
                  {soundEnabled ? 'Enabled' : 'Disabled'}
                </p>
              </div>
            </div>
            <button
              onClick={onSoundToggle}
              className={`w-12 h-6 rounded-full transition-colors ${
                soundEnabled ? 'bg-mint-500' : 'bg-gray-600'
              }`}
            >
              <div 
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                  soundEnabled ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <h3 className="text-white font-medium mb-4 flex items-center gap-2">
          <Icon name="info" size={16} className="text-gray-400" />
          About
        </h3>
        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-mint-500 to-mint-600 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">TB</span>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">TeleBoost OS</h4>
              <p className="text-gray-400 text-sm">Portfolio Edition v1.0</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            A unique portfolio website designed to look and feel like a desktop operating system.
            Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Icon name="heart" size={12} className="text-red-500" />
            <span>Made with passion</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsWindow;

