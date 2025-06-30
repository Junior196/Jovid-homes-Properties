import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

function DarkHeader({ page }) {
  const [currentPage, setCurrentPage] = useState(null);
  const [iswhite, setIsWhite] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] =
    useState(false);
  const [isMobilePropertiesOpen, setIsMobilePropertiesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const showMenu = () => setIsShowMenu((prev) => !prev);

  const togglePropertiesDropdown = () =>
    setIsPropertiesDropdownOpen((prev) => !prev);

  const toggleMobileProperties = () =>
    setIsMobilePropertiesOpen((prev) => !prev);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPropertiesDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsShowMenu(false);
        setIsMobilePropertiesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setCurrentPage(page);
    setIsWhite(page === "home" || page === "services");
  }, [page]);

  useEffect(() => {
    setIsShowMenu(false);
    setIsPropertiesDropdownOpen(false);
    setIsMobilePropertiesOpen(false);
  }, [location]);

  const navLinkClass = (isActive) => `
    relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ease-in-out
    hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 rounded-md
    ${
      isActive
        ? "text-secondary after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-secondary after:rounded-full"
        : "text-white hover:text-secondary"
    }
  `;

  const mobileNavLinkClass = (isActive) => `
    flex items-center space-x-3 w-full px-4 py-3 text-left text-base font-medium transition-all duration-200
    hover:bg-white hover:bg-opacity-10 hover:text-secondary focus:outline-none focus:bg-white focus:bg-opacity-10 rounded-lg
    ${
      isActive
        ? "bg-white bg-opacity-20 text-secondary border-l-4 border-secondary"
        : "text-white"
    }
  `;

  return (
    <>
      {/* Desktop Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50 hidden md:flex justify-center w-full bg-primary bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block group">
                <img
                  loading="lazy"
                  src="./logoPNG.png"
                  alt="Jovid Homes"
                  className="h-16 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
                />
              </Link>
            </div>

            {/* Navigation */}
            <div
              className={`
              flex items-center space-x-1 px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm
              ${
                ["tenants", "properties", "about", "contact"].includes(page)
                  ? "bg-primary bg-opacity-70 shadow-xl border border-white border-opacity-10"
                  : "bg-transparent"
              }
            `}
            >
              <nav className="flex items-center space-x-2">
                {/* Properties Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={togglePropertiesDropdown}
                    className={`
                      flex items-center space-x-2 px-4 py-2 text-sm font-medium tracking-wide
                      transition-all duration-300 ease-in-out rounded-lg group
                      hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-secondary
                      ${
                        currentPage === "properties"
                          ? "text-secondary bg-white bg-opacity-10"
                          : "text-white hover:text-secondary"
                      }
                    `}
                  >
                    <span>LIST OF PROPERTIES</span>
                    <ChevronDown
                      className={`
                      w-4 h-4 transition-all duration-300 ease-in-out
                      ${
                        isPropertiesDropdownOpen
                          ? "rotate-180 text-secondary"
                          : "rotate-0 group-hover:text-secondary"
                      }
                    `}
                    />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  <div
                    className={`
                    absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100
                    transition-all duration-300 ease-in-out origin-top-left z-50 overflow-hidden
                    ${
                      isPropertiesDropdownOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
                    }
                  `}
                  >
                    <div className="py-3">
                      <Link
                        to="/our-properties"
                        className="flex items-center space-x-3 px-5 py-3 text-sm text-primary hover:bg-light_primary hover:text-secondary transition-all duration-200 group"
                      >
                        <MapPin className="w-4 h-4 text-gray-400 group-hover:text-secondary transition-colors duration-200" />
                        <span>Our Properties</span>
                      </Link>
                      <Link
                        to="/air-bnb"
                        className="flex items-center space-x-3 px-5 py-3 text-sm text-primary hover:bg-light_primary hover:text-secondary transition-all duration-200 group"
                      >
                        <MapPin className="w-4 h-4 text-gray-400 group-hover:text-secondary transition-colors duration-200" />
                        <span>AirBnb Properties</span>
                      </Link>
                      <Link
                        to="/hmo-property"
                        className="flex items-center space-x-3 px-5 py-3 text-sm text-primary hover:bg-light_primary hover:text-secondary transition-all duration-200 group"
                      >
                        <MapPin className="w-4 h-4 text-gray-400 group-hover:text-secondary transition-colors duration-200" />
                        <span>HMO Properties</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Other Navigation Links */}
                <Link
                  to="/tenants"
                  className={navLinkClass(currentPage === "tenants")}
                >
                  TENANTS
                </Link>
                <Link
                  to="/services"
                  className={navLinkClass(currentPage === "services")}
                >
                  OUR SERVICES
                </Link>
                <Link
                  to="/about"
                  className={navLinkClass(currentPage === "about")}
                >
                  ABOUT US
                </Link>
              </nav>
            </div>

            {/* Contact Button */}
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className={`
                  inline-flex items-center space-x-2 px-6 py-3 text-sm font-bold tracking-wide rounded-xl
                  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary
                  ${
                    iswhite
                      ? "bg-white text-primary hover:bg-secondary hover:text-white shadow-lg"
                      : "bg-primary text-white hover:bg-white hover:text-primary shadow-lg"
                  }
                `}
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Container */}
      <div
        className="md:hidden absolute top-0 left-0 right-0 z-50"
        ref={mobileMenuRef}
      >
        {/* Mobile Navbar Header */}
        <div className="bg-primary bg-opacity-90 backdrop-blur-sm shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <img
                loading="lazy"
                src="./logoPNG.png"
                alt="Jovid Homes"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={showMenu}
              className="p-2 text-white hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10"
              aria-label="Toggle menu"
            >
              {isShowMenu ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Collapse (Opens under navbar like Bootstrap) */}
        <div
          className={`
          bg-primary shadow-2xl border-t border-secondary border-opacity-20
          transition-all duration-300 ease-in-out overflow-hidden
          ${
            isShowMenu
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }
        `}
        >
          {/* Mobile Menu Content */}
          <nav className="px-4 py-6 space-y-2">
            {/* Properties Dropdown */}
            <div className="border-b border-white border-opacity-10 pb-4 mb-4">
              <button
                onClick={toggleMobileProperties}
                className={`
                  flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium rounded-lg
                  transition-all duration-200 hover:bg-white hover:bg-opacity-10 focus:outline-none focus:bg-white focus:bg-opacity-10
                  ${
                    currentPage === "properties"
                      ? "text-secondary bg-white bg-opacity-20"
                      : "text-white"
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>PROPERTIES</span>
                </div>
                <ChevronDown
                  className={`
                  w-5 h-5 transition-all duration-300 ease-in-out
                  ${
                    isMobilePropertiesOpen
                      ? "rotate-180 text-secondary"
                      : "rotate-0"
                  }
                `}
                />
              </button>

              {/* Mobile Properties Submenu */}
              <div
                className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${
                  isMobilePropertiesOpen
                    ? "max-h-52 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }
              `}
              >
                <div className="bg-white bg-opacity-5 rounded-lg p-2 space-y-1">
                  <Link
                    to="/our-properties"
                    className="flex items-center space-x-3 px-6 py-3 text-sm text-white hover:bg-white hover:bg-opacity-10 hover:text-secondary transition-all duration-200 rounded-lg group"
                  >
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:text-secondary transition-colors duration-200" />
                    <span>Our Properties</span>
                  </Link>
                  <Link
                    to="/air-bnb"
                    className="flex items-center space-x-3 px-6 py-3 text-sm text-white hover:bg-white hover:bg-opacity-10 hover:text-secondary transition-all duration-200 rounded-lg group"
                  >
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:text-secondary transition-colors duration-200" />
                    <span>AirBnb Properties</span>
                  </Link>
                  <Link
                    to="/hmo-property"
                    className="flex items-center space-x-3 px-6 py-3 text-sm text-white hover:bg-white hover:bg-opacity-10 hover:text-secondary transition-all duration-200 rounded-lg group"
                  >
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:text-secondary transition-colors duration-200" />
                    <span>HMO Properties</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Mobile Navigation Links */}
            <Link
              to="/tenants"
              className={mobileNavLinkClass(currentPage === "tenants")}
            >
              <MapPin className="w-5 h-5 text-gray-300" />
              <span>TENANTS</span>
            </Link>
            <Link
              to="/services"
              className={mobileNavLinkClass(currentPage === "services")}
            >
              <Mail className="w-5 h-5 text-gray-300" />
              <span>OUR SERVICES</span>
            </Link>
            <Link
              to="/about"
              className={mobileNavLinkClass(currentPage === "about")}
            >
              <Phone className="w-5 h-5 text-gray-300" />
              <span>ABOUT US</span>
            </Link>
            <Link
              to="/contact"
              className={mobileNavLinkClass(currentPage === "contact")}
            >
              <Phone className="w-5 h-5 text-gray-300" />
              <span>CONTACT US</span>
            </Link>
          </nav>
          {/* Mobile Menu Footer */}
          <div className="px-4 pb-6 pt-2 border-t border-white border-opacity-10">
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-center text-sm font-bold text-white bg-secondary rounded-xl hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-200 transform hover:scale-105 shadow-lg group"
            >
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>GET IN TOUCH</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkHeader;