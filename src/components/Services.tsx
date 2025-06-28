import React from 'react';
import { Code, Palette, CheckCircle, Smartphone, Search, Zap } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From stunning websites to eye-catching designs, we deliver professional solutions that help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Website Development */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Website Development</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Create powerful, responsive websites that drive results and engage your audience
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mobile-Friendly & Responsive</h4>
                  <p className="text-gray-600 text-sm">Optimized for all devices and screen sizes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Fast & Secure</h4>
                  <p className="text-gray-600 text-sm">Lightning-fast loading with top-tier security</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">SEO Optimized</h4>
                  <p className="text-gray-600 text-sm">Built to rank high on search engines</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Latest Technologies</h4>
                  <p className="text-gray-600 text-sm">Modern frameworks and cutting-edge tools</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-600 p-3 rounded-lg">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Photoshop & Graphic Design</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Professional design services that make your brand stand out from the competition
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Logo Design</h4>
                  <p className="text-gray-600 text-sm">Memorable logos that represent your brand</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Marketing Materials</h4>
                  <p className="text-gray-600 text-sm">Posters, flyers, banners, and more</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Social Media Creatives</h4>
                  <p className="text-gray-600 text-sm">Eye-catching posts and ad designs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Brand Identity</h4>
                  <p className="text-gray-600 text-sm">Complete visual identity packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;