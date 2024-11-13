import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DrivingTestCanada</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Practice Tests</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Locations</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Start Practice
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Practice Tests</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Locations</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Start Practice
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;