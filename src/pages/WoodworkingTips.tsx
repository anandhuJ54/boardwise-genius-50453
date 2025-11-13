
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Wrench, Mountain, Ruler, Shield, Palette, Settings } from 'lucide-react';

const WoodworkingTips = () => {
  const tipCategories = [
    {
      title: "Tool Selection & Maintenance",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      tips: [
        "Invest in quality measuring tools first - they're the foundation of accurate woodworking",
        "Sharpen chisels and plane blades regularly - dull tools are inefficient and dangerous",
        "Clean and wax your table saw surface periodically to reduce friction",
        "Store hand tools in a climate-controlled environment to prevent rust and damage"
      ]
    },
    {
      title: "Joinery Techniques",
      icon: <Mountain className="h-6 w-6 text-primary" />,
      tips: [
        "Practice on scrap pieces before attempting complex joinery on your project",
        "For stronger glue joints, slightly roughen smooth surfaces with 120-grit sandpaper",
        "Use a marking knife instead of a pencil for more precise joint layout",
        "When cutting dovetails, always cut pins first, then mark and cut tails to match"
      ]
    },
    {
      title: "Measuring & Layout",
      icon: <Ruler className="h-6 w-6 text-primary" />,
      tips: [
        "Use a story stick for repetitive measurements to ensure consistency",
        "Account for blade kerf (thickness) when cutting multiple pieces from one board",
        "Mark your cut line on the waste side of the measurement",
        "For precision layout, use dividers to step off equal distances rather than measuring each individually"
      ]
    },
    {
      title: "Safety Practices",
      icon: <Shield className="h-6 w-6 text-primary" />,
      tips: [
        "Always wear appropriate eye and ear protection",
        "Use push sticks and blocks when working with table saws and routers",
        "Never remove guards from power tools unless absolutely necessary",
        "Keep a fire extinguisher rated for wood and electrical fires in your workshop"
      ]
    },
    {
      title: "Finishing Techniques",
      icon: <Palette className="h-6 w-6 text-primary" />,
      tips: [
        "Sand with progressively finer grits for a smoother finish",
        "Apply finishes in a dust-free environment at appropriate temperature and humidity levels",
        "Test finishes on scrap pieces of the same wood as your project",
        "For oil-based finishes, use 'seal coat' (thinned shellac) first to prevent blotching on pine and cherry"
      ]
    },
    {
      title: "Workshop Setup",
      icon: <Settings className="h-6 w-6 text-primary" />,
      tips: [
        "Organize your workshop with frequently used tools most accessible",
        "Install adequate lighting, especially over workbenches and power tools",
        "Consider a dust collection system to protect your lungs and keep equipment running smoothly",
        "Set up dedicated areas for different operations: measuring, cutting, assembly, and finishing"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Woodworking Tips | BoardCalculate</title>
        <meta name="description" content="Professional woodworking tips and techniques to improve your projects and skills." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Woodworking Tips</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Improve your woodworking skills with these practical tips and techniques from experienced woodworkers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {tipCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold ml-3">{category.title}</h2>
                </div>
                
                <Separator className="mb-6" />
                
                <ul className="space-y-4">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex">
                      <span className="text-amber mr-2">•</span>
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-amber-light/20 rounded-xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Need More Help With Your Project?</h2>
                <p className="text-gray-600 mb-6 md:mb-0">
                  Use our calculators to accurately measure lumber needed for your next woodworking project.
                </p>
              </div>
              
              <Link 
                to="/board-footage-calculator" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-2"
              >
                Try Our Board Footage Calculator
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

export default WoodworkingTips;
