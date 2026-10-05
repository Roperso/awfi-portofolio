import { motion } from 'motion/react';
import { MapPin, GraduationCap } from 'lucide-react';
import { credentialChips } from '@/data/skills';
import SectionHeading from '@/components/SectionHeading';

const bioParagraphs = [
  'I am a Informatics student with an interest in technology, programming, software development, and digital products.',
  'My experience includes software development, UI/UX design, graphic design, computer vision, and game development. I enjoy turning ideas into functional and visually engaging digital experiences.',
  'I am comfortable working independently or as part of a team, and I continuously develop my technical and creative skills through academic, personal, freelance, and organizational projects.',
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-16 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="t-label text-primary">About Me</span>
              </div>
              <SectionHeading>Building, designing, and learning.</SectionHeading>

              <div className="mt-8 space-y-5 text-[#8e8e93] font-light text-base md:text-[16.5px] leading-relaxed">
                {bioParagraphs.map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Education & Location Mini Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-[#242424]">
                <div className="flex items-center gap-3 bg-[#121212] border border-[#242424] p-3.5 rounded-xl">
                  <GraduationCap size={18} className="text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-[#8e8e93]">Education</div>
                    <div className="text-xs font-semibold text-white">Politeknik TEDC Bandung</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#121212] border border-[#242424] p-3.5 rounded-xl">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-[#8e8e93]">Location</div>
                    <div className="text-xs font-semibold text-white">Bandung Barat, Indonesia</div>
                  </div>
                </div>
              </div>

              {/* Credential Chips */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-2 mt-8"
              >
                {credentialChips.map((chip, i) => (
                  <span
                    key={i}
                    className="bg-[#121212] border border-[#242424] hover:border-primary/50 text-[#8e8e93] hover:text-white px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column - 5 cols (Portrait + Floating Stack Card) */}
          <div className="lg:col-span-5 relative">
            {/* Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-[#242424] bg-[#121212] shadow-2xl aspect-[3/4]"
            >
              <img
                src="/images/portrait.jpg"
                alt="Awfi Muhammad at Google I/O Extended Bandung"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#242424] p-3 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Awfi Muhammad</div>
                  <div className="text-[11px] text-primary font-mono">Informatics &bull; Creative Developer</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
