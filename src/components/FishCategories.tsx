import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

interface FishCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  priceRange: string;
  popularity: number;
}

const fishCategories: FishCategory[] = [
  {
    id: 'tropical',
    name: 'Tropical Fish',
    description: 'Vibrant and colorful fish perfect for community tanks. Easy to care for and beautiful to watch.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$5-$25',
    popularity: 95
  },
  {
    id: 'goldfish',
    name: 'Goldfish',
    description: 'Classic and elegant goldfish varieties including fancy, oranda, and ryukin types.',
    image: 'https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$8-$40',
    popularity: 90
  },
  {
    id: 'betta',
    name: 'Betta Fish',
    description: 'Stunning bettas with flowing fins in various colors. Perfect for smaller aquariums.',
    image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$10-$30',
    popularity: 88
  },
  {
    id: 'cichlids',
    name: 'Cichlids',
    description: 'Beautiful and intelligent cichlids from African lakes. Known for their vibrant colors.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$15-$60',
    popularity: 85
  },
  {
    id: 'marine',
    name: 'Marine Fish',
    description: 'Exotic saltwater fish including clownfish, tangs, and angelfish for reef aquariums.',
    image: 'https://images.pexels.com/photos/2842206/pexels-photo-2842206.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$25-$150',
    popularity: 82
  },
  {
    id: 'koi',
    name: 'Koi Fish',
    description: 'Premium koi fish for ponds and large aquariums. Symbol of good fortune and prosperity.',
    image: 'https://images.pexels.com/photos/46253/koi-carp-fish-japan-46253.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$50-$500',
    popularity: 78
  }
];

export const FishCategories: React.FC = () => {
  return (
    <section id="fish" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Fish Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated selection of healthy, vibrant fish from around the world. 
            Each fish is hand-selected for quality and beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.priceRange}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Popularity:</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-sky-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${category.popularity}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {category.popularity}%
                    </span>
                  </div>
                </div>

                <button className="group w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Collection</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We can special order any fish species!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
            Request Special Order
          </button>
        </div>
      </div>
    </section>
  );
};