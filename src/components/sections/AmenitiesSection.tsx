import React, { useState } from 'react';
import { 
  Waves, 
  Sparkles, 
  Dumbbell, 
  Users, 
  Baby,
  Gamepad2,
  Car,
  Wifi,
  Coffee,
  Shield,
  Clock,
  MapPin,
  Star,
  Calendar,
  Phone,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const amenities = [
  {
    id: 1,
    name: 'Infinity Pool & Pool Bar',
    category: 'Recreation',
    icon: Waves,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Our stunning 50-meter infinity pool seamlessly blends with the ocean horizon, creating a breathtaking visual experience. Enjoy refreshing cocktails at our poolside bar while soaking in panoramic ocean views.',
    features: [
      'Temperature-controlled infinity pool',
      'Poolside bar with tropical cocktails',
      'Comfortable sun loungers and cabanas',
      'Pool towel service',
      'Shallow area for children',
      'Evening pool lighting'
    ],
    timings: '6:00 AM - 10:00 PM',
    bookingRequired: false,
    color: 'ocean'
  },
  {
    id: 2,
    name: 'Serenity Spa & Wellness',
    category: 'Wellness',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3188/woman-girl-beauty-mask.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3188/woman-girl-beauty-mask.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Rejuvenate your mind, body, and soul at our award-winning spa. Experience traditional Ayurvedic treatments, therapeutic massages, and modern wellness therapies in our tranquil oceanfront setting.',
    features: [
      'Ayurvedic and therapeutic massages',
      'Facial treatments and body wraps',
      'Steam room and sauna',
      'Meditation and yoga sessions',
      'Couples treatment rooms',
      'Organic spa products'
    ],
    timings: '8:00 AM - 9:00 PM',
    bookingRequired: true,
    color: 'coral',
    pricing: 'Treatments from ₹2,500'
  },
  {
    id: 3,
    name: 'Ocean Fitness Center',
    category: 'Fitness',
    icon: Dumbbell,
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Stay active during your vacation at our state-of-the-art fitness center. Featuring modern equipment, ocean views, and personal training services to help you maintain your wellness routine.',
    features: [
      'Modern cardio and strength equipment',
      'Ocean view workout area',
      'Personal training sessions',
      'Group fitness classes',
      'Yoga and pilates studio',
      'Complimentary towels and water'
    ],
    timings: '5:00 AM - 11:00 PM',
    bookingRequired: false,
    color: 'ocean'
  },
  {
    id: 4,
    name: 'Kids Club Paradise',
    category: 'Family',
    icon: Baby,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1148999/pexels-photo-1148999.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1148997/pexels-photo-1148997.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'A magical wonderland for children aged 4-12 years. Our supervised kids club offers fun activities, educational programs, and safe play areas while parents enjoy their relaxation time.',
    features: [
      'Supervised activities for ages 4-12',
      'Indoor and outdoor play areas',
      'Arts and crafts workshops',
      'Beach games and treasure hunts',
      'Movie nights and storytelling',
      'Healthy snacks and meals'
    ],
    timings: '9:00 AM - 6:00 PM',
    bookingRequired: true,
    color: 'coral',
    pricing: 'Free for resort guests'
  },
  {
    id: 5,
    name: 'Game Zone & Entertainment',
    category: 'Entertainment',
    icon: Gamepad2,
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Indoor entertainment center featuring pool tables, table tennis, video games, and board games. Perfect for families and groups looking for fun activities during their stay.',
    features: [
      'Pool and billiards tables',
      'Table tennis and foosball',
      'Video game consoles',
      'Board games and card games',
      'Live sports screening',
      'Tournament competitions'
    ],
    timings: '10:00 AM - 12:00 AM',
    bookingRequired: false,
    color: 'ocean'
  },
  {
    id: 6,
    name: 'Business Center & WiFi',
    category: 'Business',
    icon: Wifi,
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Stay connected with high-speed internet throughout the resort. Our business center offers printing, scanning, and meeting facilities for business travelers.',
    features: [
      'High-speed WiFi resort-wide',
      'Business center with computers',
      'Printing and scanning services',
      'Meeting room facilities',
      'Video conferencing setup',
      'Secretarial services'
    ],
    timings: '24/7 WiFi, Business Center: 8:00 AM - 8:00 PM',
    bookingRequired: false,
    color: 'coral'
  }
];

const services = [
  {
    icon: Car,
    name: 'Airport Transfer',
    description: 'Complimentary pickup and drop-off service',
    available: '24/7'
  },
  {
    icon: Coffee,
    name: 'Room Service',
    description: 'In-room dining and beverage service',
    available: '24/7'
  },
  {
    icon: Shield,
    name: 'Concierge',
    description: 'Personal assistance and local recommendations',
    available: '6:00 AM - 12:00 AM'
  },
  {
    icon: MapPin,
    name: 'Tour Desk',
    description: 'Local excursions and activity bookings',
    available: '8:00 AM - 8:00 PM'
  }
];

export const AmenitiesSection: React.FC = () => {
  const [selectedAmenity, setSelectedAmenity] = useState<typeof amenities[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openAmenityModal = (amenity: typeof amenities[0]) => {
    setSelectedAmenity(amenity);
    setCurrentImageIndex(0);
  };

  const closeAmenityModal = () => {
    setSelectedAmenity(null);
  };

  const nextImage = () => {
    if (selectedAmenity) {
      setCurrentImageIndex((prev) => 
        prev === selectedAmenity.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAmenity) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAmenity.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="amenities" className="section-padding bg-gradient-to-b from-sand-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-ocean-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-coral-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ocean-50 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-ocean-600" />
            <span className="text-ocean-600 font-medium">World-Class Amenities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything You Need for
            <span className="block text-gradient">Perfect Relaxation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From our stunning infinity pool to our rejuvenating spa, every amenity at Ocean Bliss 
            is designed to enhance your tropical getaway experience.
          </p>
        </div>

        {/* Featured Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {amenities.map((amenity) => (
            <Card key={amenity.id} className="group overflow-hidden cursor-pointer" onClick={() => openAmenityModal(amenity)}>
              {/* Amenity Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {amenity.category}
                </div>

                {/* Booking Required Badge */}
                {amenity.bookingRequired && (
                  <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Booking Required
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Play className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Amenity Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      amenity.color === 'ocean' 
                        ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                        : 'bg-gradient-to-r from-coral-500 to-coral-600'
                    }`}>
                      <amenity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-ocean-600 transition-colors">
                        {amenity.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{amenity.timings}</span>
                      </div>
                    </div>
                  </div>
                  {amenity.pricing && (
                    <div className="text-right">
                      <div className="text-sm font-semibold text-coral-600">{amenity.pricing}</div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {amenity.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2">
                  {amenity.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <Star className="w-3 h-3 text-coral-500 fill-current flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {amenity.features.length > 3 && (
                    <div className="text-sm text-ocean-600 font-medium">
                      +{amenity.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <Button 
                    variant={amenity.bookingRequired ? "secondary" : "outline"} 
                    size="sm" 
                    className="w-full"
                  >
                    {amenity.bookingRequired ? (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </>
                    ) : (
                      'View Details'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive services to make your stay comfortable and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-ocean-500 to-coral-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="text-xs text-ocean-600 font-medium bg-ocean-50 px-3 py-1 rounded-full inline-block">
                    {service.available}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-ocean-50 to-coral-50 border-ocean-200">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Experience All Our Amenities
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Book your stay today and enjoy unlimited access to all our world-class facilities. 
                From sunrise yoga to midnight gaming, we have something for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Experience
                </Button>
                <Button variant="outline" size="lg">
                  Download Amenities Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Amenity Details Modal */}
      {selectedAmenity && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedAmenity.color === 'ocean' 
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                    : 'bg-gradient-to-r from-coral-500 to-coral-600'
                }`}>
                  <selectedAmenity.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedAmenity.name}</h3>
                  <p className="text-gray-600">{selectedAmenity.category}</p>
                </div>
              </div>
              <button
                onClick={closeAmenityModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative h-80">
              <img
                src={selectedAmenity.gallery[currentImageIndex]}
                alt={selectedAmenity.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedAmenity.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Details */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{selectedAmenity.timings}</span>
                      </span>
                      {selectedAmenity.bookingRequired && (
                        <span className="bg-coral-100 text-coral-700 px-2 py-1 rounded-full text-xs font-medium">
                          Booking Required
                        </span>
                      )}
                    </div>
                    {selectedAmenity.pricing && (
                      <div className="text-right">
                        <div className="text-lg font-bold text-coral-600">{selectedAmenity.pricing}</div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{selectedAmenity.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Features & Services</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedAmenity.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 text-gray-600">
                          <Star className="w-4 h-4 text-coral-500 fill-current flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Section */}
                <div>
                  <div className="bg-gradient-to-r from-ocean-50 to-coral-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                      {selectedAmenity.bookingRequired ? 'Book This Service' : 'Visit Information'}
                    </h4>
                    
                    {selectedAmenity.bookingRequired ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                              <option>Morning (9:00 AM)</option>
                              <option>Afternoon (2:00 PM)</option>
                              <option>Evening (6:00 PM)</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                            <option>4+ Guests</option>
                          </select>
                        </div>
                        <Button 
                          variant="primary" 
                          size="lg" 
                          className="w-full"
                          onClick={() => alert('Booking functionality - Demo')}
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Now
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-5 h-5 text-ocean-500" />
                            <span className="font-medium text-gray-800">Operating Hours</span>
                          </div>
                          <p className="text-gray-600">{selectedAmenity.timings}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-5 h-5 text-coral-500" />
                            <span className="font-medium text-gray-800">Location</span>
                          </div>
                          <p className="text-gray-600">Resort Main Building - Ground Floor</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full"
                          onClick={() => alert('More information - Demo')}
                        >
                          Get Directions
                        </Button>
                      </div>
                    )}
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      For special requests or group bookings, please contact our concierge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};