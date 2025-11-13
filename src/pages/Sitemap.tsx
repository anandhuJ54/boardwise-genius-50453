
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sitemapLinks = [
  { path: '/', title: 'Home', description: 'Board foot calculator and wood measurement tools' },
  { path: '/board-footage-calculator', title: 'Board Footage Calculator', description: 'Calculate board feet for lumber projects' },
  { path: '/linear-to-board-foot', title: 'Linear to Board Foot', description: 'Convert linear feet to board feet' },
  { path: '/square-foot-to-board-foot', title: 'Square Foot to Board Foot', description: 'Convert square feet to board feet' },
  { path: '/metric-to-imperial', title: 'Metric to Imperial', description: 'Convert metric to imperial lumber measurements' },
  { path: '/hardwood-calculator', title: 'Hardwood Calculator', description: 'Calculate hardwood needs for projects' },
  { path: '/cm-to-mm-calculator', title: 'CM to MM Calculator', description: 'Convert between centimeters and millimeters' },
  { path: '/lumber-types', title: 'Lumber Types Guide', description: 'Learn about different types of lumber and their properties' },
  { path: '/woodworking-tips', title: 'Woodworking Tips', description: 'Professional tips to improve your woodworking skills' },
  { path: '/about', title: 'About Us', description: 'About BoardCalculate' },
  { path: '/contact', title: 'Contact', description: 'Contact BoardCalculate' },
  { path: '/privacy', title: 'Privacy Policy', description: 'Privacy policy for BoardCalculate' },
  { path: '/terms', title: 'Terms of Service', description: 'Terms of service for BoardCalculate' },
  { path: '/blog', title: 'Blog', description: 'Articles about woodworking and lumber' },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap | BoardCalculate</title>
        <meta 
          name="description" 
          content="Browse all pages on BoardCalculate - your resource for lumber calculators and woodworking tools." 
        />
        <link rel="canonical" href="https://boardcalculate.com/sitemap" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Sitemap</h1>
          
          <div className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100">
            <p className="text-gray-600 mb-8">
              Browse all available pages and resources on BoardCalculate. Our sitemap helps you navigate through all our calculators and informational pages.
            </p>
            
            <div className="space-y-6">
              {sitemapLinks.map((link, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <Link 
                    to={link.path}
                    className="text-xl font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    {link.title}
                  </Link>
                  <p className="text-gray-600 mt-1">{link.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
