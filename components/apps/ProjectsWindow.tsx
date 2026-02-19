'use client';

import React from 'react';
import Icon from '../ui/Icon';
import { projects } from '@/data/portfolio';

export function ProjectsWindow() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="p-5 h-full overflow-y-auto">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Icon name="star" size={18} className="text-yellow-500" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-mint-500/50 transition-all group"
              >
                {/* Thumbnail */}
                <div className="h-36 bg-gradient-to-br from-mint-500/20 to-purple-500/20 flex items-center justify-center relative">
                  <Icon name="folder-open" size={48} className="text-mint-500/50" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-mint-500 rounded-lg hover:bg-mint-600 transition-colors"
                    >
                      <Icon name="external-link" size={18} className="text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Icon name="github" size={18} className="text-white" />
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-mint-500/20 text-mint-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 bg-white/10 text-gray-400 text-xs rounded-full">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Icon name="folder" size={18} className="text-mint-400" />
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-mint-500/50 transition-all group"
              >
                <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-mint-500/10 text-mint-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-mint-400 hover:text-mint-300 transition-colors"
                  >
                    <Icon name="external-link" size={12} />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon name="github" size={12} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsWindow;

