import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sibakathulla Basheer",
      company: "All India President, AIHRO Organization",
      location: "Bangalore",
      rating: 5,
      text: "Broeren IT Solutions built a powerful and clean website for our human rights initiative. It has helped us reach more supporters across India.",
    },
    {
      name: "Redoun Robert",
      company: "FinSolve Consultancy",
      location: "Ravenstein",
      rating: 5,
      text: "The financial services site delivered was modern, professional, and loads fast on all devices.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Lazer Studio",
      company: "",
      location: "Chennai",
      rating: 5,
      text: "Broeren IT Solutions understands exactly what I say and creates the design accordingly.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Vasanth Photos",
      company: "",
      location: "Chennai",
      rating: 5,
      text: "Broeren IT Solutions completes the work either at the time we request or within the agreed-upon timeframe.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Jack Photography",
      company: "",
      location: "Chennai",
      rating: 5,
      text: "The designs from Broeren IT Solutions are more creative than I expect.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Rathi Studio",
      company: "",
      location: "Chennai",
      rating: 5,
      text: "Broeren IT Solutions charges fairly for the work, offering prices lower than the market rate.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Mathivathani Studio",
      company: "",
      location: "Chennai",
      rating: 5,
      text: "Broeren IT Solutions is honest and trustworthy. They complete the work with integrity and never deceive after payment.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo/415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from businesses around the globe 🌍
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl relative">
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote className="h-8 w-8" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
