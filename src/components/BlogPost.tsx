
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import { Calendar, Clock, Tag, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  readTime?: string;
  category?: string;
  children: ReactNode;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  date,
  readTime,
  category,
  children,
  slug
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | BoardCalculate Blog</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://boardcalculate.com/blog/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://boardcalculate.com/blog/${slug}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "datePublished": date,
            "author": {
              "@type": "Organization",
              "name": "BoardCalculate"
            },
            "publisher": {
              "@type": "Organization",
              "name": "BoardCalculate",
              "logo": {
                "@type": "ImageObject",
                "url": "https://boardcalculate.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to all articles
              </Link>
              
              <article>
                <header className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                  <p className="text-gray-600 text-lg mb-6">{description}</p>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-4">
                    {category && (
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        <span>{category}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{date}</span>
                    </div>
                    
                    {readTime && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{readTime}</span>
                      </div>
                    )}
                  </div>
                </header>
                
                <div className="prose prose-lg max-w-none">
                  {children}
                </div>
              </article>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
