import { useContext, useState } from "react";
import { ServerCreds } from "../App";
import axios from "axios";
import { Calendar, Clock, Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react";

function Contact() {
  const { server } = useContext(ServerCreds);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Subject: "",
    Message: "",
    page: window.location.href,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const submitData = {
      ...formData,
      selectedDate: selectedDate.toDateString(),
      selectedTime: selectedTime,
    };

    try {
      const res = await axios.post(`${server}/send-email`, {
        formData: submitData,
      });
      if (res.status === 200) {
        setIsSubmitted(true);
        setShowPopup(true);
        // Reset form
        setFormData({
          FirstName: "",
          LastName: "",
          Email: "",
          Subject: "",
          Message: "",
          page: window.location.href,
        });
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calendar functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonth = new Date(year, month - 1, 0);
      const prevDate = prevMonth.getDate() - startingDayOfWeek + i + 1;
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        fullDate: new Date(year, month - 1, prevDate),
      });
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate: new Date(year, month, day),
      });
    }

    // Add days from next month to fill the grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    let nextMonthDay = 1;
    for (let i = days.length; i < totalCells; i++) {
      days.push({
        date: nextMonthDay,
        isCurrentMonth: false,
        fullDate: new Date(year, month + 1, nextMonthDay),
      });
      nextMonthDay++;
    }

    return days;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const handleDateClick = (day) => {
    if (day.isCurrentMonth) {
      setSelectedDate(day.fullDate);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const days = getDaysInMonth(currentDate);

  return (
    <>
      <div className="relative z-4 w-full flex flex-col justify-center items-center min-h-screen bg-primary">
        {/* Hero Section */}
        <div className="relative w-full h-[45vh] md:h-[70vh] lg:h-[80vh]">
          <img
            loading="lazy"
            src="./Contact/HeroImage.webp"
            className="object-cover w-full h-full"
            alt="Contact Us Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/80 flex justify-center items-center">
            <div className="text-center space-y-4">
              <h1 className="font-serif text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Introduction Text */}
          <div className="text-center mb-12 lg:mb-16 space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed max-w-4xl mx-auto">
              For general enquiries or information regarding property
              availability, please contact us by telephone or email using the
              contact details at the bottom of the page. Alternatively fill in
              and submit the following form.
            </p>
            <p className="text-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium">
              We will respond to your enquiry as soon as possible.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calendar and Time Selection Section */}
            <div className="space-y-6">
              {/* Calendar */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Calendar Header */}
                <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-white" />
                      <h2 className="text-xl font-semibold text-white font-serif">
                        {months[currentDate.getMonth()]}{" "}
                        {currentDate.getFullYear()}
                      </h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handlePrevMonth}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label="Previous month"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={handleNextMonth}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label="Next month"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calendar Body */}
                <div className="p-6">
                  {/* Week Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center font-semibold text-gray-600 py-3 text-sm"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1">
                    {days.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateClick(day)}
                        disabled={!day.isCurrentMonth}
                        className={`
                          relative p-3 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105
                          ${
                            !day.isCurrentMonth
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-gray-700 hover:bg-primary/10 cursor-pointer"
                          }
                          ${
                            isToday(day.fullDate) && day.isCurrentMonth
                              ? "bg-gray-100 ring-2 ring-primary/30"
                              : ""
                          }
                          ${
                            isSelected(day.fullDate) && day.isCurrentMonth
                              ? "bg-primary text-white shadow-lg transform scale-105"
                              : ""
                          }
                        `}
                      >
                        {day.date}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Selection */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">
                    Select Time
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        py-3 px-4 text-sm font-medium border-2 rounded-lg transition-all duration-200 hover:scale-105
                        ${
                          selectedTime === time
                            ? "bg-primary text-white border-primary shadow-lg transform scale-105"
                            : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {selectedTime && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <p className="text-sm font-medium text-gray-700">
                        Selected:{" "}
                        <span className="text-primary font-semibold">
                          {selectedDate.toDateString()}
                        </span>{" "}
                        at{" "}
                        <span className="text-secondary font-semibold">
                          {selectedTime}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-white font-bold text-3xl md:text-4xl mb-4">
                  Get In Touch
                </h2>
                <div className="w-24 h-1 bg-secondary rounded-full mx-auto lg:mx-0"></div>
              </div>

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
                      className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
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
                      className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
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
                    className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
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
                    className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500"
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
                    className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-secondary focus:bg-white outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`
                      w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 
                      font-serif font-bold text-lg rounded-xl transition-all duration-300 transform
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
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 z-[20000] animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl border border-green-200 p-6 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Success!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you
                  soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Contact;
