import React from 'react';
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">DrivingTestCanada</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your trusted partner in driving test preparation. We help you achieve your goals with confidence.
            </p>
            <div className="mt-6 flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Practice Tests</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Study Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Test Locations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">G1 Practice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">G2 Practice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Full G Practice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Road Signs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@drivingtestcanada.ca</li>
              <li className="text-gray-400">Phone: 1-800-555-0123</li>
              <li className="text-gray-400">Support Hours: 9AM - 5PM EST</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DrivingTestCanada. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;