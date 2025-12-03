import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer Smith',
    role: 'Home Aquarium Owner',
    content: 'Aquatic Paradise transformed my living room with a stunning 75-gallon community tank. The fish are healthy and beautiful, and their maintenance service keeps everything perfect. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '2',
    name: 'David Kim',
    role: 'Restaurant Owner',
    content: 'We needed a large aquarium for our restaurant entrance. The team at Aquatic Paradise designed and installed a breathtaking 200-gallon tank that our customers absolutely love. Professional service from start to finish.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '3',
    name: 'Lisa Thompson',
    role: 'Marine Aquarium Enthusiast',
    content: 'As a beginner with saltwater aquariums, I was nervous about getting started. The experts here guided me through everything and continue to provide excellent support. My reef tank is thriving!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Aquatic Paradise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-sky-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sky-100 text-lg mb-6">
            Join hundreds of satisfied customers who trust Aquatic Paradise for their aquatic needs.
          </p>
          <button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};