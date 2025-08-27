import React, { useState } from 'react';
import { 
  Heart, 
  Award, 
  Users, 
  Leaf, 
  Star,
  Shield,
  Globe,
  TreePine,
  Droplets,
  Sun,
  Recycle,
  Fish,
  Flower2,
  Building,
  Calendar,
  Target,
  Eye,
  Compass,
  Crown,
  Medal,
  Trophy,
  CheckCircle,
  Quote,
  MapPin,
  Clock,
  Phone,
  Mail,
  Linkedin,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const brandStory = {
  founding: {
    year: 2009,
    vision: "To create a slice of paradise where luxury meets nature, and every guest feels the magic of coastal India.",
    founders: "Rajesh and Priya Sharma",
    inspiration: "Born from a dream to showcase India's pristine coastline while preserving its natural beauty for future generations."
  },
  milestones: [
    { year: 2009, event: "Ocean Bliss Beach Resort founded", icon: Building },
    { year: 2011, event: "First sustainability certification received", icon: Leaf },
    { year: 2013, event: "Expanded to 150 luxury rooms and suites", icon: Crown },
    { year: 2015, event: "Won 'Best Beach Resort in India' award", icon: Trophy },
    { year: 2017, event: "Launched marine conservation program", icon: Fish },
    { year: 2019, event: "Achieved carbon neutral status", icon: Globe },
    { year: 2021, event: "Opened award-winning spa and wellness center", icon: Star },
    { year: 2023, event: "Celebrated 50,000+ happy guests milestone", icon: Heart }
  ]
};

const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    position: 'Founder & Managing Director',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'With over 20 years in hospitality, Rajesh brings passion for sustainable luxury tourism and authentic Indian hospitality.',
    specialties: ['Sustainable Tourism', 'Guest Experience', 'Strategic Planning'],
    contact: { email: 'rajesh@oceanbliss.com', linkedin: '#' }
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Co-Founder & Creative Director',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Priya oversees design, wellness programs, and cultural experiences, ensuring every detail reflects our commitment to excellence.',
    specialties: ['Interior Design', 'Wellness Programs', 'Cultural Experiences'],
    contact: { email: 'priya@oceanbliss.com', linkedin: '#' }
  },
  {
    id: 3,
    name: 'Chef Arjun Menon',
    position: 'Executive Chef',
    image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Award-winning chef with expertise in coastal Indian cuisine and international flavors, creating memorable culinary experiences.',
    specialties: ['Coastal Cuisine', 'Farm-to-Table', 'Culinary Innovation'],
    contact: { email: 'chef@oceanbliss.com', linkedin: '#' }
  },
  {
    id: 4,
    name: 'Dr. Meera Patel',
    position: 'Spa & Wellness Director',
    image: 'https://images.pexels.com/photos/5240446/pexels-photo-5240446.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Certified Ayurveda practitioner and wellness expert, designing holistic treatments that rejuvenate mind, body, and soul.',
    specialties: ['Ayurveda', 'Holistic Wellness', 'Therapeutic Treatments'],
    contact: { email: 'wellness@oceanbliss.com', linkedin: '#' }
  },
  {
    id: 5,
    name: 'Captain Vikram Singh',
    position: 'Activities & Water Sports Director',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Former naval officer with 15 years of maritime experience, ensuring safe and thrilling water sports adventures.',
    specialties: ['Water Sports', 'Marine Safety', 'Adventure Tourism'],
    contact: { email: 'activities@oceanbliss.com', linkedin: '#' }
  },
  {
    id: 6,
    name: 'Anjali Reddy',
    position: 'Guest Relations Manager',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Hospitality expert dedicated to creating personalized experiences and ensuring every guest feels like family.',
    specialties: ['Guest Experience', 'Personalized Service', 'Cultural Tours'],
    contact: { email: 'guestrelations@oceanbliss.com', linkedin: '#' }
  }
];

