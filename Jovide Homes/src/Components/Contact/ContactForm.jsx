import React from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

const ContactForm = ({ 
  formData, 
  handleInputChange, 
  handleFormSubmit, 
  isLoading 
}) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="FirstName"
                className="flex items-center space-x-2 text-white text-lg font-medium"
              >
                <User className="w-5 h-5 text-secondary" />
                <span>
                  First Name <span className="text-secondary">*</span>
                </span>
              </label>
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                required
                value={formData.FirstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your first name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="LastName"
                className="flex items-center space-x-2 text-white text-lg font-medium"
              >
                <User className="w-5 h-5 text-secondary" />
                <span>
                  Last Name <span className="text-secondary">*</span>
                </span>
              </label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                required
                value={formData.LastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="Email"
              className="flex items-center space-x-2 text-white text-lg font-medium"
            >
              <Mail className="w-5 h-5 text-secondary" />
              <span>
                Email Address <span className="text-secondary">*</span>
              </span>
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              required
              value={formData.Email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label
              htmlFor="Subject"
              className="flex items-center space-x-2 text-white text-lg font-medium"
            >
              <MessageSquare className="w-5 h-5 text-secondary" />
              <span>
                Subject <span className="text-secondary">*</span>
              </span>
            </label>
            <input
              type="text"
              id="Subject"
              name="Subject"
              required
              value={formData.Subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
              placeholder="What is this regarding?"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label
              htmlFor="Message"
              className="flex items-center space-x-2 text-white text-lg font-medium"
            >
              <MessageSquare className="w-5 h-5 text-secondary" />
              <span>
                Message <span className="text-secondary">*</span>
              </span>
            </label>
            <textarea
              id="Message"
              name="Message"
              required
              rows={6}
              value={formData.Message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full inline-flex items-center justify-center space-x-3 px-8 py-4 
                font-serif font-bold text-lg rounded-md transition-all duration-300 transform
                ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-secondary hover:bg-secondary-dark text-white hover:scale-105 hover:shadow-xl"
                }
                focus:outline-none focus:ring-4 focus:ring-secondary/30
              `}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>SEND MESSAGE</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
