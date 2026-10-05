import { cn } from '@/lib/utils';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className, ...props }: GlowCardProps) {
  return (
    <div
      className={cn(
        'glow-card bg-surface border border-border-custom rounded-2xl overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
