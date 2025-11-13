
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  location?: string;
  includeBdft?: boolean;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/opengraph-image.png",
  schema,
  location,
  includeBdft = false,
}) => {
  // Add BDFT to title if requested and not already present
  const pageTitle = (() => {
    let baseTitle = location ? `${title} in ${location}` : title;
    if (includeBdft && !baseTitle.toLowerCase().includes('bdft')) {
      // Add BDFT if not already in the title
      if (baseTitle.toLowerCase().includes('board foot')) {
        baseTitle = baseTitle.replace(/board foot/i, 'Board Foot (BDFT)');
      } else {
        baseTitle = `${baseTitle} - BDFT Calculator`;
      }
    }
    
    // Ensure consistent branding
    if (!baseTitle.includes('BoardCalculate')) {
      baseTitle = `${baseTitle} | BoardCalculate`;
    }
    
    return baseTitle;
  })();
  
  // Ensure "board foot calculator" is in the description and add BDFT if requested
  const pageDescription = (() => {
    let baseDesc = location ? `${description} in ${location}` : description;
    
    // Make sure "board foot calculator" appears in the description
    if (!baseDesc.toLowerCase().includes('board foot calculator')) {
      baseDesc = baseDesc.replace(/board feet calculator|bdft calculator/i, 'board foot calculator');
      
      // If neither of those phrases were in the text, add it at the beginning
      if (!baseDesc.toLowerCase().includes('board foot calculator')) {
        baseDesc = `Use our free board foot calculator to ${baseDesc.toLowerCase().charAt(0) === 'u' ? baseDesc.substring(1) : baseDesc}`;
      }
    }
    
    // Add BDFT if requested and not already present
    if (includeBdft && !baseDesc.toLowerCase().includes('bdft')) {
      if (baseDesc.toLowerCase().includes('board foot') || baseDesc.toLowerCase().includes('board feet')) {
        baseDesc = baseDesc.replace(/board foot(age)?/i, 'board foot (bdft)')
                        .replace(/board feet/i, 'board feet (bdft)');
      } else {
        baseDesc = `${baseDesc} Calculate board feet (bdft) quickly and accurately.`;
      }
    }
    
    // Ensure description is not too long for SEO (limit to 160 chars)
    if (baseDesc.length > 160) {
      baseDesc = baseDesc.substring(0, 157) + '...';
    }
    
    return baseDesc;
  })();
  
  // Create schema markup for calculator
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": includeBdft ? `${pageTitle} - BDFT Calculator` : pageTitle,
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Any",
    "description": pageDescription
  };

  // Combine with custom schema if provided
  const fullSchema = schema 
    ? { ...calculatorSchema, ...schema } 
    : calculatorSchema;

  const fullOgImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${window.location.origin}${ogImage}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify(fullSchema)}
      </script>
    </Helmet>
  );
};

export default SeoHead;
