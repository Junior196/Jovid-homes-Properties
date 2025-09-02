import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "contact"
                ? "bg-white text-primary shadow-lg"
                : "text-white hover:bg-white/20"
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => setActiveTab("appointment")}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "appointment"
                ? "bg-white text-primary shadow-lg"
                : "text-white hover:bg-white/20"
            }`}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
