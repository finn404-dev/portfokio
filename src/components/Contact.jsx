import React, { useState } from 'react';
import { Mail, Send, Sparkles, CheckCircle2, User, MessageSquare, Code, Globe, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Full Stack Web App', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Pitch & Information */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let's Connect & Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Have a Project in Mind? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">
                Let's Vibe & Build It.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Whether you need a custom web platform with <strong className="text-cyan-300">PHP / Laravel</strong>, a fast <strong className="text-purple-300">React SPA</strong>, backend API development with <strong className="text-emerald-300">Node.js / Python</strong>, or relational database optimization in <strong className="text-blue-300">MySQL</strong> — I'm ready to bring your ideas to life.
            </p>

            {/* Quick Contact Badges */}
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-purple-950 text-purple-400">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">Developer Name</span>
                  <span className="text-slate-200 font-semibold">Sao Lyhour</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">Direct Email</span>
                  <a href="mailto:saolyhour.dev@gmail.com" className="text-cyan-300 font-semibold hover:underline">
                    saolyhour.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">Location & Availability</span>
                  <span className="text-slate-200 font-semibold">Phnom Penh, Cambodia (Remote Available)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-slate-200">{formData.name}</strong>. I will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Full Stack Web App', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>Send a Quick Message</span>
                </h3>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="Full Stack Web App">Full Stack Web App (Laravel + React)</option>
                    <option value="Backend API & DB">Backend API & MySQL Database</option>
                    <option value="Frontend Interface">Frontend Web Interface (React)</option>
                    <option value="Python Automation Scraper">Python Script & Automation</option>
                    <option value="Consultation / Hiring">Consultation / Full-time Role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Project Message</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me a bit about your goals, timeline, and tech requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
