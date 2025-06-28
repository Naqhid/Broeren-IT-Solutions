import React from 'react';
import { DollarSign, Zap, Shield, Users, Globe, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "No Hidden Costs - Transparent pricing with no surprises"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery with unlimited free revisions"
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description: "Money-back guarantee if you're not completely satisfied"
    },
    {
      icon: Users,
      title: "Bilingual Support",
      description: "Dutch & English language support for all clients"
    },
{
  icon: Globe,
  title: "Netherlands & Beyond",
  description: "Serving businesses across the Netherlands and worldwide remotely"
}
,
    {
      icon: Award,
      title: "Professional Quality",
      description: "Industry-standard work that exceeds expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Broeren IT Solutions?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional results that help your business succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;