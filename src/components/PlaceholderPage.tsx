
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description = "This page is coming soon. Check back later for more information." 
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | BoardWise</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-100 mb-8">
              <p className="text-gray-500">We're working on this content and it will be available soon.</p>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Return to Home
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PlaceholderPage;
