
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';

// Import refactored components
import HeroSection from '@/components/home/HeroSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FeatureSection from '@/components/home/FeatureSection';
import FaqSection from '@/components/home/FaqSection';
import CalculatorLinksSection from '@/components/home/CalculatorLinksSection';
import generateSeoSchemas from '@/components/home/SeoSchema';
import { Section, H2, P } from '@/components/ui/typography';

// FAQ data for SEO schema
const faqItems = [
  {
    question: "What is a board foot (bdft)?",
    answer: "A board foot (bdft) is a unit of volume for measuring lumber in the United States and Canada. One board foot equals 1 foot × 1 foot × 1 inch (144 cubic inches) or approximately 2,360 cubic centimeters. It's the standard unit used for buying and selling hardwood lumber in North America, often abbreviated as 'bdft'."
  },
  {
    question: "How do you calculate board feet (bdft)?",
    answer: "To calculate board feet (bdft), multiply the thickness (in inches) by the width (in inches) by the length (in feet), then divide by 12. The formula is: (thickness × width × length) ÷ 12 = board feet (bdft). For example, a piece of lumber that is 1 inch thick, 6 inches wide, and 8 feet long would be (1 × 6 × 8) ÷ 12 = 4 bdft."
  },
  {
    question: "Is calculating board feet (bdft) different for hardwood vs softwood?",
    answer: "The formula to calculate board feet (bdft) is the same for both hardwood and softwood. However, hardwoods are typically sold by the board foot, while softwoods (construction lumber) are often sold by linear foot or piece count. Hardwoods also might be measured using the 'quarter' system for thickness (4/4, 8/4, etc.), where 4/4 equals 1 inch."
  },
  {
    question: "Why use board feet (bdft) instead of square feet?",
    answer: "Board feet (bdft) accounts for three dimensions (including thickness), making it a volume measurement, while square feet only accounts for two dimensions (length and width). This makes board feet (bdft) more appropriate for lumber pricing because it factors in the varying thicknesses of wood, which significantly affects the amount of usable material."
  },
  {
    question: "Can I use this calculator for all types of lumber?",
    answer: "Yes, this board foot calculator works for all types of lumber, including hardwoods, softwoods, and exotic species. The calculation is the same regardless of wood type. However, be aware that some specialty lumber products like veneers or certain engineered wood products may be sold using different units of measure."
  },
  {
    question: "How accurate is the board foot (bdft) calculation?",
    answer: "Our calculator provides precise board footage calculations based on the dimensions you input. However, in real-world applications, there can be variations due to factors like rough-cut vs. finished lumber, moisture content, and industry-specific rounding practices. For professional applications, we recommend consulting with your lumber supplier."
  }
];

const Index: React.FC = () => {
  // Generate the schema JSON for SEO using our utility function
  const { faqSchema, calculatorSchema } = generateSeoSchemas({ faqItems });
  
  return (
    <>
      <Helmet>
        <title>Board Foot Calculator (BDFT) | Free Lumber Measurement Tool</title>
        <meta 
          name="description" 
          content="Use our free board foot calculator to quickly measure lumber. Our easy-to-use bdft calculator helps you calculate board feet (bdft) accurately for any woodworking or construction project."
        />
        <link rel="canonical" href="https://boardcalculate.com/" />
        
        <meta property="og:title" content="Board Foot Calculator (BDFT) | Free Lumber Measurement Tool" />
        <meta property="og:description" content="Use our free board foot calculator to quickly measure lumber. Our easy-to-use bdft calculator helps you calculate board feet (bdft) accurately for any woodworking or construction project." />
        <meta property="og:url" content="https://boardcalculate.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Board Foot Calculator (BDFT) | Free Lumber Measurement Tool" />
        <meta name="twitter:description" content="Use our free board foot calculator to quickly measure lumber. Our easy-to-use bdft calculator helps you calculate board feet (bdft) accurately for any woodworking or construction project." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" />
        
        <script type="application/ld+json">{faqSchema}</script>
        <script type="application/ld+json">{calculatorSchema}</script>
      </Helmet>
      
      <Layout>
        <HeroSection />
        <HowItWorksSection />
        <FeatureSection />
        
        {/* New section for Lumber Calculators & Converters */}
        <Section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <H2 className="text-center mb-8 border-none">Lumber Calculators & Converters</H2>
              <P className="text-center text-gray-600 mb-10">
                Use our complete suite of wood and lumber calculation tools for all your woodworking and construction projects.
              </P>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/board-footage-calculator" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Board Foot Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate board feet (bdft) for any lumber dimensions.</p>
                </Link>
                
                <Link to="/square-foot-to-board-foot" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Square Feet to Board Feet</h3>
                  <p className="text-sm text-gray-600">Convert between square feet and board feet.</p>
                </Link>
                
                <Link to="/linear-to-board-foot" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Linear to Board Foot</h3>
                  <p className="text-sm text-gray-600">Convert linear feet to board feet for lumber.</p>
                </Link>
                
                <Link to="/cost-per-board-foot-calculator" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Cost Per Board Foot</h3>
                  <p className="text-sm text-gray-600">Calculate lumber costs based on board footage.</p>
                </Link>
                
                <Link to="/hardwood-calculator" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Hardwood Calculator</h3>
                  <p className="text-sm text-gray-600">Specialized calculator for hardwood lumber.</p>
                </Link>
                
                <Link to="/mbf-lumber-calculator" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">MBF Lumber Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate thousand board feet for bulk lumber.</p>
                </Link>
                
                <Link to="/slats-calculator" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Slats Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate lumber needed for slat projects.</p>
                </Link>
                
                <Link to="/segment-calculator" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Segment Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate dimensions for segmented woodturning.</p>
                </Link>
                
                <Link to="/metric-to-imperial" className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-medium text-primary">Metric to Imperial</h3>
                  <p className="text-sm text-gray-600">Convert between metric and imperial lumber measurements.</p>
                </Link>
              </div>
            </div>
          </div>
        </Section>
        
        <FaqSection />
        <CalculatorLinksSection />
      </Layout>
    </>
  );
};

export default Index;
