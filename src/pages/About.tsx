import React from 'react';
import { Award, Users, Heart, Target, Star, Calendar, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Aquatic Paradise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been passionate about bringing the beauty and tranquility 
            of aquatic life into homes and businesses across the region.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Aquatic Paradise began as a small family business with a simple dream: to share our 
              love for aquatic life with fellow enthusiasts. What started in a modest storefront 
              has grown into the region's premier destination for ornamental fish and aquarium services.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that every aquarium tells a story, and we're here to help you write yours. 
              From your first goldfish to elaborate reef systems, we provide the expertise, quality 
              fish, and ongoing support to make your aquatic dreams a reality.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-100 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Passion</h3>
                  <p className="text-gray-600">
                    We believe every fish deserves a loving home and every aquarist deserves expert guidance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide healthy, beautiful fish and expert advice that helps create thriving aquatic ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2627913/pexels-photo-2627913.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our beautiful aquarium store"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Fish Species</div>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Store Locations</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-sky-600 font-medium mb-2">Marine Specialist</p>
              <p className="text-gray-600 text-sm mb-4">
                10+ years experience with saltwater aquariums and reef systems. Sarah specializes 
                in creating stunning marine environments.
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Mike Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Chen</h3>
              <p className="text-sky-600 font-medium mb-2">Freshwater Expert</p>
              <p className="text-gray-600 text-sm mb-4">
                Specializes in tropical fish breeding and aquascaping design. Mike has won 
                multiple awards for his aquarium designs.
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Emma Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emma Rodriguez</h3>
              <p className="text-sky-600 font-medium mb-2">Aquatic Veterinarian</p>
              <p className="text-gray-600 text-sm mb-4">
                Fish health specialist with focus on disease prevention and treatment. 
                Emma ensures all our fish are healthy and thriving.
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600 text-sm">
                Every fish deserves the best care and a loving home.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for the highest quality in everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Building lasting relationships with fellow aquarists.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Constantly improving our methods and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};