import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, Sparkles, Check, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Terminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Sao Lyhour\'s Vibe Terminal v2.0.0 [PHP • Laravel • Python • JS • React • MySQL]' },
    { type: 'system', text: 'Type "help" or click one of the quick commands below to explore.' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Available Commands:
  • bio       : Brief summary of Sao Lyhour
  • stack     : View full toolbox & skill levels
  • experience: Hands-on developer timeline
  • vibe      : Execute high-energy developer vibe
  • clear     : Clear terminal console`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'response',
          text: `Sao Lyhour — Vibe Coder & Full Stack Developer
Experience : 2 Years actively building clean web apps
Toolbox    : PHP, Laravel, Python, JavaScript, Node.js, React, MySQL
Motto      : "High energy, clean syntax, seamless UX, zero unnecessary bloat."`
        });
        break;

      case 'stack':
        newHistory.push({
          type: 'response',
          text: `[BACKEND]  PHP 8.x (90%), Laravel (92%), Python (85%), Node.js (88%)
[FRONTEND] JavaScript ES6+ (95%), React (92%), Tailwind CSS (95%)
[DATABASE] MySQL (88%), Schema Design, Indexing`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'response',
          text: `2+ Years of Software Craftsmanship:
- Built scalable full-stack web platforms using Laravel & React.
- Crafted automated data parsers and FastAPI scripts in Python.
- Designed relational database schemas in MySQL with optimized queries.`
        });
        break;

      case 'vibe':
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        newHistory.push({
          type: 'special',
          text: '🚀 [VIBE ACTIVATED]: Max energy, clean code, rapid deployment!'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const runQuickCmd = (cmd) => {
    setInputVal(cmd);
  };

  return (
    <section id="terminal" className="py-24 relative z-10 bg-slate-950/80 border-y border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Vibe Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Interactive CLI Terminal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Type commands or use shortcuts below to query profile metadata in real-time.
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {['help', 'bio', 'stack', 'experience', 'vibe', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => runQuickCmd(cmd)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 hover:bg-purple-900/40 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer"
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Top Window Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-slate-400 text-xs ml-2 font-medium">saolyhour@vibe-box:~</span>
            </div>
            <div className="text-slate-500 text-[11px] hidden sm:block">
              zsh / bash mode
            </div>
          </div>

          {/* Terminal Content Log */}
          <div className="p-6 space-y-3 min-h-[320px] max-h-[420px] overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'user' && (
                  <div className="text-cyan-400 font-semibold">{item.text}</div>
                )}
                {item.type === 'system' && (
                  <div className="text-slate-400 italic">{item.text}</div>
                )}
                {item.type === 'response' && (
                  <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed">{item.text}</pre>
                )}
                {item.type === 'special' && (
                  <div className="text-emerald-400 font-bold bg-emerald-950/40 p-2 rounded border border-emerald-500/30">
                    {item.text}
                  </div>
                )}
                {item.type === 'error' && (
                  <div className="text-rose-400">{item.text}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt */}
          <form onSubmit={handleCommand} className="border-t border-slate-800 px-4 py-3 bg-slate-900/40 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command here (e.g. bio, stack, vibe)..."
              className="w-full bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder-slate-600"
            />
            <button type="submit" className="text-slate-400 hover:text-cyan-400 transition-colors p-1">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
