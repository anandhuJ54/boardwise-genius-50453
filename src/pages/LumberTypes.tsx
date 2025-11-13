
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

const LumberTypes = () => {
  const lumberCategories = [
    {
      title: "Hardwoods",
      description: "Typically from deciduous trees, hardwoods are generally denser and more durable than softwoods.",
      types: [
        {
          name: "Oak (Red & White)",
          properties: "Durable, strong, resistant to wear",
          uses: "Furniture, flooring, cabinets, trim",
          characteristics: "Prominent grain pattern, excellent staining properties"
        },
        {
          name: "Maple",
          properties: "Hard, dense, resistant to abrasion",
          uses: "Furniture, flooring, butcher blocks, musical instruments",
          characteristics: "Light color, subtle grain, takes finish well"
        },
        {
          name: "Cherry",
          properties: "Moderately hard, stable after drying",
          uses: "Fine furniture, cabinets, interior woodwork",
          characteristics: "Reddish-brown color that darkens with age, straight grain"
        },
        {
          name: "Walnut",
          properties: "Strong, stable, moderately heavy",
          uses: "High-end furniture, gunstocks, interior trim",
          characteristics: "Rich dark brown color, attractive grain pattern"
        },
        {
          name: "Mahogany",
          properties: "Stable, resistant to rot, moderate hardness",
          uses: "Fine furniture, boat building, musical instruments",
          characteristics: "Reddish-brown color, straight grain, excellent workability"
        }
      ]
    },
    {
      title: "Softwoods",
      description: "From coniferous (evergreen) trees, softwoods are generally less dense than hardwoods but widely used in construction.",
      types: [
        {
          name: "Pine",
          properties: "Lightweight, soft, easy to work with",
          uses: "Construction lumber, furniture, paneling",
          characteristics: "Light color with notable knots, takes paint well"
        },
        {
          name: "Cedar",
          properties: "Naturally resistant to rot and insects",
          uses: "Outdoor furniture, decking, siding, closet lining",
          characteristics: "Aromatic, reddish color, straight grain"
        },
        {
          name: "Douglas Fir",
          properties: "Strong, hard for a softwood, dimensionally stable",
          uses: "Construction framing, plywood, heavy timber structures",
          characteristics: "Yellowish-brown color, straight grain with few knots"
        },
        {
          name: "Spruce",
          properties: "Lightweight, moderate strength, low resin",
          uses: "Construction lumber, aircraft, musical instruments",
          characteristics: "Pale color with straight grain, minimal warping"
        },
        {
          name: "Redwood",
          properties: "Naturally resistant to decay and insects",
          uses: "Outdoor structures, decking, garden features",
          characteristics: "Rich reddish color, straight grain, minimal shrinkage"
        }
      ]
    },
    {
      title: "Exotic Woods",
      description: "Imported from various regions around the world, these woods often offer unique characteristics.",
      types: [
        {
          name: "Teak",
          properties: "Extremely durable, water-resistant, stable",
          uses: "Outdoor furniture, boat building, high-end flooring",
          characteristics: "Golden-brown color, natural oils, weather resistant"
        },
        {
          name: "Rosewood",
          properties: "Dense, hard, naturally oily",
          uses: "Fine furniture, musical instruments, decorative items",
          characteristics: "Dark reddish-brown with black streaks, distinctive scent"
        },
        {
          name: "Ebony",
          properties: "Very dense, hard, takes high polish",
          uses: "Piano keys, decorative inlays, fine furniture accents",
          characteristics: "Dark black color, fine texture, expensive"
        },
        {
          name: "Purpleheart",
          properties: "Extremely hard, strong, water-resistant",
          uses: "Decorative items, inlays, fine furniture",
          characteristics: "Deep purple color that darkens with age, straight grain"
        },
        {
          name: "Zebrawood",
          properties: "Hard, heavy, moderately durable",
          uses: "Decorative veneers, furniture accents, luxury items",
          characteristics: "Light color with dramatic dark brown striping"
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Lumber Types Guide | BoardCalculate</title>
        <meta 
          name="description" 
          content="Learn about different types of lumber, their properties, and best uses in woodworking projects." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Lumber Types Guide</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding different wood types helps you choose the right material for your project. 
              Browse our guide to common lumber varieties and their characteristics.
            </p>
          </div>
          
          {lumberCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-8">{category.description}</p>
                
                <div className="space-y-8">
                  {category.types.map((lumber, lumberIndex) => (
                    <div key={lumberIndex} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-xl font-medium text-primary mb-3">{lumber.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Properties</p>
                          <p className="text-gray-700">{lumber.properties}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Common Uses</p>
                          <p className="text-gray-700">{lumber.uses}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Characteristics</p>
                          <p className="text-gray-700">{lumber.characteristics}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-primary/5 to-amber-light/20 rounded-xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Ready to Calculate Your Lumber Needs?</h2>
                <p className="text-gray-600 mb-6 md:mb-0">
                  Now that you understand lumber types, use our calculators to determine how much you need for your project.
                </p>
              </div>
              
              <Link 
                to="/board-footage-calculator" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-2"
              >
                Use Board Footage Calculator
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LumberTypes;
