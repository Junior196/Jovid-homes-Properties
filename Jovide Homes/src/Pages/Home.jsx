import React from "react";
import Divider from "../Components/Divider";
import Service from "../Components/ServiceSection/Service";
import Gallery from "../Components/Gallery/Gallery";
import HeroSection from "../Components/HeroSection";
function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col items-center justify-center w-full bg-primary">
       

        <Divider />
        <Service />
        <Divider />
        <div className="w-[94%] flex items-center justify-start mb-7 sm:mb-12">
          <h3 className="text-white pt_serif font-bold text-[20px] sm:text-[27px] md:text-[27px] lg:text-[30px]  xl:text-[40px]">
            GALLERY
          </h3>
        </div>
        <Gallery
          image1="./Home_Gallery/1.webp"
          image2="./Home_Gallery/2.webp"
          image3="./Home_Gallery/3.webp"
          image4="./Home_Gallery/4.webp"
          image5="./Home_Gallery/5.webp"
          image6="./Home_Gallery/6.webp"
          image7="./Home_Gallery/7.webp"
          mImage1={"./Home_Gallery/mh1.webp"}
          mImage2={"./Home_Gallery/mh2.webp"}
          mImage3={"./Home_Gallery/mh3.webp"}
          mImage4={"./Home_Gallery/mh4.webp"}
        />
        <div className="w-[82%] flex items-center justify-start mb-7 md:mb-10 lg:mb-14 xl:mb-20 md:my-5 lg:my-8 xl:my-12">
          <p className="pt_serif  md:text-[24px] lg:text-[28px] xl:text-[35px] text-white ">
            Jovid Homes objective is to develop and manage quality, multi family
            living accommodation across Telford, while also retaining a
            portfolio of traditional single let family homes.
          </p>
        </div>
        <Gallery
          image1="./Home_Gallery_2/1.webp"
          image2="./Home_Gallery_2/2.webp"
          image3="./Home_Gallery_2/3.webp"
          image4="./Home_Gallery_2/4.webp"
          image5="./Home_Gallery_2/5.webp"
          image6="./Home_Gallery_2/6.webp"
          image7="./Home_Gallery_2/7.webp"
          mImage1={"./Home_Gallery_2/h21.webp"}
          mImage2={"./Home_Gallery_2/h22.webp"}
          mImage3={"./Home_Gallery_2/h23.webp"}
          mImage4={"./Home_Gallery_2/h24.webp"}
        />
      </div>
    </>
  );
}

export default Home;
