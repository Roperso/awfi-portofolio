import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ title, children, className }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={cn('t-display text-foreground', className)}
      style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
    >
      {children || title}
    </motion.h2>
  );
}
