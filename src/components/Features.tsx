import React from 'react';
import { Book, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Book className="h-8 w-8 text-blue-600" />,
      title: "Complete Study Material",
      description: "Access comprehensive study guides and practice questions covering all test topics."
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Test Scheduling",
      description: "Find available test dates and schedule your driving test with ease."
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Location Finder",
      description: "Locate the nearest DriveTest centres and get directions."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Progress Tracking",
      description: "Monitor your progress and identify areas that need improvement."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Everything You Need to Succeed</h2>
          <p className="mt-4 text-xl text-gray-600">
            We provide all the tools and resources you need to pass your driving test
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to start practicing?</h3>
              <p className="mt-4 text-gray-600">
                Join thousands of successful drivers who prepared with our platform.
                Start your journey today with our free practice tests.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Get Started Now
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=1000"
                alt="Student driver"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;