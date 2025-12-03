import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Fish, Menu, X, Phone, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-sky-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(555) 123-FISH</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@aquaticparadise.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon-Sat: 9AM-8PM | Sun: 10AM-6PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Fish className="w-8 h-8 text-sky-600" />
            <span className="text-2xl font-bold text-gray-900">
              Aquatic Paradise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-sky-600 transition-colors ${
                isActive('/') ? 'text-sky-600 font-semibold' : 'text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/fish"
              className={`hover:text-sky-600 transition-colors ${
                isActive('/fish') ? 'text-sky-600 font-semibold' : 'text-gray-900'
              }`}
            >
              Fish
            </Link>
            <Link
              to="/services"
              className={`hover:text-sky-600 transition-colors ${
                isActive('/services') ? 'text-sky-600 font-semibold' : 'text-gray-900'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`hover:text-sky-600 transition-colors ${
                isActive('/about') ? 'text-sky-600 font-semibold' : 'text-gray-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:text-sky-600 transition-colors ${
                isActive('/contact') ? 'text-sky-600 font-semibold' : 'text-gray-900'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Visit Store
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-sky-600 transition-colors text-left ${
                  isActive('/') ? 'text-sky-600 font-semibold' : 'text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link
                to="/fish"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-sky-600 transition-colors text-left ${
                  isActive('/fish') ? 'text-sky-600 font-semibold' : 'text-gray-900'
                }`}
              >
                Fish
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-sky-600 transition-colors text-left ${
                  isActive('/services') ? 'text-sky-600 font-semibold' : 'text-gray-900'
                }`}
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-sky-600 transition-colors text-left ${
                  isActive('/about') ? 'text-sky-600 font-semibold' : 'text-gray-900'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-sky-600 transition-colors text-left ${
                  isActive('/contact') ? 'text-sky-600 font-semibold' : 'text-gray-900'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full transition-colors text-center"
              >
                Visit Store
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};