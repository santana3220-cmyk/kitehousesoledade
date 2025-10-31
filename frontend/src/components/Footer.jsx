import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2A3C48] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">Kitehouse Soledade</h3>
          <p className="text-white/70 mb-6">Seu refúgio entre o vento e o mar</p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <span>© 2025 Kitehouse Soledade</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-400 fill-current" /> no litoral do RN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;