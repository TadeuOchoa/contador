
import React from 'react';
import { Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InstagramButtonProps {
  href: string;
  className?: string;
}

const InstagramButton: React.FC<InstagramButtonProps> = ({ href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-4 right-4 z-20 p-3 rounded-full",
        "bg-gradient-to-r from-neon-pink/80 to-neon-blue/80",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "hover:scale-110 hover:rotate-12",
        "animate-pulse-neon group",
        className
      )}
      aria-label="Instagram"
    >
      <div className="relative">
        <Instagram className="w-6 h-6 text-white" />
        <span className="absolute -top-1 -right-1 -left-1 -bottom-1 rounded-full animate-ping opacity-30 bg-neon-pink/50"></span>
      </div>
    </a>
  );
};

export default InstagramButton;
