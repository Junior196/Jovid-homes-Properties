import React from "react";
import { Helmet } from "react-helmet";

function Gallery({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  mImage1,
  mImage2,
  mImage3,
  mImage4,
}) {
  return (
    <>
      {/* Preload important images */}
      <Helmet>
        {/* Preload desktop images */}
        <link rel="preload" href={image1} as="image" />
        <link rel="preload" href={image2} as="image" />
        <link rel="preload" href={image3} as="image" />
        {/* Preload mobile images */}
        <link rel="preload" href={mImage1} as="image" />
        <link rel="preload" href={mImage2} as="image" />
      </Helmet>

      <div className="w-[94%] hidden sm:flex items-center gap-14 justify-between flex-col mb-12">
        <div className="flex items-center justify-center gap-4 columns-2">
          <img loading="lazy"  src={image1} alt="1" className="w-1/2" />
          <img loading="lazy"  src={image2} alt="2" className="w-1/2" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <img loading="lazy"  src={image3} alt="3" className="w-[33%]" />
          <img loading="lazy"  src={image4} alt="4" className="w-[33%]" />
          <img loading="lazy"  src={image5} alt="5" className="w-[33%]" />
        </div>
        <div className="flex items-center justify-center gap-4 columns-2">
          <img loading="lazy"  src={image6} alt="6" className="w-1/2" />
          <img loading="lazy"  src={image7} alt="7" className="w-1/2" />
        </div>
      </div>
      <div className="w-[90%] sm:hidden flex items-center gap-4 justify-center flex-col mb-12">
        <div className="flex items-center justify-center w-full gap-4">
          <img loading="lazy"  src={mImage1} alt="1" className="w-1/2" />
          <img loading="lazy"  src={mImage2} alt="2" className="w-1/2" />
        </div>

        <div className="flex items-center justify-center w-full gap-4">
          <img loading="lazy"  src={mImage3} alt="6" className="w-1/2" />
          <img loading="lazy"  src={mImage4} alt="7" className="w-1/2" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
