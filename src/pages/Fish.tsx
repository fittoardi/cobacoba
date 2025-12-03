import React, { useState } from 'react';
import { ExternalLink, Heart, Filter, Search } from 'lucide-react';

interface FishCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  priceRange: string;
  popularity: number;
  type: 'freshwater' | 'saltwater' | 'pond';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const fishCategories: FishCategory[] = [
  {
    id: 'tropical',
    name: 'Tropical Fish',
    description: 'Vibrant and colorful fish perfect for community tanks. Easy to care for and beautiful to watch.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$5-$25',
    popularity: 95,
    type: 'freshwater',
    difficulty: 'beginner'
  },
  {
    id: 'goldfish',
    name: 'Goldfish',
    description: 'Classic and elegant goldfish varieties including fancy, oranda, and ryukin types.',
    image: 'https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$8-$40',
    popularity: 90,
    type: 'freshwater',
    difficulty: 'beginner'
  },
  {
    id: 'betta',
    name: 'Betta Fish',
    description: 'Stunning bettas with flowing fins in various colors. Perfect for smaller aquariums.',
    image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$10-$30',
    popularity: 88,
    type: 'freshwater',
    difficulty: 'beginner'
  },
  {
    id: 'cichlids',
    name: 'Cichlids',
    description: 'Beautiful and intelligent cichlids from African lakes. Known for their vibrant colors.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$15-$60',
    popularity: 85,
    type: 'freshwater',
    difficulty: 'intermediate'
  },
  {
    id: 'marine',
    name: 'Marine Fish',
    description: 'Exotic saltwater fish including clownfish, tangs, and angelfish for reef aquariums.',
    image: 'https://images.pexels.com/photos/2842206/pexels-photo-2842206.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$25-$150',
    popularity: 82,
    type: 'saltwater',
    difficulty: 'advanced'
  },
  {
    id: 'koi',
    name: 'Koi Fish',
    description: 'Premium koi fish for ponds and large aquariums. Symbol of good fortune and prosperity.',
    image: 'https://images.pexels.com/photos/46253/koi-carp-fish-japan-46253.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$50-$500',
    popularity: 78,
    type: 'pond',
    difficulty: 'intermediate'
  },
  {
    id: 'angelfish',
    name: 'Angelfish',
    description: 'Graceful angelfish with distinctive triangular shape and elegant swimming patterns.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$12-$45',
    popularity: 80,
    type: 'freshwater',
    difficulty: 'intermediate'
  },
  {
    id: 'discus',
    name: 'Discus Fish',
    description: 'The king of aquarium fish with stunning colors and patterns. Requires expert care.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$40-$200',
    popularity: 75,
    type: 'freshwater',
    difficulty: 'advanced'
  },
  {
    id: 'tetras',
    name: 'Tetra Fish',
    description: 'Small schooling fish perfect for community tanks. Available in many colorful varieties.',
    image: 'https://images.pexels.com/photos/2842206/pexels-photo-2842206.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    priceRange: '$3-$15',
    popularity: 92,
    type: 'freshwater',
    difficulty: 'beginner'
  }
];

export const Fish: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const filteredFish = fishCategories.filter(fish => {
    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fish.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || fish.type === typeFilter;
    const matchesDifficulty = difficultyFilter === 'all' || fish.difficulty === difficultyFilter;
    
    return matchesSearch && matchesType && matchesDifficulty;
  });

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Fish Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated selection of healthy, vibrant fish from around the world. 
            Each fish is hand-selected for quality and beauty.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search fish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Types</option>
                <option value="freshwater">Freshwater</option>
                <option value="saltwater">Saltwater</option>
                <option value="pond">Pond Fish</option>
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="all">All Difficulty Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFish.map((fish) => (
            <div
              key={fish.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {fish.priceRange}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    fish.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                    fish.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {fish.difficulty.charAt(0).toUpperCase() + fish.difficulty.slice(1)}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {fish.name}
                  </h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    fish.type === 'freshwater' ? 'bg-blue-100 text-blue-800' :
                    fish.type === 'saltwater' ? 'bg-teal-100 text-teal-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {fish.type}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {fish.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Popularity:</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                      <div
                        className="bg-gradient-to-r from-sky-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${fish.popularity}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {fish.popularity}%
                    </span>
                  </div>
                </div>

                <button className="group w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFish.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No fish found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setTypeFilter('all');
                setDifficultyFilter('all');
              }}
              className="mt-4 text-sky-600 hover:text-sky-700 font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We can special order any fish species!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
            Request Special Order
          </button>
        </div>
      </div>
    </div>
  );
};