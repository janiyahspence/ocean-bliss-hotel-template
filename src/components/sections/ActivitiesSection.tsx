import React, { useState } from 'react';
import { 
  Waves, 
  Sun, 
  Camera, 
  Users, 
  Clock, 
  Star,
  Calendar,
  Phone,
  MapPin,
  Award,
  Heart,
  Wind,
  Anchor,
  Mountain,
  Compass,
  Shield,
  ChevronLeft,
  ChevronRight,
  Play,
  Zap,
  Target,
  Sunrise
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const activities = [
  {
    id: 1,
    name: 'Water Sports Adventure',
    category: 'Water Sports',
    icon: Waves,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Experience the thrill of the ocean with our comprehensive water sports package. From jet skiing to parasailing, enjoy adrenaline-pumping adventures in crystal clear waters.',
    activities: [
      'Jet Skiing',
      'Parasailing',
      'Banana Boat Rides',
      'Kayaking',
      'Windsurfing',
      'Speed Boat Tours'
    ],
    duration: '3-4 hours',
    difficulty: 'Beginner to Advanced',
    price: 3500,
    originalPrice: 4500,
    groupSize: '2-8 people',
    includes: [
      'Professional instructor',
      'Safety equipment provided',
      'Equipment rental included',
      'Refreshments',
      'Photography service',
      'Insurance coverage'
    ],
    timings: '9:00 AM - 5:00 PM',
    bookingRequired: true,
    color: 'ocean',
    rating: 4.8,
    safetyLevel: 'High'
  },
  {
    id: 2,
    name: 'Sunset Yoga & Meditation',
    category: 'Wellness',
    icon: Sun,
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Find inner peace with our beachfront yoga sessions. Practice ancient asanas while watching the golden sunset over the Arabian Sea, guided by certified yoga instructors.',
    activities: [
      'Hatha Yoga',
      'Vinyasa Flow',
      'Meditation Sessions',
      'Breathing Exercises',
      'Sunset Viewing',
      'Relaxation Techniques'
    ],
    duration: '1.5 hours',
    difficulty: 'All Levels',
    price: 1200,
    originalPrice: 1500,
    groupSize: '1-15 people',
    includes: [
      'Certified yoga instructor',
      'Yoga mats provided',
      'Herbal tea service',
      'Meditation guide',
      'Sunset viewing spot',
      'Relaxation music'
    ],
    timings: '6:00 PM - 7:30 PM',
    bookingRequired: true,
    color: 'coral',
    rating: 4.9,
    safetyLevel: 'Low'
  },
  {
    id: 3,
    name: 'Deep Sea Fishing',
    category: 'Adventure',
    icon: Anchor,
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1001683/pexels-photo-1001683.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Embark on an exciting deep sea fishing adventure. Experience the thrill of catching big game fish in the deep waters of the Arabian Sea with experienced local fishermen.',
    activities: [
      'Deep Sea Fishing',
      'Big Game Fishing',
      'Traditional Fishing',
      'Fish Cleaning Demo',
      'Cooking Your Catch',
      'Marine Life Spotting'
    ],
    duration: '6 hours',
    difficulty: 'Intermediate',
    price: 5500,
    originalPrice: 7000,
    groupSize: '4-12 people',
    includes: [
      'Fishing boat charter',
      'Professional fishing guide',
      'Fishing equipment',
      'Bait and tackle',
      'Lunch on boat',
      'Fish cleaning service'
    ],
    timings: '6:00 AM - 12:00 PM',
    bookingRequired: true,
    color: 'ocean',
    rating: 4.7,
    safetyLevel: 'Medium'
  },
  {
    id: 4,
    name: 'Cultural Heritage Tour',
    category: 'Cultural',
    icon: Compass,
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2166554/pexels-photo-2166554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Discover the rich cultural heritage of coastal India. Visit ancient temples, traditional markets, and historic sites while learning about local customs and traditions.',
    activities: [
      'Temple Visits',
      'Local Market Tour',
      'Traditional Craft Demo',
      'Cultural Performances',
      'Historical Sites',
      'Local Cuisine Tasting'
    ],
    duration: '5 hours',
    difficulty: 'Easy',
    price: 2800,
    originalPrice: 3500,
    groupSize: '6-20 people',
    includes: [
      'Air-conditioned transport',
      'Professional guide',
      'Entry fees included',
      'Traditional lunch',
      'Cultural performance',
      'Souvenir shopping'
    ],
    timings: '9:00 AM - 2:00 PM',
    bookingRequired: true,
    color: 'coral',
    rating: 4.6,
    safetyLevel: 'Low'
  },
  {
    id: 5,
    name: 'Beach Volleyball Tournament',
    category: 'Sports',
    icon: Target,
    image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Join our daily beach volleyball tournaments and friendly matches. Perfect for team building, meeting other guests, and staying active during your beach vacation.',
    activities: [
      'Beach Volleyball',
      'Team Tournaments',
      'Skills Training',
      'Friendly Matches',
      'Prize Competitions',
      'Group Activities'
    ],
    duration: '2 hours',
    difficulty: 'All Levels',
    price: 800,
    originalPrice: 1000,
    groupSize: '8-16 people',
    includes: [
      'Professional volleyball',
      'Court setup',
      'Referee service',
      'Refreshments',
      'Winner prizes',
      'Team photos'
    ],
    timings: '4:00 PM - 6:00 PM',
    bookingRequired: false,
    color: 'ocean',
    rating: 4.5,
    safetyLevel: 'Low'
  },
  {
    id: 6,
    name: 'Sunrise Photography Walk',
    category: 'Photography',
    icon: Camera,
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    gallery: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    description: 'Capture the magical golden hour with our professional photography guide. Learn composition techniques while photographing stunning sunrise views over the ocean.',
    activities: [
      'Sunrise Photography',
      'Composition Training',
      'Camera Settings Guide',
      'Landscape Photography',
      'Portrait Sessions',
      'Photo Editing Tips'
    ],
    duration: '2.5 hours',
    difficulty: 'Beginner to Advanced',
    price: 1800,
    originalPrice: 2200,
    groupSize: '4-10 people',
    includes: [
      'Professional photographer guide',
      'Photography tips booklet',
      'Best spot locations',
      'Light breakfast',
      'Photo review session',
      'Digital photo sharing'
    ],
    timings: '5:30 AM - 8:00 AM',
    bookingRequired: true,
    color: 'coral',
    rating: 4.8,
    safetyLevel: 'Low'
  }
];

const activityPackages = [
  {
    name: 'Adventure Seeker Package',
    description: 'Complete adventure experience with water sports, fishing, and cultural tours',
    price: '₹12,000',
    originalPrice: '₹15,000',
    duration: '3 days',
    includes: ['Water sports', 'Deep sea fishing', 'Cultural tour', 'All equipment', 'Meals included'],
    icon: Mountain,
    savings: '20%'
  },
  {
    name: 'Wellness Retreat Package',
    description: 'Rejuvenate with yoga, meditation, and photography sessions',
    price: '₹6,500',
    originalPrice: '₹8,000',
    duration: '2 days',
    includes: ['Daily yoga', 'Meditation sessions', 'Photography walk', 'Spa credit', 'Healthy meals'],
    icon: Heart,
    savings: '19%'
  },
  {
    name: 'Family Fun Package',
    description: 'Perfect activities for the whole family to enjoy together',
    price: '₹8,500',
    originalPrice: '₹11,000',
    duration: '2 days',
    includes: ['Beach volleyball', 'Cultural tour', 'Water sports', 'Family photos', 'Kids activities'],
    icon: Users,
    savings: '23%'
  }
];

export const ActivitiesSection: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    participants: '2',
    specialRequests: ''
  });

  const openActivityModal = (activity: typeof activities[0]) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0);
  };

  const closeActivityModal = () => {
    setSelectedActivity(null);
  };

  const nextImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => 
        prev === selectedActivity.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedActivity.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Activity booking submitted for ${selectedActivity?.name}! (Demo functionality)`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Beginner to Advanced': return 'text-blue-600 bg-blue-100';
      case 'All Levels': return 'text-purple-600 bg-purple-100';
      case 'Intermediate': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSafetyColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-orange-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="activities" className="section-padding bg-gradient-to-b from-ocean-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-coral-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-ocean-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-50 px-4 py-2 rounded-full mb-4">
            <Zap className="w-5 h-5 text-coral-600" />
            <span className="text-coral-600 font-medium">Adventure & Activities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Endless Adventures
            <span className="block text-gradient">Await You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From thrilling water sports to peaceful yoga sessions, discover a world of activities 
            designed to create unforgettable memories during your stay at Ocean Bliss.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {activities.map((activity) => (
            <Card key={activity.id} className="group overflow-hidden cursor-pointer" onClick={() => openActivityModal(activity)}>
              {/* Activity Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {activity.category}
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹{activity.originalPrice - activity.price}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Play className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Activity Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activity.color === 'ocean' 
                        ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                        : 'bg-gradient-to-r from-coral-500 to-coral-600'
                    }`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-ocean-600 transition-colors">
                        {activity.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">₹{activity.originalPrice.toLocaleString()}</div>
                    <div className="text-xl font-bold text-coral-600">₹{activity.price.toLocaleString()}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {activity.description}
                </p>

                {/* Activity Info */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4 text-ocean-500" />
                    <span>{activity.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-coral-500 fill-current" />
                    <span className="text-gray-600">{activity.rating}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                    {activity.difficulty}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className={`w-4 h-4 ${getSafetyColor(activity.safetyLevel)}`} />
                    <span className={`text-xs font-medium ${getSafetyColor(activity.safetyLevel)}`}>
                      {activity.safetyLevel} Risk
                    </span>
                  </div>
                </div>

                {/* Activities Preview */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {activity.activities.slice(0, 3).map((act, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {act}
                      </span>
                    ))}
                    {activity.activities.length > 3 && (
                      <span className="text-ocean-600 text-xs font-medium">
                        +{activity.activities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant={activity.bookingRequired ? (activity.color === 'ocean' ? 'primary' : 'secondary') : 'outline'} 
                  size="md" 
                  className="w-full"
                >
                  {activity.bookingRequired ? (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Activity
                    </>
                  ) : (
                    'Join Anytime'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Adventure Packages</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Save more with our curated activity packages designed for different interests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activityPackages.map((pkg, index) => (
              <Card key={index} className="text-center group relative overflow-hidden">
                {/* Savings Badge */}
                <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {pkg.savings} OFF
                </div>
                
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-ocean-500 to-coral-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{pkg.name}</h4>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                    <span className="text-2xl font-bold text-coral-600">{pkg.price}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-6">{pkg.duration}</div>
                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <Star className="w-3 h-3 text-coral-500 fill-current" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" size="sm" className="w-full">
                    Book Package
                  </Button>
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
                Ready for Your Next Adventure?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Book your activities in advance to secure your spot and enjoy special discounts. 
                Our activity coordinators are here to help you plan the perfect adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Activity Desk
                </Button>
                <Button variant="outline" size="lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  View Activity Map
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedActivity.color === 'ocean' 
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                    : 'bg-gradient-to-r from-coral-500 to-coral-600'
                }`}>
                  <selectedActivity.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedActivity.name}</h3>
                  <p className="text-gray-600">{selectedActivity.category} • {selectedActivity.duration}</p>
                </div>
              </div>
              <button
                onClick={closeActivityModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative h-80">
              <img
                src={selectedActivity.gallery[currentImageIndex]}
                alt={selectedActivity.name}
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
                {selectedActivity.gallery.map((_, index) => (
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
                {/* Activity Details */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-coral-500 fill-current" />
                        <span className="font-semibold text-gray-800">{selectedActivity.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{selectedActivity.groupSize}</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center space-x-1">
                        <Shield className={`w-4 h-4 ${getSafetyColor(selectedActivity.safetyLevel)}`} />
                        <span className={`text-sm font-medium ${getSafetyColor(selectedActivity.safetyLevel)}`}>
                          {selectedActivity.safetyLevel} Risk
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">₹{selectedActivity.originalPrice.toLocaleString()}</div>
                      <div className="text-2xl font-bold text-coral-600">₹{selectedActivity.price.toLocaleString()}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{selectedActivity.description}</p>

                  {/* Activity Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-ocean-500" />
                        <span className="font-medium text-gray-800">Duration</span>
                      </div>
                      <p className="text-gray-600">{selectedActivity.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-coral-500" />
                        <span className="font-medium text-gray-800">Group Size</span>
                      </div>
                      <p className="text-gray-600">{selectedActivity.groupSize}</p>
                    </div>
                  </div>

                  {/* Activities Included */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Activities Included</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedActivity.activities.map((act, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <Star className="w-3 h-3 text-coral-500 fill-current flex-shrink-0" />
                          <span className="text-sm">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">What's Included</h4>
                    <div className="space-y-2">
                      {selectedActivity.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <Award className="w-4 h-4 text-ocean-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div>
                  <div className="bg-gradient-to-r from-ocean-50 to-coral-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-6 text-lg">
                      {selectedActivity.bookingRequired ? 'Book This Activity' : 'Activity Information'}
                    </h4>
                    
                    {selectedActivity.bookingRequired ? (
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <input 
                              type="date" 
                              value={bookingData.date}
                              onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" 
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <input 
                              type="time" 
                              value={bookingData.time}
                              onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" 
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Participants</label>
                          <select 
                            value={bookingData.participants}
                            onChange={(e) => setBookingData({...bookingData, participants: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                          >
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5+ People</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                          <textarea 
                            value={bookingData.specialRequests}
                            onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" 
                            rows={3}
                            placeholder="Dietary restrictions, experience level, special occasions..."
                          />
                        </div>
                        
                        <Button 
                          type="submit"
                          variant="primary" 
                          size="lg" 
                          className="w-full"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Now - ₹{selectedActivity.price.toLocaleString()}
                        </Button>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-5 h-5 text-ocean-500" />
                            <span className="font-medium text-gray-800">Available Times</span>
                          </div>
                          <p className="text-gray-600">{selectedActivity.timings}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-5 h-5 text-coral-500" />
                            <span className="font-medium text-gray-800">Location</span>
                          </div>
                          <p className="text-gray-600">Beach Activity Area - No booking required</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full"
                          onClick={() => alert('Activity information - Demo')}
                        >
                          Get More Information
                        </Button>
                      </div>
                    )}
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      {selectedActivity.bookingRequired 
                        ? 'Free cancellation up to 2 hours before activity'
                        : 'Just show up during operating hours - no booking needed!'
                      }
                    </p>
                  </div>

                  {/* Safety Information */}
                  <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-800 mb-2 flex items-center space-x-2">
                      <Shield className={`w-5 h-5 ${getSafetyColor(selectedActivity.safetyLevel)}`} />
                      <span>Safety Information</span>
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• All safety equipment provided</p>
                      <p>• Professional instructors available</p>
                      <p>• Insurance coverage included</p>
                      <p>• Age restrictions may apply</p>
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