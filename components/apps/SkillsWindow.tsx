'use client';

import React from 'react';
import { Icon } from './ui/Icon';
import { skills } from '@/data/portfolio';

const categoryLabels: Record<string, { label: string; color: string }> = {
  frontend: { label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  backend: { label: 'Backend', color: 'from-green-500 to-emerald-500' },
  tools: { label: 'Tools', color: 'from-purple-500 to-pink-500' },
  other: { label: 'Other', color: 'from-orange-500 to-red-500' },
};

export function SkillsWindow() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="p-5 h-full overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">My Technical Skills</h2>
        <p className="text-gray-400 text-sm">
          A collection of technologies and tools I work with
        </p>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${categoryLabels[category]?.color || 'from-gray-500 to-gray-600'} flex items-center justify-center`}>
                <Icon 
                  name={category === 'frontend' ? 'code' : category === 'backend' ? 'database' : category === 'tools' ? 'settings' : 'star'} 
                  size={16} 
                  className="text-white" 
                />
              </div>
              <h3 className="text-white font-semibold">
                {categoryLabels[category]?.label || category}
              </h3>
              <span className="text-gray-500 text-sm ml-auto">
                {categorySkills.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-mint-500/50 transition-all group"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(categoryLabels).map(([key, { label, color }]) => (
          <div key={key} className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
            <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
              <Icon 
                name={key === 'frontend' ? 'code' : key === 'backend' ? 'database' : key === 'tools' ? 'settings' : 'star'} 
                size={20} 
                className="text-white" 
              />
            </div>
            <div className="text-white font-medium text-sm">{label}</div>
            <div className="text-gray-500 text-xs">
              {groupedSkills[key]?.length || 0} skills
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsWindow;

