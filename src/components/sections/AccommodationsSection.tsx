import React, { useState } from 'react';
import { 
  Bed, 
  Users, 
  Wifi, 
  Coffee, 
  Car, 
  Waves,
  Star,
  Eye,
  Calendar,
  ArrowRight,
  Bath,
  Wind,
  Tv,
  Shield,
  Phone,
  Utensils
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View',
    type: 'Deluxe Room',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 12000,
    originalPrice: 15000,
    size: '35 sqm',
    occupancy: '2 Adults',
    bedType: 'King Bed',
    view: 'Ocean View',
    description: 'Elegant room with stunning ocean views, modern amenities, and private balcony overlooking the pristine beach.',
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Wind, name: 'Air Conditioning' },
      { icon: Tv, name: 'Smart TV' },
      { icon: Coffee, name: 'Mini Bar' },
      { icon: Bath, name: 'Luxury Bathroom' },
      { icon: Phone, name: '24/7 Room Service' }
    ],
    features: [
      'Private balcony with ocean view',
      'Complimentary breakfast',
      'Daily housekeeping',
      'Welcome fruit basket'
    ]
  },
  {
    id: 2,
    name: 'Premium Beachfront',
    type: 'Premium Suite',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 18000,
    originalPrice: 22000,
    size: '50 sqm',
    occupancy: '2-3 Adults',
    bedType: 'King + Sofa Bed',
    view: 'Direct Beach Access',
    description: 'Spacious beachfront suite with direct beach access, separate living area, and premium amenities for the ultimate luxury experience.',
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Wind, name: 'Climate Control' },
      { icon: Tv, name: 'Smart TV + Sound System' },
      { icon: Coffee, name: 'Premium Mini Bar' },
      { icon: Bath, name: 'Jacuzzi Bathroom' },
      { icon: Utensils, name: 'In-room Dining' }
    ],
    features: [
      'Direct beach access',
      'Separate living area',
      'Premium breakfast included',
      'Complimentary spa credit ₹2,000',
      'Priority check-in/out'
    ]
  },
  {
    id: 3,
    name: 'Luxury Villa',
    type: 'Private Villa',
    image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 25000,
    originalPrice: 30000,
    size: '80 sqm',
    occupancy: '4 Adults',
    bedType: '2 King Beds',
    view: 'Private Pool + Ocean',
    description: 'Exclusive private villa with personal pool, dedicated butler service, and unparalleled luxury amenities.',
    amenities: [
      { icon: Wifi, name: 'High-Speed WiFi' },
      { icon: Wind, name: 'Smart Climate Control' },
      { icon: Tv, name: 'Entertainment System' },
      { icon: Coffee, name: 'Full Kitchen' },
      { icon: Bath, name: 'Master Bathroom Suite' },
      { icon: Shield, name: 'Butler Service' }
    ],
    features: [
      'Private infinity pool',
      'Dedicated butler service',
      'Gourmet breakfast & dinner',
      'Complimentary spa treatments',
      'Private beach cabana',
      'Airport transfer included'
    ]
  },
  {
    id: 4,
    name: 'Family Suite',
    type: 'Family Room',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 16000,
    originalPrice: 20000,
    size: '60 sqm',
    occupancy: '2 Adults + 2 Children',
    bedType: 'King + Twin Beds',
    view: 'Garden & Partial Ocean',
    description: 'Perfect for families with connecting rooms, kids amenities, and easy access to family-friendly facilities.',
    amenities: [
      { icon: Wifi, name: 'Family WiFi Package' },
      { icon: Wind, name: 'Dual Zone AC' },
      { icon: Tv, name: 'Kids Entertainment' },
      { icon: Coffee, name: 'Family Mini Bar' },
      { icon: Bath, name: 'Family Bathroom' },
      { icon: Phone, name: 'Kids Room Service Menu' }
    ],
    features: [
      'Connecting family rooms',
      'Kids welcome amenities',
      'Family breakfast package',
      'Kids club access',
      'Baby cot available',
      'Child-proofed balcony'
    ]
  }
];

export const AccommodationsSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openRoomModal = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  const closeRoomModal = () => {
    setSelectedRoom(null);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === selectedRoom.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRoom.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="rooms" className="section-padding bg-gradient-to-b from-white to-sand-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-64 h-64 bg-ocean-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-coral-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ocean-50 px-4 py-2 rounded-full mb-4">
            <Bed className="w-5 h-5 text-ocean-600" />
            <span className="text-ocean-600 font-medium">Luxury Accommodations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Perfect
            <span className="block text-gradient">Ocean Retreat</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of rooms and suites, each designed 
            to provide the ultimate comfort with breathtaking ocean views and modern amenities.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {rooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden">
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹{room.originalPrice - room.price}
                </div>
                
                {/* Room Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {room.type}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => openRoomModal(room)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              <CardContent className="p-6">
                {/* Room Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{room.occupancy}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Bed className="w-4 h-4" />
                        <span>{room.bedType}</span>
                      </span>
                      <span>{room.size}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</div>
                    <div className="text-2xl font-bold text-coral-600">₹{room.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">per night</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>

                {/* Key Amenities */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {room.amenities.slice(0, 6).map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <amenity.icon className="w-4 h-4 text-ocean-500" />
                      <span className="truncate">{amenity.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="flex-1"
                    onClick={() => alert('Booking functionality - Demo')}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="md"
                    onClick={() => openRoomModal(room)}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Room Comparison CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-ocean-50 to-coral-50 border-ocean-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our resort specialists are here to help you find the perfect accommodation 
                for your stay. Compare rooms, check availability, or get personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary">
                  Compare All Rooms
                </Button>
                <Button variant="outline">
                  Speak to Specialist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedRoom.name}</h3>
                <p className="text-gray-600">{selectedRoom.type}</p>
              </div>
              <button
                onClick={closeRoomModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative h-80">
              <img
                src={selectedRoom.gallery[currentImageIndex]}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
              >
                →
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedRoom.gallery.map((_, index) => (
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
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Room Details */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{selectedRoom.occupancy}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Bed className="w-4 h-4" />
                          <span>{selectedRoom.bedType}</span>
                        </span>
                        <span>{selectedRoom.size}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Waves className="w-5 h-5 text-ocean-500" />
                        <span className="text-ocean-600 font-medium">{selectedRoom.view}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">₹{selectedRoom.originalPrice.toLocaleString()}</div>
                      <div className="text-3xl font-bold text-coral-600">₹{selectedRoom.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">per night</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedRoom.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Special Features</h4>
                    <ul className="space-y-2">
                      {selectedRoom.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-600">
                          <Star className="w-4 h-4 text-coral-500 fill-current" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Amenities & Booking */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Room Amenities</h4>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {selectedRoom.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <amenity.icon className="w-4 h-4 text-ocean-500" />
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Booking Section */}
                  <div className="bg-gradient-to-r from-ocean-50 to-coral-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-4">Book This Room</h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                          <input type="date" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                          <input type="date" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" />
                        </div>
                      </div>
                      <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full"
                        onClick={() => alert('Room booking functionality - Demo')}
                      >
                        Book Now - ₹{selectedRoom.price.toLocaleString()}/night
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Free cancellation • Best rate guaranteed
                      </p>
                    </div>
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