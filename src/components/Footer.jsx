import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowUp, Heart, Code2, Sparkles, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#1a2850] bg-[#040814] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-20 bg-[#2c67ed]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#131f40]">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2c67ed]/20 border border-[#2c67ed]/60 shadow-[0_0_12px_rgba(44,103,237,0.5)]">
                <Rocket className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-wide">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-blue-400 transition-colors">Beranda</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Tentang Saya</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portofolio</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Kontak</a>
          </div>

          {/* Back to Top Rocket Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0c1430] border border-[#2c67ed]/50 text-blue-300 hover:text-white shadow-[0_0_15px_rgba(44,103,237,0.3)] hover:shadow-[0_0_25px_rgba(44,103,237,0.6)] text-xs font-semibold transition-all group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Seluruh hak cipta dilindungi.</p>
          
          <div className="flex items-center gap-1.5 font-mono">
          </div>
        </div>
      </div>
    </footer>
  );
}
