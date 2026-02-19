'use client';

import React from 'react';
import { Icon } from './ui/Icon';
import { portfolio } from '@/data/portfolio';

export function AboutWindow() {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="flex flex-col items-center mb-6">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-mint-500 to-mint-600 flex items-center justify-center mb-4 shadow-lg">
          <span className="text-5xl text-white font-bold">
            {portfolio.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        {/* Name & Title */}
        <h1 className="text-2xl font-bold text-white mb-1">{portfolio.name}</h1>
        <p className="text-mint-400 font-medium mb-4">{portfolio.title}</p>
        
        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
          <Icon name="map-pin" size={14} />
          <span>{portfolio.location}</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-mint-500 hover:bg-mint-600 text-white rounded-lg font-medium transition-colors">
            <Icon name="download" size={16} />
            Download CV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors border border-white/20">
            <Icon name="mail" size={16} />
            Hire Me
          </button>
        </div>
      </div>
      
      {/* Bio */}
      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Icon name="user" size={18} className="text-mint-400" />
          About Me
        </h2>
        <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
          {portfolio.bio}
        </div>
      </div>
      
      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
            <Icon name="mail" size={12} />
            Email
          </div>
          <div className="text-white text-sm truncate">{portfolio.email}</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
            <Icon name="phone" size={12} />
            Phone
          </div>
          <div className="text-white text-sm">{portfolio.phone}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutWindow;

