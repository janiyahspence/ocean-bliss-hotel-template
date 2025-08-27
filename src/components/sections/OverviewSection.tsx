import React from 'react';
import { 
  Waves, 
  Utensils, 
  Dumbbell, 
  Wifi, 
  Car, 
  Shield,
  Star,
  Users,
  MapPin,
  Award
} from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const features = [
  {
    icon: Waves,
    title: 'Private Beach Access',
    description: 'Exclusive 500-meter stretch of pristine golden sand beach with crystal clear waters.',
    color: 'ocean'
  },
  {
    icon: Utensils,
    title: 'Multi-Cuisine Dining',
    description: 'Three restaurants serving authentic Indian, Continental, and fresh seafood delicacies.',
    color: 'coral'
  },
  {
    icon: Dumbbell,
    title: 'Infinity Pool & Spa',
    description: 'Stunning infinity pool overlooking the ocean plus full-service spa and wellness center.',
    color: 'ocean'
  },
  {
    icon: Wifi,
    title: 'Premium Amenities',
    description: 'High-speed WiFi, 24/7 room service, concierge, and modern fitness center.',
    color: 'coral'
  },
  {
    icon: Car,
    title: 'Airport Transfer',
    description: 'Complimentary airport pickup and drop-off service for all guests.',
    color: 'ocean'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: '24/7 security, safe deposit boxes, and comprehensive travel insurance assistance.',
    color: 'coral'
  }
];

const stats = [
  { number: '150+', label: 'Luxury Rooms', icon: MapPin },
  { number: '4.9/5', label: 'Guest Rating', icon: Star },
  { number: '50K+', label: 'Happy Guests', icon: Users },
  { number: '15+', label: 'Years Experience', icon: Award }
];

export const OverviewSection: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-ocean-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-coral-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ocean-50 px-4 py-2 rounded-full mb-4">
            <Waves className="w-5 h-5 text-ocean-600" />
            <span className="text-ocean-600 font-medium">Why Choose Ocean Bliss</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experience Luxury Like
            <span className="block text-gradient">Never Before</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect blend of modern luxury and natural beauty at Ocean Bliss Beach Resort. 
            Every detail is crafted to create unforgettable memories for you and your loved ones.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-ocean-500 to-coral-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  feature.color === 'ocean' 
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                    : 'bg-gradient-to-r from-coral-500 to-coral-600'
                }`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-ocean-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-ocean-50 to-coral-50 rounded-3xl p-12 border border-ocean-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Experience Paradise?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Book your stay today and discover why Ocean Bliss is rated as one of India's 
              premier beach resort destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Your Stay Now
              </button>
              <button className="btn-outline">
                Take Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};