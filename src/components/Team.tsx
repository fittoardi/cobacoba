import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Budi Santoso',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: '25+ years of leadership in industrial manufacturing with extensive experience in strategic planning and business development.',
      linkedin: '#',
      email: 'bsantoso@sentosateknik.com'
    },
    {
      name: 'Sari Wijaya',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Engineering expert with Master in Mechanical Engineering, specializing in advanced manufacturing technologies and automation.',
      linkedin: '#',
      email: 'swijaya@sentosateknik.com'
    },
    {
      name: 'Ahmad Rahman',
      position: 'Director of Operations',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Operations specialist with 20 years in manufacturing operations, quality control, and supply chain management.',
      linkedin: '#',
      email: 'arahman@sentosateknik.com'
    },
    {
      name: 'Dewi Kusuma',
      position: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Innovative engineer leading our R&D efforts in cracker machine design and power plant equipment development.',
      linkedin: '#',
      email: 'dkusuma@sentosateknik.com'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals driving innovation and excellence at CV Sentosa Teknik Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-blue-800 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-800 font-medium mb-4">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.linkedin}
                  className="text-gray-400 hover:text-blue-800 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="text-gray-400 hover:text-blue-800 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;