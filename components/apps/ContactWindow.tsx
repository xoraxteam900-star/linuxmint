'use client';

import React, { useState } from 'react';
import { Icon } from './ui/Icon';
import { portfolio, socialLinks } from '@/data/portfolio';

export function ContactWindow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="p-5 h-full overflow-y-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Icon name="mail" size={18} className="text-mint-400" />
            Send a Message
          </h2>
          
          {isSubmitted ? (
            <div className="bg-mint-500/20 border border-mint-500/50 rounded-xl p-6 text-center">
              <Icon name="check" size={40} className="text-mint-400 mx-auto mb-3" />
              <p className="text-white font-medium">Message Sent!</p>
              <p className="text-gray-400 text-sm mt-1">Thank you for reaching out.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-mint-500 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-mint-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-mint-500 transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-mint-500 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-mint-500 hover:bg-mint-600 text-white rounded-lg font-medium transition-colors"
              >
                <Icon name="send" size={16} />
                Send Message
              </button>
            </form>
          )}
        </div>
        
        {/* Contact Info & Social */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Icon name="user" size={18} className="text-mint-400" />
            Contact Info
          </h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-mint-500/20 flex items-center justify-center">
                <Icon name="mail" size={18} className="text-mint-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Email</p>
                <p className="text-white text-sm">{portfolio.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-mint-500/20 flex items-center justify-center">
                <Icon name="phone" size={18} className="text-mint-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Phone</p>
                <p className="text-white text-sm">{portfolio.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-mint-500/20 flex items-center justify-center">
                <Icon name="map-pin" size={18} className="text-mint-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Location</p>
                <p className="text-white text-sm">{portfolio.location}</p>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <h3 className="text-white font-medium mb-3">Connect With Me</h3>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors group"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWindow;

