import Divider from "./Divider";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

function Footer() {
  return (
    <footer className="pt_sans bg-primary">
      {/* Desktop Footer */}
      <div className="relative w-full hidden lg:block">
        <div className="flex justify-center items-center">
          {" "}
          <Divider />
        </div>
        <div className="container mx-auto px-6 pb-6">
          <div className="grid grid-cols-5 gap-8 mb-8">
            {/* Logo Section */}
            <div className="flex flex-col">
              <Link to="/" className="group mb-4">
                <img
                  loading="lazy"
                  src="./logoPNG.png"
                  alt="Jovid Homes"
                  className="w-40 h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner in premium property management and real
                estate solutions.
              </p>
            </div>

            {/* Company Section */}
            <div className="flex flex-col">
              <h3 className="pt_serif text-xl font-bold text-white mb-6 relative">
                Company
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/properties"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Properties
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Our Services
                  </span>
                </Link>
                <Link
                  to="/tenants"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Tenants
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    About Us
                  </span>
                </Link>
              </nav>
            </div>

            {/* List of Properties Section */}
            <div className="flex flex-col">
              <h3 className="pt_serif text-xl font-bold text-white mb-6 relative">
                Properties
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/our-properties"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Our Properties
                  </span>
                </Link>
                <Link
                  to="/air-bnb"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    AirBnb Properties
                  </span>
                </Link>
                <Link
                  to="/hmo-property"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    HMO Properties
                  </span>
                </Link>
              </nav>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col">
              <h3 className="pt_serif text-xl font-bold text-white mb-6 relative">
                Contact
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:01952863235"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <Phone className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform duration-200" />
                  <span>01952 863 235</span>
                </a>
                <a
                  href="mailto:info@jovidhomes.co.uk"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <Mail className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform duration-200" />
                  <span>info@jovidhomes.co.uk</span>
                </a>
                <div className="flex items-start gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Telford, Shropshire, United Kingdom
                  </span>
                </div>
              </div>
            </div>

            {/* Social Section */}
            <div className="flex flex-col">
              <h3 className="pt_serif text-xl font-bold text-white mb-6 relative">
                Connect
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/447421818373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <img
                    loading="lazy"
                    src="./Footer/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
                <a
                  href="https://www.airbnb.co.uk/users/show/88982689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <img
                    loading="lazy"
                    src="./Footer/airbnb.svg"
                    alt="Airbnb"
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span>Airbnb</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Jovid Homes. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Website by</span>
                <a
                  href="https://search.app/bAzJFAcqEuQPGVW67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-200 font-medium"
                >
                  EPC Construction
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="relative w-full lg:hidden bg-primary">
        <div className="flex justify-center items-center">
          {" "}
          <Divider />
        </div>
        <div className="px-6 pb-6">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Link to="/" className="group">
              <img
                loading="lazy"
                src="./logoPNG.png"
                alt="Jovid Homes"
                className="w-32 h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
              Your trusted partner in premium property management and real
              estate solutions.
            </p>
          </div>

          <div className="space-y-8">
            {/* Company Section */}
            <div className="text-center">
              <h3 className="pt_serif text-lg font-bold text-white mb-4 relative inline-block">
                Company
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                <Link
                  to="/properties"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm"
                >
                  Properties
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm"
                >
                  Our Services
                </Link>
                <Link
                  to="/tenants"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm"
                >
                  Tenants
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm"
                >
                  About Us
                </Link>
              </nav>
            </div>

            {/* Properties Section */}
            <div className="text-center">
              <h3 className="pt_serif text-lg font-bold text-white mb-4 relative inline-block">
                Properties
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                <Link
                  to="/our-properties"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm"
                >
                  Our Properties
                </Link>
                <Link
                  to="/air-bnb"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm"
                >
                  AirBnb Properties
                </Link>
                <Link
                  to="/hmo-property"
                  className="text-gray-300 hover:text-secondary transition-all duration-200 text-sm"
                >
                  HMO Properties
                </Link>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="pt_serif text-lg font-bold text-white mb-4 relative inline-block">
                Contact
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="tel:01952863235"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <Phone className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform duration-200" />
                  <span>01952 863 235</span>
                </a>
                <a
                  href="mailto:info@jovidhomes.co.uk"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <Mail className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform duration-200" />
                  <span>info@jovidhomes.co.uk</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-center">Telford, Shropshire, UK</span>
                </div>
              </div>
            </div>

            {/* Social Section */}
            <div className="text-center">
              <h3 className="pt_serif text-lg font-bold text-white mb-4 relative inline-block">
                Connect
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-secondary"></span>
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://wa.me/447421818373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <img
                    loading="lazy"
                    src="./Footer/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.airbnb.co.uk/users/show/88982689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-200 text-sm group"
                >
                  <img
                    loading="lazy"
                    src="./Footer/airbnb.svg"
                    alt="Airbnb"
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span>Airbnb</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <div className="text-center space-y-3">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} Jovid Homes. All rights reserved.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs">
                <span className="text-gray-400">Website by</span>
                <a
                  href="https://search.app/bAzJFAcqEuQPGVW67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-200 font-medium"
                >
                  EPC Construction
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
