import React from 'react';
import { ArrowUp, Mail, Heart, Code2, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a10] border-t border-slate-800/80 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-950 border border-purple-500/30 text-cyan-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-white block">Sao Lyhour</span>
              <span className="text-xs text-slate-400 font-mono">
                Vibe Coder • PHP • Laravel • Python • JS • Node • React • MySQL
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/saolyhour"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/40 transition-all text-xs font-mono flex items-center gap-1.5"
              aria-label="GitHub Profile"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:saolyhour.dev@gmail.com"
              className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-mono flex items-center gap-1.5"
              aria-label="Send Email"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>Email</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-purple-400 hover:text-cyan-300 hover:border-purple-500/50 transition-all cursor-pointer ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Sao Lyhour. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>& High Vibe Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
