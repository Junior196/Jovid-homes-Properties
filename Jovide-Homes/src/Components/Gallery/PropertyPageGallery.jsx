import React from "react";
import { Helmet } from "react-helmet";

function PropertyPageGallery({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
}) {
  return (
    <>
      {/* Preload important images */}
      <Helmet>
        <link rel="preload" href={image1} as="image" />
        <link rel="preload" href={image2} as="image" />
        <link rel="preload" href={image3} as="image" />
      </Helmet>

      <div className="w-[94%] flex items-center gap-4 sm:gap-10 md:gap-14 justify-between flex-col mb-12 overflow-hidden">
        <div className="flex items-center justify-between gap-2 sm:gap-4 sm:justify-center columns-2">
          <img src={image1} alt="1" className="w-1/2" loading="lazy" />
          <img src={image2} alt="2" className="w-1/2" loading="lazy" />
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <img src={image3} alt="3" className="w-[33%]" loading="lazy" />
          <img src={image4} alt="4" className="w-[33%]" loading="lazy" />
          <img src={image5} alt="5" className="w-[33%]" loading="lazy" />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-4 sm:justify-center columns-2">
          <img src={image6} alt="6" className="w-1/2" loading="lazy" />
          <img src={image7} alt="7" className="w-1/2" loading="lazy" />
        </div>
      </div>
    </>
  );
}

export default PropertyPageGallery;
