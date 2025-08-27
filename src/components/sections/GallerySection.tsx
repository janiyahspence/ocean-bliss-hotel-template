import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Grid3X3,
  Image as ImageIcon,
  Video,
  Eye,
  Download,
  Share2,
  Heart,
  ZoomIn,
  Filter,
  MapPin,
  Clock
} from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

const galleryCategories = [
  { id: 'all', name: 'All Photos', count: 48 },
  { id: 'rooms', name: 'Rooms & Suites', count: 12 },
  { id: 'dining', name: 'Dining', count: 8 },
  { id: 'amenities', name: 'Amenities', count: 10 },
  { id: 'beach', name: 'Beach & Ocean', count: 15 },
  { id: 'activities', name: 'Activities', count: 8 },
  { id: 'events', name: 'Events', count: 6 }
];

const galleryImages = [
  // Beach & Ocean
  {
    id: 1,
    category: 'beach',
    src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Pristine Beach at Sunset',
    description: 'Golden hour at our private beach with crystal clear waters',
    location: 'Private Beach',
    featured: true
  },
  {
    id: 2,
    category: 'beach',
    src: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Ocean View Paradise',
    description: 'Endless ocean views from our beachfront location',
    location: 'Beachfront'
  },
  {
    id: 3,
    category: 'beach',
    src: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Beach Activities',
    description: 'Water sports and beach activities for all ages',
    location: 'Activity Beach'
  },
  // Rooms & Suites
  {
    id: 4,
    category: 'rooms',
    src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Deluxe Ocean View Room',
    description: 'Elegant room with stunning ocean views and modern amenities',
    location: 'Main Building'
  },
  {
    id: 5,
    category: 'rooms',
    src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Premium Beachfront Suite',
    description: 'Spacious suite with direct beach access and luxury furnishings',
    location: 'Beachfront Wing',
    featured: true
  },
  {
    id: 6,
    category: 'rooms',
    src: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Luxury Villa',
    description: 'Private villa with personal pool and dedicated butler service',
    location: 'Villa Complex'
  },
  // Amenities
  {
    id: 7,
    category: 'amenities',
    src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Infinity Pool',
    description: 'Stunning infinity pool overlooking the ocean',
    location: 'Pool Deck',
    featured: true
  },
  {
    id: 8,
    category: 'amenities',
    src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Serenity Spa',
    description: 'Rejuvenating spa treatments in tranquil surroundings',
    location: 'Spa Center'
  },
  {
    id: 9,
    category: 'amenities',
    src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Fitness Center',
    description: 'State-of-the-art fitness equipment with ocean views',
    location: 'Wellness Center'
  },
  // Dining
  {
    id: 10,
    category: 'dining',
    src: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Azure Beachside Cafe',
    description: 'Casual dining with toes in the sand and ocean views',
    location: 'Beachfront'
  },
  {
    id: 11,
    category: 'dining',
    src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Coral Fine Dining',
    description: 'Award-winning fine dining with panoramic ocean views',
    location: 'Main Building'
  },
  {
    id: 12,
    category: 'dining',
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Gourmet Cuisine',
    description: 'Exquisite dishes crafted by our master chefs',
    location: 'All Restaurants'
  },
  // Activities
  {
    id: 13,
    category: 'activities',
    src: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Water Sports Adventure',
    description: 'Thrilling water sports and ocean adventures',
    location: 'Activity Beach'
  },
  {
    id: 14,
    category: 'activities',
    src: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Sunset Yoga',
    description: 'Peaceful yoga sessions with stunning sunset views',
    location: 'Beach Pavilion'
  },
  {
    id: 15,
    category: 'activities',
    src: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Beach Volleyball',
    description: 'Fun beach volleyball tournaments and matches',
    location: 'Sports Beach'
  },
  // Events
  {
    id: 16,
    category: 'events',
    src: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Beach Wedding',
    description: 'Romantic beach weddings with ocean backdrop',
    location: 'Wedding Pavilion'
  },
  {
    id: 17,
    category: 'events',
    src: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Family Celebrations',
    description: 'Special family events and celebrations',
    location: 'Event Spaces'
  }
];

