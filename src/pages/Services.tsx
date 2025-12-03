import React from 'react';
import { Settings, Wrench, GraduationCap, Truck, Shield, Sparkles, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  popular?: boolean;
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
      'Initial fish stocking',
      '30-day follow-up support'
    ],
    price: 'Starting at $199',
    popular: true
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
      'Plant care and trimming',
      'Detailed maintenance reports'
    ],
    price: 'From $75/month',
    popular: true
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
      'Disease treatment guidance',
      'Written care instructions'
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
      'Follow-up care instructions',
      'Free delivery over $100'
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
      'Water crisis management',
      'Emergency fish rescue'
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
      'Complete project management',
      '1-year warranty included'
    ],
    price: 'Quote on request'
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From complete aquarium setup to ongoing maintenance, our expert team provides 
            comprehensive services to keep your aquatic paradise thriving.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border ${
                service.popular ? 'border-sky-200 ring-2 ring-sky-100' : 'border-gray-100'
              } relative`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

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
                    <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="group w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Service Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your needs and preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Custom plan tailored to your space</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Professional installation and setup</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing care and maintenance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sky-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-6 text-sky-100">
            Our expert team can create a tailored aquatic solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Call (555) 123-FISH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};