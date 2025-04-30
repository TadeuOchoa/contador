
import React, { useEffect, useState } from 'react';
import NeonButton from '@/components/NeonButton';
import FallingElements from '@/components/FallingElements';
import InstagramButton from '@/components/InstagramButton';
import { Instagram, Ticket } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-pattern min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <FallingElements />
      
      {/* Instagram Button corner */}
      <InstagramButton href="https://www.instagram.com/festamov.it/" />
      
      {/* Content */}
      <div 
        className={`z-10 px-4 py-12 w-full max-w-3xl mx-auto text-center transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="animate-float">
          {/* Logo/Title */}
          <div className="flex flex-col items-center justify-center mb-6">
            <img src="/images/movit.png" alt="Logo MOV.IT!" className="w-24 h-24 mb-2" />
          </div>

          <p className="text-xl md:text-2xl font-medium mb-6 text-white/90">
            VOCÊ QUE ESTÁ AQUI!
          </p>
          
          {/* Tagline */}
          <div className="mb-6 text-2xl md:text-3xl font-bold text-white">
            VEM FALAR COMIGO QUE VOCÊ GANHA UM TIRINHO!!! 
            🔥 🍾 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
