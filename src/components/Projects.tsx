import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Advanced Cracker Manufacturing Line',
      client: 'Global Foods Inc.',
      location: 'Texas, USA',
      year: '2023',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Complete automated cracker production system with capacity of 10,000 units per hour.'
    },
    {
      title: 'Power Plant Turbine Components',
      client: 'Energy Solutions Ltd.',
      location: 'California, USA',
      year: '2023',
      image: 'https://images.pexels.com/photos/163726/belgium-antwerp-port-piers-163726.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Critical turbine components for 500MW power generation facility with enhanced efficiency.'
    },
    {
      title: 'Industrial Processing Equipment',
      client: 'Manufacturing Corp',
      location: 'Ontario, Canada',
      year: '2022',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Custom-designed processing equipment for specialty food manufacturing operations.'
    },
    {
      title: 'Automated Control Systems',
      client: 'Tech Industries',
      location: 'Michigan, USA',
      year: '2022',
      image: 'https://images.pexels.com/photos/3846585/pexels-photo-3846585.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'State-of-the-art automation and control systems for enhanced operational efficiency.'
    },
    {
      title: 'Heavy-Duty Manufacturing Line',
      client: 'Industrial Partners',
      location: 'Ohio, USA',
      year: '2021',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Complete manufacturing line setup for heavy-duty industrial component production.'
    },
    {
      title: 'Power Generation Components',
      client: 'Energy Corp',
      location: 'Nevada, USA',
      year: '2021',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Precision-engineered components for renewable energy power generation systems.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of our recent manufacturing achievements and successful project deliveries across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  Client: {project.client}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <button className="flex items-center text-blue-800 hover:text-orange-500 font-medium transition-colors duration-200">
                  View Details
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;