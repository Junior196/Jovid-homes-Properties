
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="lg:col-span-1 space-y-8">
      <div className="text-center lg:text-left">
        <h2 className="font-serif text-white font-bold text-3xl md:text-4xl mb-4">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-secondary rounded-full mx-auto lg:mx-0"></div>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
              <a 
                href="tel:01952863235"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                01952 863 235
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
              <a 
                href="mailto:info@jovidhomes.co.uk"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                info@jovidhomes.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-300">
                Telford, Shropshire<br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
