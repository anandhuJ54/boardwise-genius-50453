
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Calculators',
      links: [
        { label: 'Board Foot Calculator', path: '/board-footage-calculator' },
        { label: 'Linear Foot to Board Foot', path: '/linear-to-board-foot' },
        { label: 'Square Foot to Board Foot', path: '/square-foot-to-board-foot' },
        { label: 'MBF Lumber Calculator', path: '/mbf-lumber-calculator' },
        { label: 'Cost Per Board Foot', path: '/cost-per-board-foot-calculator' },
        { label: 'Segment Calculator', path: '/segment-calculator' },
        { label: 'Slats Calculator', path: '/slats-calculator' },
        { label: 'Metric to Imperial', path: '/metric-to-imperial' },
        { label: 'Hardwood Calculator', path: '/hardwood-calculator' },
        { label: 'CM to MM Calculator', path: '/cm-to-mm-calculator' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'What is a Board Foot?', path: '/#what-is-board-foot' },
        { label: 'FAQs', path: '/#faqs' },
        { label: 'Lumber Types', path: '/lumber-types' },
        { label: 'Wood Working Tips', path: '/woodworking-tips' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Blog', path: '/blog' }
      ]
    }
  ];
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-primary">BoardCalculate</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Precision lumber calculations for professionals and DIY enthusiasts. 
              Our tools help you measure, convert, and calculate board footage with ease.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path}
                      className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              © {currentYear} BoardCalculate. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/privacy"
                    className="text-xs text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-xs text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    className="text-xs text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-xs text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
