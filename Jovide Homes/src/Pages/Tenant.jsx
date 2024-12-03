import React from "react";

export default function Tenant() {
  return (
    <>
      {/* <div className="relative w-full  lg:h-screen   md:h-[83vh]">
        <img loading="lazy" 
          src="./Tenant/tenant_banner.webp"
          className="absolute top-0 w-1/2 h-full right-0 z-[400]"
          alt=""
        />
        <div className="w-[50%] flex justify-center items-center pl-5 h-full">
          <h1 className="pt_serif text-white font-bold  text-[28px] sm:text-[40px]  ">
            Information for Tenants
          </h1>
        </div>
      </div>{" "} */}
      <div className="relative w-full h-[45vh]   sm:h-[50vh]  md:h-[70vh] lg:h-[75vh] xl:h-[100vh]">
        <img loading="lazy" 
          src="./Tenant/tenant_banner.webp"
          className="absolute top-0 w-[80%] sm:w-[50%] xl:w-[60%] h-full right-0 z-[400]"
          alt=""
        />
        <div className="w-[40%] hidden  sm:flex justify-center items-center pl-5 h-full ">
          <h1 className="pt_serif z-[500] text-white font-bold  text-[25px] md:text-[40px]  md:mt-0  mt-10 ">
            Information for Tenants
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full mt-10 sm:flex-row ">
        <div className="flex items-center justify-center  w-[90%] sm:w-1/2 sm:flex-col gap-2  sm:gap-7">
          <img loading="lazy" 
            src="./Tenant/tenant_b_1.webp"
            className=" w-[50%]  sm:w-[70%]"
            alt=""
          />
          <img loading="lazy" 
            src="./Tenant/tenant_b_2.webp"
            className=" w-[50%]  sm:w-[70%]"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-0 mt-10  w-[90%] sm:w-1/2 gap-5 sm:gap-2 md:gap-8 lg:gap-10 xl:gap-16">
          {" "}
          <div className=" w-full sm:w-[90%]">
            {" "}
            <h1 className=" sm:hidden pt_serif z-[500] text-white font-bold  text-[25px] md:text-[40px]   ">
              Information for Tenants
            </h1>
          </div>
          <div className=" w-full sm:w-[90%]">
            {" "}
            <p className="text-white pt_sans text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
              We take great satisfaction in responding to your concerns in a
              timely and effective manner.
            </p>
          </div>
          <div className=" w-full sm:w-[90%]">
            <p className="text-white pt_sans text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
              Please get in touch with us if you have any questions about the
              property (such as to report maintenance concerns).
            </p>
          </div>
          <div className=" w-full sm:w-[90%]">
            <p className="text-white pt_sans text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
              Property Manager <br />
              Vincent Lucas
            </p>
          </div>
          <div className=" w-full sm:w-[90%]  text-white flex flex-col gap-2">    <a
              href="mailto:Info@jovidhomes.co.uk"
              className="flex items-start gap-3 align-top "
            >
              <span>
                <img loading="lazy" 
                  src="./Footer/mail.svg"
                  alt="Location"
                  className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                />
              </span>
              <span className="text-white leading-9 pt_sans text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                Info@jovidhomes.co.uk
              </span>
            </a>
            <a
              href="tel:01952863235"
              className="flex items-center gap-3 capitalize align-top "
            >
              <span>
                <img loading="lazy" 
                  src="./Footer/phone-call.svg"
                  alt="Location"
                  className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                />
              </span>
              <span className="text-white pt_sans text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] align-top ">
                01952863235
              </span>
            </a>
        
          </div>
        </div>
      </div>
    </>
  );
}
