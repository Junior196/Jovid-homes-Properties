import { useState } from "react";
import HeroSection from "../Components/Contact/HeroSection";
import IntroSection from "../Components/Contact/IntroSection";
import TabNavigation from "../Components/Contact/TabNavigation";
import ContactInfo from "../Components/Contact/ContactInfo";
import ContactForm from "../Components/Contact/ContactForm";
import CalendarWidget from "../Components/Contact/CalendarWidget";
import TimeSlotPicker from "../Components/Contact/TimeSlotPicker";
import AppointmentForm from "../Components/Contact/AppointmentForm";
import SuccessPopups from "../Components/Contact/SuccessPopups";
import { useCalendar } from "../Components/Contact/useCalendar";
import { useForms } from "../Components/Contact/useForms";

function Contact() {
  const [activeTab, setActiveTab] = useState("contact");

  // Custom hooks for calendar and form logic
  const {
    currentDate,
    selectedDate,
    selectedTime,
    months,
    timeSlots,
    getDaysInMonth,
    isToday,
    isSelected,
    handleDateClick,
    handlePrevMonth,
    handleNextMonth,
    handleTimeSelect,
    setSelectedTime,
  } = useCalendar();

  const {
    formData,
    appointmentData,
    showPopup,
    showAppointmentPopup,
    isLoading,
    isAppointmentLoading,
    handleInputChange,
    handleAppointmentInputChange,
    handleFormSubmit,
    handleAppointmentSubmit,
  } = useForms();

  // Wrapper for appointment submit to pass calendar data
  const onAppointmentSubmit = (event) => {
    handleAppointmentSubmit(event, selectedDate, selectedTime, setSelectedTime);
  };

  return (
    <>
      <div className="relative z-4 w-full flex flex-col justify-center items-center min-h-screen bg-primary">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Introduction Text */}
          <IntroSection />

          {/* Tab Navigation */}
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Contact Form Tab */}
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Information */}
              <ContactInfo />

              {/* Contact Form */}
              <ContactForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                isLoading={isLoading}
              />
            </div>
          )}

          {/* Book Appointment Tab */}
          {activeTab === "appointment" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Calendar and Time Selection Section */}
              <div className="space-y-6">
                {/* Calendar */}
                <CalendarWidget
                  currentDate={currentDate}
                  selectedDate={selectedDate}
                  months={months}
                  handlePrevMonth={handlePrevMonth}
                  handleNextMonth={handleNextMonth}
                  handleDateClick={handleDateClick}
                  getDaysInMonth={getDaysInMonth}
                  isToday={isToday}
                  isSelected={isSelected}
                />

                {/* Time Selection */}
                <TimeSlotPicker
                  timeSlots={timeSlots}
                  selectedTime={selectedTime}
                  selectedDate={selectedDate}
                  handleTimeSelect={handleTimeSelect}
                />
              </div>

              {/* Appointment Form Section */}
              <AppointmentForm
                appointmentData={appointmentData}
                handleAppointmentInputChange={handleAppointmentInputChange}
                handleAppointmentSubmit={onAppointmentSubmit}
                isAppointmentLoading={isAppointmentLoading}
                selectedTime={selectedTime}
              />
            </div>
          )}
        </div>
      </div>

      {/* Success Popups */}
      <SuccessPopups
        showPopup={showPopup}
        showAppointmentPopup={showAppointmentPopup}
      />
    </>
  );
}

export default Contact;
