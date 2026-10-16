import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#090f26] border border-[#2c67ed]/60 shadow-[0_0_40px_rgba(44,103,237,0.4)] overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#050916]/80 border border-slate-700 text-slate-300 hover:text-white hover:border-[#2c67ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Header */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090f26] via-[#090f26]/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#2c67ed] text-white shadow-[0_0_15px_rgba(44,103,237,0.8)] mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
                PROJECT OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
                KEY FEATURES & HIGHLIGHTS
              </h4>
              <div className="space-y-2">
                {(project.highlights && project.highlights.length > 0
                  ? project.highlights
                  : [
                      "Arsitektur modular dengan komponen React yang bersih & reusable",
                      "Desain ultra-responsif yang optimal di desktop, tablet, maupun ponsel",
                      "Animasi transisi halus menggunakan Framer Motion",
                      "Integrasi gaya modern Tailwind CSS dengan nuansa tema kosmik gelap",
                    ]
                ).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#2c67ed] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
                TECHNOLOGIES & TOOLS
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#101b3d] border border-[#2c67ed]/40 text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#18264e]">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_20px_rgba(44,103,237,0.5)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-slate-200 text-sm bg-[#111c3d] hover:bg-[#1a2b5e] border border-slate-700 hover:border-slate-500 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
