import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Sparkles, 
  Check, 
  Copy, 
  CheckCircle2, 
  Rocket, 
  Clock 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { triggerCosmicConfetti } from '../utils/confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      triggerCosmicConfetti();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: personalInfo.socials.github, color: 'hover:text-white hover:border-white' },
    { name: 'LinkedIn', icon: Linkedin, href: personalInfo.socials.linkedin, color: 'hover:text-blue-400 hover:border-blue-400' },
    { name: 'Instagram', icon: Instagram, href: personalInfo.socials.instagram, color: 'hover:text-pink-400 hover:border-pink-400' },
    { name: 'Twitter / X', icon: Twitter, href: personalInfo.socials.twitter, color: 'hover:text-sky-400 hover:border-sky-400' },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#2c67ed]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />

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
            <span>Jalur Komunikasi Kosmik</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4"
          >
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#2c67ed] drop-shadow-[0_0_20px_rgba(44,103,237,0.4)]">Saya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Tertarik untuk berkolaborasi dalam proyek baru, menawarkan kesempatan magang/kerja, atau sekadar berdiskusi seputar teknologi? Pintu transmisi selalu terbuka!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Status card */}
            <div className="p-6 rounded-3xl bg-[#090e24]/85 border border-[#2c67ed]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(44,103,237,0.2)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Status Ketersediaan
                </span>
              </div>
              <p className="text-sm text-slate-200 font-medium">
                Aktif & Siap Menerima Peluang Baru (Freelance, Full-time Junior, & Magang).
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Waktu respon cepat: biasanya dalam 24 jam</span>
              </div>
            </div>

            {/* Direct Info Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-[#090f26]/80 border border-slate-800 hover:border-[#2c67ed]/50 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#111a3b] border border-[#2c67ed]/40 text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email Resmi</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-blue-300 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-[#111c3d] hover:bg-[#1a2d5f] border border-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
                  title="Salin Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#090f26]/80 border border-slate-800 hover:border-[#2c67ed]/50 transition-all flex items-center gap-3 group">
                <div className="p-2.5 rounded-xl bg-[#111a3b] border border-[#2c67ed]/40 text-blue-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp / Telepon</span>
                  <a href={`https://wa.me/6281234567890`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-blue-300 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#090f26]/80 border border-slate-800 hover:border-[#2c67ed]/50 transition-all flex items-center gap-3 group">
                <div className="p-2.5 rounded-xl bg-[#111a3b] border border-[#2c67ed]/40 text-blue-400 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Lokasi Geografis</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Link Grid */}
            <div className="p-6 rounded-3xl bg-[#090e24]/85 border border-[#2c67ed]/30 backdrop-blur-xl">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span>Saluran Jejaring Sosial</span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-xl bg-[#0a1128] border border-slate-800 hover:border-[#2c67ed] hover:shadow-[0_0_15px_rgba(44,103,237,0.3)] flex items-center gap-2.5 text-slate-300 hover:text-white transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-xs font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090e24]/90 border border-[#2c67ed]/50 backdrop-blur-xl shadow-[0_0_35px_rgba(44,103,237,0.25)] relative overflow-hidden">
              
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
                Kirimkan Transmisi Pesan 🚀
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Isi form di bawah ini untuk mengirimkan pesan langsung ke email saya.
              </p>

              {/* Success Feedback state */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/60 text-emerald-200 mb-6 flex items-start gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        Transmisi Terkirim dengan Sukses!
                      </h4>
                      <p className="text-xs text-emerald-200/90 leading-relaxed">
                        Terima kasih telah menghubungi. Pesan Anda telah diterima dalam orbit saya dan akan segera dibalas secepat mungkin.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-2 text-xs font-semibold text-emerald-400 hover:underline"
                      >
                        Kirim pesan lain
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Lengkap <span className="text-[#2c67ed]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Alex Pratama"
                      className="w-full px-4 py-3 rounded-xl bg-[#060a18] border border-slate-700/80 focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/40 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Alamat Email <span className="text-[#2c67ed]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#060a18] border border-slate-700/80 focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/40 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Subjek Diskusi <span className="text-[#2c67ed]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Kolaborasi Project / Tawaran Kerja / Sapaan"
                    className="w-full px-4 py-3 rounded-xl bg-[#060a18] border border-slate-700/80 focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/40 text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Pesan Detail <span className="text-[#2c67ed]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan ide proyek, detail kolaborasi, atau pertanyaan yang ingin Anda sampaikan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#060a18] border border-slate-700/80 focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/40 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white text-sm sm:text-base
                    bg-gradient-to-r from-[#2c67ed] to-[#1e40af] hover:from-[#3b82f6] hover:to-[#2563eb]
                    shadow-[0_0_25px_rgba(44,103,237,0.5)] hover:shadow-[0_0_35px_rgba(44,103,237,0.8)]
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-300 transform active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Mengirimkan Transmisi...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Luncurkan Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
