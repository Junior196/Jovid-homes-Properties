import React from "react";

function SingleBoxService({ icon, title, description }) {
  return (
    <>
      <div className="flex flex-col items-center justify-between flex-1 flex-grow gap-3 px-2 py-8 bg-white sm:pl-5 sm:px-6 sm:py-10 sm:flex-row lg:px-7 lg:flex-col lg:justify-start shadow_serivce_page_box lg:py-9 ">
        <div className="bg-[#282939]  w-[80px]  xl:w-[100px]  h-[80px]  xl:h-[100px] rounded-full flex justify-center items-center mb-4">
          <img loading="lazy"  src={icon} className=" w-[50px] xl:w-[60px]" alt={title} />
        </div>
        <div className="flex flex-col w-[90%] sm:w-[80%] lg:w-full gap-4">
          <div>
            <h4 className="font-bold  pt_serif sm:text-start text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-center xl:text-[25px]">
              {title}
            </h4>
          </div>
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="pt_sans text-[16px] md:text-[18px] xl:text-[20px]"
            ></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBoxService;
