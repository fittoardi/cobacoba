import React from 'react';
import { Award, Users, Heart, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Aquatic Paradise
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Aquatic Paradise has been the premier destination for ornamental fish 
              enthusiasts. We're passionate about bringing the beauty and tranquility of aquatic life 
              into homes and businesses across the region.
            </p>
            
            <div className="space-y-6 mb-8">
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

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
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
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h4>
              <p className="text-sky-600 font-medium mb-2">Marine Specialist</p>
              <p className="text-gray-600 text-sm">
                10+ years experience with saltwater aquariums and reef systems.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Mike Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Mike Chen</h4>
              <p className="text-sky-600 font-medium mb-2">Freshwater Expert</p>
              <p className="text-gray-600 text-sm">
                Specializes in tropical fish breeding and aquascaping design.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Emma Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Emma Rodriguez</h4>
              <p className="text-sky-600 font-medium mb-2">Aquatic Veterinarian</p>
              <p className="text-gray-600 text-sm">
                Fish health specialist with focus on disease prevention and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};