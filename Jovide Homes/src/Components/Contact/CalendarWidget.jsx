import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const CalendarWidget = ({ 
  currentDate, 
  selectedDate, 
  months,
  handlePrevMonth,
  handleNextMonth,
  handleDateClick,
  getDaysInMonth,
  isToday,
  isSelected
}) => {
  const days = getDaysInMonth(currentDate);

  return (
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
                relative p-3 text-sm font-medium rounded-md transition-all duration-200 hover:scale-105
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
  );
};

export default CalendarWidget;
