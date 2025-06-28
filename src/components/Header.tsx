import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <span className="text-xl font-bold text-gray-900">Broeren IT Solutions</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
            <a href="tel:+31626549102" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors bg-blue-50 px-3 py-2 rounded-lg">
              <Phone className="h-4 w-4" />
              <span>+31 6 26549102</span>
            </a>
          </nav>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <a href="tel:+31626549102" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors bg-blue-50 px-3 py-2 rounded-lg w-fit">
                <Phone className="h-4 w-4" />
                <span>+31 6 26549102</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;