import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoWhite from '../images/logo-no-bg-white.svg';
import logoBlack from '../images/logo-no-bg.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'A Casa', id: 'about' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Kitesurf', id: 'kitesurf' },
    { label: 'Reserva', id: 'booking' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src={isScrolled ? logoBlack : logoWhite}
            alt="Kitehouse Soledade Logo"
            className="h-24 -my-4 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            
          </img>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-[#2A3C48] hover:text-[#335B63]' : 'text-white hover:text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('booking')}
              className="bg-[#F2B705] hover:bg-[#d9a504] text-[#2A3C48] font-semibold px-6 py-2 rounded-full transition-all"
            >
              Reservar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#2A3C48]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#2A3C48] hover:text-[#335B63] transition-colors font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('booking')}
              className="bg-[#F2B705] hover:bg-[#d9a504] text-[#2A3C48] font-semibold rounded-full"
            >
              Reservar Agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;