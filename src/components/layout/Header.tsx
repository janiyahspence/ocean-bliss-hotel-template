import React, { useState, useEffect } from 'react';
import { Menu, X, Waves, Phone, Mail, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { SearchModal } from '../ui/SearchModal';
import { NewsletterModal } from '../ui/NewsletterModal';
import { LanguageSelector } from '../ui/LanguageSelector';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Dining', href: '#dining' },
  { name: 'Activities', href: '#activities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Offers', href: '#offers' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the top bar (approximately 44px based on py-2 and text-sm)
    const topBarHeight = 44;
    setHeaderHeight(topBarHeight + 80); // top bar + main header approximate height
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > topBarHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Container */}
      <div className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0' : 'relative'
      }`}>
        {/* Top Bar - only show when not scrolled */}
        {!isScrolled && (
          <div className="bg-ocean-600 text-white py-2 px-4 text-sm">
            <div className="container-custom flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@oceanbliss.com</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span>Experience Paradise • Book Now & Save 20%</span>
              </div>
              <div className="flex items-center space-x-4">
                <LanguageSelector />
                <button
                  onClick={() => setIsNewsletterOpen(true)}
                  className="text-white hover:text-coral-200 text-sm transition-colors"
                >
                  Newsletter
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Header */}
        <header
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <nav className="container-custom">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-ocean-500 to-coral-500 p-2 rounded-full">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${
                    isScrolled ? 'text-ocean-600' : 'text-white text-shadow-lg'
                  }`}>
                    Ocean Bliss
                  </h1>
                  <p className={`text-sm ${
                    isScrolled ? 'text-ocean-500' : 'text-white/90'
                  }`}>
                    Beach Resort
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-colors duration-200 hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-ocean-600'
                        : 'text-white hover:text-coral-200 text-shadow'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 rounded-full transition-colors ${
                    isScrolled
                      ? 'text-gray-700 hover:text-ocean-600 hover:bg-ocean-50'
                      : 'text-white hover:text-coral-200 hover:bg-white/10'
                  }`}
                >
                  <Search className="w-5 h-5" />
                </button>
                <Button variant="secondary" size="md">
                  Book Now
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-md ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-ocean-600 font-medium py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-ocean-600 font-medium py-2 transition-colors w-full"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
                <div className="pt-4">
                  <Button variant="secondary" size="md" className="w-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Placeholder to prevent content jump when header becomes fixed */}
      {isScrolled && (
        <div style={{ height: `${headerHeight}px` }} />
      )}

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </>
  );
};