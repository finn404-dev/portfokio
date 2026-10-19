import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Code2, Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'toolbox', 'projects', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Toolbox', href: '#toolbox', id: 'toolbox' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Vibe Lab', href: '#terminal', id: 'terminal' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0d14]/80 backdrop-blur-md border-b border-purple-500/10 py-3 shadow-lg shadow-purple-950/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px]">
              <div className="bg-[#0a0d14] p-1.5 rounded-[11px] group-hover:bg-transparent transition-colors">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                Sao Lyhour
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] text-purple-400 font-mono font-medium -mt-1 tracking-wider uppercase">
                Vibe Coder • 2Y Exp
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md p-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-purple-600/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-purple-900/30 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center mt-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            Let's Vibe Together
          </a>
        </div>
      )}
    </nav>
  );
}
