import React, { useEffect, useState, createContext } from "react";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import DarkHeader from "./Components/Headers/DarkHeader";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Tenant from "./Pages/Tenant";
import Property from "./Pages/Property";
import PropertyTemplate from "./Pages/PropertyTemplate";

export const ServerCreds = createContext();

function App() {
  const location = useLocation();

  const server = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  const pages = [
    "home",
    "contact",
    "services",
    "tenants",
    "about",
    "properties",
  ];
  let currentPage = pages.find((page) => location.pathname === `/${page}`);
  if (location.pathname === "/") {
    currentPage = "home";
  }

  return (
    <>
      <div className="flex justify-center items-center w-full bg-[#282939] overflow-x-hidden">
        <div className="max-w-[1440px] w-full bg-[#282939] flex items-center flex-col ">
          {currentPage ? (
            <DarkHeader page={currentPage} />
          ) : (
            <DarkHeader page="default" />
          )}
          <ServerCreds.Provider value={{ server }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/tenants" element={<Tenant />} />
              <Route path="/properties" element={<Property />} />
              <Route
                path="/property-1"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"property_1_hero.webp"}
                    addressHero={"12, Grove Road, Telford"}
                    para_1={
                      "12, Grove Road in Telford is a semi-detached home located in a quiet and private area close to the Wrekin retail park and Telford town center. The property is conveniently situated near major transportation links, including the M54 motorway. "
                    }
                    para_2={
                      "The house features an entrance hall, guest cloakroom, kitchen, dining room, living room, and a conservatory on the ground floor. Upstairs, there are three bedrooms and a family bathroom. The exterior includes a private driveway with parking for multiple vehicles, a low-maintenance landscaped garden, a brick-built single garage, and an outdoor shed."
                    }
                    p_img_1={"./Properties/p_1_g_PC_1.webp"}
                    p_img_2={"./Properties/p_1_g_PC_2.webp"}
                    p_img_3={"./Properties/p_1_g_PC_3.webp"}
                    p_img_4={"./Properties/p_1_g_PC_4.webp"}
                    p_img_5={"./Properties/p_1_g_PC_5.webp"}
                    p_img_6={"./Properties/p_1_g_PC_6.webp"}
                    p_img_7={"./Properties/p_1_g_PC_7.webp"}
                    property_airbnb={"https://www.airbnb.com/slink/3MmLBB6e"}
                  />
                }
              />
              <Route
                path="/property-2"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"property_2_hero.webp"}
                    addressHero={"46, Dunshealth, Telford"}
                    para_1={
                      "46 Dunsheath, Telford, is a semi-detached house situated in the TF3 2BX postcode area.  It is located in a residential area with various amenities nearby, including schools, parks, and shopping facilities. "
                    }
                    para_2={
                      "The house is typical of the suburban homes in Telford, offering comfortable living spaces ideal for families or individuals looking for a quiet neighbourhood with convenient access to the town's services and transportation links​."
                    }
                    p_img_1={"./Properties/p_2_g_PC_1.webp"}
                    p_img_2={"./Properties/p_2_g_PC_2.webp"}
                    p_img_3={"./Properties/p_2_g_PC_3.webp"}
                    p_img_4={"./Properties/p_2_g_PC_4.webp"}
                    p_img_5={"./Properties/p_2_g_PC_5.webp"}
                    p_img_6={"./Properties/p_2_g_PC_6.webp"}
                    p_img_7={"./Properties/p_2_g_PC_7.webp"}
                  />
                }
              />
              <Route
                path="/property-3"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"property_3_hero.webp"}
                    addressHero={"55, Hadley Park, Telford"}
                    para_1={
                      "55 Hadley Park, Telford, is a residential address located in the Hadley area of Telford, a town in Shropshire, England. Hadley Park is known for being a mixed-use area with a blend of residential homes and local businesses."
                    }
                    para_2={
                      `Step into the newly renovated kitchen at 55 Hadley Park Road, where modern functionality meets sleek design. This transformation enhances the heart of the home, making it perfect for cooking, entertaining, and everyday family life.
                      
The staircase at 55 Hadley Park Road has been transformed into a stunning feature that seamlessly connects the home's design while adding elegance and character to the entryway.
It has been painted in a soft, neutral tone that complements the overall decor of the home. This colour choice not only brings sophistication but also ties the stairwell harmoniously with both upper and lower level.
`
                    }
                    p_img_1={"./Properties/p_3_g_PC_1.webp"}
                    p_img_2={"./Properties/p_3_g_PC_2.webp"}
                    p_img_3={"./Properties/p_3_g_PC_3.webp"}
                    p_img_4={"./Properties/p_3_g_PC_4.webp"}
                    p_img_5={"./Properties/p_3_g_PC_5.webp"}
                    p_img_6={"./Properties/p_3_g_PC_6.webp"}
                    p_img_7={"./Properties/p_3_g_PC_7.webp"}
                  />
                }
              />
            </Routes>
          </ServerCreds.Provider>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
