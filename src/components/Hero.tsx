import React from 'react';
import { ArrowRight, Zap, Shield, Award, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-sky-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23e0f2fe%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-in slide-in-from-top duration-500">
            <Zap className="h-4 w-4" />
            <span>Professional IT Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-in slide-in-from-bottom duration-700">
            Broeren IT
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
            Professional Websites & Creative Design Services that drive results and grow your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Play className="h-5 w-5" />
              <span>View Our Work</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-500">
            <div className="text-center group">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center transform group-hover:-translate-y-2">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast & Secure</h3>
              <p className="text-gray-600 text-sm">Built with latest technologies for optimal performance</p>
            </div>
            <div className="text-center group">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center transform group-hover:-translate-y-2">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600 text-sm">Rank higher on search engines and get more visibility</p>
            </div>
            <div className="text-center group">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center transform group-hover:-translate-y-2">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">Tailored solutions that perfectly match your brand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;