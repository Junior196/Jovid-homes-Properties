import React from "react";
import Single from "./Single";
function Service() {
  return (
    <>
      <div className=" flex md:flex-row flex-col  w-[94%]  z-[300]   flex-row items-center justify-center xl:justify-between gap-3 ">
        {/* <div className=" p-2 h-[78vh] xl:h-[83vh] w-[25%]  border-l-[10px]  pl-3 border-b-[10px] border-[#C7AB7C] bg-white flex justify-center gap-4 flex-col">
          <h2 className=" pl-2 pt_serif font-bold lg:text-[30px] text-[22px] xl:text-[35px]">
            OUR<br></br> SERVICES
          </h2>
          <p className=" text-[17px] lg:text-[20px] xl:text-[22px] pt_sans">
            We offer personalized property searches, professional negotiations,
            and seamless transaction support. From start to finish, we're
            dedicated to making your real estate journey smooth and successful.
            Trust us to turn your real estate aspirations into reality.
          </p>
        </div> */}
        <Single
          bgImage="./Service_Section/Services_section_Design.webp"
          title="Design"
          icon="./Service_Section/Services_design_icon.svg"
        />
        <Single
          bgImage="./Service_Section/Services_section_Construction.webp"
          title="Construction"
          icon="./Service_Section/Services_construction_icon.svg"
        />
        <Single
          bgImage="./Service_Section/Services_section_Remodelling.webp"
          title="Remodelling"
          icon="./Service_Section/Services_Remodelling_icon.svg"
        />
      </div>
      <div className="w-[94%] hidden    z-[300]  gap-12 sm:gap-4 flex-col items-center justify-center xl:justify-between  ">
        <div className="flex flex-col items-center justify-center w-full gap-12 sm:gap-4 sm:flex-row ">
          {/* <div className=" p-2 h-[38vh] sm:h-[78vh] w-full sm:w-1/2 xl:h-[83vh]  border-l-[10px]  pl-3 border-b-[10px] border-[#C7AB7C] bg-white flex justify-center gap-4 flex-col">
            <h2 className="sm:flex hidden pl-2 pt_serif font-bold lg:text-[30px] text-[22px] xl:text-[35px]">
              OUR<br></br> SERVICES
            </h2>
            <h2 className="flex justify-center sm:hidden   pt_serif  text-center font-bold text-[18x] sm:text-[22px] ">
              OUR SERVICES
            </h2>
            <p className=" text-[16px] sm:text-[17px] lg:text-[20px] xl:text-[22px] pt_sans">
              We offer personalized property searches, professional
              negotiations, and seamless transaction support. From start to
              finish, we're dedicated to making your real estate journey smooth
              and successful. Trust us to turn your real estate aspirations into
              reality.
            </p>
          </div> */}
          <Single
            bgImage="./Service_Section/Services_section_Design.webp"
            title="Design"
            icon="./Service_Section/Services_design_icon.svg"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-12 sm:gap-4 sm:flex-row">
          <Single
            bgImage="./Service_Section/Services_section_Construction.webp"
            title="Construction"
            icon="./Service_Section/Services_construction_icon.svg"
          />
          <Single
            bgImage="./Service_Section/Services_section_Remodelling.webp"
            title="Remodelling"
            icon="./Service_Section/Services_Remodelling_icon.svg"
          />
        </div>
      </div>
    </>
  );
}

export default Service;
