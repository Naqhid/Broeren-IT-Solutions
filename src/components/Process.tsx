import React from 'react';
import { MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Discovery & Consultation",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      step: "01"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Our team creates a comprehensive strategy and project plan tailored to your specific needs and objectives.",
      step: "02"
    },
    {
      icon: Code,
      title: "Design & Development",
      description: "We bring your vision to life with cutting-edge design and development, keeping you involved throughout the process.",
      step: "03"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "After thorough testing, we launch your project and provide ongoing support to ensure continued success.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From concept to completion, we follow a proven process that delivers exceptional results
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;