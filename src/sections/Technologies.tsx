import React from 'react';
import { technologies } from '@/data/skills';
import SectionHeading from '@/components/SectionHeading';
import TechIcon, { getTechBrandColor } from '@/components/TechIcon';

export default function Technologies() {
  // Multiply array to guarantee seamless looping without layout gaps
  const tickerItems = [...technologies, ...technologies, ...technologies, ...technologies];
  const tickerItemsReverse = [...technologies].reverse();
  const tickerItemsReverseQuad = [...tickerItemsReverse, ...tickerItemsReverse, ...tickerItemsReverse, ...tickerItemsReverse];

  return (
    <section id="technologies" className="py-24 bg-[#0a0a0a] border-y border-[#242424] relative overflow-hidden">
      <div className="section-container px-6 md:px-12 lg:px-16 mb-12">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="t-label text-primary">Tech Stack</span>
          </div>
          <SectionHeading className="mx-auto">Technologies & Tools.</SectionHeading>
          <p className="text-[#8e8e93] text-sm mt-3 font-light leading-relaxed">
            Core languages, frameworks, and engines utilized across software, web, and game development.
          </p>
        </div>
      </div>

      {/* Marquee Ticker 1 (Left to Right Scrolling with Gradient Edge Fade & Hover-Pause) */}
      <div className="relative w-full overflow-hidden marquee-container py-3">
        {/* Left Gradient Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
        
        {/* Right Gradient Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />

        <div className="animate-marquee flex gap-4 items-center">
          {tickerItems.map((tech, index) => {
            const brandColor = getTechBrandColor(tech.icon);
            return (
              <div
                key={`tech-row1-${index}`}
                style={{ '--brand-color': brandColor } as React.CSSProperties}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#121212] border border-[#242424] hover:border-[var(--brand-color)]/60 hover:bg-[#18181c] transition-all duration-300 group cursor-pointer whitespace-nowrap shrink-0"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1a1a1e] flex items-center justify-center group-hover:bg-[var(--brand-color)]/15 transition-colors duration-300">
                  <TechIcon
                    name={tech.icon}
                    size={20}
                    className="text-[#8e8e93] group-hover:text-[var(--brand-color)] transition-colors duration-300"
                  />
                </div>
                <span className="font-mono text-xs text-[#a1a1aa] group-hover:text-white transition-colors duration-300 font-medium tracking-wide">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee Ticker 2 (Reverse Direction Scrolling) */}
      <div className="relative w-full overflow-hidden marquee-container py-3 mt-2">
        {/* Left Gradient Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
        
        {/* Right Gradient Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />

        <div className="animate-marquee-reverse flex gap-4 items-center">
          {tickerItemsReverseQuad.map((tech, index) => {
            const brandColor = getTechBrandColor(tech.icon);
            return (
              <div
                key={`tech-row2-${index}`}
                style={{ '--brand-color': brandColor } as React.CSSProperties}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#121212] border border-[#242424] hover:border-[var(--brand-color)]/60 hover:bg-[#18181c] transition-all duration-300 group cursor-pointer whitespace-nowrap shrink-0"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1a1a1e] flex items-center justify-center group-hover:bg-[var(--brand-color)]/15 transition-colors duration-300">
                  <TechIcon
                    name={tech.icon}
                    size={20}
                    className="text-[#8e8e93] group-hover:text-[var(--brand-color)] transition-colors duration-300"
                  />
                </div>
                <span className="font-mono text-xs text-[#a1a1aa] group-hover:text-white transition-colors duration-300 font-medium tracking-wide">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
