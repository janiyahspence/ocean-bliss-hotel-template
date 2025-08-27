import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Car,
  Plane,
  Train,
  Navigation,
  Star,
  Sun,
  Cloud,
  Droplets,
  Wind,
  Thermometer,
  Calendar,
  Users,
  Award,
  Camera,
  Compass,
  Mountain,
  Building,
  Waves,
  TreePine,
  Church,
  ShoppingBag,
  Coffee,
  Utensils,
  Music,
  Heart,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: '+91 98765 43210',
    secondary: '+91 98765 43211 (Reservations)',
    description: 'Speak directly with our resort specialists',
    available: '24/7',
    color: 'ocean'
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@oceanbliss.com',
    secondary: 'reservations@oceanbliss.com',
    description: 'Get detailed information and quotes',
    available: 'Response within 2 hours',
    color: 'coral'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    primary: 'Chat with us now',
    secondary: 'WhatsApp: +91 98765 43210',
    description: 'Instant support and quick answers',
    available: '6:00 AM - 12:00 AM',
    color: 'ocean'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: 'Ocean Bliss Beach Resort',
    secondary: 'Beachfront Road, Goa 403516',
    description: 'Come see our paradise in person',
    available: 'Always open for guests',
    color: 'coral'
  }
];

const transportationOptions = [
  {
    icon: Plane,
    title: 'Airport Transfer',
    distance: '45 minutes',
    price: 'Complimentary',
    description: 'Free pickup and drop-off from Goa International Airport',
    features: ['Air-conditioned vehicles', 'Professional drivers', 'Meet & greet service', '24/7 availability'],
    color: 'ocean'
  },
  {
    icon: Car,
    title: 'Private Car Rental',
    distance: 'On-demand',
    price: 'From ₹2,500/day',
    description: 'Explore Goa at your own pace with our rental service',
    features: ['Self-drive options', 'Chauffeur service', 'GPS navigation', 'Fuel included packages'],
    color: 'coral'
  },
  {
    icon: Train,
    title: 'Railway Station',
    distance: '25 minutes',
    price: 'Taxi ₹800',
    description: 'Convenient access from Margao Railway Station',
    features: ['Regular taxi service', 'Pre-paid taxi counter', 'Resort pickup available', 'Luggage assistance'],
    color: 'ocean'
  }
];

const nearbyAttractions = [
  {
    icon: Church,
    name: 'Basilica of Bom Jesus',
    distance: '15 km',
    duration: '20 minutes',
    type: 'Heritage Site',
    rating: 4.8,
    description: 'UNESCO World Heritage Site with stunning Portuguese architecture',
    highlights: ['Historical significance', 'Beautiful architecture', 'Guided tours available']
  },
  {
    icon: Mountain,
    name: 'Dudhsagar Falls',
    distance: '60 km',
    duration: '1.5 hours',
    type: 'Natural Wonder',
    rating: 4.7,
    description: 'Spectacular four-tiered waterfall in the Western Ghats',
    highlights: ['Scenic train journey', 'Trekking opportunities', 'Best during monsoon']
  },
  {
    icon: Building,
    name: 'Old Goa Churches',
    distance: '18 km',
    duration: '25 minutes',
    type: 'Cultural Site',
    rating: 4.6,
    description: 'Historic churches showcasing Portuguese colonial heritage',
    highlights: ['Se Cathedral', 'Church of St. Francis', 'Museum visits']
  },
  {
    icon: ShoppingBag,
    name: 'Anjuna Flea Market',
    distance: '12 km',
    duration: '18 minutes',
    type: 'Shopping',
    rating: 4.5,
    description: 'Vibrant market with local crafts, jewelry, and souvenirs',
    highlights: ['Wednesday market', 'Local handicrafts', 'Bargaining culture']
  },
  {
    icon: Waves,
    name: 'Baga Beach',
    distance: '8 km',
    duration: '12 minutes',
    type: 'Beach',
    rating: 4.4,
    description: 'Popular beach known for water sports and nightlife',
    highlights: ['Water sports', 'Beach shacks', 'Vibrant nightlife']
  },
  {
    icon: TreePine,
    name: 'Spice Plantations',
    distance: '35 km',
    duration: '45 minutes',
    type: 'Nature Tour',
    rating: 4.6,
    description: 'Aromatic spice gardens with guided tours and traditional lunch',
    highlights: ['Spice tours', 'Traditional lunch', 'Elephant rides']
  }
];

const weatherData = {
  current: {
    temperature: 28,
    condition: 'Sunny',
    humidity: 75,
    windSpeed: 12,
    icon: Sun
  },
  forecast: [
    { day: 'Today', high: 32, low: 24, condition: 'Sunny', icon: Sun },
    { day: 'Tomorrow', high: 30, low: 25, condition: 'Partly Cloudy', icon: Cloud },
    { day: 'Wed', high: 29, low: 23, condition: 'Light Rain', icon: Droplets },
    { day: 'Thu', high: 31, low: 24, condition: 'Sunny', icon: Sun },
    { day: 'Fri', high: 28, low: 22, condition: 'Cloudy', icon: Cloud }
  ]
};

