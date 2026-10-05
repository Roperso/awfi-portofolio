import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Eye, CheckCircle2, Layers, Grid } from 'lucide-react';
import { certificates, type Certificate } from '@/data/certificates';
import CertificateLightbox from '@/components/CertificateLightbox';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');

  return (
    <main className="min-h-screen pt-32 pb-40 px-6 md:px-12 lg:px-16 relative">
      {/* Background Soft Purple Glow */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 80%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#8e8e93] hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>

        {/* Header & View Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="t-label text-primary">Credentials & Events</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="t-display text-white"
              style={{ fontSize: 'clamp(38px, 6vw, 64px)' }}
            >
              Certificates.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#8e8e93] text-base md:text-lg mt-4 font-light leading-relaxed"
            >
              A collection of certifications, seminars, and professional learning experiences.
            </motion.p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#121212] border border-[#242424] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setViewMode('stack')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'stack'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-[#8e8e93] hover:text-white'
              }`}
            >
              <Layers size={14} /> Stacking Cards
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-[#8e8e93] hover:text-white'
              }`}
            >
              <Grid size={14} /> Grid
            </button>
          </div>
        </div>

        {/* STACKING CARDS VIEW */}
        {viewMode === 'stack' ? (
          <div className="max-w-4xl mx-auto space-y-16 pb-20">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="sticky transition-all duration-300"
                style={{
                  top: `calc(100px + ${index * 24}px)`,
                  zIndex: index + 10,
                }}
              >
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#121212]/95 backdrop-blur-2xl border border-[#26262b] hover:border-primary/40 shadow-[0_-14px_45px_rgba(0,0,0,0.9)] p-6 md:p-8 transition-all duration-300">
                  {/* Subtle Top Glow Line */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                    {/* Left Column: Image */}
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="lg:col-span-5 aspect-[16/11] relative overflow-hidden rounded-xl bg-[#1a1a1a] cursor-pointer border border-[#242424] group-hover:border-primary/30 transition-colors"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs">
                        <Eye size={16} /> Click to enlarge
                      </div>
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-black/75 text-white backdrop-blur-md border border-white/10">
                        0{index + 1} / 0{certificates.length}
                      </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 font-medium">
                            {cert.category}
                          </span>
                          {cert.year && (
                            <span className="text-xs font-mono text-[#8e8e93] bg-[#1a1a1a] px-2.5 py-0.5 rounded-md border border-[#282828]">
                              {cert.year}
                            </span>
                          )}
                        </div>

                        <h3 className="t-heading text-xl md:text-2xl text-white group-hover:text-primary transition-colors leading-snug">
                          {cert.title}
                        </h3>

                        {cert.issuer && (
                          <p className="text-xs md:text-sm text-[#a1a1aa] mt-2.5 font-mono flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-primary shrink-0" /> {cert.issuer}
                          </p>
                        )}

                        {cert.certificateId && (
                          <div className="mt-2.5 inline-block text-[11px] font-mono text-[#71717a] bg-[#18181b] px-2.5 py-1 rounded border border-[#27272a]">
                            ID: <span className="text-[#a1a1aa]">{cert.certificateId}</span>
                          </div>
                        )}

                        {cert.description && (
                          <p className="text-xs md:text-sm text-[#8e8e93] mt-3.5 leading-relaxed font-light">
                            {cert.description}
                          </p>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-6 pt-4 border-t border-[#242424] flex items-center justify-between gap-4">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-primary/10 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-xl transition-all cursor-pointer border border-primary/20 hover:border-primary"
                        >
                          <Eye size={14} /> View Certificate
                        </button>

                        {cert.verificationUrl && (
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#8e8e93] hover:text-white transition-colors"
                          >
                            Verify <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full flex flex-col justify-between rounded-xl overflow-hidden bg-[#121212] border border-[#242424] hover:border-primary/40 transition-colors group">
                  <div>
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="aspect-video relative overflow-hidden bg-[#1a1a1a] cursor-pointer"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs">
                        <Eye size={16} /> Click to enlarge
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                          {cert.category}
                        </span>
                        {cert.year && (
                          <span className="text-[11px] font-mono text-[#8e8e93]">{cert.year}</span>
                        )}
                      </div>

                      <h3 className="t-heading text-lg text-white group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>

                      {cert.issuer && (
                        <p className="text-xs text-[#8e8e93] mt-2 font-mono flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-primary" /> {cert.issuer}
                        </p>
                      )}

                      {cert.certificateId && (
                        <p className="text-[11px] text-[#6e6e73] mt-1 font-mono">
                          ID: {cert.certificateId}
                        </p>
                      )}

                      {cert.description && (
                        <p className="text-xs text-[#8e8e93] mt-3 leading-relaxed font-light">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-2 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-semibold text-primary hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      View certificate &rarr;
                    </button>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#8e8e93] hover:text-white transition-colors flex items-center gap-1 ml-auto"
                      >
                        Verify <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title ?? ''}
        image={selectedCert?.image ?? ''}
      />
    </main>
  );
}
