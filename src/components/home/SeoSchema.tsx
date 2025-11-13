
interface SeoSchemaProps {
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
}

// Changed from React component to a utility function
export const generateSeoSchemas = ({ faqItems }: SeoSchemaProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Board Foot (BDFT) Calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free online tool to calculate board feet (bdft) for lumber and woodworking projects."
  };

  // Return the stringified schema objects separately
  return {
    faqSchema: JSON.stringify(faqSchema),
    calculatorSchema: JSON.stringify(calculatorSchema)
  };
};

export default generateSeoSchemas;