const awards = [
  {
    year: 2023,
    title: 'Best Luxury Beach Resort - India',
    organization: 'Travel + Leisure India',
    description: 'Recognized for exceptional service and sustainable luxury practices',
    icon: Trophy,
    color: 'gold'
  },
  {
    year: 2023,
    title: 'Sustainable Tourism Excellence Award',
    organization: 'Ministry of Tourism, India',
    description: 'Outstanding commitment to environmental conservation and community development',
    icon: Leaf,
    color: 'green'
  },
  {
    year: 2022,
    title: 'TripAdvisor Travelers\' Choice Award',
    organization: 'TripAdvisor',
    description: 'Top 1% of hotels worldwide based on guest reviews and ratings',
    icon: Star,
    color: 'orange'
  },
  {
    year: 2022,
    title: 'Best Spa Resort - Western India',
    organization: 'Spa India Awards',
    description: 'Excellence in wellness and therapeutic treatments',
    icon: Award,
    color: 'purple'
  },
  {
    year: 2021,
    title: 'Green Hotel Certification',
    organization: 'Green Hotel Association',
    description: 'Certified for environmental sustainability and eco-friendly practices',
    icon: Globe,
    color: 'green'
  },
  {
    year: 2020,
    title: 'Best Wedding Destination',
    organization: 'WeddingSutra Awards',
    description: 'Premier destination for luxury beach weddings and celebrations',
    icon: Heart,
    color: 'pink'
  }
];

const sustainabilityInitiatives = [
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Rainwater harvesting and greywater recycling systems',
    impact: '40% reduction in water consumption',
    color: 'blue'
  },
  {
    icon: Sun,
    title: 'Solar Energy',
    description: 'Solar panels providing 60% of resort\'s energy needs',
    impact: '500 tons CO2 saved annually',
    color: 'yellow'
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'Zero waste to landfill through comprehensive recycling',
    impact: '95% waste diverted from landfills',
    color: 'green'
  },
  {
    icon: Fish,
    title: 'Marine Conservation',
    description: 'Coral reef restoration and marine life protection programs',
    impact: '2 hectares of coral reef restored',
    color: 'teal'
  },
  {
    icon: TreePine,
    title: 'Local Sourcing',
    description: 'Supporting local farmers and artisans for 80% of supplies',
    impact: '200+ local families supported',
    color: 'green'
  },
  {
    icon: Flower2,
    title: 'Organic Gardens',
    description: 'On-site organic herb and vegetable gardens for restaurants',
    impact: '30% of produce grown on-site',
    color: 'pink'
  }
];

const coreValues = [
  {
    icon: Heart,
    title: 'Authentic Hospitality',
    description: 'Genuine warmth and personalized service that makes every guest feel at home',
    color: 'coral'
  },
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description: 'Protecting and preserving the natural beauty that surrounds us',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Community Partnership',
    description: 'Supporting local communities and celebrating regional culture',
    color: 'blue'
  },
  {
    icon: Star,
    title: 'Excellence in Everything',
    description: 'Continuous improvement and attention to detail in all we do',
    color: 'yellow'
  },
  {
    icon: Globe,
    title: 'Cultural Celebration',
    description: 'Showcasing the rich heritage and traditions of coastal India',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Safety & Wellness',
    description: 'Ensuring the health, safety, and wellbeing of guests and staff',
    color: 'red'
  }
];

const guestTestimonials = [
  {
    id: 1,
    name: 'Amit & Kavya Patel',
    location: 'Mumbai, India',
    occasion: 'Honeymoon',
    rating: 5,
    text: 'Ocean Bliss exceeded all our expectations! The villa was stunning, the staff incredibly attentive, and the sunset dinners were magical. Perfect start to our married life.',
    image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    stayDate: 'March 2024'
  },
  {
    id: 2,
    name: 'The Johnson Family',
    location: 'Delhi, India',
    occasion: 'Family Vacation',
    rating: 5,
    text: 'Amazing family resort! Kids loved the club activities, we enjoyed the spa, and the beachfront location was perfect. The staff went above and beyond for our children.',
    image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    stayDate: 'February 2024'
  },
  {
    id: 3,
    name: 'Ravi Sharma',
    location: 'Bangalore, India',
    occasion: 'Corporate Retreat',
    rating: 5,
    text: 'Excellent facilities for our company retreat. The conference rooms were well-equipped, team activities were engaging, and the dining was exceptional. Highly recommended!',
    image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    stayDate: 'January 2024'
  }
];

export const AboutSection: React.FC = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState<typeof teamMembers[0] | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const openTeamModal = (member: typeof teamMembers[0]) => {
    setSelectedTeamMember(member);
  };

  const closeTeamModal = () => {
    setSelectedTeamMember(null);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % guestTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? guestTestimonials.length - 1 : prev - 1);
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      coral: 'from-coral-500 to-coral-600',
      green: 'from-green-500 to-green-600',
      blue: 'from-blue-500 to-blue-600',
      yellow: 'from-yellow-500 to-yellow-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600',
      teal: 'from-teal-500 to-teal-600',
      pink: 'from-pink-500 to-pink-600',
      gold: 'from-yellow-400 to-yellow-500',
      orange: 'from-orange-500 to-orange-600'
    };
    return colorMap[color] || 'from-ocean-500 to-ocean-600';
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-ocean-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-coral-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-ocean-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-50 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 text-coral-600" />
            <span className="text-coral-600 font-medium">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Where Dreams Meet
            <span className="block text-gradient">Reality</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the passion, vision, and dedication behind Ocean Bliss Beach Resort. 
            Our story is one of love for nature, commitment to excellence, and creating unforgettable experiences.
          </p>
        </div>

        {/* Brand Story */}
        <div className="mb-20">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Story Content */}
              <div className="p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-coral-500 to-ocean-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Beginning</h3>
                    <p className="text-gray-600">Founded in {brandStory.founding.year}</p>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{brandStory.founding.vision}"
                </blockquote>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {brandStory.founding.inspiration} Founded by {brandStory.founding.founders}, 
                  Ocean Bliss began as a vision to create something extraordinary - a place where 
                  luxury hospitality meets environmental consciousness, where every guest experience 
                  contributes to the preservation of our beautiful coastline.
                </p>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-coral-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-ocean-600 mb-2">50K+</div>
                    <div className="text-sm text-gray-600">Happy Guests</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Awards Won</div>
                  </div>
                </div>
              </div>

              {/* Story Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Ocean Bliss Resort Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Key milestones that shaped Ocean Bliss into the award-winning resort it is today
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-coral-500 to-ocean-500 rounded-full"></div>

            <div className="space-y-12">
              {brandStory.milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="bg-gradient-to-r from-coral-500 to-ocean-500 w-10 h-10 rounded-full flex items-center justify-center">
                            <milestone.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-coral-600">{milestone.year}</div>
                        </div>
                        <p className="text-gray-800 font-medium">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-white border-4 border-coral-500 rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Ocean Bliss
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${getColorClasses(value.color)}`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate professionals who make Ocean Bliss an extraordinary destination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group overflow-hidden cursor-pointer" onClick={() => openTeamModal(member)}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Click to learn more</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-coral-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.specialties.slice(0, 2).map((specialty, index) => (
                      <span key={index} className="bg-ocean-50 text-ocean-600 px-2 py-1 rounded-full text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Awards & Recognition</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Industry recognition for our commitment to excellence and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${getColorClasses(award.color)}`}>
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{award.year}</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{award.title}</h4>
                  <p className="text-coral-600 font-medium mb-3">{award.organization}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Sustainability Commitment</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our dedication to preserving the environment while providing luxury experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${getColorClasses(initiative.color)}`}>
                    <initiative.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{initiative.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm font-medium">
                    {initiative.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guest Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">What Our Guests Say</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real experiences from our valued guests who have made Ocean Bliss their home away from home
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(guestTestimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                    "{guestTestimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={guestTestimonials[currentTestimonial].image}
                      alt={guestTestimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-800">{guestTestimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600 text-sm">{guestTestimonials[currentTestimonial].location}</div>
                      <div className="text-coral-600 text-sm font-medium">{guestTestimonials[currentTestimonial].occasion} • {guestTestimonials[currentTestimonial].stayDate}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {guestTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-coral-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-coral-50 to-ocean-50 border-coral-200">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Become Part of Our Story
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of guests who have experienced the magic of Ocean Bliss. 
                Create your own unforgettable memories in our slice of paradise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Plan Your Visit
                </Button>
                <Button variant="outline" size="lg">
                  <Camera className="w-5 h-5 mr-2" />
                  View Our Story Gallery
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedTeamMember && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedTeamMember.image}
                  alt={selectedTeamMember.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedTeamMember.name}</h3>
                  <p className="text-coral-600 font-medium">{selectedTeamMember.position}</p>
                </div>
              </div>
              <button
                onClick={closeTeamModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedTeamMember.bio}</p>

              {/* Specialties */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedTeamMember.specialties.map((specialty, index) => (
                    <span key={index} className="bg-ocean-100 text-ocean-700 px-4 py-2 rounded-full font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-coral-500" />
                    <a href={`mailto:${selectedTeamMember.contact.email}`} className="text-gray-600 hover:text-coral-600 transition-colors">
                      {selectedTeamMember.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                    <a href={selectedTeamMember.contact.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                      Connect on LinkedIn
                    </a>
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