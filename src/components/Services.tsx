import React from 'react';
import { Settings, Wrench, GraduationCap, Truck, Shield, Sparkles } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
}

const services: Service[] = [
  {
    id: 'setup',
    title: 'Aquarium Setup',
    description: 'Complete aquarium installation and setup service for your home or office.',
    icon: <Settings className="w-8 h-8" />,
    features: [
      'Tank positioning and setup',
      'Filtration system installation',
      'Lighting and heating setup',
      'Water conditioning and cycling',
      'Initial fish stocking'
    ],
    price: 'Starting at $199'
  },
  {
    id: 'maintenance',
    title: 'Regular Maintenance',
    description: 'Keep your aquarium healthy with our professional maintenance services.',
    icon: <Wrench className="w-8 h-8" />,
    features: [
      'Weekly/bi-weekly cleaning',
      'Water testing and treatment',
      'Equipment maintenance',
      'Fish health monitoring',
      'Plant care and trimming'
    ],
    price: 'From $75/month'
  },
  {
    id: 'consultation',
    title: 'Expert Consultation',
    description: 'Get professional advice on fish selection, tank design, and aquatic care.',
    icon: <GraduationCap className="w-8 h-8" />,
    features: [
      'Personalized fish recommendations',
      'Tank design consultation',
      'Problem diagnosis and solutions',
      'Breeding advice',
      'Disease treatment guidance'
    ],
    price: '$50/hour'
  },
  {
    id: 'delivery',
    title: 'Delivery Service',
    description: 'Safe and reliable delivery of fish, plants, and aquarium supplies.',
    icon: <Truck className="w-8 h-8" />,
    features: [
      'Temperature-controlled transport',
      'Same-day delivery available',
      'Live arrival guarantee',
      'Setup assistance',
      'Follow-up care instructions'
    ],
    price: 'From $25'
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 emergency support for critical aquarium and fish health issues.',
    icon: <Shield className="w-8 h-8" />,
    features: [
      '24/7 emergency hotline',
      'Rapid response service',
      'Disease treatment',
      'Equipment failure support',
      'Water crisis management'
    ],
    price: 'Starting at $100'
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    description: 'Bespoke aquarium designs and unique aquatic installations.',
    icon: <Sparkles className="w-8 h-8" />,
    features: [
      'Custom tank design',
      'Unique filtration systems',
      'Artistic aquascaping',
      'Rare fish sourcing',
      'Complete project management'
    ],
    price: 'Quote on request'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From complete aquarium setup to ongoing maintenance, our expert team provides 
            comprehensive services to keep your aquatic paradise thriving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-sky-500 to-teal-500 text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sky-600 font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="group w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-6 text-sky-100">
            Our expert team can create a tailored aquatic solution for your specific needs.
          </p>
          <button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};