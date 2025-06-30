import React from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Desktop Footer */}
      <div className="pt_sans relative w-full bg-primary hidden md:flex justify-center flex-col items-center py-5">
        <Divider />
        <div className="flex justify-between items-start w-[90%] max-w-7xl mt-8 mb-8">
          {/* Logo Section */}
          <div className="w-1/5">
            <Link to="/">
              <img
                loading="lazy"
                src="./logoPNG.png"
                alt="Jovid Homes"
                className="w-40 h-auto"
              />
            </Link>
          </div>

          {/* Company Section */}
          <div className="w-1/5 flex flex-col">
            <h2 className="pt_serif text-2xl font-bold text-white mb-6">
              Company
            </h2>
            <nav className="flex flex-col gap-4 text-base text-white">
              <Link
                to="/properties"
                className="hover:text-gray-300 transition-colors"
              >
                Properties
              </Link>
              <Link
                to="/services"
                className="hover:text-gray-300 transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/tenants"
                className="hover:text-gray-300 transition-colors"
              >
                Tenant
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* List of Properties Section */}
          <div className="w-1/5 flex flex-col">
            <h2 className="pt_serif text-2xl font-bold text-white mb-6">
              List of Properties
            </h2>
            <nav className="flex flex-col gap-4 text-base text-white">
              <Link
                to="/our-properties"
                className="hover:text-gray-300 transition-colors"
              >
                Our Properties
              </Link>
              <Link
                to="/airbnb-properties"
                className="hover:text-gray-300 transition-colors"
              >
                Air BnB Properties
              </Link>
              <Link
                to="/hmo-properties"
                className="hover:text-gray-300 transition-colors"
              >
                HMO Properties
              </Link>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div className="w-1/5 flex flex-col">
            <h2 className="pt_serif text-2xl font-bold text-white mb-6">
              Contact Us
            </h2>
            <div className="flex flex-col gap-4 text-base text-white">
              <a
                href="tel:01952863235"
                className="flex items-center gap-3 hover:text-gray-300 transition-colors"
              >
                <img
                  loading="lazy"
                  src="./Footer/phone-call.svg"
                  alt="Phone"
                  className="w-[16px] h-[16px]"
                />
                <span>01952863235</span>
              </a>
              <a
                href="mailto:info@jovidhomes.co.uk"
                className="flex items-center gap-3 hover:text-gray-300 transition-colors"
              >
                <img
                  loading="lazy"
                  src="./Footer/mail.svg"
                  alt="Email"
                  className="w-[16px] h-[16px]"
                />
                <span>info@jovidhomes.co.uk</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="w-[15%] flex flex-col">
            <h2 className="pt_serif text-2xl font-bold text-white mb-6">
              Social
            </h2>
            <div className="flex flex-col gap-4 text-base text-white">
              <a
                href="https://wa.me/447421818373"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gray-300 transition-colors"
              >
                <img
                  loading="lazy"
                  src="./Footer/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
                <span>Whatsapp</span>
              </a>
              <a
                href="https://www.airbnb.co.uk/users/show/88982689"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gray-300 transition-colors"
              >
                <img
                  loading="lazy"
                  src="./Footer/airbnb.svg"
                  alt="Airbnb"
                  className="w-4 h-4"
                />
                <span>Airbnb</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-primary text-center py-4 px-2">
          <p className="text-xs sm:text-sm text-white">
            EPC offers comprehensive Construction Management services with a
            one-stop solution for clients seeking excellence in project
            execution. Whether you're embarking… Source:{" "}
            <a
              href="https://search.app/bAzJFAcqEuQPGVW67"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              EPC Construction
            </a>
          </p>
        </div>
        <Divider />
      </div>

      {/* Mobile Footer */}
      <div className="pt_sans relative w-full bg-primary md:hidden flex justify-center flex-col items-center py-8">
        <Divider />
        <div className="flex flex-col justify-center gap-8 w-[90%]">
          {/* Logo */}
          <div className="flex items-center justify-center w-full">
            <Link to="/">
              <img
                loading="lazy"
                src="./logoPNG.png"
                alt="Jovid Homes"
                className="w-32 h-auto"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            {/* Company Section */}
            <div className="flex flex-col w-full">
              <h2 className="pt_serif text-xl font-bold text-white mb-4">
                Company
              </h2>
              <nav className="flex flex-col gap-3 text-base text-white">
                <Link to="/properties" className="">
                  Properties
                </Link>
                <Link to="/services" className="">
                  Our Services
                </Link>
                <Link to="/tenants" className="">
                  Tenant
                </Link>
                <Link to="/about" className="">
                  About Us
                </Link>
              </nav>
            </div>

            {/* List of Properties Section */}
            <div className="flex flex-col w-full">
              <h2 className="pt_serif text-xl font-bold text-white mb-4">
                List of Properties
              </h2>
              <nav className="flex flex-col gap-3 text-base text-white">
                <Link to="/our-properties" className="">
                  Our Properties
                </Link>
                <Link to="/airbnb-properties" className="">
                  Air BnB Properties
                </Link>
                <Link to="/hmo-properties" className="">
                  HMO Properties
                </Link>
              </nav>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col w-full">
              <h2 className="pt_serif text-xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <div className="flex flex-col gap-3 text-base text-white">
                <a href="tel:01952863235" className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="./Footer/phone-call.svg"
                    alt="Phone"
                    className="w-[18px] h-[18px]"
                  />
                  <span>01952863235</span>
                </a>
                <a
                  href="mailto:info@jovidhomes.co.uk"
                  className="flex items-center gap-3"
                >
                  <img
                    loading="lazy"
                    src="./Footer/mail.svg"
                    alt="Email"
                    className="w-[18px] h-[18px]"
                  />
                  <span>info@jovidhomes.co.uk</span>
                </a>
              </div>
            </div>

            {/* Social Section */}
            <div className="flex flex-col w-full">
              <h2 className="pt_serif text-xl font-bold text-white mb-4">
                Social
              </h2>
              <div className="flex flex-col gap-3 text-base text-white">
                <a
                  href="https://wa.me/447421818373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <img
                    loading="lazy"
                    src="./Footer/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-[18px] h-[18px]"
                  />
                  <span>Whatsapp</span>
                </a>
                <a
                  href="https://www.airbnb.co.uk/users/show/88982689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <img
                    loading="lazy"
                    src="./Footer/airbnb.svg"
                    alt="Airbnb"
                    className="w-[18px] h-[18px]"
                  />
                  <span>Airbnb</span>
                </a>
              </div>
            </div>
            <div className="w-full bg-primary text-center py-4 px-2">
              <p className="text-xs sm:text-sm text-white">
                EPC offers comprehensive Construction Management services with a
                one-stop solution for clients seeking excellence in project
                execution. Whether you're embarking… Source:{" "}
                <a
                  href="https://search.app/bAzJFAcqEuQPGVW67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-300"
                >
                  EPC Construction
                </a>
              </p>
            </div>
          </div>
        </div>

        <Divider />
      </div>
    </>
  );
}

export default Footer;
