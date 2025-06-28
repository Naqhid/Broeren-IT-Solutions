import React from 'react';
import { Globe, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Broeren IT Solutions</span>
            </div>
           <p className="text-gray-300 mb-4">
  Delivering professional websites and creative design solutions for clients across the Netherlands and remotely around the globe.
</p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+31 6 26549102</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>broerenitsolutions@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Logo Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://broerenitsolutions.tk" className="hover:text-white transition-colors">Website</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-1">
            <span>© 2025 Broeren IT Solutions.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;