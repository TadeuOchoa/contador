
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const buttonClasses = cn(
    "relative inline-flex items-center justify-center gap-2 py-4 px-8 text-lg md:text-xl font-bold",
    "uppercase tracking-wider text-white transition-all duration-300 ease-out",
    "rounded-lg bg-gradient-to-r from-neon-blue/80 to-neon-pink/80",
    "hover:from-neon-pink/90 hover:to-neon-blue/90 hover:scale-105",
    "focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-offset-2 focus:ring-offset-background",
    "neon-box animate-pulse-neon",
    "transform hover:-translate-y-1",
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
      <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default NeonButton;
