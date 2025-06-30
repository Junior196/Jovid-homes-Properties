import React from "react";
import Divider from "../Components/Divider";
import SingleAboutUsBox from "../Components/AboutUs/SingleAboutUsBox";

function About() {
  return (
    <>
      <div className="z-4 w-full flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="relative w-full h-[35vh] md:h-screen">
          <img
            loading="lazy"
            src="./About_us/hero.webp"
            className="object-cover w-full h-full"
            alt=""
          />
          <div className="flex flex-col justify-center items-center md:justify-center md:items-end absolute z-3 object-cover w-full h-full top-0 bg-[#28293988]">
            <h1 className="pt_serif text-white font-bold text-3xl sm:text-4xl md:hidden flex">
              About Us
            </h1>
            {/* Desktop Hero Content */}
            <div className="hidden md:flex flex-col items-end justify-center w-full h-full pr-10">
              <div className="bg-[rgba(0,0,0,0.4)] w-1/2 p-6 lg:p-8">
                <h2 className="pt_serif text-white text-2xl lg:text-3xl xl:text-4xl">
                  GET TO KNOW JOVID HOMES BETTER
                </h2>
                <div className="border-t-2 border-secondary my-4 w-full"></div>
                <p className="text-white pt_sans text-base lg:text-lg xl:text-xl mb-4">
                  Jovid Homes is committed to being a trusted partner in
                  property ownership and management, delivering excellent
                  results with professionalism and care.
                </p>
                <button className="bg-secondary text-white px-6 py-3 w-full hover:bg-opacity-90 transition-all duration-300">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Content */}
        <div className="flex flex-col items-end justify-end w-full h-full md:hidden">
          <div className="bg-[rgba(0,0,0,0.4)] p-5 pt-10 sm:p-10">
            <h2 className="pt_serif text-white text-xl sm:text-3xl xl:text-5xl">
              GET TO KNOW JOVID HOMES BETTER
            </h2>
            <div className="border-t border-secondary my-4 w-full"></div>
            <p className="text-white pt_sans text-base sm:text-lg lg:text-xl xl:text-2xl mb-4">
              Jovid Homes is committed to being a trusted partner in property
              ownership and management, delivering excellent results with
              professionalism and care.
            </p>
            <button className="bg-secondary text-white px-6 py-3 w-full hover:bg-opacity-90 transition-all duration-300">
              More
            </button>
          </div>
        </div>
        <Divider />
        {/* Stacked Images Section */}
        <div className="py-16 lg:py-20">
          <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Stacked Images - Desktop */}
            <div className="relative hidden md:flex items-center justify-center w-full lg:w-1/2">
              {/* Container for stacked images */}
              <div className="relative w-full aspect-video">
                {/* Card 1 - Top Right */}
                <div className="absolute w-[30%] lg:w-[60%] top-1/2 left-1/2 transform translate-x-0 -translate-y-full z-20 transition-all duration-400 ease-in-out shadow-lg">
                  <img
                    loading="lazy"
                    src="./Home/Hero_Home_1.webp"
                    alt="Hero_Home_1"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Card 2 - Center (Main) - with hover effect */}
                <div className="absolute w-[30%] lg:w-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-400 ease-in-out shadow-xl hover:scale-110 hover:z-40">
                  <img
                    loading="lazy"
                    src="./Home/Hero_Home_2.webp"
                    alt="Hero_Home_2"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Card 3 - Bottom Left */}
                <div className="absolute w-[30%] lg:w-[60%] top-1/2 left-1/2 transform -translate-x-full translate-y-1/4 z-20 transition-all duration-400 ease-in-out shadow-lg">
                  <img
                    loading="lazy"
                    src="./Home/Hero_Home_3.webp"
                    alt="Hero_Home_3"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start justify-center w-full lg:w-1/3 text-white">
              <h2 className="font-serif text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3">
                Quality serviced accommodation in Telford area
              </h2>
            </div>

            {/* Mobile Images */}
            <div className="flex flex-col items-center justify-between w-full gap-4 md:hidden">
              <img
                loading="lazy"
                className="w-full"
                src="./Home/m1.webp"
                alt="m1"
              />
              <img
                loading="lazy"
                className="w-full"
                src="./Home/m2.webp"
                alt="m2"
              />
              <img
                loading="lazy"
                className="w-full"
                src="./Home/m3.webp"
                alt="m3"
              />
            </div>
          </div>
        </div>
        <Divider />
        {/* What We Do Section */}
        <div className="bg-[#D9D9D9] lg:bg-[#E0E0E0] relative w-[92%] lg:w-full flex flex-col items-center justify-center h-[5vh] sm:h-[15vh]"></div>
        <div className="bg-[#D9D9D9] lg:bg-[#E0E0E0] w-[92%] lg:w-full flex flex-col items-center justify-center">
          <div className="bg-[#D9D9D9] lg:bg-[#E0E0E0] relative w-[92%] flex flex-col">
            <div className="flex flex-col items-center justify-start lg:mb-10">
              <h2 className="pt_serif text-xl sm:text-3xl lg:text-4xl font-bold text-left">
                What We Do:
              </h2>
              <div className="md:w-[90%] lg:w-[90%] mt-4">
                <p className="pt_sans text-base sm:text-lg lg:text-xl xl:text-2xl">
                  At Jovid Homes, we are dedicated to providing exceptional
                  property ownership and management services. With a strong
                  commitment to quality, we oversee a diverse portfolio of
                  residential, commercial, and mixed-use properties, ensuring
                  they are well-maintained, efficiently managed, and meet the
                  highest standards for our tenants and stakeholders.
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col items-stretch justify-between lg:h-[68vh] gap-4 mt-10 lg:mt-20">
              <SingleAboutUsBox
                icon="./About_us/help_desk.svg"
                title="Property Ownership"
                description="We acquire and develop properties that add value to the community and provide sustainable returns. Our portfolio spans a variety of sectors, ensuring diversity and resilience in a dynamic market."
              />
              <SingleAboutUsBox
                icon="./About_us/thumbs_up.svg"
                title="Property Management"
                description="We manage properties with a focus on long-term value, tenant satisfaction, and operational excellence. We ensure efficient handling of every aspect of property management, from routine maintenance to financial management."
              />
              <SingleAboutUsBox
                icon="./About_us/golden_bulb.svg"
                title="Our Approach"
                description="At Jovid Homes, our core values of integrity, reliability, and professionalism drive our operations. Whether it's optimising the performance of a commercial building or ensuring a residential community's comfort and security, we tailor our services to meet the unique needs of each property."
              />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] lg:bg-[#E0E0E0] relative w-[92%] lg:w-full flex flex-col items-center justify-center h-[7vh] lg:h-[15vh]"></div>
      </div>
    </>
  );
}

export default About;
