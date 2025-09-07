import { useEffect, createContext } from "react";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import DarkHeader from "./Components/Headers/DarkHeader";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Tenant from "./Pages/Tenant";
import Property from "./Pages/Property";
import PropertyTemplate from "./Pages/PropertyTemplate";
import AirBnbProperties from "./Pages/AirBnbProperties";
import HMOProperties from "./Pages/HMOProperties";

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
      <div className="flex justify-center items-center w-full bg-primary overflow-x-hidden">
        <div className="w-full bg-primary flex items-center flex-col relative">
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
              <Route path="/our-properties" element={<Property />} />
              <Route path="/air-bnb" element={<AirBnbProperties />} />
              <Route path="/hmo-property" element={<HMOProperties />} />
              <Route
                path="/grove-road"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"property_1_hero.webp"}
                    addressHero={"The Grove, Telford"}
                    para_1={
                      "The Grove in Telford is a semi-detached home located in a quiet and private area close to the Wrekin retail park and Telford town center. The property is conveniently situated near major transportation links, including the M54 motorway. "
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
                path="/dunshealth"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"property_2_hero.webp"}
                    addressHero={" Dunshealth, Telford"}
                    para_1={
                      "Dunsheath, Telford, is a semi-detached house situated in the TF3 2BX postcode area.  It is located in a residential area with various amenities nearby, including schools, parks, and shopping facilities. "
                    }
                    para_2={
                      "The house is typical of the suburban homes in Telford, offering comfortable living spaces ideal for families or individuals looking for a quiet neighbourhood with convenient access to the town's services and transportation links​."
                    }
                    p_img_1={"./dunshealth-gallery-1.webp"}
                    p_img_2={"./dunshealth-gallery-2.webp"}
                    p_img_3={"./dunshealth-gallery-3.webp"}
                    p_img_4={"./dunshealth-gallery-4.webp"}
                    p_img_5={"./dunshealth-gallery-5.webp"}
                    p_img_6={"./dunshealth-gallery-6.webp"}
                    p_img_7={"./dunshealth-gallery-7.webp"}
                  />
                }
              />
              <Route
                path="/hadley-park"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"property_3_hero.webp"}
                    addressHero={" Hadley Park, Telford"}
                    para_1={
                      "Hadley Park, Telford, is a residential address located in the Hadley area of Telford, a town in Shropshire, England. Hadley Park is known for being a mixed-use area with a blend of residential homes and local businesses."
                    }
                    para_2={`Step into the newly renovated kitchen at Hadley Park Road, where modern functionality meets sleek design. This transformation enhances the heart of the home, making it perfect for cooking, entertaining, and everyday family life.
                      
The staircase at Hadley Park Road has been transformed into a stunning feature that seamlessly connects the home's design while adding elegance and character to the entryway.
It has been painted in a soft, neutral tone that complements the overall decor of the home. This colour choice not only brings sophistication but also ties the stairwell harmoniously with both upper and lower level.
`}
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
              <Route
                path="/overdale"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"overdale-hero.webp"}
                    addressHero={"Overdale, Telford"}
                    para_1={
                      "Overdale, Telford, is a welcoming and modern Airbnb accommodation, perfect for short or long stays. The property boasts a bright, stylish interior with all the amenities needed for a comfortable visit. Guests can enjoy a fully equipped kitchen, a relaxing living area with a smart TV, and high-speed Wi-Fi. The bedrooms are cosy and thoughtfully designed to ensure a restful night's sleep."
                    }
                    para_2={`Located in a quiet residential area, the property provides convenient access to Telford's top attractions, including Ironbridge Gorge, Telford Town Park, and the shopping and dining options at Telford Centre. Free parking is available on-site, and the home is ideal for families, couples, or business travellers looking for a hassle-free and comfortable stay.
`}
                    p_img_1={"./overdale/overdale-gallery-1.webp"}
                    p_img_2={"./overdale/overdale-gallery-2.webp"}
                    p_img_3={"./overdale/overdale-gallery-3.webp"}
                    p_img_4={"./overdale/overdale-gallery-4.webp"}
                    p_img_5={"./overdale/overdale-gallery-5.webp"}
                    p_img_6={"./overdale/overdale-gallery-6.webp"}
                    p_img_7={"./overdale/overdale-gallery-7.webp"}
                  />
                }
              />
              <Route
                path="/park-view"
                element={
                  <PropertyTemplate
                    propertyBannerRoute={"park-view-hero.webp"}
                    addressHero={"Park View, Telford"}
                    para_1={
                      `Welcome to ParkView, Telford—your serene sanctuary nestled in the heart of Shropshire! Our inviting 3-bedroom home comfortably sleeps up to six guests, making it the perfect haven for families, friends, business travelers, or contractors seeking a restful retreat.
                      
                      Immerse yourself in a professionally cleaned space, enjoy superfast free Wi-Fi, and make the most of our fully equipped kitchen for that genuine home-away-from-home experience. Whether you're planning a staycation, a long weekend, or an important work trip, we offer the comfort and convenience that transform stays into unforgettable memories.`
                    }
                    para_2={`The harmonious blend of comfort and modern amenities ensures that every moment of your stay caters to your needs.

At ParkView, you're not just booking a place to stay; you're embarking on a holistic experience that rejuvenates and inspires. Let us be the backdrop to your next incredible journey, where every detail is crafted to exceed your expectations.
`}
                    p_img_1={"./park-view/park-view-gallery-1.webp"}
                    p_img_2={"./park-view/park-view-gallery-2.webp"}
                    p_img_3={"./park-view/park-view-gallery-3.webp"}
                    p_img_4={"./park-view/park-view-gallery-4.webp"}
                    p_img_5={"./park-view/park-view-gallery-5.webp"}
                    p_img_6={"./park-view/park-view-gallery-6.webp"}
                    p_img_7={"./park-view/park-view-gallery-7.webp"}
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
