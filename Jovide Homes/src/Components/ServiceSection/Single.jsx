import React from "react";

function Single({ bgImage, icon, title }) {
  return (
    <>
      <div className="  relative h-[203px] sm:h-[78vh] xl:h-[83vh] w-full  lg:w-[32%]   border-[#C7AB7C] bg-white flex justify-center items-center gap-4 flex-col">
        <img
          src={bgImage}
          className="object-cover absolute z-[400] w-full h-full"
        />
        <div className=" absolute z-[500] object-cover w-full h-full bg-[#2829399c]"></div>
        <img src={icon} alt={title} className=" w-[68px] sm:w-[88px] z-[600]" />
        <p className="text-white text-[20px] md:text-[30px] font-bold pt_serif z-[600]">
          {title}
        </p>
      </div>
    </>
  );
}

export default Single;
