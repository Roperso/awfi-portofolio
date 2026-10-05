/**
 * MagicBento Component
 * A highly interactive bento grid with spotlight effects, particle stars,
 * 3D tilt, magnetism, and border glow.
 */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { LucideIcon, Layout, Palette, Code2, Gamepad2, Database, Sparkles, ArrowUpRight } from 'lucide-react';

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  icon?: LucideIcon;
}

export interface BentoProps {
  cards?: BentoCardProps[];
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '168, 85, 247'; // Portfolio primary purple matching #a855f7
const MOBILE_BREAKPOINT = 768;

const defaultCardData: BentoCardProps[] = [
  {
    color: '#060010',
    title: 'Software & Game Development',
    description: 'Building interactive 2D/3D games and software applications using Unity, C#, C++, and modern frameworks with optimized performance.',
    label: 'Development',
    icon: Gamepad2,
  },
  {
    color: '#060010',
    title: 'UI/UX Design',
    description: 'Designing intuitive, modern, and user-centric interfaces in Figma with high-fidelity prototypes and design systems.',
    label: 'Design',
    icon: Layout,
  },
  {
    color: '#060010',
    title: 'Interactive Web Apps',
    description: 'Crafting responsive, high-performance web applications using React, TypeScript, and dynamic 3D & canvas animations.',
    label: 'Web & Frontend',
    icon: Code2,
  },
  {
    color: '#060010',
    title: 'Graphic & Visual Design',
    description: 'Creating eye-catching visual assets, digital graphics, thumbnails, and creative branding materials.',
    label: 'Creative',
    icon: Palette,
  },
  {
    color: '#060010',
    title: 'Database & Systems',
    description: 'Structuring efficient database models with SQL and developing clean data flows for scalable digital projects.',
    label: 'Architecture',
    icon: Database,
  },
  {
    color: '#060010',
    title: 'Technical Consultation',
    description: 'Guidance on project architecture, code optimization, workflow automation, and tool selection.',
    label: 'Advisory',
    icon: Sparkles,
  }
];

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.8);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  const isHoveredRef = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();
    particlesRef.current.forEach(particle => {
      if (particle.parentNode) {
        gsap.to(particle, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'back.in(1.7)',
          onComplete: () => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          }
        });
      }
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const timeoutId = window.setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const particle = createParticleElement(x, y, glowColor);
        cardRef.current.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.fromTo(particle, 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });
      }, i * 100);
      timeoutsRef.current.push(timeoutId);
    }
  }, [particleCount, glowColor]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;
        magnetismAnimationRef.current = gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3, ease: 'power2.out' });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(${glowColor}, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
      `;
      element.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 50, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export const MagicBento: React.FC<BentoProps> = ({
  cards = defaultCardData,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldDisableAnimations = disableAnimations || isMobile;

  useEffect(() => {
    if (!enableSpotlight || shouldDisableAnimations) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const bentoCards = gridRef.current.querySelectorAll('.bento-card');
      
      bentoCards.forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        (card as HTMLElement).style.setProperty('--spotlight-radius', `${spotlightRadius}px`);
        (card as HTMLElement).style.setProperty('--glow-color', `rgba(${glowColor}, 0.18)`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableSpotlight, shouldDisableAnimations, spotlightRadius, glowColor]);

  return (
    <div className="w-full flex items-center justify-center p-0">
      <style>
        {`
          .bento-grid {
            display: grid;
            gap: 1.25rem;
            width: 100%;
            grid-template-columns: repeat(1, 1fr);
          }
          
          @media (min-width: 640px) {
            .bento-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .bento-grid {
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(2, 220px);
            }
            .card-0 { grid-column: span 2; grid-row: span 1; }
            .card-1 { grid-column: span 1; grid-row: span 1; }
            .card-2 { grid-column: span 1; grid-row: span 2; }
            .card-3 { grid-column: span 1; grid-row: span 1; }
            .card-4 { grid-column: span 2; grid-row: span 1; }
            .card-5 { grid-column: span 1; grid-row: span 1; }
          }

          .bento-card {
            background: #0d0d0d;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .bento-card:hover {
            border-color: rgba(${glowColor}, 0.4);
            box-shadow: 0 0 25px rgba(${glowColor}, 0.12);
          }

          .spotlight-overlay {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(
              var(--spotlight-radius) circle at var(--mouse-x) var(--mouse-y),
              var(--glow-color),
              transparent 80%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .bento-card:hover .spotlight-overlay {
            opacity: 1;
          }

          .border-glow {
            position: absolute;
            inset: 0;
            pointer-events: none;
            border-radius: inherit;
            padding: 1px;
            background: radial-gradient(
              var(--spotlight-radius) circle at var(--mouse-x) var(--mouse-y),
              rgba(${glowColor}, 0.8),
              transparent 40%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .bento-card:hover .border-glow {
            opacity: 1;
          }
        `}
      </style>
      
      <div ref={gridRef} className="bento-grid">
        {cards.map((card, index) => {
          const IconComponent = card.icon || Code2;
          const Content = (
            <div className="bento-card h-full w-full p-6 flex flex-col justify-between group">
              <div className="spotlight-overlay" />
              {enableBorderGlow && <div className="border-glow" />}
              
              {/* Card Header: Icon, Badge, Arrow */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#161618] border border-[#2a2a2e] flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <IconComponent size={20} className="text-[#a1a1aa] group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    {card.label && (
                      <span className="text-[10px] font-mono tracking-wider text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                        {card.label}
                      </span>
                    )}
                    <ArrowUpRight
                      size={18}
                      className="text-[#71717a] group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="relative z-10 mt-4">
                <p className={`text-xs md:text-sm text-[#a1a1aa] leading-relaxed font-light ${textAutoHide ? 'line-clamp-2' : ''}`}>
                  {card.description}
                </p>
              </div>
            </div>
          );

          if (enableStars) {
            return (
              <ParticleCard
                key={index}
                className={`bento-card card-${index}`}
                particleCount={particleCount}
                glowColor={glowColor}
                enableTilt={enableTilt}
                enableMagnetism={enableMagnetism}
                clickEffect={clickEffect}
                disableAnimations={shouldDisableAnimations}
              >
                {Content}
              </ParticleCard>
            );
          }

          return (
            <div key={index} className={`bento-card card-${index}`}>
              {Content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MagicBento;
