import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, Calendar, Users, Utensils, Camera, Gift, Phone } from 'lucide-react';
import { Button } from './Button';

interface SearchResult {
  id: string;
  title: string;
  type: 'room' | 'dining' | 'activity' | 'amenity' | 'offer' | 'contact';
  description: string;
  price?: string;
  location?: string;
  icon: React.ComponentType<any>;
  href: string;
}

const searchData: SearchResult[] = [
  // Rooms
  {
    id: 'deluxe-ocean-view',
    title: 'Deluxe Ocean View Room',
    type: 'room',
    description: 'Elegant room with stunning ocean views and modern amenities',
    price: '₹12,000/night',
    location: 'Main Building',
    icon: MapPin,
    href: '#rooms'
  },
  {
    id: 'luxury-villa',
    title: 'Luxury Villa',
    type: 'room',
    description: 'Private villa with personal pool and dedicated butler service',
    price: '₹25,000/night',
    location: 'Villa Complex',
    icon: MapPin,
    href: '#rooms'
  },
  // Dining
  {
    id: 'azure-cafe',
    title: 'Azure Beachside Cafe',
    type: 'dining',
    description: 'Casual dining with toes in the sand and ocean views',
    price: '₹800-₹2,500',
    location: 'Beachfront',
    icon: Utensils,
    href: '#dining'
  },
  {
    id: 'coral-dining',
    title: 'Coral Fine Dining',
    type: 'dining',
    description: 'Award-winning fine dining with panoramic ocean views',
    price: '₹3,500-₹8,000',
    location: 'Main Building',
    icon: Utensils,
    href: '#dining'
  },
  // Activities
  {
    id: 'water-sports',
    title: 'Water Sports Adventure',
    type: 'activity',
    description: 'Jet skiing, parasailing, and banana boat rides',
    price: '₹3,500',
    location: 'Activity Beach',
    icon: Camera,
    href: '#activities'
  },
  {
    id: 'sunset-yoga',
    title: 'Sunset Yoga & Meditation',
    type: 'activity',
    description: 'Peaceful yoga sessions with stunning sunset views',
    price: '₹1,200',
    location: 'Beach Pavilion',
    icon: Camera,
    href: '#activities'
  },
  // Amenities
  {
    id: 'infinity-pool',
    title: 'Infinity Pool',
    type: 'amenity',
    description: 'Stunning infinity pool overlooking the ocean',
    location: 'Pool Deck',
    icon: MapPin,
    href: '#amenities'
  },
  {
    id: 'spa-wellness',
    title: 'Serenity Spa & Wellness',
    type: 'amenity',
    description: 'Rejuvenating spa treatments in tranquil surroundings',
    price: 'From ₹2,500',
    location: 'Spa Center',
    icon: MapPin,
    href: '#amenities'
  },
  // Offers
  {
    id: 'summer-special',
    title: 'Summer Splash Special',
    type: 'offer',
    description: 'Beat the heat with 35% off on beach resort packages',
    price: '35% OFF',
    icon: Gift,
    href: '#offers'
  },
  {
    id: 'honeymoon-package',
    title: 'Honeymoon Paradise',
    type: 'offer',
    description: 'Romantic package with luxury villa and private dining',
    price: '₹25,000',
    icon: Gift,
    href: '#offers'
  },
  // Contact
  {
    id: 'reservations',
    title: 'Reservations',
    type: 'contact',
    description: 'Book your stay or make dining reservations',
    location: '+91 98765 43210',
    icon: Phone,
    href: '#contact'
  }
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const handleResultClick = (result: SearchResult) => {
    // Navigate to the section
    const element = document.querySelector(result.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
    setQuery('');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'room': return 'bg-ocean-100 text-ocean-700';
      case 'dining': return 'bg-coral-100 text-coral-700';
      case 'activity': return 'bg-green-100 text-green-700';
      case 'amenity': return 'bg-purple-100 text-purple-700';
      case 'offer': return 'bg-yellow-100 text-yellow-700';
      case 'contact': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center p-6 border-b border-gray-200">
          <Search className="w-6 h-6 text-gray-400 mr-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rooms, dining, activities, amenities..."
            className="flex-1 text-lg outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Start typing to search for rooms, dining, activities, and more...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try searching for rooms, restaurants, activities, or amenities</p>
            </div>
          ) : (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={`w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors ${
                    index === selectedIndex ? 'bg-ocean-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-ocean-500 to-coral-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <result.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-800 truncate">{result.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{result.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        {result.price && (
                          <span className="font-medium text-coral-600">{result.price}</span>
                        )}
                        {result.location && (
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{result.location}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Footer */}
        {results.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{results.length} result{results.length !== 1 ? 's' : ''} found</span>
              <span>Use ↑↓ to navigate, Enter to select</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};