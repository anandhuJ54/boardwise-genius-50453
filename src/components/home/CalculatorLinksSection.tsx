
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calculator, 
  Ruler, 
  Move, 
  Square, 
  RefreshCw, 
  DollarSign, 
  Circle, 
  Grid 
} from 'lucide-react';

const CalculatorLinksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Explore Our Woodworking Calculators
          </h2>
          <p className="text-lg text-gray-600">
            Find the right calculator for your specific woodworking or construction needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link 
            to="/board-footage-calculator"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <Calculator className="mr-2 h-5 w-5 text-primary" />
              Board Foot Calculator
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Calculate board feet (bdft) quickly and accurately for any woodworking project.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>

          <Link 
            to="/linear-to-board-foot"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <Ruler className="mr-2 h-5 w-5 text-primary" />
              Linear Foot to BDFT Converter
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Convert between linear feet and board feet (bdft) for lumber with specific dimensions.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>
          
          <Link 
            to="/square-foot-to-board-foot"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <Square className="mr-2 h-5 w-5 text-primary" />
              Square Foot to BDFT Tool
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Convert surface area measurements to volumetric board feet (bdft) for accurate lumber ordering.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>
          
          <Link 
            to="/metric-to-imperial"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <RefreshCw className="mr-2 h-5 w-5 text-primary" />
              Metric to Imperial BDFT Converter
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Convert between metric and imperial lumber measurements for accurate bdft calculations.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>

          <Link 
            to="/hardwood-calculator"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <Ruler className="mr-2 h-5 w-5 text-primary" />
              Hardwood Calculator
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Specialized calculator for hardwood lumber measurements and cost estimations.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>

          <Link 
            to="/cm-to-mm-calculator"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <Move className="mr-2 h-5 w-5 text-primary" />
              CM to MM Calculator
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Convert between centimeters and millimeters for precise woodworking measurements.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>

          <Link 
            to="/mbf-lumber-calculator"
            className="group bg-gradient-to-br from-white to-amber-light/10 rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber transition-colors duration-200 flex items-center">
              <Calculator className="mr-2 h-5 w-5 text-amber" />
              MBF Lumber Calculator
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Calculate thousand board feet (MBF) for large lumber purchases and commercial projects.
            </p>
            <span className="text-amber flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>

          <Link 
            to="/cost-per-board-foot-calculator"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-primary" />
              Cost Per Board Foot Calculator
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Determine cost per board foot to find the best value for your lumber purchases.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>

          <Link 
            to="/segment-calculator"
            className="group bg-white rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 flex items-center">
              <Circle className="mr-2 h-5 w-5 text-primary" />
              Segment Calculator
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Calculate dimensions and angles for segmented woodturning projects and curved woodwork.
            </p>
            <span className="text-primary flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>

          <Link 
            to="/slats-calculator"
            className="group bg-gradient-to-br from-white to-amber-light/10 rounded-xl shadow-subtle p-6 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber transition-colors duration-200 flex items-center">
              <Grid className="mr-2 h-5 w-5 text-amber" />
              Slats Calculator
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Determine optimal slat and gap dimensions for fencing, decking, and other slatted projects.
            </p>
            <span className="text-amber flex items-center text-sm font-medium">
              Use Calculator
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculatorLinksSection;