const departments = [
  { name: 'General Inquiries', email: 'info@oceanbliss.com' },
  { name: 'Reservations', email: 'reservations@oceanbliss.com' },
  { name: 'Events & Weddings', email: 'events@oceanbliss.com' },
  { name: 'Spa & Wellness', email: 'spa@oceanbliss.com' },
  { name: 'Activities', email: 'activities@oceanbliss.com' },
  { name: 'Guest Relations', email: 'guestrelations@oceanbliss.com' }
];

export const ContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: 'General Inquiries',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-ocean-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-coral-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-ocean-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ocean-50 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-ocean-600" />
            <span className="text-ocean-600 font-medium">Contact & Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in Touch with
            <span className="block text-gradient">Paradise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience Ocean Bliss? Contact our friendly team for reservations, 
            inquiries, or to plan your perfect getaway to our tropical paradise.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  method.color === 'ocean' 
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                    : 'bg-gradient-to-r from-coral-500 to-coral-600'
                }`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="font-semibold text-gray-800">{method.primary}</p>
                  <p className="text-sm text-gray-600">{method.secondary}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <div className="bg-gray-50 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {method.available}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-ocean-50 to-coral-50 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select
                      name="department"
                      value={contactForm.department}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                    >
                      {departments.map((dept) => (
                        <option key={dept.name} value={dept.name}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Travel Information */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">Travel Information (Optional)</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                      <input
                        type="date"
                        name="checkIn"
                        value={contactForm.checkIn}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                      <input
                        type="date"
                        name="checkOut"
                        value={contactForm.checkOut}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <select
                        name="guests"
                        value={contactForm.guests}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your inquiry, special requests, or any questions you have..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Form Status */}
                {formStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll respond within 2 hours.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or call us directly.</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Resort Information */}
          <div className="space-y-8">
            {/* Location Info */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Resort Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-coral-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Ocean Bliss Beach Resort</p>
                      <p className="text-gray-600">Beachfront Road, Candolim</p>
                      <p className="text-gray-600">Goa 403516, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Navigation className="w-6 h-6 text-ocean-500" />
                    <div>
                      <p className="font-semibold text-gray-800">GPS Coordinates</p>
                      <p className="text-gray-600">15.5167° N, 73.7667° E</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Widget */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Weather</h3>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <weatherData.current.icon className="w-12 h-12 text-yellow-500" />
                    <div>
                      <div className="text-3xl font-bold text-gray-800">{weatherData.current.temperature}°C</div>
                      <div className="text-gray-600">{weatherData.current.condition}</div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span>{weatherData.current.humidity}% Humidity</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Wind className="w-4 h-4 text-gray-500" />
                      <span>{weatherData.current.windSpeed} km/h Wind</span>
                    </div>
                  </div>
                </div>

                {/* 5-Day Forecast */}
                <div className="grid grid-cols-5 gap-2">
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-xs font-medium text-gray-600 mb-1">{day.day}</div>
                      <day.icon className="w-6 h-6 mx-auto mb-1 text-yellow-500" />
                      <div className="text-xs text-gray-800">{day.high}°/{day.low}°</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Check-in Time</span>
                    <span className="font-semibold text-gray-800">3:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Check-out Time</span>
                    <span className="font-semibold text-gray-800">12:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Airport Distance</span>
                    <span className="font-semibold text-gray-800">45 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Beach Access</span>
                    <span className="font-semibold text-gray-800">Private Beach</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Languages Spoken</span>
                    <span className="font-semibold text-gray-800">English, Hindi, Konkani</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Getting to Ocean Bliss</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Multiple convenient transportation options to reach our paradise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {transportationOptions.map((option, index) => (
              <Card key={index} className="group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    option.color === 'ocean' 
                      ? 'bg-gradient-to-r from-ocean-500 to-ocean-600' 
                      : 'bg-gradient-to-r from-coral-500 to-coral-600'
                  }`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">{option.title}</h4>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-coral-600">{option.price}</div>
                    <div className="text-sm text-gray-600">{option.distance}</div>
                  </div>
                  <p className="text-gray-600 text-center mb-6">{option.description}</p>
                  <div className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Explore Goa</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the rich culture, stunning nature, and vibrant attractions near our resort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <Card key={index} className="group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-ocean-500 to-coral-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <attraction.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{attraction.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <span>{attraction.distance}</span>
                        <span>•</span>
                        <span>{attraction.duration}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span>{attraction.rating}</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium inline-block mb-3">
                        {attraction.type}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
                  <div className="space-y-1">
                    {attraction.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-coral-500 rounded-full"></div>
                        <span>{highlight}</span>
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
                Ready to Visit Paradise?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Our team is here to help you plan the perfect getaway. Contact us today 
                for personalized assistance and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 98765 43210
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Check Availability
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};