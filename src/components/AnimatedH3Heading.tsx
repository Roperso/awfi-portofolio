import React from 'react';
import { motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';

export interface AnimatedH3HeadingProps {
  /**
   * The text content of the H3 heading to animate letter-by-letter
   */
  children?: string;
  /**
   * Optional text prop alternative to children
   */
  text?: string;
  /**
   * Additional Tailwind CSS classes for custom styling
   */
  className?: string;
  /**
   * Initial delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
  /**
   * Stagger delay duration between individual letters (in seconds)
   * @default 0.025
   */
  staggerDelay?: number;
  /**
   * Whether to run the animation only once when scrolled into view
   * @default true
   */
  once?: boolean;
}

export function AnimatedH3Heading({
  children,
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.025,
  once = true,
}: AnimatedH3HeadingProps) {
  const content = text || (typeof children === 'string' ? children : '') || '';

  // Split into words, then letters for robust word-wrapping
  const words = content.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={containerVariants}
      className={cn(
        't-heading text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white hover:text-primary transition-colors duration-300 leading-snug',
        className
      )}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.28em]">
          {word.split('').map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={letterVariants}
              className="inline-block will-change-[transform,opacity,filter]"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h3>
  );
}

export default AnimatedH3Heading;
