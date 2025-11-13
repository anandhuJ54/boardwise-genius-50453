
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BoardFootCalculator from '@/components/BoardFootCalculator';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const BoardFootageCalculator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Schema markup for calculator page
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Board Footage Calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free online tool to calculate board footage for lumber and woodworking projects."
  };
  
  // Schema markup for how-to guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Board Footage",
    "description": "Calculate the board footage of lumber using this step-by-step guide.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Measure Dimensions",
        "text": "Measure the thickness and width in inches, and the length in feet."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Values",
        "text": "Enter these measurements into the calculator's input fields."
      },
      {
        "@type": "HowToStep",
        "name": "Calculate",
        "text": "Click the 'Calculate' button to get the result in board feet."
      }
    ]
  };
  
  return (
    <>
      <Helmet>
        <title>Board Footage Calculator | Free Online Lumber Volume Tool</title>
        <meta 
          name="description" 
          content="Use our free board footage calculator to quickly determine lumber volume. Convert dimensions to board feet for accurate pricing and material planning."
        />
        <link rel="canonical" href="https://boardwise.com/board-footage-calculator" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Board Footage Calculator | Free Online Lumber Volume Tool" />
        <meta property="og:description" content="Use our free board footage calculator to quickly determine lumber volume. Convert dimensions to board feet for accurate pricing and material planning." />
        <meta property="og:url" content="https://boardwise.com/board-footage-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Board Footage Calculator | Free Online Lumber Volume Tool" />
        <meta name="twitter:description" content="Use our free board footage calculator to quickly determine lumber volume. Convert dimensions to board feet for accurate pricing and material planning." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" />
        
        {/* Schema.org JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(calculatorSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] -left-[20%] w-[60%] h-[60%] rounded-full bg-primary/5 filter blur-3xl opacity-70"></div>
            <div className="absolute -top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-100/50 filter blur-3xl opacity-50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6",
                "transform transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Board Footage Calculator
              </h1>
              
              <p className={cn(
                "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10",
                "transform transition-all duration-1000 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Quickly and accurately calculate board footage for all your lumber projects.
                Our free tool helps you determine precise volume measurements for hardwood and softwood.
              </p>
            </div>
            
            <div className={cn(
              "max-w-4xl mx-auto mt-10",
              "transform transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <BoardFootCalculator />
            </div>
          </div>
        </section>
        
        {/* Explanation Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Understanding Board Footage
                  </h2>
                  
                  <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-600">
                    <p>
                      Board footage is the standard volume measurement for lumber in North America. It represents the volume of a piece of wood that is 1 foot long, 1 foot wide, and 1 inch thick (144 cubic inches or approximately 2,360 cubic centimeters).
                    </p>
                    
                    <h3>The Board Foot Formula</h3>
                    <p>
                      To calculate board feet, use this formula:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg my-4">
                      <p className="font-medium text-gray-800 text-center">
                        Board Feet = (Thickness in inches × Width in inches × Length in feet) ÷ 12
                      </p>
                    </div>
                    
                    <h3>When to Use Board Footage</h3>
                    <p>
                      Board footage is primarily used when:
                    </p>
                    <ul>
                      <li>Purchasing hardwood lumber</li>
                      <li>Estimating material costs for woodworking projects</li>
                      <li>Calculating shipping weights and volumes</li>
                      <li>Determining how much wood is needed for specific projects</li>
                    </ul>
                    
                    <h3>Board Feet vs. Other Measurements</h3>
                    <p>
                      Unlike linear feet (which only measure length) or square feet (which measure area), board feet calculate volume. This makes board footage ideal for lumber pricing as it accounts for all three dimensions of the wood.
                    </p>
                    
                    <h3>Using Our Calculator</h3>
                    <p>
                      Our board footage calculator eliminates the need for manual calculations. Simply enter the dimensions of your lumber, select your preferred unit system, and get instant results. You can also calculate total costs by adding the price per board foot.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="sticky top-32">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Get a Lumber Quote
                    </h3>
                    <LeadForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Common Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Common Uses for Board Footage Calculations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Woodworking Projects
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Accurately estimate the amount of lumber needed for furniture, cabinets, and other woodworking projects. Board footage helps you purchase the right amount of material and calculate costs precisely.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Furniture construction</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Cabinet making</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Decorative woodworking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Construction
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Calculate large lumber orders for construction projects with precision. Board footage helps contractors estimate costs and materials for both structural and finish woodwork.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Timber framing</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Flooring installation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Trim work and moldings</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Lumber Purchasing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Improve accuracy when buying lumber from suppliers. Board footage is the standard measurement for pricing hardwoods, making it essential for accurate cost estimates.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Hardwood acquisition</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Exotic wood purchasing</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Bulk order planning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Professional Woodworking
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Help professional woodworkers and contractors provide accurate quotes to clients. Board footage calculations ensure precise material costing for project bids.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Client quotes and estimates</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Material ordering</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Inventory management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Try Our Other Lumber Calculators
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Explore our full suite of woodworking and lumber calculators to make your next project a success.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <a 
                  href="/linear-to-board-foot"
                  className="group px-6 py-5 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                    Linear to Board Foot
                  </h3>
                </a>
                
                <a 
                  href="/square-foot-to-board-foot"
                  className="group px-6 py-5 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                    Square Foot to Board Foot
                  </h3>
                </a>
                
                <a 
                  href="/metric-to-imperial"
                  className="group px-6 py-5 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                    Metric to Imperial
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default BoardFootageCalculator;
