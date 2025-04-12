
import React from 'react';
import { cn } from '@/lib/utils';

const FallingBottles: React.FC = () => {
  const bottles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${10 + Math.random() * 10}s`,
    rotation: Math.random() > 0.5 ? 'rotate' : 'rotate-reverse',
    size: 30 + Math.floor(Math.random() * 30),
    opacity: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {bottles.map((bottle) => (
        <div
          key={bottle.id}
          className={cn(
            "absolute animate-fall-down",
            bottle.rotation === 'rotate' ? 'rotate-12' : '-rotate-12'
          )}
          style={{
            left: bottle.left,
            top: '-50px',
            animationDelay: bottle.delay,
            animationDuration: bottle.duration,
            opacity: bottle.opacity,
          }}
        >
          <div 
            className="w-8 h-20 relative"
            style={{
              width: `${bottle.size}px`,
              height: `${bottle.size * 2.5}px`,
            }}
          >
            {/* Bottle shape using CSS */}
            <div className="absolute w-full h-full">
              <div className="w-3/5 h-1/6 mx-auto bg-white/10 rounded-t-lg"></div>
              <div className="w-full h-5/6 mt-1 mx-auto bg-white/10 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FallingBottles;
