import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { OverviewSection } from './components/sections/OverviewSection';
import { AccommodationsSection } from './components/sections/AccommodationsSection';
import { AmenitiesSection } from './components/sections/AmenitiesSection';
import { DiningSection } from './components/sections/DiningSection';
import { ActivitiesSection } from './components/sections/ActivitiesSection';
import { GallerySection } from './components/sections/GallerySection';
import { OffersSection } from './components/sections/OffersSection';
import { ContactSection } from './components/sections/ContactSection';
import { AboutSection } from './components/sections/AboutSection';
import { LiveChat } from './components/ui/LiveChat';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Overview Section */}
      <OverviewSection />
      
      {/* Accommodations Section */}
      <AccommodationsSection />
      
      {/* Amenities Section */}
      <AmenitiesSection />
      
      {/* Dining Section */}
      <DiningSection />
      
      {/* Activities Section */}
      <ActivitiesSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Offers Section */}
      <OffersSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* About Section */}
      <AboutSection />
      
      <Footer />
      
      {/* Live Chat */}
      <LiveChat />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
