import React from "react";
import SingleBoxService from "../Components/OurServices/SingleBoxService";
import Divider from "../Components/Divider";
import Service from "../Components/ServiceSection/Service";
function Services() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="flex items-stretch mt-32 md:mt-52  w-[92%] justify-between flex-row">
          <div className="w-[40%]">
            <h2 className="text-white font-bold pt_serif lg:block hidden   text-[50px] lg:text-[60px]">
              Discover Your Dream Home
              <br /> With Our Services.......
            </h2>
            <h2 className="text-white font-bold pt_serif lg:hidden block text-[24px]  sm:text-[35px] md:text-[40px] lg:text-[60px]">
              Discover Your Dream Home With Our Services.......
            </h2>
          </div>
          <div className="w-[0.1%]  bg-[#C7AB7C] "></div>
          <div className="w-[50%]">
            <p className="text-white pt_sans text-[10px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
              All our properties are fully licensed by Telford and Wrekin
              council and meet or exceed all the statutory requirement for
              houses in multiple occupation (HMOs).Wherever possible, we aim to
              resolve any maintenance issue reported to us within 24 hours and
              we regularly inspect our properties to ensure that they are safe
              and secure.
            </p>
            <p className="text-white pt_sans text-[10px] sm:text-[18px] md:text-[20px] lg:text-[24px]  mt-4">
              All of our properties include:
            </p>
            <ul className="text-white pt_sans text-[10px] sm:text-[18px] md:text-[20px] lg:text-[24px] list-disc pl-6">
              <li>Free unlimited broadband.</li>
              <li>Gas, electric and council tax bills included in the rent.</li>
              <li>Regular property checks.</li>
            </ul>
          </div>
        </div>
        {/* <div className="w-full  py-5 bg-[#E0E0E0]"></div> */}
        <div className="bg-[#E0E0E0] relative w-full flex flex-col items-center justify-center ">
          <div className="w-full bg-[#282939] h-1/2 absolute top-0  z-[100]"></div>
          <div className=" h-[30vh] sm:h-[45vh] md:h-[55vh] lg:h-[75vh] items-center z-[200]  w-[92%] justify-between flex-row flex ">
            <div className="w-[46%]">
              <img loading="lazy"  src="./Our_services/1.webp" alt="" />
            </div>
            <div className="w-[46%]">
              <img loading="lazy"  src="./Our_services/2.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#E0E0E0] relative w-full flex flex-col items-center justify-center  xl:h-[8vh] "></div>
        <div className="bg-[#E0E0E0]  w-full flex flex-col items-center justify-center ">
          <div className="bg-[#E0E0E0] relative w-[92%] flex flex-col lg:h-[90vh] ">
            <div>
              <h2 className="pt_sans text-[34px]  font-bold text-left">
                Why Choose Us?
              </h2>
            </div>
            <div className="flex lg:flex-row flex-col items-stretch justify-between lg:h-[68vh]  gap-8 sm:gap-4 py-5 lg:py-1  mt-7 lg:mt-10 xl:mt-20">
              <SingleBoxService
                icon="./Our_services/light_bulb.svg"
                title="Expertise"
                description="With years of experience in property ownership and management, we bring a wealth of knowledge to every project."
              />
              <SingleBoxService
                icon="./Our_services/hand_shake.svg"
                title="Client-Centric Focus"
                description="We prioritise the needs of our tenants and stakeholders, ensuring clear communication and proactive problem-solving."
              />
              <SingleBoxService
                icon="./Our_services/certified.svg"
                title="Sustainability"
                description="Our approach integrates modern solutions and sustainable practices, promoting energy efficiency and long-term value for the properties we manage.
"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#E0E0E0] relative w-full flex flex-col items-center justify-center h-[4vh] sm:h-[13vh] "></div>
        <Divider />
        <Service />
      </div>
    </>
  );
}

export default Services;