const virtualTours = [
  {
    id: 1,
    title: 'Resort Overview Tour',
    description: 'Complete 360° tour of our entire resort property',
    thumbnail: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    duration: '8 minutes',
    highlights: ['Beach Access', 'Pool Area', 'Restaurants', 'Rooms']
  },
  {
    id: 2,
    title: 'Luxury Villa Experience',
    description: 'Exclusive tour of our premium villa accommodations',
    thumbnail: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    duration: '5 minutes',
    highlights: ['Private Pool', 'Master Suite', 'Butler Service', 'Beach Access']
  },
  {
    id: 3,
    title: 'Dining Experience Tour',
    description: 'Virtual tour of all our restaurants and dining venues',
    thumbnail: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    duration: '6 minutes',
    highlights: ['Beachside Cafe', 'Fine Dining', 'Pool Bar', 'Room Service']
  }
];

const videoShowcase = [
  {
    id: 1,
    title: 'Ocean Bliss Resort Experience',
    description: 'Discover the magic of Ocean Bliss Beach Resort',
    thumbnail: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    duration: '3:45',
    category: 'Resort Overview'
  },
  {
    id: 2,
    title: 'Culinary Journey',
    description: 'Experience our world-class dining and cuisine',
    thumbnail: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    duration: '2:30',
    category: 'Dining'
  },
  {
    id: 3,
    title: 'Adventure & Activities',
    description: 'Thrilling water sports and beach activities',
    thumbnail: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    duration: '4:15',
    category: 'Activities'
  }
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [isLoading, setIsLoading] = useState(false);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, currentImageIndex]);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-sand-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-ocean-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-coral-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-50 px-4 py-2 rounded-full mb-4">
            <Camera className="w-5 h-5 text-coral-600" />
            <span className="text-coral-600 font-medium">Visual Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Immerse Yourself in
            <span className="block text-gradient">Paradise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our stunning resort through our comprehensive photo gallery, virtual tours, 
            and video experiences. See why Ocean Bliss is truly a slice of paradise.
          </p>
        </div>

        {/* Gallery Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-ocean-500 text-white shadow-ocean'
                    : 'bg-white text-gray-600 hover:bg-ocean-50 hover:text-ocean-600 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-ocean-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'masonry' ? 'bg-ocean-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className={`mb-20 ${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
          <div className={`grid gap-4 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'columns-1 md:columns-2 lg:columns-3 xl:columns-4'
          }`}>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden rounded-2xl ${
                  viewMode === 'masonry' ? 'break-inside-avoid mb-4' : 'aspect-square'
                } ${image.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => openLightbox(image)}
              >
                <div className="relative h-full">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
                      <p className="text-sm text-white/90 mb-2">{image.description}</p>
                      <div className="flex items-center space-x-2 text-xs text-white/80">
                        <MapPin className="w-3 h-3" />
                        <span>{image.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4 text-gray-800" />
                  </div>

                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-4 left-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Tours */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">360° Virtual Tours</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take an immersive virtual tour of our resort from the comfort of your home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {virtualTours.map((tour) => (
              <Card key={tour.id} className="group overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.thumbnail}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-gray-800" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-ocean-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{tour.duration}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h4>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.map((highlight, index) => (
                      <span key={index} className="bg-ocean-50 text-ocean-600 px-2 py-1 rounded-full text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Virtual Tour
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Video Showcase</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the magic of Ocean Bliss through our cinematic video collection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoShowcase.map((video) => (
              <Card key={video.id} className="group overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-coral-500 hover:bg-coral-600 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    {video.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h4>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
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
                Ready to Experience This Paradise?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                These images and videos only capture a glimpse of the magic that awaits you at Ocean Bliss. 
                Book your stay today and create your own unforgettable memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Camera className="w-5 h-5 mr-2" />
                  Book Photography Session
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90 mb-2">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedImage.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-white/80 hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
            {currentImageIndex + 1} of {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
};