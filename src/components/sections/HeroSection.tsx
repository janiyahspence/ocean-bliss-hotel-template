import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, Award, Waves } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const HeroSection: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally handle booking logic
    alert('Booking form submitted! (Demo functionality)');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/80 via-ocean-700/60 to-coral-600/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-coral-300/40 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 bg-sand-200/50 rounded-full blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-coral-200">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-2 font-medium">5-Star Luxury Resort</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-shadow-lg animate-fade-in">
                Welcome to
                <span className="block text-gradient bg-gradient-to-r from-coral-300 to-sand-200 bg-clip-text text-transparent">
                  Paradise
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-shadow animate-slide-up">
                Experience ultimate luxury at Ocean Bliss Beach Resort, where pristine beaches meet world-class hospitality in India's most beautiful coastal destination.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="flex items-center space-x-3">
                <div className="bg-ocean-500/20 p-2 rounded-full">
                  <Waves className="w-5 h-5 text-ocean-200" />
                </div>
                <span className="text-white/90">Private Beach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-coral-500/20 p-2 rounded-full">
                  <Award className="w-5 h-5 text-coral-200" />
                </div>
                <span className="text-white/90">Award Winning</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button variant="secondary" size="lg" className="shadow-2xl">
                Explore Resort
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 shadow-2xl">
                View Gallery
              </Button>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-white/95 backdrop-blur-md shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Check Availability</h3>
                <p className="text-gray-600">Find your perfect getaway dates</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check In
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check Out
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Guests and Rooms */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rooms
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4">4+ Rooms</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Offer Banner */}
                <div className="bg-gradient-to-r from-coral-50 to-ocean-50 p-4 rounded-lg border border-coral-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-coral-700">Early Bird Special</p>
                      <p className="text-xs text-gray-600">Book 30 days in advance & save 20%</p>
                    </div>
                    <div className="text-coral-600 font-bold text-lg">20% OFF</div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" size="lg" className="w-full shadow-xl">
                  Check Availability & Rates
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Best rate guaranteed • Free cancellation up to 24 hours
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-20" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};