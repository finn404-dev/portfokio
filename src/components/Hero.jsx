import React from 'react';
import { Sparkles, Terminal, Code2, ArrowRight, Zap, Play, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#06b6d4', '#10b981', '#3b82f6']
    });
  };

  const techStack = [
    { name: 'PHP / Laravel', color: 'from-red-500 to-amber-500' },
    { name: 'Python', color: 'from-blue-500 to-yellow-500' },
    { name: 'JavaScript / Node', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', color: 'from-cyan-400 to-blue-600' },
    { name: 'MySQL', color: 'from-blue-600 to-teal-400' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 text-xs font-mono text-purple-300 mb-8 backdrop-blur-md shadow-lg shadow-purple-950/20">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-slate-200">Available for innovative web projects</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-semibold">2+ Years Crafting Code</span>
        </div>

        {/* Name Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 animate-gradient">Sao Lyhour</span>
        </h1>

        {/* Tagline / Vibe Persona */}
        <p className="text-xl sm:text-3xl font-semibold text-slate-300 mb-6 max-w-3xl mx-auto">
          Passionate <span className="text-purple-400 underline decoration-purple-500/50 underline-offset-4">Vibe Coder</span> & Full-Stack Web Architect
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Turning ideas into high-speed, aesthetic, and clean web applications. I bridge backend power with frontend fluidity using modern tools and creative coding energy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-600/30 flex items-center gap-2 group"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={triggerConfetti}
            className="px-7 py-4 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 transition-all flex items-center gap-2.5 hover:shadow-lg hover:shadow-purple-500/10 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Trigger Vibe Confetti</span>
          </button>
        </div>

        {/* Tech Stack Floating Badges */}
        <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Core Toolbox & Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 text-slate-300 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all hover:scale-105 hover:bg-slate-800/60"
              >
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${tech.color}`} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
