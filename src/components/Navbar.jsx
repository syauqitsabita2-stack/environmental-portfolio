import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Rocket, Send } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'portfolio', label: 'Portofolio' },
  { id: 'contact', label: 'Kontak' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Floating Pill Navbar with Blue Glow Effect */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`pointer-events-auto relative flex items-center justify-between gap-2 sm:gap-6 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300
          bg-[#070d1e]/85 backdrop-blur-xl border border-[#2c67ed]/50 
          shadow-[0_0_25px_rgba(44,103,237,0.45)] hover:shadow-[0_0_35px_rgba(44,103,237,0.6)]
          ${scrolled ? 'scale-98 bg-[#050916]/90 border-[#2c67ed]/60' : ''}`}
      >
        {/* Logo / Brand */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#2c67ed]/20 border border-[#2c67ed]/60 group-hover:shadow-[0_0_15px_rgba(44,103,237,0.7)] transition-all">
            <Rocket className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full" />
          </div>
          <span className="font-heading font-bold text-base tracking-wider text-white hidden md:inline-block">
            ST<span className="text-[#2c67ed]">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#2c67ed]/30 to-[#3b82f6]/25 border border-[#2c67ed]/60 rounded-full shadow-[0_0_15px_rgba(44,103,237,0.4)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* CTA Contact Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_18px_rgba(44,103,237,0.5)] hover:shadow-[0_0_25px_rgba(44,103,237,0.8)] transition-all transform active:scale-95"
          >
            <Send className="w-3 h-3" />
            <span>Kontak</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#1e293b]/80 border border-[#2c67ed]/40 text-blue-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 max-w-sm mx-auto p-4 rounded-2xl bg-[#090e21]/95 backdrop-blur-2xl border border-[#2c67ed]/50 shadow-[0_0_30px_rgba(44,103,237,0.45)] flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-[#2c67ed]/25 border border-[#2c67ed]/60 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <Sparkles className="w-4 h-4 text-blue-400" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] shadow-[0_0_15px_rgba(44,103,237,0.5)]"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesan</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
