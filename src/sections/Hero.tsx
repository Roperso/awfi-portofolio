import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import ParallaxStarsBackground from '@/components/ParallaxStarsBackground';

const Hero3D = lazy(() => import('@/components/Hero3D'));

const titleLines = ['Informatics student', 'crafting digital', 'experiences.'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Animated Parallax Stars Background Layer */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <ParallaxStarsBackground speed={1.2} showGradient={false} />
      </div>

      {/* Background Soft Purple Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, rgba(139, 37, 240, 0.4) 50%, transparent 80%)',
        }}
      />

      <div className="section-container relative z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-primary text-xs font-medium tracking-wide">
            Available for opportunities
          </span>
        </motion.div>

        {/* H1 Headline with Clip-Path Stagger */}
        <h1
          className="t-display text-white max-w-4xl mx-auto"
          style={{ fontSize: 'clamp(46px, 7.5vw, 92px)', letterSpacing: '-0.04em' }}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden py-1">
              <motion.span
                className="block"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.15 + i * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-[#8e8e93] font-light text-base md:text-lg max-w-[460px] mx-auto mt-6 leading-relaxed"
        >
          Software developer and creative designer exploring technology, software development, UI/UX, and digital projects.
        </motion.p>

        {/* Call-to-actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-3.5 mt-8 justify-center flex-wrap"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-[#8b25f0] text-white font-semibold text-[13px] px-6 py-3 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            Explore <ArrowRight size={15} />
          </a>
          <a
            href="/cv.pdf"
            className="border border-[#242424] hover:border-[#8e8e93]/50 text-[#f5f5f5] hover:bg-[#121212] font-medium text-[13px] px-6 py-3 rounded-lg transition-all flex items-center gap-2"
          >
            Download CV <Download size={15} />
          </a>
        </motion.div>

        {/* 3D Abstract Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-12 w-full max-w-[460px] aspect-square flex items-center justify-center"
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              filter: 'drop-shadow(0 0 60px rgba(168, 85, 247, 0.3))',
            }}
          >
            <motion.div className="w-full h-full flex items-center justify-center">
              <Suspense
                fallback={
                  <img
                    src="/images/hero-3d-object.jpg"
                    alt="Abstract 3D sculptural design object"
                    className="w-full h-full object-contain pointer-events-none rounded-3xl"
                  />
                }
              >
                <Hero3D fallbackSrc="/images/hero-3d-object.jpg" />
              </Suspense>
            </motion.div>
          </div>
        </motion.div>      </div>
    </section>
  );
}
