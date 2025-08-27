import React, { useState } from 'react';
import { 
  Gift, 
  Calendar, 
  Heart, 
  Users, 
  Star,
  Clock,
  Percent,
  Tag,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Sun,
  Snowflake,
  Leaf,
  Flower,
  Crown,
  Baby,
  Briefcase,
  Camera,
  Utensils,
  Waves
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const seasonalOffers = [
  {
    id: 1,
    title: 'Summer Splash Special',
    subtitle: 'Beat the Heat in Paradise',
    icon: Sun,
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    discount: '35%',
    originalPrice: 18000,
    offerPrice: 11700,
    validUntil: '2024-08-31',
    season: 'Summer',
    description: 'Escape the summer heat with our exclusive beach resort package. Enjoy unlimited pool access, complimentary ice cream, and special summer activities.',
    includes: [
      'Deluxe Ocean View Room for 3 nights',
      'Daily breakfast and dinner',
      'Unlimited pool and beach access',
      'Complimentary water sports',
      'Welcome summer cocktail',
      'Late checkout until 2 PM'
    ],
    terms: 'Valid for stays between June 1 - August 31, 2024. Minimum 3 nights stay required.',
    color: 'coral',
    popular: true
  },
  {
    id: 2,
    title: 'Monsoon Magic Retreat',
    subtitle: 'Romantic Rains & Ocean Views',
    icon: Leaf,
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    discount: '40%',
    originalPrice: 15000,
    offerPrice: 9000,
    validUntil: '2024-09-30',
    season: 'Monsoon',
    description: 'Experience the magic of monsoon season with cozy indoor amenities, spa treatments, and romantic dining experiences.',
    includes: [
      'Premium Suite for 2 nights',
      'All meals included',
      'Couples spa treatment',
      'Indoor entertainment access',
      'Monsoon special menu',
      'Complimentary room upgrade'
    ],
    terms: 'Valid for stays between July 1 - September 30, 2024. Subject to weather conditions.',
    color: 'ocean'
  },
  {
    id: 3,
    title: 'Winter Wellness Escape',
    subtitle: 'Perfect Weather, Perfect Getaway',
    icon: Snowflake,
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    discount: '25%',
    originalPrice: 20000,
    offerPrice: 15000,
    validUntil: '2024-02-29',
    season: 'Winter',
    description: 'Enjoy perfect winter weather with our wellness-focused package including yoga, meditation, and healthy cuisine.',
    includes: [
      'Deluxe Room for 4 nights',
      'Healthy breakfast and lunch',
      'Daily yoga and meditation',
      'Spa wellness treatments',
      'Fitness center access',
      'Wellness consultation'
    ],
    terms: 'Valid for stays between December 1 - February 29, 2024. Advance booking required.',
    color: 'ocean'
  }
];

const specialPackages = [
  {
    id: 1,
    title: 'Honeymoon Paradise',
    subtitle: 'Start Your Journey Together',
    icon: Heart,
    image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 25000,
    originalPrice: 35000,
    duration: '4 days / 3 nights',
    maxGuests: '2 Adults',
    description: 'Celebrate your new beginning with our romantic honeymoon package featuring luxury accommodations, private dining, and couples experiences.',
    highlights: [
      'Luxury Villa with Private Pool',
      'Romantic Beachside Dinner',
      'Couples Spa Treatment',
      'Champagne Welcome',
      'Flower Bed Decoration',
      'Professional Photography',
      'Late Checkout',
      'Airport Transfer'
    ],
    specialFeatures: [
      'Private butler service',
      'Customized room decoration',
      'Sunset cruise experience',
      'Complimentary anniversary cake'
    ],
    color: 'coral',
    badge: 'Most Popular'
  },
  {
    id: 2,
    title: 'Family Fun Fiesta',
    subtitle: 'Memories for the Whole Family',
    icon: Users,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 18000,
    originalPrice: 24000,
    duration: '3 days / 2 nights',
    maxGuests: '2 Adults + 2 Children',
    description: 'Perfect family getaway with activities for all ages, kids club access, and family-friendly amenities.',
    highlights: [
      'Family Suite with Connecting Rooms',
      'All Meals Included',
      'Kids Club Activities',
      'Family Pool Access',
      'Beach Games & Sports',
      'Children\'s Entertainment',
      'Babysitting Service',
      'Family Photo Session'
    ],
    specialFeatures: [
      'Kids eat free program',
      'Complimentary cribs and high chairs',
      'Child-proofed room setup',
      'Special kids welcome gifts'
    ],
    color: 'ocean',
    badge: 'Family Favorite'
  },
  {
    id: 3,
    title: 'Corporate Retreat',
    subtitle: 'Business Meets Pleasure',
    icon: Briefcase,
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: 22000,
    originalPrice: 28000,
    duration: '2 days / 1 night',
    maxGuests: '10-50 People',
    description: 'Combine business with leisure in our corporate retreat package featuring meeting facilities and team building activities.',
    highlights: [
      'Conference Room Rental',
      'Business Center Access',
      'Team Building Activities',
      'Welcome Coffee & Snacks',
      'Lunch & Dinner Included',
      'High-Speed WiFi',
      'Audio-Visual Equipment',
      'Group Transportation'
    ],
    specialFeatures: [
      'Dedicated event coordinator',
      'Customizable meeting packages',
      'Outdoor team activities',
      'Corporate dining options'
    ],
    color: 'coral',
    badge: 'Business Special'
  }
];

const flashDeals = [
  {
    id: 1,
    title: 'Last Minute Escape',
    discount: '50%',
    originalPrice: 16000,
    offerPrice: 8000,
    timeLeft: '2 days',
    description: 'Book within 48 hours for stays this weekend',
    icon: Clock,
    urgent: true
  },
  {
    id: 2,
    title: 'Early Bird Special',
    discount: '30%',
    originalPrice: 20000,
    offerPrice: 14000,
    timeLeft: '7 days',
    description: 'Book 60 days in advance and save big',
    icon: Calendar,
    urgent: false
  },
  {
    id: 3,
    title: 'Extended Stay Deal',
    discount: '45%',
    originalPrice: 25000,
    offerPrice: 13750,
    timeLeft: '5 days',
    description: 'Stay 5 nights or more and get massive savings',
    icon: Star,
    urgent: true
  }
];

const loyaltyBenefits = [
  {
    tier: 'Silver',
    nights: '5-14 nights',
    benefits: ['5% discount', 'Late checkout', 'Welcome drink'],
    color: 'gray'
  },
  {
    tier: 'Gold',
    nights: '15-29 nights',
    benefits: ['10% discount', 'Room upgrade', 'Spa credit ₹2,000'],
    color: 'yellow'
  },
  {
    tier: 'Platinum',
    nights: '30+ nights',
    benefits: ['15% discount', 'Suite upgrade', 'Personal concierge'],
    color: 'purple'
  }
];

export const OffersSection: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<typeof seasonalOffers[0] | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<typeof specialPackages[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'seasonal' | 'packages' | 'flash'>('seasonal');

  const openOfferModal = (offer: typeof seasonalOffers[0]) => {
    setSelectedOffer(offer);
  };

  const closeOfferModal = () => {
    setSelectedOffer(null);
  };

  const openPackageModal = (pkg: typeof specialPackages[0]) => {
    setSelectedPackage(pkg);
  };

  const closePackageModal = () => {
    setSelectedPackage(null);
  };

  const calculateSavings = (original: number, offer: number) => {
    return Math.round(((original - offer) / original) * 100);
  };

  return (
    <section id="offers" className="section-padding bg-gradient-to-b from-sand-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-coral-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-ocean-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-50 px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5 text-coral-600" />
            <span className="text-coral-600 font-medium">Special Offers & Packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Exclusive Deals &
            <span className="block text-gradient">Amazing Savings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover incredible savings and special packages designed to make your Ocean Bliss 
            experience even more memorable. Limited time offers with unbeatable value.
          </p>
        </div>

        {/* Offer Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('seasonal')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'seasonal'
                    ? 'bg-ocean-500 text-white shadow-ocean'
                    : 'text-gray-600 hover:text-ocean-600'
                }`}
              >
                Seasonal Offers
              </button>
              <button
                onClick={() => setActiveTab('packages')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'packages'
                    ? 'bg-coral-500 text-white shadow-coral'
                    : 'text-gray-600 hover:text-coral-600'
                }`}
              >
                Special Packages
              </button>
              <button
                onClick={() => setActiveTab('flash')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'flash'
                    ? 'bg-gradient-to-r from-coral-500 to-ocean-500 text-white'
                    : 'text-gray-600 hover:text-coral-600'
                }`}
              >
                Flash Deals
              </button>
            </div>
          </div>
        </div>

        {/* Seasonal Offers */}
        {activeTab === 'seasonal' && (
          <div className="mb-20">
            <div className="grid lg:grid-cols-3 gap-8">
              {seasonalOffers.map((offer) => (
                <Card key={offer.id} className="group overflow-hidden cursor-pointer relative" onClick={() => openOfferModal(offer)}>
                  {/* Popular Badge */}
                  {offer.popular && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10 flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold z-10">
                    {offer.discount} OFF
                  </div>

                  {/* Offer Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <CardContent className="p-6">
                    {/* Offer Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        offer.color === 'ocean' 
                          ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                          : 'bg-gradient-to-r from-coral-500 to-coral-600'
                      }`}>
                        <offer.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{offer.title}</h3>
                        <p className="text-gray-600 text-sm">{offer.subtitle}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-500 line-through">₹{offer.originalPrice.toLocaleString()}</div>
                        <div className="text-2xl font-bold text-coral-600">₹{offer.offerPrice.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold text-lg">Save ₹{(offer.originalPrice - offer.offerPrice).toLocaleString()}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{offer.description}</p>

                    {/* Valid Until */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-coral-500" />
                        <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {offer.season}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant={offer.color === 'ocean' ? 'primary' : 'secondary'} 
                      size="md" 
                      className="w-full"
                    >
                      View Offer Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Special Packages */}
        {activeTab === 'packages' && (
          <div className="mb-20">
            <div className="grid lg:grid-cols-3 gap-8">
              {specialPackages.map((pkg) => (
                <Card key={pkg.id} className="group overflow-hidden cursor-pointer relative" onClick={() => openPackageModal(pkg)}>
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-ocean-500 to-coral-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    {pkg.badge}
                  </div>

                  {/* Savings Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                  </div>

                  {/* Package Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <CardContent className="p-6">
                    {/* Package Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        pkg.color === 'ocean' 
                          ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                          : 'bg-gradient-to-r from-coral-500 to-coral-600'
                      }`}>
                        <pkg.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
                        <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
                      </div>
                    </div>

                    {/* Package Info */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-ocean-500" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-coral-500" />
                        <span>{pkg.maxGuests}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                        <div className="text-2xl font-bold text-coral-600">₹{pkg.price.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">total package</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">
                          {calculateSavings(pkg.originalPrice, pkg.price)}% OFF
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{pkg.description}</p>

                    {/* Highlights Preview */}
                    <div className="mb-6">
                      <div className="space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <div className="text-sm text-ocean-600 font-medium">
                            +{pkg.highlights.length - 3} more inclusions
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant={pkg.color === 'ocean' ? 'primary' : 'secondary'} 
                      size="md" 
                      className="w-full"
                    >
                      View Package Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Flash Deals */}
        {activeTab === 'flash' && (
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {flashDeals.map((deal) => (
                <Card key={deal.id} className={`group relative overflow-hidden ${deal.urgent ? 'ring-2 ring-coral-500' : ''}`}>
                  {/* Urgent Badge */}
                  {deal.urgent && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 animate-pulse">
                      Limited Time!
                    </div>
                  )}

                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      deal.urgent 
                        ? 'bg-gradient-to-r from-red-500 to-coral-500' 
                        : 'bg-gradient-to-r from-ocean-500 to-coral-500'
                    }`}>
                      <deal.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{deal.title}</h3>
                    
                    <div className="text-4xl font-bold text-coral-600 mb-2">{deal.discount} OFF</div>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-lg text-gray-500 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                      <span className="text-2xl font-bold text-green-600">₹{deal.offerPrice.toLocaleString()}</span>
                    </div>

                    <p className="text-gray-600 mb-6">{deal.description}</p>

                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                      deal.urgent 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-ocean-100 text-ocean-700'
                    }`}>
                      <Clock className="w-4 h-4" />
                      <span>Expires in {deal.timeLeft}</span>
                    </div>

                    <Button 
                      variant={deal.urgent ? 'secondary' : 'primary'} 
                      size="lg" 
                      className="w-full"
                    >
                      Grab This Deal
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Loyalty Program */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ocean Bliss Loyalty Program</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The more you stay, the more you save. Join our loyalty program and unlock exclusive benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loyaltyBenefits.map((tier, index) => (
              <Card key={index} className="text-center group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    tier.color === 'gray' ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                    tier.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                    'bg-gradient-to-r from-purple-500 to-purple-600'
                  }`}>
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{tier.tier}</h4>
                  <p className="text-gray-600 mb-6">{tier.nights}</p>
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-gray-600">
                        <Star className="w-4 h-4 text-coral-500 fill-current" />
                        <span>{benefit}</span>
                      </div>
                    ))}
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
                Don't Miss These Amazing Deals!
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                These exclusive offers won't last long. Book now to secure your spot in paradise 
                and enjoy incredible savings on your Ocean Bliss experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Best Rates
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Offer Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Seasonal Offer Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedOffer.color === 'ocean' 
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                    : 'bg-gradient-to-r from-coral-500 to-coral-600'
                }`}>
                  <selectedOffer.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedOffer.title}</h3>
                  <p className="text-gray-600">{selectedOffer.subtitle}</p>
                </div>
              </div>
              <button
                onClick={closeOfferModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Offer Details */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl font-bold text-coral-600">
                        {selectedOffer.discount} OFF
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">₹{selectedOffer.originalPrice.toLocaleString()}</div>
                        <div className="text-2xl font-bold text-green-600">₹{selectedOffer.offerPrice.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{selectedOffer.description}</p>
                  </div>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">What's Included</h4>
                    <div className="space-y-3">
                      {selectedOffer.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">Terms & Conditions</h5>
                    <p className="text-sm text-gray-600">{selectedOffer.terms}</p>
                  </div>
                </div>

                {/* Booking Section */}
                <div>
                  <div className="bg-gradient-to-r from-ocean-50 to-coral-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-6 text-lg">Book This Offer</h4>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                          <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                          <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>5+ Guests</option>
                        </select>
                      </div>
                      
                      <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full"
                        onClick={() => alert('Offer booking functionality - Demo')}
                      >
                        Book Now - {selectedOffer.discount} OFF
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Valid until {new Date(selectedOffer.validUntil).toLocaleDateString()} • Subject to availability
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-800 mb-2">Need Help?</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-ocean-500" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-coral-500" />
                        <span>offers@oceanbliss.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedPackage.color === 'ocean' 
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                    : 'bg-gradient-to-r from-coral-500 to-coral-600'
                }`}>
                  <selectedPackage.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedPackage.title}</h3>
                  <p className="text-gray-600">{selectedPackage.subtitle}</p>
                </div>
              </div>
              <button
                onClick={closePackageModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Package Details */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-coral-600">₹{selectedPackage.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 line-through">₹{selectedPackage.originalPrice.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        Save ₹{(selectedPackage.originalPrice - selectedPackage.price).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{selectedPackage.description}</p>

                  {/* Package Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-ocean-500" />
                        <span className="font-medium text-gray-800">Duration</span>
                      </div>
                      <p className="text-gray-600">{selectedPackage.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-coral-500" />
                        <span className="font-medium text-gray-800">Max Guests</span>
                      </div>
                      <p className="text-gray-600">{selectedPackage.maxGuests}</p>
                    </div>
                  </div>

                  {/* Package Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Package Highlights</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">Special Features</h4>
                    <div className="space-y-2">
                      {selectedPackage.specialFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 text-gray-600">
                          <Sparkles className="w-4 h-4 text-coral-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Section */}
                <div>
                  <div className="bg-gradient-to-r from-ocean-50 to-coral-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-6 text-lg">Book This Package</h4>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                          <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                            <option>4 Guests</option>
                            <option>Family (4+)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                        <textarea 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent" 
                          rows={3}
                          placeholder="Anniversary celebration, dietary requirements, etc."
                        />
                      </div>
                      
                      <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full"
                        onClick={() => alert('Package booking functionality - Demo')}
                      >
                        Book Package - ₹{selectedPackage.price.toLocaleString()}
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Package price includes all mentioned services • Subject to availability
                    </p>
                  </div>

                  {/* Package Benefits */}
                  <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-800 mb-2">Why Choose This Package?</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Save {calculateSavings(selectedPackage.originalPrice, selectedPackage.price)}% compared to booking separately</p>
                      <p>• Dedicated package coordinator</p>
                      <p>• Priority booking and reservations</p>
                      <p>• Flexible customization options</p>
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