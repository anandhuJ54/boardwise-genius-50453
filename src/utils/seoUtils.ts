
/**
 * Generates dynamic meta title based on location
 */
export const generateMetaTitle = (baseTitle: string, location?: string, includeBdft = false): string => {
  let title = location ? `${baseTitle} in ${location}` : baseTitle;
  
  // Add BDFT if requested and not already present
  if (includeBdft && !title.toLowerCase().includes('bdft')) {
    if (title.toLowerCase().includes('board foot')) {
      title = title.replace(/board foot/i, 'Board Foot (BDFT)');
    } else {
      title = `${title} - BDFT Calculator`;
    }
  }
  
  return title;
};

/**
 * Generates dynamic meta description based on location
 */
export const generateMetaDescription = (
  baseDescription: string,
  location?: string,
  includeBdft = false
): string => {
  let description = location ? baseDescription.replace('[LOCATION]', location) : baseDescription;
  
  // Make sure "board foot calculator" appears in the description
  if (!description.toLowerCase().includes('board foot calculator')) {
    description = description.replace(/board feet calculator|bdft calculator/i, 'board foot calculator');
    
    // If neither of those phrases were in the text, add it at the beginning
    if (!description.toLowerCase().includes('board foot calculator')) {
      description = `Use our free board foot calculator to ${description.toLowerCase().charAt(0) === 'u' ? description.substring(1) : description}`;
    }
  }
  
  // Add BDFT if requested and not already present
  if (includeBdft && !description.toLowerCase().includes('bdft')) {
    if (description.toLowerCase().includes('board foot') || description.toLowerCase().includes('board feet')) {
      description = description.replace(/board foot(age)?/i, 'board foot (bdft)')
                           .replace(/board feet/i, 'board feet (bdft)');
    } else {
      description = `${description} Calculate board feet (bdft) quickly and accurately.`;
    }
  }
  
  return description;
};

/**
 * Generates canonical URL
 */
export const generateCanonicalUrl = (
  baseUrl: string = 'https://boardcalculate.com',
  path: string,
  location?: string
): string => {
  const formattedLocation = location 
    ? location.toLowerCase().replace(/\s+/g, '-') 
    : '';
  
  return location 
    ? `${baseUrl}${path}/${formattedLocation}` 
    : `${baseUrl}${path}`;
};

/**
 * Formats location data for URL paths
 */
export const formatLocationForUrl = (location: string): string => {
  return location.toLowerCase().replace(/\s+/g, '-');
};

/**
 * Gets location from URL path
 */
export const getLocationFromPath = (path: string): string | null => {
  const parts = path.split('/').filter(Boolean);
  if (parts.length >= 2) {
    const locationSlug = parts[parts.length - 1];
    return locationSlug.split('-').join(' ');
  }
  return null;
};

/**
 * Generates schema markup for a calculator tool
 */
export const generateCalculatorSchema = (
  title: string, 
  description: string,
  url: string = 'https://boardcalculate.com',
  includeBdft = false
): Record<string, any> => {
  // Add BDFT to title if requested and not already present
  if (includeBdft && !title.toLowerCase().includes('bdft')) {
    if (title.toLowerCase().includes('board foot')) {
      title = title.replace(/board foot/i, 'Board Foot (BDFT)');
    } else {
      title = `${title} - BDFT Calculator`;
    }
  }
  
  // Add BDFT to description if requested and not already present
  if (includeBdft && !description.toLowerCase().includes('bdft')) {
    if (description.toLowerCase().includes('board foot') || description.toLowerCase().includes('board feet')) {
      description = description.replace(/board foot(age)?/i, 'board foot (bdft)')
                           .replace(/board feet/i, 'board feet (bdft)');
    } else {
      description = `${description} Calculate board feet (bdft) quickly and accurately.`;
    }
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "applicationCategory": "UtilityApplication",
    "description": description,
    "operatingSystem": "Any",
    "url": url,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
};

/**
 * Generates FAQ schema markup
 */
export const generateFaqSchema = (
  faqs: Array<{ question: string; answer: string }>
): Record<string, any> => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
