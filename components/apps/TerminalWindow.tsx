'use client';

import React, { useState, useRef, useEffect } from 'react';
import { portfolio, projects, skills } from '@/data/portfolio';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const commands: Record<string, () => string> = {
  help: () => `Available commands:
  about     - Learn about me
  projects  - View my projects
  skills    - See my technical skills
  contact   - Get contact information
  whoami    - Display current user
  clear     - Clear terminal
  date      - Show current date & time
  echo      - Echo text back
  welcome   - Show welcome message`,
  
  about: () => `╔══════════════════════════════════════╗
║         ${portfolio.name}          ║
║         ${portfolio.title}        ║
╚══════════════════════════════════════╝

${portfolio.bio}

Location: ${portfolio.location}
Email: ${portfolio.email}`,
  
  projects: () => {
    const projectList = projects.map((p, i) => 
      `${i + 1}. ${p.title}
   ${p.description.slice(0, 60)}...
   Tech: ${p.techStack.slice(0, 3).join(', ')}
   Live: ${p.liveUrl}
   GitHub: ${p.githubUrl}
`
    ).join('\n');
    return `📁 My Projects:\n\n${projectList}`;
  },
  
  skills: () => {
    const grouped = skills.reduce((acc, s) => {
      if (!acc[s.category]) acc[s.category] = [];
      acc[s.category].push(s.name);
      return acc;
    }, {} as Record<string, string[]>);
    
    return `🛠️ Technical Skills:

Frontend: ${grouped.frontend?.join(', ') || 'N/A'}
Backend: ${grouped.backend?.join(', ') || 'N/A'}
Tools: ${grouped.tools?.join(', ') || 'N/A'}
Other: ${grouped.other?.join(', ') || 'N/A'}

Total: ${skills.length} skills`;
  },
  
  contact: () => `📬 Contact Information:

Email: ${portfolio.email}
Phone: ${portfolio.phone}
Location: ${portfolio.location}

Feel free to reach out!`,
  
  whoami: () => 'visitor',
  
  date: () => new Date().toString(),
  
  welcome: () => `╔═══════════════════════════════════════════════════╗
║                                                           ║
║     ██╗    ██╗███████╗██╗      ██████╗  ██████╗ ██████╗     ║
║     ██║    ██║██╔════╝██║     ██╔═══██╗██╔═══██╗██╔══██╗    ║
║     ██║ █╗ ██║█████╗  ██║     ██║   ██║██║   ██║██████╔╝    ║
║     ██║███╗██║██╔══╝  ██║     ██║   ██║██║   ██║██╔══██╗    ║
║     ╚███╔███╔╝███████╗███████╗╚██████╔╝╚██████╔╝██║  ██║    ║
║      ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝    ║
║                                                           ║
║           Welcome to TeleBoost Terminal v1.0              ║
║                                                           ║
║  Type 'help' to see available commands                   ║
║  Type 'about' to learn more about me                     ║
║  Type 'projects' to view my work                         ║
║                                                           ║
╚═══════════════════════════════════════════════════╝`,
  
  clear: () => {
    return '__CLEAR__';
  },
};

export function TerminalWindow() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'TeleBoost Terminal v1.0' },
    { type: 'output', content: "Type 'help' for available commands\n" },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === '') {
      return;
    }

    // Add command to history
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    if (trimmed.startsWith('echo ')) {
      const text = cmd.slice(5);
      setLines(prev => [...prev, { type: 'output', content: text }]);
      return;
    }

    const execute = commands[trimmed];
    if (execute) {
      const output = execute();
      if (output === '__CLEAR__') {
        setLines([]);
      } else {
        setLines(prev => [...prev, { type: 'output', content: output }]);
      }
    } else {
      setLines(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${trimmed}. Type 'help' for available commands.` 
      }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const currentInput = input.trim();
      setLines(prev => [...prev, { type: 'input', content: currentInput || ' ' }]);
      handleCommand(currentInput);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
    }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple auto-complete
      const possibleCommands = Object.keys(commands);
      const matches = possibleCommands.filter(c => c.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      ref={terminalRef}
      className="h-full bg-black/95 p-4 font-mono text-sm overflow-y-auto cursor-text"
      onClick={handleTerminalClick}
    >
      {lines.map((line, i) => (
        <div key={i} className={`mb-1 whitespace-pre-wrap ${
          line.type === 'error' ? 'text-red-400' : 
          line.type === 'input' ? 'text-mint-400' : 
          'text-green-400'
        }`}>
          {line.type === 'input' && <span className="text-mint-500">$ </span>}
          {line.content}
        </div>
      ))}
      
      <div className="flex items-center">
        <span className="text-mint-500 mr-2">$ </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-white font-mono"
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default TerminalWindow;

