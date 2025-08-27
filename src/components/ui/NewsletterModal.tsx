import React, { useState } from 'react';
import { Mail, X, CheckCircle, AlertCircle, Gift, Star, Calendar } from 'lucide-react';
import { Button } from './Button';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const newsletterBenefits = [
  {
    icon: Gift,
    title: 'Exclusive Offers',
    description: 'Get first access to special deals and packages'
  },
  {
    icon: Star,
    title: 'VIP Updates',
    description: 'Latest news about new amenities and services'
  },
  {
    icon: Calendar,
    title: 'Event Invitations',
    description: 'Special events and seasonal celebrations'
  }
];

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    offers: true,
    events: true,
    updates: false,
    dining: false
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
        setPreferences({ offers: true, events: true, updates: false, dining: false });
        onClose();
      }, 2000);
    }, 1500);
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-8 bg-gradient-to-r from-ocean-50 to-coral-50">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-ocean-500 to-coral-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay in Paradise</h2>
            <p className="text-gray-600">Get exclusive offers and updates from Ocean Bliss</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Welcome to Paradise!</h3>
              <p className="text-gray-600">You're now subscribed to our newsletter. Check your email for a special welcome offer!</p>
            </div>
          ) : (
            <>
              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">What you'll get:</h3>
                <div className="space-y-3">
                  {newsletterBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-ocean-500 to-coral-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Preferences */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email Preferences
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.offers}
                        onChange={() => handlePreferenceChange('offers')}
                        className="rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Special offers and deals</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.events}
                        onChange={() => handlePreferenceChange('events')}
                        className="rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Events and celebrations</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.updates}
                        onChange={() => handlePreferenceChange('updates')}
                        className="rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Resort updates and news</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.dining}
                        onChange={() => handlePreferenceChange('dining')}
                        className="rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">New dining experiences</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Subscribe to Newsletter
                    </>
                  )}
                </Button>

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Failed to subscribe. Please try again.</span>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  You can unsubscribe at any time. We respect your privacy and will never share your email.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};