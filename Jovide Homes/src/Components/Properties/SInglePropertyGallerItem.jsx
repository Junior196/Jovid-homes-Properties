import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SinglePropertyGalleryItem({
  img,
  address,
  button_link,
}) {
  return (
    <>
      {/* Preload the image */}
      <Helmet>
        <link rel="preload" href={img} as="image" />
      </Helmet>

      <div className="flex items-center justify-center w-full gap-2">
        <div className="w-1/2 sm:w-[45%] md:w-[35%] flex items-stretch">
          <Link to={button_link}>
            {" "}
            <img
              loading="lazy"
              src={img}
              className="w-[100%]"
              alt="Property"
            />{" "}
          </Link>
        </div>
        <div className="w-[40%] sm:w-[50%] flex items-start justify-start flex-col gap-5 pl-1 sm:pl-5">
        <Link
            to={button_link}> <p className="text-white pt_sans text-[15px] sm:text-[18px] lg:text-[20px] xl:text-[22px]">
            {address}
          </p></Link>
          <Link
            to={button_link}
            className="text-white bg-[#C7AB7C] hover:bg-white hover:text-[#282939] hover:transition-all hover:duration-300 hover:ease-in py-1 px-2 sm:py-2 xl:px-8 xl:py-4 rounded-md font-normal text-[15px] sm:text-[17px] xl:text-[20px]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
