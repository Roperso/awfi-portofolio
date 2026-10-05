import { motion } from 'motion/react';
import SectionHeading from '@/components/SectionHeading';
import MagicBento from '@/components/MagicBento';

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-12 lg:px-16 bg-[#0a0a0a] border-y border-[#242424] relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="t-label text-primary">Capabilities</span>
            </div>
            <SectionHeading>What I do.</SectionHeading>
          </div>
          <p className="text-[#8e8e93] text-sm md:text-base max-w-md font-light leading-relaxed">
            End-to-end design and engineering services tailored for digital products, games, and interactive web systems.
          </p>
        </div>

        {/* Magic Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="168, 85, 247"
          />
        </motion.div>
      </div>
    </section>
  );
}

