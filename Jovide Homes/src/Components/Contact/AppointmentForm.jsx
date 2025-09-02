import React from 'react';
import { User, Mail, Phone, Building2, MessageSquare, Calendar } from 'lucide-react';

const AppointmentForm = ({ 
  appointmentData, 
  handleAppointmentInputChange, 
  handleAppointmentSubmit, 
  isAppointmentLoading,
  selectedTime 
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center lg:text-left">
        <h2 className="font-serif text-white font-bold text-3xl md:text-4xl mb-4">
          Book An Appointment
        </h2>
        <div className="w-24 h-1 bg-secondary rounded-full mx-auto lg:mx-0"></div>
        <p className="text-gray-300 mt-4 text-lg">
          Schedule a consultation with our property experts
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <form onSubmit={handleAppointmentSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="AppFirstName"
                className="flex items-center space-x-2 text-white text-lg font-medium"
              >
                <User className="w-5 h-5 text-secondary" />
                <span>
                  First Name <span className="text-secondary">*</span>
                </span>
              </label>
              <input
                type="text"
                id="AppFirstName"
                name="FirstName"
                required
                value={appointmentData.FirstName}
                onChange={handleAppointmentInputChange}
                className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your first name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="AppLastName"
                className="flex items-center space-x-2 text-white text-lg font-medium"
              >
                <User className="w-5 h-5 text-secondary" />
                <span>
                  Last Name <span className="text-secondary">*</span>
                </span>
              </label>
              <input
                type="text"
                id="AppLastName"
                name="LastName"
                required
                value={appointmentData.LastName}
                onChange={handleAppointmentInputChange}
                className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="AppEmail"
                className="flex items-center space-x-2 text-white text-lg font-medium"
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span>
                  Email Address <span className="text-secondary">*</span>
                </span>
              </label>
              <input
                type="email"
                id="AppEmail"
                name="Email"
                required
                value={appointmentData.Email}
                onChange={handleAppointmentInputChange}
                className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="AppPhone"
                className="flex items-center space-x-2 text-white text-lg font-medium"
              >
                <Phone className="w-5 h-5 text-secondary" />
                <span>
                  Phone Number <span className="text-secondary">*</span>
                </span>
              </label>
              <input
                type="tel"
                id="AppPhone"
                name="Phone"
                required
                value={appointmentData.Phone}
                onChange={handleAppointmentInputChange}
                className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Property Type Field */}
          <div className="space-y-2">
            <label
              htmlFor="AppPropertyType"
              className="flex items-center space-x-2 text-white text-lg font-medium"
            >
              <Building2 className="w-5 h-5 text-secondary" />
              <span>
                Property Interest <span className="text-secondary">*</span>
              </span>
            </label>
            <select
              id="AppPropertyType"
              name="PropertyType"
              required
              value={appointmentData.PropertyType}
              onChange={handleAppointmentInputChange}
              className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800"
            >
              <option value="">Select property type</option>
              <option value="residential">Residential Properties</option>
              <option value="commercial">Commercial Properties</option>
              <option value="airbnb">AirBnb Properties</option>
              <option value="hmo">HMO Properties</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label
              htmlFor="AppMessage"
              className="flex items-center space-x-2 text-white text-lg font-medium"
            >
              <MessageSquare className="w-5 h-5 text-secondary" />
              <span>Additional Information</span>
            </label>
            <textarea
              id="AppMessage"
              name="Message"
              rows={4}
              value={appointmentData.Message}
              onChange={handleAppointmentInputChange}
              className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-md border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 resize-none"
              placeholder="Tell us what you'd like to discuss..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isAppointmentLoading || !selectedTime}
              className={`
                w-full inline-flex items-center justify-center space-x-3 px-8 py-4 
                font-serif font-bold text-lg rounded-md transition-all duration-300 transform
                ${
                  isAppointmentLoading || !selectedTime
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-secondary hover:bg-secondary-dark text-white hover:scale-105 hover:shadow-xl"
                }
                focus:outline-none focus:ring-4 focus:ring-secondary/30
              `}
            >
              {isAppointmentLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Booking...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>BOOK APPOINTMENT</span>
                </>
              )}
            </button>
            {!selectedTime && (
              <p className="text-yellow-300 text-sm mt-2 text-center">
                Please select a date and time first
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
