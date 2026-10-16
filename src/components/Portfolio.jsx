import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Award, 
  Cpu, 
  ExternalLink, 
  Github, 
  Sparkles, 
  FolderGit2, 
  Layers, 
  Maximize2,
  Code2,
  Palette,
  FileCode,
  Boxes,
  Server,
  Terminal,
  Network,
  Database,
  HardDrive,
  GitBranch,
  Command,
  Compass,
  Send,
  CheckCircle2
} from 'lucide-react';
import { projectsList, certificatesList, techStackCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import CertificateModal from './CertificateModal';

// Icon mapping helper for Tech Stack
const iconMap = {
  Code2,
  Palette,
  FileCode,
  Sparkles,
  Layers,
  Boxes,
  Server,
  Terminal,
  Network,
  Database,
  HardDrive,
  GitBranch,
  Command,
  Cpu,
  Compass,
  Send
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects', 'certificates', 'techstack'
  const [projectFilter, setProjectFilter] = useState('all');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Filter projects
  const filteredProjects = projectFilter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category.toLowerCase().includes(projectFilter.toLowerCase()));

  const tabs = [
    { id: 'projects', label: 'Projects', icon: FolderGit2, count: projectsList.length },
    { id: 'certificates', label: 'Certificates', icon: Award, count: certificatesList.length },
    { id: 'techstack', label: 'Tech Stack', icon: Cpu, count: '16+' },
  ];

  const projectCategories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'web', label: 'Web Apps' },
    { id: 'full stack', label: 'Full Stack' },
    { id: 'data', label: 'Data & UI' },
  ];

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#2c67ed]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1633] border border-[#2c67ed]/40 shadow-[0_0_15px_rgba(44,103,237,0.3)] text-blue-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Rocket className="w-3.5 h-3.5 text-blue-400" />
            <span>Katalog Eksplorasi Digital</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4"
          >
            Portofolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#2c67ed] drop-shadow-[0_0_20px_rgba(44,103,237,0.4)]">Proyek & Keahlian</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Jelajahi proyek analisis geospasial, pengembangan dashboard GIS, penelitian lingkungan, publikasi ilmiah, dan keahlian teknis yang mendukung pengelolaan sumber daya berkelanjutan.
          </motion.p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#080e22]/90 border border-[#2c67ed]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(44,103,237,0.25)]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioTab"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2c67ed] to-[#1e40af] shadow-[0_0_20px_rgba(44,103,237,0.6)]"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                    <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= TAB 1: PROJECTS ================= */}
        {activeTab === 'projects' && (
          <motion.div
            key="tab-projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {projectCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setProjectFilter(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    projectFilter === cat.id
                      ? 'bg-[#2c67ed]/30 border border-[#2c67ed] text-blue-300 shadow-[0_0_12px_rgba(44,103,237,0.4)]'
                      : 'bg-[#090f24] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col rounded-3xl bg-[#090e24]/85 border border-[#2c67ed]/30 hover:border-[#2c67ed]/70 shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_30px_rgba(44,103,237,0.4)] backdrop-blur-xl overflow-hidden transition-all duration-300"
                >
                  {/* Image container */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e24] via-[#090e24]/40 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#070b1a]/90 text-blue-300 border border-[#2c67ed]/40 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick view button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute top-3 right-3 p-2 rounded-xl bg-[#070b1a]/90 border border-slate-700 text-slate-300 hover:text-white hover:border-[#2c67ed] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                      title="Lihat Detail"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-blue-300 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#111a3b] text-blue-200 border border-[#2c67ed]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#18264e]">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2c67ed] to-[#1e40af] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_12px_rgba(44,103,237,0.4)] transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Detail</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-[#111b3b] hover:bg-[#1a2b5b] border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all"
                        title="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-[#111b3b] hover:bg-[#1a2b5b] border border-slate-700 hover:border-[#2c67ed] text-blue-300 hover:text-white transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ================= TAB 2: CERTIFICATES ================= */}
        {activeTab === 'certificates' && (
          <motion.div
            key="tab-certificates"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {certificatesList.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col rounded-3xl bg-[#090e24]/85 border border-[#2c67ed]/30 hover:border-[#2c67ed]/70 shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_30px_rgba(44,103,237,0.4)] backdrop-blur-xl overflow-hidden transition-all duration-300"
                >
                  {/* Certificate preview header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e24] via-black/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 p-2 rounded-xl bg-[#080e22]/90 border border-[#2c67ed]/50 text-blue-400">
                      <Award className="w-5 h-5" />
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-[#080e22]/90 border border-slate-700 text-slate-300">
                      {cert.date}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                      {cert.issuer}
                    </div>
                    
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-300 transition-colors mb-3">
                      {cert.title}
                    </h3>

                    {/* Credential ID badge */}
                    <div className="mb-4">
                      <span className="text-[11px] font-mono text-slate-400 bg-[#0d1633] px-2.5 py-1 rounded-md border border-slate-800">
                        ID: {cert.credentialId}
                      </span>
                    </div>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6 flex-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111a3b] text-blue-200 border border-[#2c67ed]/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#18264e]">
                      <button
                        onClick={() => setSelectedCertificate(cert)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2c67ed] to-[#1e40af] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_12px_rgba(44,103,237,0.4)] transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Lihat Sertifikat</span>
                      </button>

                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-[#111b3b] hover:bg-[#1a2b5b] border border-slate-700 hover:border-[#2c67ed] text-blue-300 hover:text-white transition-all"
                        title="Verifikasi Resmi"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ================= TAB 3: TECH STACK ================= */}
        {activeTab === 'techstack' && (
          <motion.div
            key="tab-techstack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {techStackCategories.map((group, gIdx) => (
              <div key={gIdx} className="p-6 sm:p-8 rounded-3xl bg-[#090e24]/75 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_25px_rgba(44,103,237,0.15)]">
                
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#18264e]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {group.description}
                    </p>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold bg-[#2c67ed]/20 text-blue-300 border border-[#2c67ed]/40">
                    {group.skills.length} Teknologi
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="group p-4 rounded-2xl bg-[#090f26] border border-slate-800 hover:border-[#2c67ed]/60 transition-all shadow-[0_0_15px_rgba(44,103,237,0.08)] hover:shadow-[0_0_20px_rgba(44,103,237,0.3)]"
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-[#111a3b] border border-[#2c67ed]/40 text-blue-400 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(44,103,237,0.6)] transition-all">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[10px] font-mono text-slate-400">
                                {skill.status}
                              </span>
                            </div>
                          </div>

                          <span className="text-xs font-mono font-bold text-blue-400">
                            {skill.level}
                          </span>
                        </div>

                        {/* Animated progress bar */}
                        <div className="h-2 w-full rounded-full bg-slate-800/80 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-[#2c67ed] to-sky-400 shadow-[0_0_10px_rgba(44,103,237,0.6)]"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
