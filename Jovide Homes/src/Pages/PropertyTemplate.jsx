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
    console.log(formData);
    try {
      const res = await axios.post(`${server}/send-email`, { formData });
      console.log(res);
      if (res.status === 200) {
        setIsSubmitted(true);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Hide popup after 3 seconds
      }
    } catch (error) {
      console.log("Form error sending email");
    }
  };

  return (
    <>
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[75vh] xl:h-[100vh]">
        <img
          loading="lazy"
          src={`./Properties/${propertyBannerRoute}`}
          className="absolute top-0 w-[80%] sm:w-[92%] h-full right-0 z-[400]"
          alt=""
        />
        <div className="w-[100%] z-[500] hidden sm:flex justify-center items-center pl-5 h-full">
          <h1 className="pt_serif z-[500] text-white font-bold text-[28px] sm:text-[40px]">
            {addressHero}
          </h1>
        </div>
      </div>
      <Divider />
      <div className="w-[87%] md:w-[70%] flex justify-center items-center gap-4 flex-col">
        <p className="text-white pt_sans font-bold text-[18px] lg:text-[20px] xl:text-[22px]">
          {addressHero}
        </p>
        <p className="text-white text-center italic pt_sans text-[18px] lg:text-[20px] xl:text-[22px]">
          {para_1}
        </p>
        <p className="text-white text-center italic pt_sans text-[18px] lg:text-[20px] xl:text-[22px]">
          {para_2}
        </p>
        {property_airbnb && (
          <a
            href={property_airbnb}
            target="_blank"
            className=" mt-5 hover:text-white  hover:bg-[#C7AB7C] bg-white text-[#282939]
       hover:transition-all hover:duration-300 hover:ease-in  px-2 py-2  xl:px-4 xl:py-3 rounded-md font-bold text-[17px] xl:text-[20px]"
          >
            VIEW PROPERTY ON AIRBNB
          </a>
        )}
      </div>
      <div className="mt-20 w-[90%] flex flex-col justify-center items-center gap-5">
        <p className="pl-7 text-[#C7AB7C] pt_serif font-bold w-full text-start text-[18px] lg:text-[20px] xl:text-[30px]">
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
      <div className="w-[80%] flex flex-col justify-between items-start sm:mb-0 mb-10 mt-2 sm:mt-20">
        <div className="flex flex-col gap-5">
          <p className="pt_serif text-white font-bold text-[22px] md:text-[25px] lg:text-[30px]">
            Enquire about this property.
          </p>
          <p className="pt_serif text-[#C7AB7C] font-bold text-[22px] md:text-[25px] lg:text-[30px]">
            We will respond to your enquiry as soon as possible.
          </p>
        </div>
        <div className="sm:w-[80%] w-full mt-10 md:mt-20">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-5">
              <div>
                <p className="pt_serif text-[#fff] font-bold text-[30px]">
                  Name
                </p>
              </div>
              <div className="flex flex-col w-full gap-8 sm:flex-row">
                <div className="flex flex-col items-start justify-center w-full gap-3 sm:w-1/2">
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
                    id="FirstName"
                    value={formData.FirstName}
                    required={true}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-3 sm:w-1/2">
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
      {showPopup && (
        <div className="fixed p-4 text-white bg-[#c7ab7c] rounded shadow-lg bottom-4 right-4 z-[20000]">
          Form submitted successfully!
        </div>
      )}
    </>
  );
}
