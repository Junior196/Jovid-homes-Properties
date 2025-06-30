import React, { useContext, useState } from "react";
import Divider from "../Components/Divider";
import PropertyPageGallery from "../Components/Gallery/PropertyPageGallery";
import { ServerCreds } from "../App";
import axios from "axios";

export default function PropertyTemplate({
  propertyBannerRoute,
  addressHero,
  property_airbnb,
  para_1,
  para_2,
  p_img_1,
  p_img_2,
  p_img_3,
  p_img_4,
  p_img_5,
  p_img_6,
  p_img_7,
}) {
  const { server } = useContext(ServerCreds);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
    page: window.location.href,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${server}/send-email`, { formData });
      if (res.status === 200) {
        setIsSubmitted(true);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      }
    } catch (error) {
      console.log("Form error sending email");
    }
  };

  return (
    <>
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[75vh] xl:h-[100vh] overflow-hidden">
        <img
          loading="lazy"
          src={`./Properties/${propertyBannerRoute}`}
          className="absolute top-0 right-0 w-full h-full object-cover z-0"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <h1 className="pt_serif text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg text-center">
            {addressHero}
          </h1>
        </div>
      </div>
      <Divider />
      <div className="w-[92%] md:w-[70%] mx-auto flex flex-col justify-center items-center gap-4 py-8">
        <p className="text-white pt_sans font-bold text-lg lg:text-xl xl:text-2xl text-center">
          {addressHero}
        </p>
        <p className="text-white text-center italic pt_sans text-base lg:text-lg xl:text-xl">
          {para_1}
        </p>
        <p className="text-white text-center italic pt_sans text-base lg:text-lg xl:text-xl">
          {para_2}
        </p>
        {property_airbnb && (
          <a
            href={property_airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 transition-all duration-300 bg-white text-[#282939] hover:bg-[#C7AB7C] hover:text-white px-4 py-2 xl:px-6 xl:py-3 rounded-md font-bold text-base xl:text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#C7AB7C]"
          >
            VIEW PROPERTY ON AIRBNB
          </a>
        )}
      </div>
      <div className="mt-16 w-[95%] md:w-[90%] mx-auto flex flex-col justify-center items-center gap-5">
        <p className="pl-2 sm:pl-7 text-[#C7AB7C] pt_serif font-bold w-full text-start text-lg lg:text-xl xl:text-2xl">
          Gallery
        </p>
        <PropertyPageGallery
          image1={p_img_1}
          image2={p_img_2}
          image3={p_img_3}
          image4={p_img_4}
          image5={p_img_5}
          image6={p_img_6}
          image7={p_img_7}
        />
      </div>
      <Divider />
      <div className="w-[92%] md:w-[70%] mx-auto flex flex-col justify-between items-start mb-10 mt-8 md:mt-20">
        <div className="flex flex-col gap-2 md:gap-5">
          <p className="pt_serif text-white font-bold text-xl md:text-2xl lg:text-3xl">
            Enquire about this property.
          </p>
          <p className="pt_serif text-[#C7AB7C] font-bold text-lg md:text-xl lg:text-2xl">
            We will respond to your enquiry as soon as possible.
          </p>
        </div>
        <div className="w-full mt-8 md:mt-16 bg-white/10 rounded-xl shadow-lg p-6 md:p-10">
          <form onSubmit={handleFormSubmit} autoComplete="off">
            <div className="flex flex-col gap-6">
              <div>
                <p className="pt_serif text-[#fff] font-bold text-2xl">
                  Name
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col w-full sm:w-1/2 gap-2">
                  <label
                    htmlFor="FirstName"
                    className="text-white text-base sm:text-lg pt_sans"
                  >
                    First Name <span className="text-[#C7AB7C]">(required)</span>
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 w-full bg-white/80 rounded-md outline-none h-10 lg:h-14 text-base sm:text-lg pt_sans focus:ring-2 focus:ring-[#C7AB7C] transition"
                    name="FirstName"
                    id="FirstName"
                    value={formData.FirstName}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2 gap-2">
                  <label
                    htmlFor="LastName"
                    className="text-white text-base sm:text-lg pt_sans"
                  >
                    Last Name <span className="text-[#C7AB7C]">(required)</span>
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 w-full bg-white/80 rounded-md outline-none h-10 lg:h-14 text-base sm:text-lg pt_sans focus:ring-2 focus:ring-[#C7AB7C] transition"
                    name="LastName"
                    required
                    value={formData.LastName}
                    onChange={handleInputChange}
                    id="LastName"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Email"
                  className="text-white text-base sm:text-lg pt_sans"
                >
                  Email <span className="text-[#C7AB7C]">(required)</span>
                </label>
                <input
                  type="email"
                  className="px-3 py-2 w-full bg-white/80 rounded-md outline-none h-10 lg:h-14 text-base sm:text-lg pt_sans focus:ring-2 focus:ring-[#C7AB7C] transition"
                  name="Email"
                  id="Email"
                  required
                  value={formData.Email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Message"
                  className="text-white text-base sm:text-lg pt_sans"
                >
                  Message <span className="text-[#C7AB7C]">(required)</span>
                </label>
                <textarea
                  className="py-2 px-3 w-full bg-white/80 rounded-md outline-none min-h-[70px] lg:min-h-[120px] text-base sm:text-lg pt_sans focus:ring-2 focus:ring-[#C7AB7C] transition resize-none"
                  name="Message"
                  id="Message"
                  required
                  value={formData.Message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-[#C7AB7C] pt_serif text-white font-bold text-lg h-12 w-36 lg:text-xl rounded-md lg:h-16 lg:w-60 shadow-md hover:bg-[#b89a6b] transition focus:outline-none focus:ring-2 focus:ring-[#C7AB7C]"
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="fixed p-4 text-white bg-[#c7ab7c] rounded shadow-lg bottom-4 right-4 z-[20000] animate-bounce">
          Form submitted successfully!
        </div>
      )}
    </>
  );
}
