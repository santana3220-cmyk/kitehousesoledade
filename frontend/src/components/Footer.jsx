import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2A3C48] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">Kitehouse Soledade</h3>
          <p className="text-white/70 mb-6">Seu refúgio entre o vento e o mar</p>
          
          <div className="flex flex-col gap-4 items-center justify-center gap-2 text-sm text-white/60">
            <p>© 2025 Kitehouse Soledade</p> 
            <a href='https://api.whatsapp.com/send/?phone=5584987871161&text&type=phone_number&app_absent=0' target='_blank'>Site by: GustavSant</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;