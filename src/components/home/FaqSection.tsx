
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// FAQ data
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

const FaqSection: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About BDFT
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about board feet (bdft) calculations and lumber measurements.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaq === index}
                >
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  <span className="ml-4 flex-shrink-0 text-primary">
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={cn(
                    "transition-all duration-300 ease-in-out",
                    expandedFaq === index ? "max-h-96" : "max-h-0 overflow-hidden"
                  )}
                >
                  <div className="p-6 pt-0 text-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
