import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Let's discuss how we can help bring your vision to life with professional web development and design services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+31626549102" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+31 6 26549102</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>broerenitsolutions@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;