import React from 'react';
import { Users, Globe, Monitor, Brush } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "15+",
      label: "Happy Clients",
      description: "Businesses trust our digital services",
    },
    {
      icon: Brush,
      number: "3,000+",
      label: "Creative Projects",
      description: "Albums, flyers, banners, social media designs",
    },
    {
      icon: Monitor,
      number: "Custom",
      label: "Websites Delivered",
      description: "Built with HTML, React & Tailwind",
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div
                className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                aria-label={`${stat.label} Icon`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-blue-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
