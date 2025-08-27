import React, { useState } from 'react';
import { 
  Utensils, 
  Coffee, 
  Wine, 
  Clock, 
  Users, 
  Star,
  Calendar,
  Phone,
  ChefHat,
  Waves,
  Sun,
  Moon,
  MapPin,
  Award,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const restaurants = [
  {
    id: 1,
    name: 'Azure Beachside Cafe',
    type: 'Casual Dining',
    cuisine: 'Multi-Cuisine & Seafood',
    icon: Waves,
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Dine with your toes in the sand at our beachfront cafe. Enjoy fresh seafood, Indian classics, and international favorites while watching the sunset over the Arabian Sea.',
    specialties: [
      'Fresh Catch of the Day',
      'Goan Fish Curry',
      'Tandoori Prawns',
      'Beach BBQ Platter',
      'Tropical Smoothie Bowls',
      'Sunset Cocktails'
    ],
    ambiance: 'Casual beachfront dining with ocean views',
    seating: '80 guests',
    timings: '7:00 AM - 11:00 PM',
    priceRange: '₹800 - ₹2,500 per person',
    rating: 4.8,
    features: [
      'Beachfront seating',
      'Live acoustic music',
      'Sunset dining',
      'Fresh seafood daily',
      'Outdoor bar',
      'Private beach cabanas'
    ],
    color: 'ocean'
  },
  {
    id: 2,
    name: 'Coral Fine Dining',
    type: 'Fine Dining',
    cuisine: 'Contemporary Indian & Continental',
    icon: Award,
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Experience culinary excellence at our award-winning fine dining restaurant. Our master chefs create innovative dishes using the finest local ingredients and international techniques.',
    specialties: [
      'Molecular Gastronomy',
      'Wagyu Beef Tenderloin',
      'Lobster Thermidor',
      'Truffle Risotto',
      'Deconstructed Biryani',
      'Chef\'s Tasting Menu'
    ],
    ambiance: 'Elegant indoor dining with panoramic ocean views',
    seating: '60 guests',
    timings: '7:00 PM - 11:00 PM',
    priceRange: '₹3,500 - ₹8,000 per person',
    rating: 4.9,
    features: [
      'Award-winning cuisine',
      'Master chef specials',
      'Wine pairing menu',
      'Private dining rooms',
      'Sommelier service',
      'Dress code required'
    ],
    color: 'coral'
  },
  {
    id: 3,
    name: 'Infinity Pool Bar',
    type: 'Pool Bar & Lounge',
    cuisine: 'Light Bites & Cocktails',
    icon: Coffee,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Relax by our stunning infinity pool with refreshing cocktails and light bites. Perfect for a leisurely afternoon or romantic evening under the stars.',
    specialties: [
      'Signature Tropical Cocktails',
      'Fresh Fruit Platters',
      'Gourmet Sandwiches',
      'Poolside Pizza',
      'Frozen Margaritas',
      'Healthy Salad Bowls'
    ],
    ambiance: 'Relaxed poolside atmosphere with infinity pool views',
    seating: '40 guests',
    timings: '10:00 AM - 12:00 AM',
    priceRange: '₹500 - ₹1,500 per person',
    rating: 4.7,
    features: [
      'Infinity pool setting',
      'Swim-up bar',
      'Tropical cocktails',
      'Light meal options',
      'Poolside service',
      'Evening entertainment'
    ],
    color: 'ocean'
  },
  {
    id: 4,
    name: '24/7 Room Service',
    type: 'In-Room Dining',
    cuisine: 'All-Day Menu',
    icon: Clock,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Enjoy gourmet meals in the comfort of your room or private balcony. Our 24/7 room service offers an extensive menu featuring local and international cuisines.',
    specialties: [
      'Breakfast in Bed',
      'Romantic Dinner Setup',
      'Late Night Snacks',
      'Kids Special Menu',
      'Healthy Options',
      'Local Delicacies'
    ],
    ambiance: 'Private in-room or balcony dining experience',
    seating: 'All rooms and suites',
    timings: '24 Hours',
    priceRange: '₹600 - ₹3,000 per person',
    rating: 4.6,
    features: [
      '24/7 availability',
      'Extensive menu',
      'Balcony setup',
      'Special occasions',
      'Quick delivery',
      'Dietary accommodations'
    ],
    color: 'coral'
  }
];

const diningPackages = [
  {
    name: 'Romantic Dinner Package',
    description: 'Private beachside dinner for two with candles, flowers, and live music',
    price: '₹12,000',
    includes: ['3-course meal', 'Wine pairing', 'Live music', 'Flower decoration', 'Photography'],
    icon: Heart
  },
  {
    name: 'Sunset Dining Experience',
    description: 'Watch the sunset while enjoying a specially curated menu',
    price: '₹8,000',
    includes: ['4-course meal', 'Sunset timing', 'Premium seating', 'Complimentary drinks'],
    icon: Sun
  },
  {
    name: 'Chef\'s Table Experience',
    description: 'Interactive dining with our master chef in the kitchen',
    price: '₹15,000',
    includes: ['7-course tasting', 'Chef interaction', 'Wine pairing', 'Recipe cards'],
    icon: ChefHat
  }
];

export const DiningSection: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<typeof restaurants[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const openRestaurantModal = (restaurant: typeof restaurants[0]) => {
    setSelectedRestaurant(restaurant);
    setCurrentImageIndex(0);
  };

  const closeRestaurantModal = () => {
    setSelectedRestaurant(null);
  };

  const nextImage = () => {
    if (selectedRestaurant) {
      setCurrentImageIndex((prev) => 
        prev === selectedRestaurant.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRestaurant) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRestaurant.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation request submitted for ${selectedRestaurant?.name}! (Demo functionality)`);
  };

  return (
    <section id="dining" className="section-padding bg-gradient-to-b from-white to-ocean-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-64 h-64 bg-coral-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-ocean-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-50 px-4 py-2 rounded-full mb-4">
            <Utensils className="w-5 h-5 text-coral-600" />
            <span className="text-coral-600 font-medium">Exquisite Dining</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Culinary Journey by
            <span className="block text-gradient">the Ocean</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Indulge in a diverse culinary experience from casual beachside dining to award-winning 
            fine cuisine. Every meal is crafted with the finest ingredients and served with ocean views.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="group overflow-hidden cursor-pointer" onClick={() => openRestaurantModal(restaurant)}>
              {/* Restaurant Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Restaurant Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {restaurant.type}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{restaurant.rating}</span>
                </div>

                {/* View Menu Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                    View Details
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Restaurant Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      restaurant.color === 'ocean' 
                        ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                        : 'bg-gradient-to-r from-coral-500 to-coral-600'
                    }`}>
                      <restaurant.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-ocean-600 transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-coral-600">{restaurant.priceRange}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {restaurant.description}
                </p>

                {/* Restaurant Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-ocean-500" />
                    <span>{restaurant.timings}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-coral-500" />
                    <span>{restaurant.seating}</span>
                  </div>
                </div>

                {/* Specialties Preview */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Signature Dishes</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                    {restaurant.specialties.length > 3 && (
                      <span className="text-ocean-600 text-xs font-medium">
                        +{restaurant.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant={restaurant.color === 'ocean' ? 'primary' : 'secondary'} 
                  size="md" 
                  className="w-full"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Make Reservation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Dining Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Special Dining Experiences</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Create unforgettable memories with our curated dining experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diningPackages.map((pkg, index) => (
              <Card key={index} className="text-center group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-coral-500 to-ocean-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{pkg.name}</h4>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-2xl font-bold text-coral-600 mb-4">{pkg.price}</div>
                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <Star className="w-3 h-3 text-coral-500 fill-current" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Book Experience
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-coral-50 to-ocean-50 border-coral-200">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Reserve Your Culinary Journey
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                From casual beachside meals to fine dining experiences, our restaurants offer 
                something special for every palate. Book your table today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Reservations
                </Button>
                <Button variant="outline" size="lg">
                  <Camera className="w-5 h-5 mr-2" />
                  View Food Gallery
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Restaurant Details Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedRestaurant.color === 'ocean' 
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                    : 'bg-gradient-to-r from-coral-500 to-coral-600'
                }`}>
                  <selectedRestaurant.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedRestaurant.name}</h3>
                  <p className="text-gray-600">{selectedRestaurant.type} • {selectedRestaurant.cuisine}</p>
                </div>
              </div>
              <button
                onClick={closeRestaurantModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative h-80">
              <img
                src={selectedRestaurant.gallery[currentImageIndex]}
                alt={selectedRestaurant.name}
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
                {selectedRestaurant.gallery.map((_, index) => (
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
                {/* Restaurant Details */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-coral-500 fill-current" />
                        <span className="font-semibold text-gray-800">{selectedRestaurant.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{selectedRestaurant.seating}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-coral-600">{selectedRestaurant.priceRange}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{selectedRestaurant.description}</p>

                  {/* Restaurant Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-ocean-500" />
                        <span className="font-medium text-gray-800">Timings</span>
                      </div>
                      <p className="text-gray-600">{selectedRestaurant.timings}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-5 h-5 text-coral-500" />
                        <span className="font-medium text-gray-800">Ambiance</span>
                      </div>
                      <p className="text-gray-600">{selectedRestaurant.ambiance}</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Signature Specialties</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRestaurant.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <Star className="w-3 h-3 text-coral-500 fill-current flex-shrink-0" />
                          <span className="text-sm">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Special Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRestaurant.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <Award className="w-3 h-3 text-ocean-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reservation Form */}
                <div>
                  <div className="bg-gradient-to-r from-ocean-50 to-coral-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-6 text-lg">Make a Reservation</h4>
                    
                    <form onSubmit={handleReservation} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                          <input 
                            type="date" 
                            value={reservationData.date}
                            onChange={(e) => setReservationData({...reservationData, date: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" 
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                          <select 
                            value={reservationData.time}
                            onChange={(e) => setReservationData({...reservationData, time: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                            required
                          >
                            <option value="">Select Time</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="7:30 PM">7:30 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="8:30 PM">8:30 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                        <select 
                          value={reservationData.guests}
                          onChange={(e) => setReservationData({...reservationData, guests: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6+">6+ Guests</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                        <textarea 
                          value={reservationData.specialRequests}
                          onChange={(e) => setReservationData({...reservationData, specialRequests: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" 
                          rows={3}
                          placeholder="Dietary restrictions, celebrations, seating preferences..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        variant="primary" 
                        size="lg" 
                        className="w-full"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Confirm Reservation
                      </Button>
                    </form>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Reservations confirmed within 2 hours • Free cancellation up to 4 hours before
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-800 mb-2">Need Assistance?</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-ocean-500" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-coral-500" />
                        <span>Reservations: 9:00 AM - 9:00 PM</span>
                      </div>
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