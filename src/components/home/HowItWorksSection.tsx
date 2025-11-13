
import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How to Calculate Board Feet (BDFT)</h2>
          <p className="text-lg text-gray-600">
            Understanding board feet (bdft) is essential for any woodworking or construction project. 
            Follow these simple steps to calculate the board footage of your lumber.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Measure Your Lumber</h3>
            <p className="text-gray-600">
              Measure the thickness in inches, width in inches, and length in feet. For metric measurements, 
              you can use centimeters and meters, and our bdft calculator will convert them.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
            <div className="w-12 h-12 bg-amber/10 text-amber rounded-full flex items-center justify-center mb-5">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enter Dimensions</h3>
            <p className="text-gray-600">
              Input your measurements into the calculator above. Be sure to select the correct 
              unit system: Imperial (inches/feet) or Metric (cm/meters) for accurate bdft calculations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Your Results</h3>
            <p className="text-gray-600">
              Click "Calculate" and instantly see the bdft result. You can also calculate the 
              total cost by adding the price per board foot (bdft) in the cost calculator tab.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">The BDFT Formula</h3>
          <div className="bg-gradient-to-r from-gray-50 to-amber-light/20 rounded-lg p-6 mb-6 inline-block mx-auto">
            <p className="text-lg font-medium text-gray-800">
              Board Feet (BDFT) = (Thickness in inches × Width in inches × Length in feet) ÷ 12
            </p>
          </div>
          <p className="text-gray-600">
            This formula gives you the volume of lumber in board feet (bdft), which is the standard measurement 
            used for pricing hardwood lumber in North America.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
