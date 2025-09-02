import { useState, useContext } from 'react';
import { ServerCreds } from '../../App';
import axios from 'axios';

export const useForms = () => {
  const { server } = useContext(ServerCreds);
  
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Subject: "",
    Message: "",
    page: window.location.href,
  });
  
  const [appointmentData, setAppointmentData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    PropertyType: "",
    Message: "",
    page: window.location.href,
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAppointmentSubmitted, setIsAppointmentSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAppointmentLoading, setIsAppointmentLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAppointmentInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${server}/send-email`, {
        formData: formData,
      });
      if (res.status === 200) {
        setIsSubmitted(true);
        setShowPopup(true);
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

  const handleAppointmentSubmit = async (event, selectedDate, selectedTime, setSelectedTime) => {
    event.preventDefault();
    setIsAppointmentLoading(true);

    const submitData = {
      ...appointmentData,
      selectedDate: selectedDate.toDateString(),
      selectedTime: selectedTime,
      type: "appointment",
    };

    try {
      const res = await axios.post(`${server}/send-email`, {
        formData: submitData,
      });
      if (res.status === 200) {
        setIsAppointmentSubmitted(true);
        setShowAppointmentPopup(true);
        setAppointmentData({
          FirstName: "",
          LastName: "",
          Email: "",
          Phone: "",
          PropertyType: "",
          Message: "",
          page: window.location.href,
        });
        setSelectedTime("");
        setTimeout(() => {
          setShowAppointmentPopup(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Appointment error sending email:", error);
    } finally {
      setIsAppointmentLoading(false);
    }
  };

  return {
    formData,
    appointmentData,
    isSubmitted,
    isAppointmentSubmitted,
    showPopup,
    showAppointmentPopup,
    isLoading,
    isAppointmentLoading,
    handleInputChange,
    handleAppointmentInputChange,
    handleFormSubmit,
    handleAppointmentSubmit
  };
};
