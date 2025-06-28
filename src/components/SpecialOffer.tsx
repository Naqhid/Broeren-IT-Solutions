import React from 'react';
import { Gift, Clock, ArrowRight } from 'lucide-react';

const SpecialOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="h-4 w-4" />
            <span>Limited-Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get 50% OFF Your First Project!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Whether it's a stunning website or professional design work, save big on your first order
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Clock className="h-5 w-5 text-orange-200" />
            <span className="text-lg text-orange-100">Hurry! Offer valid this month only</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Claim Your Discount</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+31626549102" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Call Now: +31 6 26549102
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;