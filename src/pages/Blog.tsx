
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Book, ArrowRight } from 'lucide-react';
import SeoHead from '../components/SeoHead';

const Blog = () => {
  const blogPosts = [
    {
      id: 'woodworker-mistakes',
      title: 'Top 5 Mistakes Woodworkers Make When Calculating Lumber Volume',
      excerpt: 'Learn the most common errors when calculating board feet and how to avoid them for more accurate woodworking projects and material estimates.',
      date: 'April 9, 2025',
      category: 'Woodworking Tips',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1670354248055-59a9f144fae2?auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1000',
      backgroundImage: 'https://images.unsplash.com/photo-1670354248055-59a9f144fae2?auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1000',
      slug: '/blog/woodworker-mistakes'
    },
    {
      id: 'bdft-calculator',
      title: 'BDFT Calculator: The Ultimate Guide to Board Foot Measurement Tools',
      excerpt: 'Learn how to use BDFT calculators effectively for woodworking, lumber purchases, and construction projects. Compare top tools and find the best board foot calculator.',
      date: 'April 1, 2025',
      category: 'Tools & Resources',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80', 
      backgroundImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
      slug: '/blog/bdft-calculator'
    },
    {
      id: 'board-foot-formula',
      title: 'Board Foot Formula: Complete Guide to Lumber Calculations',
      excerpt: 'Learn how to accurately calculate board feet for any lumber project using the standard formula and our step-by-step examples.',
      date: 'March 28, 2025',
      category: 'Lumber Calculations',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1553051021-9f94520a6cad?auto=format&fit=crop&w=800&q=80',
      backgroundImage: 'https://images.unsplash.com/photo-1553051021-9f94520a6cad?auto=format&fit=crop&w=800&q=80',
      slug: '/blog/board-foot-formula'
    },
    {
      id: 'common-lumber-sizes',
      title: 'How Many Board Feet in Common Lumber Sizes (2x4, 2x6, and More)',
      excerpt: 'Find out exactly how many board feet are in standard lumber dimensions with our comprehensive reference guide.',
      date: 'March 25, 2025',
      category: 'Lumber Reference',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      backgroundImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      slug: '/blog/common-lumber-sizes'
    },
    {
      id: 'board-feet-to-square-feet',
      title: 'Converting Board Feet to Square Feet: Easy Formulas and Calculator',
      excerpt: 'Master the conversion between board feet and square feet with simple formulas and practical examples for your projects.',
      date: 'March 22, 2025',
      category: 'Conversions',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
      backgroundImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
      slug: '/blog/board-feet-to-square-feet'
    },
    {
      id: 'log-board-foot-calculator',
      title: 'Log Board Foot Calculator: How to Measure Timber Volume',
      excerpt: 'Discover the professional methods for calculating board feet in logs using industry-standard scaling techniques.',
      date: 'March 19, 2025',
      category: 'Timber Scaling',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?auto=format&fit=crop&w=800&q=80',
      backgroundImage: 'https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?auto=format&fit=crop&w=800&q=80',
      slug: '/blog/log-board-foot-calculator'
    },
    {
      id: 'board-foot-calculator-apps',
      title: 'Board Foot Calculator Apps: Top Tools for Woodworkers',
      excerpt: 'Review of the best mobile applications for calculating board feet on the go for professional woodworkers and DIY enthusiasts.',
      date: 'March 15, 2025',
      category: 'Tools & Apps',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80',
      backgroundImage: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80',
      slug: '/blog/board-foot-calculator-apps'
    }
  ];

  return (
    <>
      <SeoHead
        title="Woodworking Blog: BDFT Calculator & Lumber Calculations"
        description="Expert articles on BDFT calculators, board foot formulas, woodworking tips, and lumber conversions to help with your woodworking projects."
        canonicalUrl="https://boardcalculate.com/blog"
        includeBdft={true}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Woodworking & BDFT Calculator Blog</h1>
              <p className="text-gray-600 text-lg mb-12">
                Expert guides, tutorials, and resources for professional woodworkers and DIY enthusiasts
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={post.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${index === 0 ? 'md:col-span-2' : ''}`}>
                    <div className={`${index === 0 ? 'md:flex' : ''}`}>
                      <div className={`${index === 0 ? 'md:w-1/2' : ''}`}>
                        <Link to={post.slug} className="block aspect-video relative bg-gray-100">
                          <div 
                            className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70 flex items-center justify-center"
                            style={{
                              backgroundImage: `url(${post.backgroundImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          >
                            <div className="w-full h-full flex items-center justify-center text-white">
                              <div className="bg-wood-dark/80 p-4 rounded-md text-center">
                                <span className="text-xl font-bold">{post.id.split('-').join(' ').toUpperCase()}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      
                      <div className={`${index === 0 ? 'md:w-1/2' : ''}`}>
                        <CardHeader>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                              {post.category}
                            </span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {post.date}
                            </div>
                            {post.readTime && (
                              <>
                                <span className="mx-2">•</span>
                                {post.readTime}
                              </>
                            )}
                          </div>
                          <CardTitle className="text-xl md:text-2xl">
                            <Link to={post.slug} className="hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        
                        <CardFooter>
                          <Link 
                            to={post.slug} 
                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                          >
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
