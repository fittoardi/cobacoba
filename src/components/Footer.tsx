import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Fish className="w-8 h-8 text-sky-400" />
              <span className="text-2xl font-bold">Aquatic Paradise</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your premier destination for ornamental fish, aquarium supplies, and expert aquatic services. 
              Creating underwater paradises for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-sky-600 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-sky-600 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-sky-600 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-sky-600 p-3 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fish" className="text-gray-400 hover:text-white transition-colors">
                  Fish Collection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Aquarium Setup</li>
              <li>Regular Maintenance</li>
              <li>Expert Consultation</li>
              <li>Delivery Service</li>
              <li>Emergency Care</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-1" />
                <div className="text-gray-400">
                  <p>123 Aquatic Boulevard</p>
                  <p>Marina District, CA 94123</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <span className="text-gray-400">(555) 123-FISH</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <span className="text-gray-400">info@aquaticparadise.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aquatic Paradise. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};