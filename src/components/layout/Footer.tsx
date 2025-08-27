import React from 'react';
import { 
  Waves, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  Award,
  Shield,
  Leaf
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-ocean-500 to-coral-500 p-2 rounded-full">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ocean Bliss</h3>
                <p className="text-gray-400">Beach Resort</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience paradise at Ocean Bliss Beach Resort. Where luxury meets 
              the pristine beauty of the Indian coastline, creating unforgettable 
              memories for families, couples, and adventurers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-ocean-600 hover:bg-ocean-700 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-coral-600 hover:bg-coral-700 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-ocean-600 hover:bg-ocean-700 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-coral-600 hover:bg-coral-700 p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Rooms & Suites',
                'Amenities',
                'Dining',
                'Activities',
                'Spa & Wellness',
                'Gallery',
                'Special Offers'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-ocean-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Room Service',
                'Concierge',
                'Airport Transfer',
                'Car Rental',
                'Tour Packages',
                'Event Planning',
                'Business Center',
                'Laundry Service'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-coral-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Ocean Bliss Beach Resort<br />
                    Beachfront Road, Goa 403516<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-coral-400" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-400" />
                <p className="text-gray-300">info@oceanbliss.com</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Certifications</h5>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Ocean Bliss Beach Resort. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};