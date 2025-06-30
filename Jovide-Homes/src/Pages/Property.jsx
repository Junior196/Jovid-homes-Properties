import React from "react";
import Divider from "../Components/Divider";
import SInglePropertyGallerItem from "../Components/Properties/SInglePropertyGallerItem";
export default function Property() {
  return (
    <>
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[75vh] xl:h-screen">
        <img
          loading="lazy"
          src="./Properties/banner.webp"
          className="absolute top-0 right-0 w-4/5 sm:w-[92%] h-full z-40 object-cover"
          alt="Our Properties Banner"
        />
        <div className="absolute inset-0 flex justify-center items-center pl-5 z-40">
          <h1 className="pt_serif text-white font-bold text-2xl sm:text-4xl">
            Our Properties
          </h1>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <SInglePropertyGallerItem
          img="./Properties/p_1.webp"
          address="12, Grove Road, Telford"
          button_link="/grove-road"
        />
        <SInglePropertyGallerItem
          img="./Properties/p_2.webp"
          address="46, Dunsheath, Telford"
          button_link="/dunshealth"
        />
        <SInglePropertyGallerItem
          img="./Properties/p_3.webp"
          address="55, Hadley Park, Telford"
          button_link="/hadley-park"
        />
      </div>
    </>
  );
}
