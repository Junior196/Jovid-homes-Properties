import React from "react";
import Divider from "../Components/Divider";
import Service from "../Components/ServiceSection/Service";
import Gallery from "../Components/Gallery/Gallery";
function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-[#282939]">
        <div className="w-[96%] mt-10 md:mt-52 lg:mt-32 lg:flex-row flex-col  lg:top-0 top-11 md:h-[78vh] lg:h-[94vh] flex justify-center  lg:gap-0 gap-10 lg:justify-stretch items-center">
          <div className="relative hidden md:flex items-center justify-center w-[95%] lg:w-1/2 ">
            <img loading="lazy" 
              src="./Home/Hero_Home_1.webp"
              alt="Hero_Home_1"
              className=" w-[310px] lg:w-[340px] xl:w-[378px]"
            />
            <img loading="lazy" 
              src="./Home/Hero_Home_2.webp"
              alt="Hero_Home_2"
              className=" w-[200px]  md:w-[240px]  xl:w-[288px]  top-[-4rem] lg:top-[-6.5rem]  right-[10rem] lg:right-[4.5rem] xl:right-[6.6rem] z-[100] absolute"
            />
            <img loading="lazy" 
              src="./Home/Hero_Home_3.webp"
              alt="Hero_Home_3"
              className=" w-[200px]  md:w-[240px] xl:w-[288px] bottom-[-6rem] lg:bottom-[-8rem] left-[10rem] lg:left-7 z-[100] absolute"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[95%] lg:w-1/2 text-white lg:mt-0 mt-28">
            <h2 className="pt_serif text-left text-[20px] sm:text-[27px] md:text-[27px] lg:text-[30px] xl:text-[35px] font-bold mb-3">
            Quality serviced accommdation in Telford area. 
            </h2>
            {/* <p className="pt_sans text-left text-[16px] sm:text-[19px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-normal ">
              We are a leading custom home development based in Dunshealth. We
              specialize in design construction and project management of fine
              custom homes that are professionally built to the taste of our
              client.
            </p> */}
          </div>
          <div className="flex flex-col items-center justify-between w-full gap-4 md:hidden">
            <img loading="lazy"    className="w-full"  src="./Home/m1.webp"
              alt="m1" />
            <img loading="lazy"    className="w-full"  src="./Home/m2.webp"
              alt="m1" />
            <img loading="lazy"    className="w-full"  src="./Home/m3.webp"
              alt="m1" />
          </div>
        </div>

        <Divider />
        <Service />
        <Divider />
        <div className="w-[94%] flex items-center justify-start mb-7 sm:mb-12">
          <h3 className="text-white pt_serif font-bold text-[20px] sm:text-[27px] md:text-[27px] lg:text-[30px]  xl:text-[40px]">GALLERY</h3>
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
          Jovid Homes objective is to develop and manage quality, multi family living accommodation across Telford, while also retaining a portfolio of traditional single let family homes. 
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
