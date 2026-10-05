import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Eye, CheckCircle2, Layers, Grid } from 'lucide-react';
import { certificates, type Certificate } from '@/data/certificates';
import SectionHeading from '@/components/SectionHeading';
import CertificateLightbox from '@/components/CertificateLightbox';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');

  return (
    <section id="certificates" className="py-28 px-6 md:px-12 lg:px-16 relative">
      <div className="section-container">
        {/* Section Header & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-primary" />
              <span className="t-label text-primary">Credentials & Certifications</span>
            </div>
            <SectionHeading>Certificates.</SectionHeading>
            <p className="text-[#8e8e93] text-sm md:text-base mt-3 font-light leading-relaxed">
              Verified certifications, courses, and industry event participations. Switch views or click cards to inspect.
            </p>
          </div>

          {/* View Toggle Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#121212] border border-[#242424] rounded-xl self-start md:self-auto shrink-0 shadow-lg">
            <button
              onClick={() => setViewMode('stack')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'stack'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-[#8e8e93] hover:text-white'
              }`}
            >
              <Layers size={14} /> Stacking Cards
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-[#8e8e93] hover:text-white'
              }`}
            >
              <Grid size={14} /> Grid
            </button>
          </div>
        </div>

        {/* STACKING CARDS VIEW */}
        {viewMode === 'stack' ? (
          <div className="max-w-4xl mx-auto space-y-16 pb-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="sticky transition-all duration-300"
                style={{
                  top: `calc(100px + ${index * 24}px)`,
                  zIndex: index + 10,
                }}
              >
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#121212]/95 backdrop-blur-2xl border border-[#26262b] hover:border-primary/40 shadow-[0_-14px_45px_rgba(0,0,0,0.9)] p-6 md:p-8 transition-all duration-300">
                  {/* Top Glow Line */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                    {/* Image Preview Box */}
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="lg:col-span-5 aspect-[16/11] relative overflow-hidden rounded-xl bg-[#1a1a1a] cursor-pointer border border-[#242424] group-hover:border-primary/30 transition-colors"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs">
                        <Eye size={16} /> Click to enlarge
                      </div>
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-black/75 text-white backdrop-blur-md border border-white/10">
                        0{index + 1} / 0{certificates.length}
                      </div>
                    </div>

                    {/* Info Details */}
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
              </motion.div>
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
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <div className="h-full flex flex-col justify-between rounded-2xl overflow-hidden bg-[#121212] border border-[#242424] hover:border-primary/40 transition-colors group p-6">
                  <div>
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="aspect-video relative overflow-hidden bg-[#1a1a1a] cursor-pointer rounded-xl mb-5 border border-[#242424]"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs">
                        <Eye size={16} /> Click to enlarge
                      </div>
                    </div>

                    <div>
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
                        <p className="text-xs text-[#8e8e93] mt-3 leading-relaxed font-light line-clamp-3">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#242424] flex items-center justify-between">
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
                        className="text-xs text-[#8e8e93] hover:text-white transition-colors flex items-center gap-1"
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
    </section>
  );
}
