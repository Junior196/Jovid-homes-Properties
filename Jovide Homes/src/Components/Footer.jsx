import React from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
function Footer() {
  return (
    <>
      <div className=" pt_sans relative w-full bg-[#282939]  hidden md:flex justify-between lg:justify-center flex-col items-center">
        <Divider />
        <div className="flex justify-start gap-10 w-[95%]">
          <div className=" md:w-[10%] lg:w-[15%]">
            <Link to="/">
              {" "}
              <img
                loading="lazy"
                src="./logoPNG.png"
                alt="Jovid Homes"
                className="w-[105px]"
              />
            </Link>
          </div>
          <div className="flex justify-start items-center w-[80%] md:w-[75%]">
            <div className="flex items-stretch justify-between w-full gap-14">
              <div className="w-[20%]  flex flex-col">
                <h2 className="pt_serif text-[20px] sm:text-[20px] md:text-[22px] lg:text-[30px]  font-bold text-white mb-3">
                  Company
                </h2>
                <nav className=" flex-grow flex flex-col gap-3 md:text-[20px] lg:text-[25px] justify-between lg:gap-4 text-white">
                  <Link to="/properties" className="capitalize ">
                    Properties
                  </Link>
                  <Link to="/tenants" className="">
                    Tenants
                  </Link>
                  <Link to="/services" className="">
                    Our Services
                  </Link>
                  <Link to="/about" className="">
                    About Us
                  </Link>
                </nav>
              </div>
              <div className="  lg:w-[40%]  flex flex-col">
                <h2 className="pt_serif text-[20px] sm:text-[20px] md:text-[22px] lg:text-[30px]  font-bold text-white mb-3">
                  Contact Us
                </h2>
                <nav className=" flex-grow flex flex-col md:text-[20px] lg:text-[25px] justify-start gap-3 lg:gap-4 text-white">
                  {/* <a
                    to="/"
                    className="flex items-start gap-3 capitalize align-top "
                  >
                    <span>
                      <img
                        loading="lazy"
                        src="./Footer/carbon_location.svg"
                        alt="Location"
                        className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                      />
                    </span>
                    <span className="align-top">
                      1234 Elm Street, Suite 567 Dunshealth,IL 67890, UK
                    </span>
                  </a> */}
                  <a
                    href="tel:01952863235"
                    className="flex items-start gap-3 capitalize align-top "
                  >
                    <span>
                      <img
                        loading="lazy"
                        src="./Footer/phone-call.svg"
                        alt="Location"
                        className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                      />
                    </span>
                    <span className="align-top">01952863235</span>
                  </a>
                  <a
                    href="mailto:Info@jovidhomes.co.uk"
                    className="flex items-start gap-3 align-top "
                  >
                    <span>
                      <img
                        loading="lazy"
                        src="./Footer/mail.svg"
                        alt="Location"
                        className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                      />
                    </span>
                    <span className="align-top">Info@jovidhomes.co.uk</span>
                  </a>
                </nav>
              </div>
              <div className="w-[20%]   flex flex-col">
                <h2 className="pt_serif text-[20px] sm:text-[20px] md:text-[22px] lg:text-[30px]  font-bold text-white mb-3">
                  Social
                </h2>
                <nav className=" flex-grow flex flex-col md:text-[20px] lg:text-[25px] justify-start gap-3 lg:gap-4 text-white">
                  <a
                    href="https://wa.me/447421818373"
                    target="_blank"
                    className="flex items-start gap-3 capitalize align-top "
                  >
                    <img
                      loading="lazy"
                      src="./Footer/whatsapp.svg"
                      alt="Location"
                      className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                    />

                    <span className="align-top">Whatsapp</span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.airbnb.co.uk/users/show/88982689"
                  >
                    {" "}
                    <p className="flex items-start gap-3 capitalize align-top ">
                      <span>
                        <img
                          loading="lazy"
                          src="./Footer/airbnb.svg"
                          alt="Location"
                          className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                        />
                      </span>
                      <span className="align-top">Airbnb</span>
                    </p>
                  </a>

                  {/* <Link
                    to="#"
                    className="flex items-start gap-3 capitalize align-top "
                  >
                    <span>
                      <img loading="lazy" 
                        src="./Footer/airbnb.svg"
                        alt="Location"
                        className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  pt-2"
                      />
                    </span>
                    <span className="align-top">Airbnb</span>
                  </Link> */}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </div>
      <div className=" pt_sans relative w-full bg-[#282939]  md:hidden flex justify-between lg:justify-center flex-col items-center">
        <Divider />
        <div className="flex flex-col justify-center gap-10 w-[90%]">
          <div className="flex items-center justify-center w-full ">
            <Link to="/">
              <img
                loading="lazy"
                src="./logoPNG.png"
                alt="Jovid Homes"
                className="w-[105px]"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-[95%] gap-10">
            <div className="flex flex-col flex-grow w-full ">
              <h2 className="pt_serif text-[20px] sm:text-[20px] md:text-[22px] lg:text-[30px]  font-bold text-white mb-3">
                Company
              </h2>
              <nav className=" flex-grow flex flex-col gap-3 md:text-[20px] lg:text-[25px] justify-between lg:gap-4 text-white">
                <Link to="/properties" className="capitalize ">
                  Properties
                </Link>
                <Link to="/tenants" className="">
                  Tenants
                </Link>
                <Link to="/services" className="">
                  Our Services
                </Link>
                <Link to="/about" className="">
                  About Us
                </Link>
              </nav>
            </div>
            <div className="flex flex-col flex-grow w-full ">
              <h2 className="pt_serif text-[20px] sm:text-[20px] md:text-[22px] lg:text-[30px]  font-bold text-white mb-3">
                Contact Us
              </h2>
              <nav className=" flex-grow flex flex-col  text-[16px] sm:text-[17px] md:text-[20px] lg:text-[25px] justify-between gap-3 lg:gap-4 text-white">
                <a
                  target="_blank"
                  href="https://wa.me/447421818373"
                  className="flex items-start gap-3 capitalize align-top "
                >
                  <img
                    loading="lazy"
                    src="./Footer/whatsapp.svg"
                    alt="Location"
                    className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  "
                  />

                  <p className="align-top">Whatsapp</p>
                </a>
                <a
                  target="_blank"
                  href="https://www.airbnb.co.uk/users/show/88982689"
                >
                  <p className="flex items-start gap-3 capitalize align-top ">
                    {" "}
                    <span>
                      <img
                        loading="lazy"
                        src="./Footer/airbnb.svg"
                        alt="Location"
                        className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  "
                      />
                    </span>
                    <span className="align-top">Airbnb</span>
                  </p>
                </a>
                {/* <Link
                  to="/"
                  className="flex items-start gap-3 capitalize align-top "
                >
                  <span>
                    <img loading="lazy" 
                      src="./Footer/airbnb.svg"
                      alt="Location"
                      className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  "
                    />
                  </span>
                  <span className="align-top">Airbnb</span>
                </Link> */}
                {/* <p className="flex items-start gap-3 capitalize align-top ">
                  <span>
                    <img
                      loading="lazy"
                      src="./Footer/carbon_location2.svg"
                      alt="Location"
                      className=" w-[34px]  lg:h-[30px] h-[35px] lg:w-[24px]  "
                    />
                 
                  </span>
                  <span className="align-top">
                    1234 Elm Street, Suite 567 Dunshealth,IL 67890, UK
                  </span>
                </p> */}
                <a
                  href="tel:01952863235"
                  className="flex items-start gap-3 capitalize align-top "
                >
                  <span>
                    <img
                      loading="lazy"
                      src="./Footer/phone-call.svg"
                      alt="Location"
                      className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  "
                    />
                  </span>
                  <span className="align-top">01952863235</span>
                </a>
                <a
                  href="mailto:Info@jovidhomes.co.uk"
                  className="flex items-start gap-3 align-top "
                >
                  <span>
                    <img
                      loading="lazy"
                      src="./Footer/mail.svg"
                      alt="Location"
                      className=" w-[24px]  lg:h-[30px] h-[30px] lg:w-[24px]  "
                    />
                  </span>
                  <span className="align-top">Info@jovidhomes.co.uk</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </>
  );
}

export default Footer;
