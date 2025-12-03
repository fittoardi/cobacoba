import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Fish as FishIcon, Settings, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
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
              <Link
                to="/fish"
                className="group bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Explore Our Fish</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
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

      {/* Featured Categories */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Fish Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular fish collections, carefully selected for their beauty and health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Tropical Fish"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    $5-$25
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tropical Fish</h3>
                <p className="text-gray-600 mb-4">Vibrant and colorful fish perfect for community tanks.</p>
                <Link
                  to="/fish"
                  className="group w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2842206/pexels-photo-2842206.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Marine Fish"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    $25-$150
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Marine Fish</h3>
                <p className="text-gray-600 mb-4">Exotic saltwater fish for stunning reef aquariums.</p>
                <Link
                  to="/fish"
                  className="group w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/46253/koi-carp-fish-japan-46253.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Koi Fish"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    $50-$500
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Koi Fish</h3>
                <p className="text-gray-600 mb-4">Premium koi fish for ponds and large aquariums.</p>
                <Link
                  to="/fish"
                  className="group w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/fish"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>View All Fish</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup to maintenance, we provide comprehensive aquatic services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-sky-500 to-teal-500 text-white p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aquarium Setup</h3>
              <p className="text-gray-600 mb-6">Complete installation and setup service for your home or office.</p>
              <p className="text-sky-600 font-semibold text-lg mb-4">Starting at $199</p>
              <Link
                to="/services"
                className="text-sky-600 hover:text-sky-700 font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-sky-500 to-teal-500 text-white p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fish Care</h3>
              <p className="text-gray-600 mb-6">Expert consultation and ongoing care for your aquatic pets.</p>
              <p className="text-sky-600 font-semibold text-lg mb-4">From $50/hour</p>
              <Link
                to="/services"
                className="text-sky-600 hover:text-sky-700 font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-sky-500 to-teal-500 text-white p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FishIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance</h3>
              <p className="text-gray-600 mb-6">Regular cleaning and maintenance to keep your aquarium healthy.</p>
              <p className="text-sky-600 font-semibold text-lg mb-4">From $75/month</p>
              <Link
                to="/services"
                className="text-sky-600 hover:text-sky-700 font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Aquatic Journey?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Visit our store today and discover the perfect fish and supplies for your dream aquarium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Visit Our Store</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/fish"
              className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Browse Fish Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};