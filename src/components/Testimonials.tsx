import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
 const testimonials = [
  {
    name: "Sibakathulla Basheer",
    company: "All India President of aihro organization",
    location: "Bangalore",
    rating: 5,
    text: "Broeren IT Solutions built a powerful and clean website for our human rights initiative. It’s helped us reach more supporters across India.",
   
  },
  {
    name: "Redoun Robert",
    company: "FinSolve Consultancy",
    location: "Ravenstein",
    rating: 5,
    text: "The financial services site delivered was modern, professional, and loaded fast on all devices. Our client inquiries have increased dramatically.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "John",
    company: "Creative Splash",
    location: "Chennai",
    rating: 5,
    text: "From marriage albums to posters, their Adobe Photoshop work is just excellent. Quick delivery, great communication, and stunning visuals!",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Don't just take our word for it – hear from businesses around the Globe 🌍
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
