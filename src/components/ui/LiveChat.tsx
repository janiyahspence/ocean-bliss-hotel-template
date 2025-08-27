import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Clock, Phone, Mail } from 'lucide-react';
import { Button } from './Button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickReplies = [
  'Room availability',
  'Dining reservations',
  'Spa appointments',
  'Airport transfer',
  'Special offers',
  'Wedding packages'
];

const botResponses = {
  greeting: "Hello! Welcome to Ocean Bliss Beach Resort. I'm here to help you with any questions about our rooms, dining, activities, or reservations. How can I assist you today?",
  rooms: "We have several beautiful accommodations: Deluxe Ocean View (₹12,000/night), Premium Beachfront (₹18,000/night), Luxury Villa (₹25,000/night), and Family Suite (₹16,000/night). Would you like more details about any specific room type?",
  dining: "Our resort features 4 dining venues: Azure Beachside Cafe (casual dining), Coral Fine Dining (award-winning cuisine), Infinity Pool Bar (light bites & cocktails), and 24/7 Room Service. Which restaurant interests you?",
  spa: "Our Serenity Spa offers Ayurvedic treatments, therapeutic massages, and wellness programs. Treatments start from ₹2,500. Would you like me to help you book an appointment?",
  activities: "We offer exciting activities like water sports (₹3,500), sunset yoga (₹1,200), deep sea fishing (₹5,500), and cultural tours (₹2,800). What type of activity interests you?",
  offers: "Current special offers include: Summer Splash Special (35% off), Honeymoon Paradise package (₹25,000), and Family Fun Fiesta (₹18,000). Would you like details about any of these?",
  contact: "You can reach us at +91 98765 43210 (24/7) or email info@oceanbliss.com. For immediate assistance, I'm here to help! What would you like to know?",
  default: "I'd be happy to help you with that! For detailed assistance, please call us at +91 98765 43210 or I can connect you with our reservations team. What specific information do you need?"
};

export const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      setTimeout(() => {
        addBotMessage(botResponses.greeting);
      }, 500);
    }
  }, [isOpen]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot');
    }, 1000 + Math.random() * 1000); // Random delay for realism
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('room') || message.includes('accommodation') || message.includes('stay')) {
      return botResponses.rooms;
    } else if (message.includes('dining') || message.includes('restaurant') || message.includes('food')) {
      return botResponses.dining;
    } else if (message.includes('spa') || message.includes('massage') || message.includes('wellness')) {
      return botResponses.spa;
    } else if (message.includes('activity') || message.includes('water sport') || message.includes('yoga')) {
      return botResponses.activities;
    } else if (message.includes('offer') || message.includes('deal') || message.includes('discount')) {
      return botResponses.offers;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('call')) {
      return botResponses.contact;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addMessage(inputText, 'user');
    const response = getBotResponse(inputText);
    addBotMessage(response);
    setInputText('');
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply, 'user');
    const response = getBotResponse(reply);
    addBotMessage(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-ocean-500 to-coral-500 hover:from-ocean-600 hover:to-coral-600'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white mx-auto" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white mx-auto" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-ocean-500 to-coral-500 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Ocean Bliss Assistant</h3>
                <p className="text-xs text-white/90">Usually replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-ocean-500' 
                      : 'bg-gray-200'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-ocean-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickReplies.slice(0, 3).map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-8 h-8 bg-ocean-500 hover:bg-ocean-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            {/* Contact Options */}
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
              <a href="tel:+919876543210" className="flex items-center space-x-1 hover:text-ocean-600">
                <Phone className="w-3 h-3" />
                <span>Call Us</span>
              </a>
              <a href="mailto:info@oceanbliss.com" className="flex items-center space-x-1 hover:text-ocean-600">
                <Mail className="w-3 h-3" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};