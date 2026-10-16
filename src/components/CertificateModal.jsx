import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  if (!isOpen || !certificate) return null;

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
          className="relative w-full max-w-xl rounded-3xl bg-[#090f26] border border-[#2c67ed]/60 shadow-[0_0_40px_rgba(44,103,237,0.4)] overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#050916]/80 border border-slate-700 text-slate-300 hover:text-white hover:border-[#2c67ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Image Preview */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090f26] via-transparent to-transparent" />
            <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#080d22]/90 border border-[#2c67ed]/50 text-blue-400">
              <Award className="w-6 h-6" />
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                <span>{certificate.issuer}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {certificate.date}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {certificate.title}
              </h3>
            </div>

            {/* Credential ID */}
            <div className="p-4 rounded-xl bg-[#0e1635] border border-[#2c67ed]/30 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">ID Kredensial Resmi</span>
                <span className="font-mono text-sm font-semibold text-blue-300">
                  {certificate.credentialId}
                </span>
              </div>
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>

            {/* Competency Skills */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Keahlian & Topik yang Dikuasai
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certificate.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2c67ed]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2">
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_20px_rgba(44,103,237,0.5)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verifikasi di Situs Penerbit</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
