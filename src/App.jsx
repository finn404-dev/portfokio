import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Toolbox from './components/Toolbox';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 overflow-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Toolbox />
        <Projects />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
