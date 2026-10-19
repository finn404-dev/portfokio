import React, { useState } from 'react';
import {
  Code,
  Database,
  Server,
  Layers,
  Cpu,
  Zap,
  CheckCircle2,
  Terminal,
  Boxes,
  Sparkles
} from 'lucide-react';

export default function Toolbox() {
  const [activeCategory, setActiveCategory] = useState('all');

  const tools = [
    {
      id: 'php',
      name: 'PHP',
      category: 'backend',
      icon: '🐘',
      proficiency: 90,
      experience: '2 Years',
      description: 'Robust server-side scripting, OOP architecture, RESTful API development, and modern backend logic.',
      highlights: ['Modern PHP 8.x Features', 'Custom APIs & Microservices', 'Security & Middleware'],
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'laravel',
      name: 'Laravel',
      category: 'backend',
      icon: '🔥',
      proficiency: 92,
      experience: '2 Years',
      description: 'Full-stack framework mastery including Eloquent ORM, Artisan, Blade, Queue Workers, and Authentication.',
      highlights: ['Eloquent ORM & Migrations', 'REST API Architecture', 'Inertia.js & Blade Templating'],
      gradient: 'from-red-500 to-rose-600',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'backend',
      icon: '🐍',
      proficiency: 85,
      experience: '2 Years',
      description: 'Automation scripts, web scraping, backend APIs (FastAPI/Flask), data processing, and AI integrations.',
      highlights: ['FastAPI / Flask Backend', 'Automated Web Scraping', 'Data Wrangling & Scripts'],
      gradient: 'from-amber-400 to-blue-500',
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      icon: '⚡',
      proficiency: 95,
      experience: '2 Years',
      description: 'Deep understanding of async JS, Event Loop, DOM manipulation, promises, modules, and modern web standards.',
      highlights: ['Async / Promises / Fetch', 'ES6+ Functional Patterns', 'Performance Optimization'],
      gradient: 'from-yellow-400 to-amber-500',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'backend',
      icon: '🟢',
      proficiency: 88,
      experience: '2 Years',
      description: 'Scalable event-driven backend services with Express.js, WebSockets, real-time messaging, and NPM workflows.',
      highlights: ['Express.js & REST APIs', 'WebSockets / Socket.io', 'JWT Auth & Security'],
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'react',
      name: 'React',
      category: 'frontend',
      icon: '⚛️',
      proficiency: 92,
      experience: '2 Years',
      description: 'Component architecture, Hooks, Context API, state management, SPA optimization, and smooth UI animations.',
      highlights: ['Custom Hooks & State', 'Vite / Next.js Ecosystem', 'Tailwind & Motion Design'],
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'database',
      icon: '🐬',
      proficiency: 88,
      experience: '2 Years',
      description: 'Relational database schema design, index optimization, complex SQL queries, transactions, and triggers.',
      highlights: ['Schema Design & Indexing', 'Complex Joins & Aggregations', 'Database Backups & Security'],
      gradient: 'from-blue-500 to-sky-600',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Tools', icon: Boxes },
    { id: 'backend', label: 'Backend & Server', icon: Server },
    { id: 'frontend', label: 'Frontend UI', icon: Code },
    { id: 'database', label: 'Database & SQL', icon: Database },
  ];

  const filteredTools = activeCategory === 'all'
    ? tools
    : tools.filter((tool) => tool.category === activeCategory);

  return (
    <section id="toolbox" className="py-24 relative z-10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Developer Toolbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tech Stack & Expertise
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive suite of technologies I've honed over 2 years to build responsive, robust, and lightning-fast web experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.gradient}`} />

              <div>
                {/* Header info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400">
                        {tool.experience} Hands-on
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    {tool.proficiency}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${tool.gradient} transition-all duration-1000`}
                    style={{ width: `${tool.proficiency}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                {tool.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
