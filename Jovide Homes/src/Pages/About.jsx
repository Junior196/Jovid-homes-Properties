import React from "react";
import Divider from "../Components/Divider";
import SingleAboutUsBox from "../Components/AboutUs/SingleAboutUsBox";
function About() {
  return (
    <>
      <div className=" z-[300] w-full flex flex-col justify-center items-center ">
        <div className="relative w-full  h-[35vh] md:h-screen">
          <img loading="lazy" 
            src="./About_us/hero.webp"
            className="object-cover w-full h-full z-[400]"
            alt=""
          />
          <div className=" flex flex-col  justify-center items-center md:justify-end md:items-end absolute z-[500] object-cover w-full h-full top-0 bg-[#28293988]">
            <h1 className="pt_serif text-white font-bold  text-[28px] sm:text-[40px] md:hidden flex  ">
              About Us
            </h1>
            <div className="flex-col items-end justify-end hidden w-full h-full mr-10 md:flex">
              <div className="bg-[#0000005e] w-[71%]   lg:w-[60%] p-10">
                <h2 className="pt_serif text-white text-[28px] xl:text-[43px] ">
                  GET TO KNOW JOVID HOMES BETTER
                </h2>
                <hr className="border-[#C7AB7C] border my-4 w-full" />
                <p className="text-white pt_sans text-[18px] lg:text-[20px] xl:text-[22px]">
                Jovid Homes is committed to being a trusted partner in property ownership and management, delivering excellent results with professionalism and care.
                </p>
              </div>
              <div className="bg-[#C7AB7C] h-[8%] lg:h-[10%] w-[71%]   lg:w-[60%]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end w-full h-full md:hidden">
          <div className="bg-[#0000005e]   p-5 pt-10 sm:p-10">
            <h2 className="pt_serif text-white  text-[19px]  sm:text-[28px] xl:text-[43px] ">
              GET TO KNOW JOVID HOMES BETTER
            </h2>
            <hr className="border-[#C7AB7C]  border-[0.5px] sm:border my-4 w-full" />
            <p className="text-white pt_sans text-[16px]  sm:text-[18px] lg:text-[20px] xl:text-[22px]">
            Jovid Homes is committed to being a trusted partner in property ownership and management, delivering excellent results with professionalism and care.


            </p>
          </div>
          <div className="bg-[#C7AB7C] h-[7vh]  w-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Divider />
          <div className="w-[96%] lg:flex-row flex-col   md:h-[78vh] lg:h-[94vh] flex justify-center  lg:gap-0 gap-10 lg:justify-stretch items-center">
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
            <div className="flex flex-col items-start justify-center w-[95%] lg:w-1/2 text-white ">
              <h2 className="pt_serif text-left text-[20px] sm:text-[27px] md:text-[27px] lg:text-[30px] xl:text-[35px] font-bold mb-3">
              Quality serviced accommdation in Telford area. 
              </h2>
   
            </div>
            <div className="flex flex-col items-center justify-between w-full gap-4 md:hidden">
              <img loading="lazy"  className="w-full" src="./Home/m1.webp" alt="m1" />
              <img loading="lazy"  className="w-full" src="./Home/m2.webp" alt="m1" />
              <img loading="lazy"  className="w-full" src="./Home/m3.webp" alt="m1" />
            </div>
          </div>
          <Divider />
        </div>

        <div className=" bg-[#D9D9D9]    lg:bg-[#E0E0E0] relative w-[92%] lg:w-full flex flex-col items-center justify-center h-[5vh] sm:h-[15vh] "></div>
        <div className=" bg-[#D9D9D9]    lg:bg-[#E0E0E0] w-[92%] lg:w-full flex flex-col items-center justify-center ">
          <div className=" bg-[#D9D9D9]    lg:bg-[#E0E0E0] relative w-[92%] flex flex-col ">
            <div className="flex flex-col items-center justify-start lg:mb-10">
              <h2 className="pt_serif  text-[20px] sm:text-[27px] md:text-[27px] lg:text-[34px] font-bold text-left">
              What We Do:
              </h2>
              <div className=" md:w-[90%] lg:w-[90%] mt-4">
                <p className="pt_sans text-[16px] sm:text-[19px] md:text-[19px] lg:text-[20px] xl:text-[23px] ">
                At Jovid Homes, we are dedicated to providing exceptional property ownership and management services. With a strong commitment to quality, we oversee a diverse portfolio of residential, commercial, and mixed-use properties, ensuring they are well-maintained, efficiently managed, and meet the highest standards for our tenants and stakeholders.
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col items-stretch justify-between lg:h-[68vh] gap-4  mt-10 lg:mt-20">
              <SingleAboutUsBox
                icon="./About_us/help_desk.svg"
                title="Property Ownership"
                description="We acquire and develop properties that add value to the community and provide sustainable returns. Our portfolio spans a variety of sectors, ensuring diversity and resilience in a dynamic market."
              />
              <SingleAboutUsBox
                icon="./About_us/thumbs_up.svg"
                title="Property Management"
                description="We manage properties with a focus on long-term value, tenant satisfaction, and operational excellence. We ensure efficient handling of every aspect of property management, from routine maintenance to financial management."
              />
              <SingleAboutUsBox
                icon="./About_us/golden_bulb.svg"
                title="Our Approach"
                description="At Jovid Homes, our core values of integrity, reliability, and professionalism drive our operations. Whether it's optimising the performance of a commercial building or ensuring a residential community's comfort and security, we tailor our services to meet the unique needs of each property."
              />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9]    lg:bg-[#E0E0E0] relative w-[92%] lg:w-full flex flex-col items-center justify-center  h-[7vh]     lg:h-[15vh] "></div>
      </div>
    </>
  );
}

export default About;
