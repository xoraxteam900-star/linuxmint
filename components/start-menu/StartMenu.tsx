'use client';

import React from 'react';
import { Icon } from './ui/Icon';
import { useStartMenu } from '@/hooks/useStartMenu';
import { apps, categories } from '@/data/portfolio';

interface StartMenuProps {
  onOpenWindow: (id: string) => void;
  onClose: () => void;
}

export function StartMenu({ onOpenWindow, onClose }: StartMenuProps) {
  const { isOpen, searchQuery, setSearchQuery, menuRef } = useStartMenu();

  const filteredApps = apps.filter(
    (app) =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[580px] h-[420px] bg-gradient-to-b from-[#1e3a2f]/95 to-[#0f1f18]/95 
        backdrop-blur-md rounded-t-xl shadow-2xl border border-white/10 overflow-hidden animate-menu-slide z-50"
    >
      {/* Search Bar */}
      <div className="p-4 border-b border-white/10">
        <div className="relative">
          <Icon
            name="search"
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-sm text-white 
              placeholder-gray-400 focus:outline-none focus:border-mint-500 focus:bg-white/15 transition-all"
            autoFocus
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[calc(100%-60px)]">
        {/* Pinned Apps */}
        <div className="w-[45%] p-4 border-r border-white/10 overflow-y-auto">
          <h3 className="text-xs font-medium text-gray-400 uppercase mb-3">
            {searchQuery ? 'Search Results' : 'Pinned Apps'}
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {(searchQuery ? filteredApps : apps).map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  onOpenWindow(app.id);
                  onClose();
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-mint-500/30 to-mint-600/10 
                  group-hover:from-mint-500/50 group-hover:to-mint-600/30 transition-all">
                  <Icon name={app.icon} size={20} className="text-mint-400" />
                </div>
                <span className="text-xs text-gray-200 text-center">{app.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="text-xs font-medium text-gray-400 uppercase mb-3">Categories</h3>
          <div className="space-y-1">
            {(searchQuery ? filteredCategories : categories).map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  if (category.apps.length > 0) {
                    onOpenWindow(category.apps[0]);
                    onClose();
                  }
                }}
                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5">
                  <Icon name={category.icon} size={16} className="text-gray-300" />
                </div>
                <span className="text-sm text-gray-200">{category.name}</span>
                {category.apps.length > 0 && (
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="ml-auto text-gray-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartMenu;

