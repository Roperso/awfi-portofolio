import React, { useMemo } from 'react';

export interface ParallaxStarsBackgroundProps {
  /**
   * Title text to display in the center (optional)
   */
  title?: string;
  /**
   * Children content to render over the background
   */
  children?: React.ReactNode;
  /**
   * Class name for the container
   */
  className?: string;
  /**
   * Speed multiplier for the animation
   * @default 1
   */
  speed?: number;
  /**
   * Whether to display background gradient fill
   * @default true
   */
  showGradient?: boolean;
}

// Helper to generate random box shadows for stars
const generateBoxShadows = (n: number) => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px rgba(255, 255, 255, 0.8)`;
  for (let i = 2; i <= n; i++) {
    const opacity = (Math.random() * 0.6 + 0.4).toFixed(2);
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px rgba(255, 255, 255, ${opacity})`;
  }
  return value;
};

export function ParallaxStarsBackground({
  title,
  children,
  className = '',
  speed = 1,
  showGradient = true,
}: ParallaxStarsBackgroundProps) {
  // Memoize shadows so they don't regenerate on re-renders
  const shadowsSmall = useMemo(() => generateBoxShadows(600), []);
  const shadowsMedium = useMemo(() => generateBoxShadows(180), []);
  const shadowsBig = useMemo(() => generateBoxShadows(80), []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Dynamic Keyframes & CSS Styles */}
      <style>{`
        .bg-radial-space-portfolio {
          background: radial-gradient(ellipse at bottom, #161028 0%, #0a0a0a 80%);
        }
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
        .text-gradient-clip-stars {
          background: linear-gradient(to bottom, #ffffff 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background Radial Gradient Atmosphere */}
      {showGradient && <div className="absolute inset-0 bg-radial-space-portfolio z-0 pointer-events-none" />}

      {/* Stars Layer 1 (Small - 1px) */}
      <div
        className="absolute left-0 top-0 w-[1px] h-[1px] bg-transparent z-0 pointer-events-none animate-[animStar_50s_linear_infinite]"
        style={{
          boxShadow: shadowsSmall,
          animationDuration: `${50 / Math.max(0.1, speed)}s`,
        }}
      >
        <div
          className="absolute top-[2000px] w-[1px] h-[1px] bg-transparent"
          style={{ boxShadow: shadowsSmall }}
        />
      </div>

      {/* Stars Layer 2 (Medium - 2px) */}
      <div
        className="absolute left-0 top-0 w-[2px] h-[2px] bg-transparent z-0 pointer-events-none animate-[animStar_100s_linear_infinite]"
        style={{
          boxShadow: shadowsMedium,
          animationDuration: `${100 / Math.max(0.1, speed)}s`,
        }}
      >
        <div
          className="absolute top-[2000px] w-[2px] h-[2px] bg-transparent"
          style={{ boxShadow: shadowsMedium }}
        />
      </div>

      {/* Stars Layer 3 (Big - 3px) */}
      <div
        className="absolute left-0 top-0 w-[3px] h-[3px] bg-transparent z-0 pointer-events-none animate-[animStar_150s_linear_infinite]"
        style={{
          boxShadow: shadowsBig,
          animationDuration: `${150 / Math.max(0.1, speed)}s`,
        }}
      >
        <div
          className="absolute top-[2000px] w-[3px] h-[3px] bg-transparent"
          style={{ boxShadow: shadowsBig }}
        />
      </div>

      {/* Optional Title Content */}
      {title && (
        <div className="absolute top-1/2 left-0 right-0 -mt-[60px] text-center z-10 px-4 pointer-events-none">
          <h1 className="font-light text-[30px] md:text-[50px] tracking-[10px] text-white leading-tight">
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className="text-gradient-clip-stars">{line}</span>
                {i < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>
      )}

      {/* Children Content Layer */}
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  );
}

export default ParallaxStarsBackground;
