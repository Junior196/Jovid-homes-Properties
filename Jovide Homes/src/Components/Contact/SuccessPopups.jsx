import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessPopups = ({ showPopup, showAppointmentPopup }) => {
  return (
    <>
      {/* Contact Form Success Popup */}
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
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Success Popup */}
      {showAppointmentPopup && (
        <div className="fixed bottom-6 right-6 z-[20000] animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl border border-green-200 p-6 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Appointment Booked!
                </h3>
                <p className="text-gray-600">
                  Your appointment has been scheduled successfully. We'll confirm the details via email.
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
};

export default SuccessPopups;
