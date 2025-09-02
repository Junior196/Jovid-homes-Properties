import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

const TimeSlotPicker = ({ 
  timeSlots, 
  selectedTime, 
  selectedDate, 
  handleTimeSelect 
}) => {
  return (
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
              py-3 px-4 text-sm font-medium border-2 rounded-md transition-all duration-200 hover:scale-105
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
  );
};

export default TimeSlotPicker;
