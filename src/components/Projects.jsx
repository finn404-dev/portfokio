import React, { useState } from 'react';
import {
  ExternalLink,
  Code2,
  FolderGit2,
  Layers,
  Sparkles,
  X,
  CheckCircle,
  Database,
  Terminal,
  Play,
  GitBranch
} from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'laravel-ecommerce',
      title: 'VibeCart — Modern E-Commerce Platform',
      category: 'Full Stack',
      badge: 'PHP / Laravel + React',
      summary: 'High-performance e-commerce engine with real-time inventory management, custom PHP Laravel REST APIs, and a sleek React UI.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
      tags: ['Laravel', 'PHP', 'React', 'MySQL', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://github.com/saolyhour',
      githubUrl: 'https://github.com/saolyhour',
      features: [
        'Secure JWT & Laravel Sanctum authentication',
        'Complex MySQL database schema with indexed search',
        'Stripe payment gateway integration simulation',
        'Optimized administrative dashboard with live analytics'
      ],
      codeSnippet: `// Laravel Controller Example
public function processOrder(Request $request) {
    $validated = $request->validate([
        'cart' => 'required|array',
        'total' => 'required|numeric'
    ]);

    DB::transaction(function() use ($validated) {
        $order = Order::create(['status' => 'paid', 'total' => $validated['total']]);
        return response()->json(['success' => true, 'order_id' => $order->id]);
    });
}`
    },
    {
      id: 'task-flow-node',
      title: 'FlowSync — Real-time Task & Sprint Manager',
      category: 'Node.js & React',
      badge: 'Node.js + React + Socket.io',
      summary: 'Collaborative project management board featuring real-time WebSocket sync, automated task triggers, and drag-and-drop Kanban UI.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
      tags: ['Node.js', 'Express', 'React', 'JavaScript', 'MySQL', 'WebSockets'],
      liveUrl: 'https://github.com/saolyhour',
      githubUrl: 'https://github.com/saolyhour',
      features: [
        'WebSocket multi-user instant board sync',
        'Node.js microservice architecture',
        'Custom drag-and-drop Kanban interface in React',
        'Automated activity log generation'
      ],
      codeSnippet: `// Express + Socket.io Backend
io.on('connection', (socket) => {
  socket.on('task:move', (data) => {
    socket.broadcast.emit('task:updated', data);
    db.query('UPDATE tasks SET status = ? WHERE id = ?', [data.status, data.id]);
  });
});`
    },
    {
      id: 'python-scraper-ai',
      title: 'PyScrape AI — Market Intelligence Scraper',
      category: 'Python Automation',
      badge: 'Python + MySQL + FastAPI',
      summary: 'Automated Python web scraper and data extraction pipeline that parses structured product data and stores metrics into MySQL.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      tags: ['Python', 'FastAPI', 'BeautifulSoup', 'MySQL', 'Pandas'],
      liveUrl: 'https://github.com/saolyhour',
      githubUrl: 'https://github.com/saolyhour',
      features: [
        'Concurrent scraping with Python asyncio & BeautifulSoup',
        'Automated MySQL database upsert and data cleaning',
        'FastAPI endpoints for dashboard metrics retrieval',
        'Scheduled cron job runners'
      ],
      codeSnippet: `# Python Async Scraper Snippet
import asyncio
import httpx
from bs4 import BeautifulSoup

async def fetch_prices(urls):
    async with httpx.AsyncClient() as client:
        tasks = [client.get(url) for url in urls]
        responses = await asyncio.gather(*tasks)
        return [BeautifulSoup(r.text, 'html.parser').title.text for r in responses]`
    },
    {
      id: 'vibe-dashboard',
      title: 'VibeDash — Dynamic Analytics & Metrics Hub',
      category: 'Frontend UI/UX',
      badge: 'React + JavaScript + Tailwind',
      summary: 'A responsive full-screen analytics application built with custom interactive chart components, dynamic theme switching, and smooth animations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'Tailwind CSS'],
      liveUrl: 'https://github.com/saolyhour',
      githubUrl: 'https://github.com/saolyhour',
      features: [
        'Custom reusable UI component library',
        'Lightweight state management without heavy redos',
        'Fully responsive mobile & desktop drawer layouts',
        'Sleek dark-mode aesthetic with glow accents'
      ],
      codeSnippet: `// React Custom Hook
export function useMetricsData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/metrics')
      .then(res => res.json())
      .then(setData);
  }, []);
  return { data };
}`
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Crafted with Code & Vibe
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real projects demonstrating full-stack engineering, API design, database schemas, and smooth frontends.
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800"
            >
              <div>
                {/* Image / Header Container */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/80 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-purple-300 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Inspect Details & Code</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 text-xs font-mono"
                  aria-label="GitHub Repository"
                >
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto relative text-slate-100 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
              {selectedProject.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 pr-8">
              {selectedProject.title}
            </h3>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {selectedProject.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Key Architectural Highlights
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Sample Code Architecture
              </h4>
              <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-emerald-300 overflow-x-auto border border-slate-800">
                <code>{selectedProject.codeSnippet}</code>
              </pre>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
