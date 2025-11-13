
import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-amber-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Use Our BDFT Calculator</h2>
          <p className="text-lg text-gray-600">
            Our board foot calculator makes lumber calculations quick, accurate, and hassle-free. Here's how it helps you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Time</h3>
            <p className="text-gray-600">
              Instantly calculate board feet (bdft) without manual calculations or complex formulas.
              Get accurate lumber volume results in seconds.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Avoid Costly Mistakes</h3>
            <p className="text-gray-600">
              Precision board footage measurements help prevent ordering too much or too little lumber,
              saving you money and reducing waste.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Unit Conversion</h3>
            <p className="text-gray-600">
              Seamlessly switch between imperial and metric units with our built-in conversion
              system for accurate board feet (bdft) calculations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Calculate Costs</h3>
            <p className="text-gray-600">
              Estimate project expenses by including the price per board foot. Get total cost
              calculations instantly for your lumber purchases.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Works on Any Device</h3>
            <p className="text-gray-600">
              Access our board foot calculator from desktop, tablet, or mobile. Perfect for on-site
              calculations or in the woodshop.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Free to Use</h3>
            <p className="text-gray-600">
              Our board foot (bdft) calculator is completely free, with no limits on calculations
              or features. No signup required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
