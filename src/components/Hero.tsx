import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Pass Your Driving Test
              <span className="text-blue-600"> First Time</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Practice with our comprehensive driving test preparation platform. Get ready for your G1, G2, or G test with confidence.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="ml-2 text-gray-700">Official test questions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="ml-2 text-gray-700">Unlimited practice tests</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="ml-2 text-gray-700">Performance tracking</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Start Free Practice
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
              alt="Driving test preparation"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Success rate for prepared students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;