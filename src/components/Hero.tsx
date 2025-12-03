import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful aquarium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-teal-900/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
              Aquatic Paradise
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Discover the finest collection of ornamental fish, premium aquarium supplies, 
            and expert aquatic services. Transform your space into an underwater paradise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('fish')}
              className="group bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Explore Our Fish</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="group border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-400 mr-2" />
                <span className="text-3xl font-bold">4.9</span>
              </div>
              <p className="text-gray-300">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-teal-400 mr-2" />
                <span className="text-3xl font-bold">1000+</span>
              </div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-sky-400 mr-2" />
                <span className="text-3xl font-bold">15+</span>
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};