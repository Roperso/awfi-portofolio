import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { socialLinks } from '@/data/socials';

export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 lg:px-16 text-center relative overflow-hidden bg-[#0d0d0d] border-t border-[#242424]">
      {/* Radial Purple Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full blur-[140px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, #8b25f0 60%, transparent 80%)',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-primary text-xs font-mono uppercase tracking-wider">Get in touch</span>
          </div>

          <h2
            className="t-display text-white"
            style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', letterSpacing: '-0.04em' }}
          >
            Let&apos;s build something.
          </h2>

          <p className="text-[#8e8e93] text-base md:text-lg mt-5 font-light leading-relaxed">
            Have a project, idea, internship opportunity, or collaboration in mind? Feel free to reach out.
          </p>

          <div className="flex items-center gap-4 mt-9 justify-center flex-wrap">
            <a
              href="mailto:muhammadawfi60@gmail.com"
              className="bg-primary hover:bg-[#8b25f0] text-white font-semibold text-sm px-8 py-3.5 rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/45 active:scale-95 flex items-center gap-2"
            >
              Start a project <ArrowRight size={16} />
            </a>
            <a
              href="mailto:muhammadawfi60@gmail.com"
              className="text-primary hover:text-white font-medium text-sm transition-colors flex items-center gap-2 px-5 py-3.5 rounded-lg hover:bg-[#1a1a1a] border border-transparent hover:border-[#242424]"
            >
              <Mail size={16} /> Or email me
            </a>
          </div>

          {/* Social Media Badges */}
          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] hover:bg-[#1a1a1e] border border-[#242424] hover:border-[#0A66C2]/60 text-white text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-2 group"
            >
              <FaLinkedin size={15} className="text-[#0A66C2] group-hover:scale-110 transition-transform" /> LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] hover:bg-[#1a1a1e] border border-[#242424] hover:border-white/60 text-white text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-2 group"
            >
              <SiGithub size={15} className="text-white group-hover:scale-110 transition-transform" /> GitHub
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] hover:bg-[#1a1a1e] border border-[#242424] hover:border-[#E4405F]/60 text-white text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-2 group"
            >
              <SiInstagram size={15} className="text-[#E4405F] group-hover:scale-110 transition-transform" /> Instagram
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] text-[#8e8e93] uppercase tracking-widest">
            Typical response time: 24–48 hours &bull; muhammadawfi60@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
