import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  MapPin, 
  Mail, 
  Download, 
  Award, 
  Code, 
  Calendar,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo, educationList, experienceList } from '../data/portfolioData';

export default function About() {
  const [activeTimelineTab, setActiveTimelineTab] = useState('all'); // 'all', 'education', 'experience'

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2c67ed]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1633] border border-[#2c67ed]/40 shadow-[0_0_15px_rgba(44,103,237,0.3)] text-blue-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Orbit Informasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4"
          >
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#2c67ed] drop-shadow-[0_0_20px_rgba(44,103,237,0.4)]">Saya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Mengenal lebih dekat perjalanan akademis, pengalaman profesional, penelitian, dan kontribusi saya dalam analisis geospasial serta pengelolaan lingkungan berkelanjutan.
          </motion.p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Profile Picture Card with Cosmic Border & Rotating Glow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Animated outer aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2c67ed] via-sky-400 to-[#1d4ed8] rounded-3xl opacity-60 group-hover:opacity-100 blur-lg transition duration-500 group-hover:duration-200" />
              
              <div className="relative rounded-3xl bg-[#080d21] border border-[#2c67ed]/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                
                {/* Photo container */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto mb-6">
                  {/* Rotating decorative neon ring */}
                  <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#2c67ed]/60 animate-spin-slow" />
                  
                  {/* Profile Image with subtle overlay */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0e1738] shadow-[0_0_25px_rgba(44,103,237,0.5)]">
                    <img
                      src={personalInfo.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"}
                      alt={personalInfo.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e24]/70 via-transparent to-transparent" />
                  </div>

                  {/* Floating active badge */}
                  <div className="absolute bottom-2 right-2 p-2 rounded-full bg-[#080d21] border border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Profile Identity details */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-heading text-white mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-400 mb-3">
                    {personalInfo.title}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{personalInfo.location}</span>
                  </div>

                  {/* Highlights Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {['Clean Code', 'Modern React', 'Fast Learner', 'Problem Solver'].map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#111a3d] border border-[#2c67ed]/30 text-blue-200"
                      >
                        #{badge}
                      </span>
                    ))}
                  </div>

                  {/* Action Contact */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2c67ed] to-[#1e40af] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_15px_rgba(44,103,237,0.4)] transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Personal Bio & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090e24]/75 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.15)]">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-400" />
                <span>Eksplorasi & Filosofi Analisis Geospasial</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As an Environmental Engineering graduate from Hasanuddin University and a GIS Analyst, I am passionate about leveraging geospatial technology to understand environmental challenges and support data-driven decision-making. My experience includes spatial data processing, ArcGIS Online dashboard development, thematic mapping, and the integration of spatial and non-spatial datasets to support sustainable resource management.
                </p>
                <p>
                  I have also been involved in various environmental research projects, ranging from analyzing coral reef changes using Landsat satellite imagery over the 1990–2022 period to assessing UAV-based approaches to clean water management. To me, geospatial analysis is more than just producing maps; it is about transforming data into meaningful insights that help explain environmental changes and inform better planning and decision-making.
                </p>
              </div>

              {/* Core strengths bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#1e2c56] mt-6">
                {[
                  "HSE & Environmental Monitoring",
                  "Environmental Data Analyst",
                  "Pengembangan Dashboard GIS & WebGIS",
                  "Remote Sensing & Analisis Citra Satelit",
                  "Integrasi Data Geospasial & Penelitian Lingkungan",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Project Statistics Section (Statistik Project) */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Statistik & Metrik Proyek</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-[#090f26]/80 border border-[#2c67ed]/30 hover:border-[#2c67ed] shadow-[0_0_20px_rgba(44,103,237,0.2)] hover:shadow-[0_0_30px_rgba(44,103,237,0.5)] backdrop-blur-xl transition-all duration-300 text-center"
              >
                <div className="text-3xl sm:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#3b82f6] group-hover:drop-shadow-[0_0_15px_rgba(44,103,237,0.8)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Experience Timelines */}
        <div>
          {/* Tab Filter for Timelines */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'Semua Riwayat' },
              { id: 'education', label: 'Pendidikan', icon: GraduationCap },
              { id: 'experience', label: 'Pengalaman Kerja', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTimelineTab(tab.id)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTimelineTab === tab.id
                    ? 'text-white bg-[#2c67ed] shadow-[0_0_20px_rgba(44,103,237,0.6)]'
                    : 'text-slate-400 hover:text-white bg-[#0c132b]/80 border border-slate-800 hover:border-[#2c67ed]/40'
                }`}
              >
                {tab.icon && <tab.icon className="w-4 h-4" />}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Riwayat Pendidikan (Education) */}
            {(activeTimelineTab === 'all' || activeTimelineTab === 'education') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={activeTimelineTab === 'education' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#2c67ed]/30">
                  <div className="p-2 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">Riwayat Pendidikan</h3>
                    <p className="text-xs text-slate-400">Fondasi akademis & rekayasa sistem</p>
                  </div>
                </div>

                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#2c67ed] before:via-sky-400/50 before:to-transparent">
                  {educationList.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 4 }}
                      className="relative group p-5 rounded-2xl bg-[#090f26]/80 border border-[#2c67ed]/25 hover:border-[#2c67ed]/60 transition-all shadow-[0_0_15px_rgba(44,103,237,0.1)]"
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-[27px] top-6 w-3 h-3 rounded-full bg-[#2c67ed] border-2 border-[#030712] shadow-[0_0_10px_#2c67ed]" />
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#2c67ed]/20 text-blue-300 border border-[#2c67ed]/40">
                          {edu.period}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">
                          {edu.grade}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="text-sm font-medium text-slate-300 mb-2">
                        {edu.institution}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {edu.badges.map((b, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111a3b] text-slate-300 border border-slate-700/50"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Riwayat Pengalaman (Experience) */}
            {(activeTimelineTab === 'all' || activeTimelineTab === 'experience') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={activeTimelineTab === 'experience' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#2c67ed]/30">
                  <div className="p-2 rounded-xl bg-sky-500/20 border border-sky-400/50 text-sky-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">Pengalaman Kerja & Project</h3>
                    <p className="text-xs text-slate-400">Praktik hands-on industri & kolaborasi</p>
                  </div>
                </div>

                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-[#2c67ed]/50 before:to-transparent">
                  {experienceList.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 4 }}
                      className="relative group p-5 rounded-2xl bg-[#090f26]/80 border border-[#2c67ed]/25 hover:border-[#2c67ed]/60 transition-all shadow-[0_0_15px_rgba(44,103,237,0.1)]"
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-[27px] top-6 w-3 h-3 rounded-full bg-sky-400 border-2 border-[#030712] shadow-[0_0_10px_#38bdf8]" />
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/40">
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {exp.company}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 mt-2">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111a3b] text-blue-200 border border-[#2c67ed]/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
