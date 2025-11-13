
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Ruler } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Board Footage Calculator', path: '/board-footage-calculator' },
    { 
      label: 'Converters', 
      path: '#',
      dropdown: [
        { label: 'Linear to Board Foot', path: '/linear-to-board-foot' },
        { label: 'Square Foot to Board Foot', path: '/square-foot-to-board-foot' },
        { label: 'Metric to Imperial', path: '/metric-to-imperial' },
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-gradient-to-r from-primary/95 to-blue-400/95 backdrop-blur-md shadow-subtle text-white"
          : "bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Ruler className={cn(
              "h-5 w-5 transition-colors duration-300",
              isScrolled ? "text-white" : "text-primary"
            )} />
            <span className={cn(
              "text-xl font-semibold transition-colors duration-300",
              isScrolled ? "text-white" : "text-primary"
            )}>
              BoardCalculate
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => 
              !link.dropdown ? (
                <Link
                  key={index}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group",
                    location.pathname === link.path 
                      ? isScrolled ? "text-white" : "text-primary" 
                      : isScrolled ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-primary"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              ) : (
                <div key={index} className="relative group">
                  <button className={cn(
                    "flex items-center text-sm font-medium transition-colors duration-200",
                    isScrolled ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-primary"
                  )}>
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 p-2">
                    {link.dropdown.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        to={dropItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors duration-200"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className={cn(
              "md:hidden transition-colors duration-200",
              isScrolled ? "text-white hover:text-white/80" : "text-gray-600 hover:text-primary"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link, index) => 
              !link.dropdown ? (
                <Link
                  key={index}
                  to={link.path}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors duration-200",
                    location.pathname === link.path 
                      ? "text-primary" 
                      : "text-gray-600 hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <div key={index} className="py-2 space-y-2">
                  <div className="text-base font-medium text-gray-600">
                    {link.label}
                  </div>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    {link.dropdown.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        to={dropItem.path}
                        className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
