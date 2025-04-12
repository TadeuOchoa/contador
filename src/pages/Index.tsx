
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
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gradient-neon animate-text-shine neon-shadow">
            MOV.IT!
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 text-white/90">
            Major Lock 30/04
          </p>
          
          {/* Tagline */}
          <div className="mb-6 text-2xl md:text-3xl font-bold text-white">
            ENTROU VAI TER QUE COMPRAR! 🔥 🍾 🎧
          </div>
          
          {/* Instagram handle with icon */}
          <div className="flex items-center justify-center mb-8 text-xl">
            <a 
              href="https://www.instagram.com/festamov.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white group transition-all duration-300"
            >
              <span className="inline-block bg-gradient-to-r from-neon-pink to-neon-blue p-2 rounded-lg animate-pulse-neon group-hover:scale-110 transition-transform">
                <Instagram size={20} className="text-white" />
              </span>
              <span className="group-hover:text-neon-pink transition-colors">@festamov.it</span>
            </a>
          </div>

          {/* Ticket icon */}
          <div className="flex justify-center mb-8">
            <Ticket className="w-12 h-12 text-neon-pink animate-float" />
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <NeonButton 
              href="https://www.sympla.com.br/evento/mov-it-major-lock-30-04/2884363"
              className="text-2xl md:text-3xl py-5 px-10"
            >
              COMPRAR INGRESSO
            </NeonButton>
          </div>
          
          {/* Footer */}
          <div className="text-white/50 text-sm mt-16">
            © 2024 MOV.IT! • Todos os direitos reservados
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
