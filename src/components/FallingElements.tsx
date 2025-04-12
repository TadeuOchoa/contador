
import React from 'react';
import { cn } from '@/lib/utils';
import { Music, ZapIcon, Disc3 } from 'lucide-react';

// Define the types of falling items
const itemTypes = ['bottle', 'cup', 'confetti', 'glowstick', 'discoball', 'musicnote', 'lightning'];

const FallingElements: React.FC = () => {
  // Create 25 random elements
  const elements = Array.from({ length: 25 }).map((_, i) => {
    const type = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    return {
      id: i,
      type,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 15}s`,
      rotation: Math.random() > 0.5 ? 'rotate' : 'rotate-reverse',
      size: 20 + Math.floor(Math.random() * 40),
      opacity: 0.4 + Math.random() * 0.6,
      color: getRandomColor(),
    };
  });

  // Function to render different element types
  const renderElement = (element: any) => {
    switch (element.type) {
      case 'bottle':
        return (
          <div className="w-full h-full">
            <div className="w-3/5 h-1/6 mx-auto bg-white/10 rounded-t-lg"></div>
            <div className="w-full h-5/6 mt-1 mx-auto bg-white/10 rounded-lg backdrop-blur-sm"></div>
          </div>
        );
      case 'cup':
        return (
          <div className="w-full h-full">
            <div className="w-full h-3/4 rounded-b-lg bg-white/10 backdrop-blur-sm"></div>
            <div className="w-2/3 h-1/4 mx-auto bg-white/10 rounded-t-sm"></div>
          </div>
        );
      case 'confetti':
        return (
          <div className={`w-full h-full ${element.color} opacity-70`}>
            {Math.random() > 0.5 ? (
              // Rectangle confetti
              <div className="w-full h-full rounded-sm"></div>
            ) : (
              // Circle confetti
              <div className="w-full h-full rounded-full"></div>
            )}
          </div>
        );
      case 'glowstick':
        return (
          <div className={`w-1/4 h-full ${element.color} rounded-full opacity-70 mx-auto`}></div>
        );
      case 'discoball':
        return (
          <Disc3 className={`w-full h-full ${element.color}`} />
        );
      case 'musicnote':
        return (
          <Music className={`w-full h-full ${element.color}`} />
        );
      case 'lightning':
        return (
          <ZapIcon className={`w-full h-full ${element.color}`} />
        );
      default:
        return null;
    }
  };

  function getRandomColor() {
    const colors = [
      'text-neon-blue',
      'text-neon-pink',
      'text-neon-green',
      'bg-neon-blue',
      'bg-neon-pink',
      'bg-neon-green',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={cn(
            "absolute animate-fall-down",
            element.rotation === 'rotate' ? 'rotate-12' : '-rotate-12'
          )}
          style={{
            left: element.left,
            top: '-50px',
            animationDelay: element.delay,
            animationDuration: element.duration,
            opacity: element.opacity,
          }}
        >
          <div 
            className="relative"
            style={{
              width: `${element.size}px`,
              height: `${element.size * (element.type === 'glowstick' ? 3 : 1)}px`,
            }}
          >
            {renderElement(element)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FallingElements;
