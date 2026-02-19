'use client';

import React from 'react';
import { Icon } from './ui/Icon';
import { portfolio, skills } from '@/data/portfolio';

export function ResumeWindow() {
  return (
    <div className="p-5 h-full overflow-y-auto bg-white text-gray-800">
      {/* Header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-2xl font-bold">{portfolio.name}</h1>
        <p className="text-lg text-gray-600">{portfolio.title}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Icon name="mail" size={14} />
            {portfolio.email}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="phone" size={14} />
            {portfolio.phone}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="map-pin" size={14} />
            {portfolio.location}
          </span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
        <p className="text-sm leading-relaxed">{portfolio.bio}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">WORK EXPERIENCE</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold">Senior Full Stack Developer</h3>
            <span className="text-sm text-gray-600">2021 - Present</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">Tech Innovations Inc.</p>
          <ul className="text-sm list-disc list-inside text-gray-700">
            <li>Led development of microservices architecture serving 100K+ users</li>
            <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold">Full Stack Developer</h3>
            <span className="text-sm text-gray-600">2019 - 2021</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">StartupXYZ</p>
          <ul className="text-sm list-disc list-inside text-gray-700">
            <li>Built responsive web applications using React and Node.js</li>
            <li>Integrated third-party APIs and payment systems</li>
            <li>Collaborated with UX team to improve user experience</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold">Junior Web Developer</h3>
            <span className="text-sm text-gray-600">2017 - 2019</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">WebAgency Co.</p>
          <ul className="text-sm list-disc list-inside text-gray-700">
            <li>Developed and maintained client websites</li>
            <li>Fixed bugs and optimized website performance</li>
            <li>Worked with design team to implement mockups</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">SKILLS</h2>
        <div className="grid grid-cols-2 gap-2">
          {skills.slice(0, 12).map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 text-sm">
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
            <span className="text-sm text-gray-600">2013 - 2017</span>
          </div>
          <p className="text-sm text-gray-600">University of Technology</p>
        </div>
      </section>

      {/* Download Button */}
      <div className="flex justify-center pt-4 border-t">
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
          <Icon name="download" size={18} />
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default ResumeWindow;

