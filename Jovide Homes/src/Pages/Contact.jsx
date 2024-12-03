import React, { useContext, useState } from "react";
import { ServerCreds } from "../App";
import axios from "axios";

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
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(`${server}/send-email`, { formData });
      console.log(res);
      if (res.status === 200) {
        setIsSubmitted(true);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false); // Hide the popup after 3 seconds
        }, 3000);
      }
    } catch (error) {
      console.log("Form error sending email");
    }
  };

  return (
    <>
      <div className="z-[300] w-full flex flex-col justify-center items-center">
        <div className="relative w-full h-[45vh] md:h-[83vh]">
          <img loading="lazy" 
            src="./Contact/HeroImage.webp"
            className="object-cover w-full h-full z-[400]"
            alt=""
          />
          <div className="flex justify-center items-center absolute z-[500] object-cover w-full h-full top-0 bg-[#28293988]">
            <h1 className="pt_serif text-white font-bold text-[28px] sm:text-[40px]">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="w-[95%] mt-10">
          <p className="text-[17px] sm:text-[20px] md:text-[25px] lg:text-[30px] pt_sans text-left text-white font-light">
            For general enquiries or information regarding property availability, please contact us by telephone or email using the contact details at the bottom of the page. Alternatively fill in and submit the following form.
          </p>
          <p className="text-[#C7AB7C] text-[20px] sm:text-[25px] md:text-[35px] lg:text-[40px] pt_serif mt-4">
            We will respond to your enquiry as soon as possible.
          </p>
        </div>
        <div className="w-[90%] flex flex-row justify-between items-start sm:mb-0 mb-10 mt-10 sm:mt-20">
          <div className="w-[40%] sm:flex hidden">
            <h2 className="pt_serif text-white font-bold text-[30px]">
              Contact Us
            </h2>
          </div>
          <div className="sm:w-[60%] w-full">
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col items-start justify-center gap-3">
                  <label
                    htmlFor="FirstName"
                    className="text-white text-[16px] sm:text-[21px] pt_sans"
                  >
                    First Name <span>(required)</span>
                  </label>
                  <input
                    type="text"
                    className="px-3 w-full bg-[#D9D9D9] sm:bg-white rounded-md outline-none h-[39px] lg:h-[60px] text-[16px] sm:text-[21px] pt_sans"
                    name="FirstName"
                    required={true}
                    id="FirstName"
                    value={formData.FirstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <label
                    htmlFor="LastName"
                    className="text-white text-[16px] sm:text-[21px] pt_sans"
                  >
                    Last Name <span>(required)</span>
                  </label>
                  <input
                    type="text"
                    className="px-3 w-full bg-[#D9D9D9] sm:bg-white rounded-md outline-none h-[39px] lg:h-[60px] text-[16px] sm:text-[21px] pt_sans"
                    name="LastName"
                    required={true}
                    value={formData.LastName}
                    onChange={handleInputChange}
                    id="LastName"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <label
                    htmlFor="Email"
                    className="text-white text-[16px] sm:text-[21px] pt_sans"
                  >
                    Email <span>(required)</span>
                  </label>
                  <input
                    type="email"
                    className="px-3 w-full bg-[#D9D9D9] sm:bg-white rounded-md outline-none h-[39px] lg:h-[60px] text-[16px] sm:text-[21px] pt_sans"
                    name="Email"
                    id="Email"
                    required={true}
                    value={formData.Email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <label
                    htmlFor="Subject"
                    className="text-white text-[16px] sm:text-[21px] pt_sans"
                  >
                    Subject <span>(required)</span>
                  </label>
                  <input
                    type="text"
                    className="px-3 w-full bg-[#D9D9D9] sm:bg-white rounded-md outline-none h-[39px] lg:h-[60px] text-[16px] sm:text-[21px] pt_sans"
                    name="Subject"
                    id="Subject"
                    required={true}
                    value={formData.Subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <label
                    htmlFor="Message"
                    className="text-white text-[16px] sm:text-[21px] pt_sans"
                  >
                    Message <span>(required)</span>
                  </label>
                  <textarea
                    type="text"
                    className="py-1 px-3 w-full bg-[#D9D9D9] sm:bg-white rounded-md outline-none sm:h-[70px] lg:h-[160px] text-[16px] sm:text-[21px] pt_sans"
                    name="Message"
                    id="Message"
                    required={true}
                    value={formData.Message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-6">
                  <button className="bg-[#C7AB7C] pt_serif text-white font-bold text-[20px] h-[50px] w-[150px] lg:text-[26px] rounded-none lg:h-[88px] lg:w-[239px]">
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed p-4 text-white bg-[#c7ab7c] rounded shadow-lg bottom-4 right-4 z-[20000]">
          Form submitted successfully!
        </div>
      )}
    </>
  );
}

export default Contact;
