import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
function DarkHeader({ page }) {
  const [currentPage, setCurrentPage] = useState(null);
  const [iswhite, setIsWhite] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);  const location = useLocation();
  const showMenu = () => {
    console.log("menu");
    setIsShowMenu(!isShowMenu);
  };
  console.log(page);
  useEffect(() => {
    setCurrentPage(page);
    if (page === "home" || page === "services") {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  }, [page]);
  useEffect(() => {
  setIsShowMenu(false)
  }, [location]);
  return (
    <>
      <div className=" absolute z-[1200] hidden md:flex justify-center w-full bg-[#28293900]">
        <div className="  w-[95%] mt-3  flex justify-center items-center">
          <div className="logo w-[20%] xl:w-[25%]">
            <Link to="/">
              <img loading="lazy" 
                src="./logoPNG.png"
                alt="Jovid Homes"
                className=" w-[76px] sm:w-[90px] xl:w-[105px]"
              />
            </Link>
          </div>
          <div
            className={`pt_serif ${
              !page === "tenants" ||
              !page === "properties" ||
              page === "about" ||
              page === "contact"
                ? "bg-[#282939]"
                : "bg-transparent"
            } py-4 px-3  md:w-[70%] lg:w-[50%] xl:w-[40%]  rounded-md`}
          >
            <nav className="flex text-[15px] flex-row justify-center gap-7 text-white">
              <Link
                to="/properties"
                className={`relative transition-all duration-75 ease-in-out menuItem ${
                  currentPage === "properties" ? "activePage" : "inactive"
                }`}
              >
                PROPERTIES
              </Link>
              <Link
                to="/tenants"
                className={`relative transition-all duration-75 ease-in-out menuItem ${
                  currentPage === "tenants" ? "activePage" : "inactive"
                }`}
              >
                TENANTS
              </Link>
              <Link
                to="/services"
                className={`relative transition-all duration-75 ease-in-out menuItem ${
                  currentPage === "services" ? "activePage" : "inactive"
                }`}
              >
                OUR SERVICES
              </Link>
              <Link
                to="/about"
                className={`relative transition-all duration-75 ease-in-out menuItem ${
                  currentPage === "about" ? "activePage" : "inactive"
                }`}
              >
                ABOUT US
              </Link>
            </nav>
          </div>
          <div className="pt_serif w-[25%] flex justify-end">
            <Link
              to="/contact"
              className={`  
          
          ${
            iswhite
              ? "hover:text-white  hover:bg-[#C7AB7C] bg-white text-[#282939]"
              : "hover:text-[#282939]  hover:bg-[#fff] bg-[#282939] text-[#fff]"
          }
          
           hover:transition-all hover:duration-300 hover:ease-in  px-2 py-2  xl:px-4 xl:py-3 rounded-md font-bold text-[17px] xl:text-[20px]`}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:hidden absolute z-[1200] flex justify-center mt-2  items-center w-full bg-[#28293900]">
        <div className="flex w-[95%] justify-end items-center">
          <div className="logo w-[20%] xl:w-[25%] flex flex-1">
            <Link to="/">
              <img loading="lazy" 
                src="./logoPNG.png"
                alt="Jovid Homes"
                className=" w-[76px] sm:w-[90px] xl:w-[105px]"
              />
            </Link>
          </div>
          <div className="flex justify-end flex-1">
            <RiMenu2Line className="text-2xl text-white " onClick={showMenu} />
          </div>
        </div>
      </div>
      <div className="relative w-full  z-[1200]  ">
        <div
          className={`md:hidden ${
            isShowMenu ? " translate-x-[0%]   " : " translate-x-[200%]   "
          }  transition-all  transform duration-1000 ease-in-out  absolute flex-col z-[1500]  flex justify-center  items-center w-full bg-[#fff] py-3  `}
        >
          <div className="w-[95%] flex  justify-end ">
            <IoMdClose
              className="text-4xl text-[#282939] font-bold "
              onClick={showMenu}
            />
          </div>
          <div className="w-[90%] flex justify-start py-7">
            <div className="logo w-[25%]">
              <Link to="/">
                <img loading="lazy" 
                  src="./header_logo.png"
                  alt="Jovid Homes"
                  className=" w-[96px] sm:w-[120px] xl:w-[105px]"
                />
              </Link>
            </div>
            <nav className="flex text-center font-bold flex-col text-[15px]  w-[55%] items-center  justify-center gap-7 text-[#282939]">
              <Link
           
                to="/properties"
                className={`relative transition-all duration-75 ease-in-out menuItemMobile ${
                  currentPage === "properties" ? "activePageMobile" : "inactive"
                }`}
              >
                PROPERTIES
              </Link>
              <Link
            
                to="/tenants"
                className={`relative transition-all duration-75 ease-in-out menuItemMobile ${
                  currentPage === "tenants" ? "activePageMobile" : "inactive"
                }`}
              >
                TENANTS
              </Link>
              <Link
            
                to="/services"
                className={`relative transition-all duration-75 ease-in-out menuItemMobile ${
                  currentPage === "services" ? "activePageMobile" : "inactive"
                }`}
              >
                OUR SERVICES
              </Link>
              <Link
              
                to="/about"
                className={`relative transition-all duration-75 ease-in-out menuItemMobile ${
                  currentPage === "about" ? "activePageMobile" : "inactive"
                }`}
              >
                ABOUT US
              </Link>
              <Link
          
                to="/contact"
                className={`relative transition-all duration-75 ease-in-out menuItemMobile ${
                  currentPage === "contact" ? "activePageMobile" : "inactive"
                }`}
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkHeader;
