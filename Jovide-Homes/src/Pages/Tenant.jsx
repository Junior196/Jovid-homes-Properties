import React from "react";
import Divider from "../Components/Divider";

export default function Tenant() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-96 sm:h-[50vh] md:h-[70vh] lg:h-[75vh] xl:h-screen">
        <img
          loading="lazy"
          src="./Tenant/tenant_banner.webp"
          className="absolute top-0 w-4/5 sm:w-1/2 xl:w-3/5 h-full right-0 z-10 object-cover"
          alt="Tenant Information Banner"
        />
        <div className="w-2/5 hidden sm:flex justify-center items-center pl-5 h-full">
          <h1 className="font-serif z-40 text-white font-bold text-2xl md:text-4xl mt-0 md:mt-0">
            Information for Tenants
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className=" w-full mt-10  px-4 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <Divider />
        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-start justify-between w-full">
          <div className="flex items-center justify-center w-full sm:w-1/2 sm:flex-col gap-2 sm:gap-7">
            <img
              loading="lazy"
              src="./Tenant/tenant_b_1.webp"
              className="w-1/2 sm:w-3/4 lg:w-4/5 object-cover"
              alt="Tenant Information Image 1"
            />
            <img
              loading="lazy"
              src="./Tenant/tenant_b_2.webp"
              className="w-1/2 sm:w-3/4 lg:w-4/5 object-cover"
              alt="Tenant Information Image 2"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col items-start justify-start w-full sm:w-1/2 gap-5 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            {/* Mobile Title */}
            <div className="w-full sm:w-11/12">
              <h1 className="sm:hidden font-serif text-white font-bold text-2xl md:text-4xl">
                Information for Tenants
              </h1>
            </div>

            {/* Description Paragraphs */}
            <div className="w-full sm:w-11/12">
              <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                We take great satisfaction in responding to your concerns in a
                timely and effective manner.
              </p>
            </div>

            <div className="w-full sm:w-11/12">
              <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                Please get in touch with us if you have any questions about the
                property (such as to report maintenance concerns).
              </p>
            </div>

            <div className="w-full sm:w-11/12">
              <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                Property Manager <br />
                <span className="font-semibold">Vincent Lucas</span>
              </p>
            </div>

            {/* Contact Information */}
            <div className="w-full sm:w-11/12 text-white flex flex-col gap-4">
              <a
                href="mailto:Info@jovidhomes.co.uk"
                className="flex items-start gap-3 hover:text-gray-300 transition-colors duration-200"
              >
                <span className="flex-shrink-0 mt-1">
                  <img
                    loading="lazy"
                    src="./Footer/mail.svg"
                    alt="Email Icon"
                    className="w-6 h-6 lg:w-7 lg:h-7"
                  />
                </span>
                <span className="text-white leading-relaxed text-base md:text-lg lg:text-xl xl:text-2xl">
                  Info@jovidhomes.co.uk
                </span>
              </a>

              <a
                href="tel:01952863235"
                className="flex items-start gap-3 hover:text-gray-300 transition-colors duration-200"
              >
                <span className="flex-shrink-0 mt-1">
                  <img
                    loading="lazy"
                    src="./Footer/phone-call.svg"
                    alt="Phone Icon"
                    className="w-6 h-6 lg:w-7 lg:h-7"
                  />
                </span>
                <span className="text-white text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  01952863235
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
