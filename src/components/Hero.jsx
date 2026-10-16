import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  Layers 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = personalInfo.roles;

  // Typewriter effect logic
  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 text-center lg:text-left z-10"
        >
          {/* Cosmic Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a1228]/80 border border-[#2c67ed]/40 shadow-[0_0_15px_rgba(44,103,237,0.3)] mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-blue-200">
              {personalInfo.status}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          </motion.div>

          {/* Subheading Greeting */}
          <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Wellcome
          </p>

          {/* Big Display Name */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-heading text-white mb-4 leading-none">
            Saya{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#60a5fa] drop-shadow-[0_0_30px_rgba(44,103,237,0.5)]">
              {personalInfo.name}
              <motion.span 
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 rounded-lg bg-[#2c67ed]/10 filter blur-xl -z-10"
              />
            </span>
          </h1>

          {/* Dynamic Typewriter Text with Blue Glow Cursor */}
          <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6">
            <span className="text-xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 font-heading">
              Seorang{' '}
              <span className="text-[#3b82f6] font-bold underline decoration-[#2c67ed]/40 decoration-wavy underline-offset-8">
                {currentText}
              </span>
              <span className="inline-block w-1 h-7 sm:h-8 ml-1 bg-[#2c67ed] shadow-[0_0_12px_#2c67ed] animate-pulse align-middle" />
            </span>
          </div>

          
          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
            {personalInfo.bio}
          </p>
          

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            {/* Primary Button */}
            <button
              onClick={() => scrollTo('portfolio')}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white text-sm sm:text-base
                bg-gradient-to-r from-[#2c67ed] to-[#1e40af] hover:from-[#3b82f6] hover:to-[#2563eb]
                shadow-[0_0_25px_rgba(44,103,237,0.55)] hover:shadow-[0_0_35px_rgba(44,103,237,0.8)]
                transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Rocket className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform duration-300" />
              <span>Jelajahi Proyek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 text-sm sm:text-base
                bg-[#0d152d]/80 hover:bg-[#152248] border border-[#2c67ed]/40 hover:border-[#2c67ed]
                shadow-[0_0_15px_rgba(44,103,237,0.2)] hover:shadow-[0_0_25px_rgba(44,103,237,0.4)]
                backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Hubungi Saya</span>
            </button>

            {/* Download CV Button */}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 text-sm
                hover:text-white hover:bg-slate-800/40 border border-slate-700/60 hover:border-slate-500
                transition-all duration-200"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>CV & Riwayat</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="text-xs font-medium text-slate-400 mr-2 tracking-wide uppercase">Sosial Media:</span>
            {[
              { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
              { icon: Instagram, href: personalInfo.socials.instagram, label: "Instagram" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#090e22]/90 border border-[#2c67ed]/30 text-slate-300 hover:text-white hover:border-[#2c67ed] hover:shadow-[0_0_15px_rgba(44,103,237,0.5)] hover:scale-105 transition-all duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Cosmic Planetary Orbit Visual with Tech Badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative select-none"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            
            {/* Outer Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#2c67ed]/30"
            >
              {/* Orbiting Satellite 1: React */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2.5 rounded-xl bg-[#080d21] border border-[#2c67ed]/60 shadow-[0_0_15px_rgba(44,103,237,0.5)]">
                <Code2 className="w-5 h-5 text-blue-400 animate-spin-slow" />
              </div>

              {/* Orbiting Satellite 2: Python */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-2.5 rounded-xl bg-[#080d21] border border-[#2c67ed]/60 shadow-[0_0_15px_rgba(44,103,237,0.5)]">
                <Terminal className="w-5 h-5 text-sky-400" />
              </div>
            </motion.div>

            {/* Inner Reverse Orbit Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-sky-400/25"
            >
              {/* Orbiting Satellite 3: Tailwind */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 p-2 rounded-xl bg-[#080d21] border border-sky-400/60 shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                <Layers className="w-4 h-4 text-cyan-300" />
              </div>

              {/* Orbiting Satellite 4: Sparkles */}
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 p-2 rounded-xl bg-[#080d21] border border-blue-500/60 shadow-[0_0_12px_rgba(44,103,237,0.5)]">
                <Sparkles className="w-4 h-4 text-indigo-300" />
              </div>
            </motion.div>

            {/* Center Cosmic Planet / Core */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 40px rgba(44, 103, 237, 0.4)',
                  '0 0 70px rgba(44, 103, 237, 0.7)',
                  '0 0 40px rgba(44, 103, 237, 0.4)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#0b1433] via-[#11245b] to-[#2c67ed] p-1.5 flex items-center justify-center border border-[#2c67ed]/80 overflow-hidden"
            >
              {/* Planet internal texture & craters */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-black/80 rounded-full" />
              
              <div className="relative text-center z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-blue-200 drop-shadow-[0_0_15px_#2c67ed]" />
                </motion.div>
                <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-widest uppercase mt-2">
                  ST-01
                </span>
                <span className="text-[10px] sm:text-xs text-blue-300 font-mono">
                  COSMIC STATION
                </span>
              </div>

              {/* Orbital Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2c67ed] to-cyan-400 rounded-full opacity-30 blur-xl animate-pulse-slow" />
            </motion.div>

            {/* Floating floating mini badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 right-4 px-3 py-1.5 rounded-lg bg-[#0c1533]/90 border border-[#2c67ed]/50 shadow-[0_0_15px_rgba(44,103,237,0.3)] backdrop-blur-md text-xs font-mono text-blue-200 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>Full-Stack Ready</span>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 left-4 px-3 py-1.5 rounded-lg bg-[#0c1533]/90 border border-sky-500/50 shadow-[0_0_15px_rgba(56,189,248,0.3)] backdrop-blur-md text-xs font-mono text-cyan-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Modern UI/UX</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
