import React from "react";
import Divider from "../Components/Divider";
import SInglePropertyGallerItem from "../Components/Properties/SInglePropertyGallerItem";
export default function Property() {
  return (
    <>
      {/* <div className="relative w-full  lg:h-screen   md:h-[83vh]">
        <img loading="lazy" 
          src="./Properties/banner.webp"
          className="absolute top-0 w-[92%] h-full right-0 z-[400]"
          alt=""
        />
        <div className="w-[100%] z-[500] flex justify-center items-center pl-5 h-full">
          <h1 className="pt_serif z-[500] text-white font-bold  text-[28px] sm:text-[40px]  ">
            Information for Tenants
          </h1>
        </div>
      </div>{" "} */}
      <div className="relative w-full h-[40vh]   sm:h-[50vh]  md:h-[70vh] lg:h-[75vh] xl:h-[100vh]">
        <img
          loading="lazy"
          src="./Properties/banner.webp"
          className="absolute top-0 w-[80%] sm:w-[92%] h-full right-0 z-[400]"
          alt=""
        />
        <div className=" w-[100%] z-[500] hidden  sm:flex justify-center items-center pl-5 h-full">
          <h1 className="pt_serif z-[500] text-white font-bold  text-[28px] sm:text-[40px]  ">
            Our Properties
          </h1>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <SInglePropertyGallerItem
          img="./Properties/p_1.webp"
          address={"12, Grove Road, Telford"}
          button_link={"/property-1"}
      
        />
        <SInglePropertyGallerItem
          img="./Properties/p_2.webp"
          address={"46, Dunsheath, Telford"}
          button_link={"/property-2"}
        />
        <SInglePropertyGallerItem
          img="./Properties/p_3.webp"
          address={"55, Hadley Park, Telford"}
          button_link={"/property-3"}
        />
      </div>
    </>
  );
}
