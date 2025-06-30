
import SingleBoxService from "../Components/OurServices/SingleBoxService";
import Divider from "../Components/Divider";
import Service from "../Components/ServiceSection/Service";

function Services() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <div className="flex items-stretch mt-16 md:mt-32 w-full max-w-7xl px-4 justify-between">
        <div className="w-2/5 pr-4">
          <h2 className="text-white font-bold font-serif hidden lg:block text-4xl lg:text-5xl xl:text-6xl leading-tight">
            Discover Your Dream Home
            <br />
            With Our Services.......
          </h2>
          <h2 className="text-white font-bold font-serif lg:hidden block text-xl sm:text-2xl md:text-3xl leading-tight">
            Discover Your Dream Home With Our Services.......
          </h2>
        </div>

        {/* Divider Line */}
        <div className="w-px bg-amber-600 mx-4"></div>

        <div className="w-1/2 pl-4">
          <p className="text-white text-xs sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            All our properties are fully licensed by Telford and Wrekin council
            and meet or exceed all the statutory requirement for houses in
            multiple occupation (HMOs). Wherever possible, we aim to resolve any
            maintenance issue reported to us within 24 hours and we regularly
            inspect our properties to ensure that they are safe and secure.
          </p>
          <p className="text-white text-xs sm:text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed">
            All of our properties include:
          </p>
          <ul className="text-white text-xs sm:text-lg md:text-xl lg:text-2xl list-disc pl-6 mt-2 space-y-1">
            <li>Free unlimited broadband.</li>
            <li>Gas, electric and council tax bills included in the rent.</li>
            <li>Regular property checks.</li>
          </ul>
        </div>
      </div>

      {/* Two Images Section with Overlap Effect */}
      <div className="bg-gray-300 relative w-full flex flex-col items-center justify-center">
        {/* Dark background for top half */}
        <div className="w-full bg-gray-800 h-1/2 absolute top-0 z-10"></div>

        {/* Images Container */}
        <div className="h-48 sm:h-72 md:h-80 lg:h-96 xl:h-[32rem] items-center z-20 w-full max-w-7xl px-4 justify-between flex gap-4">
          <div className="w-1/2">
            <img
              loading="lazy"
              src="./Our_services/1.webp"
              alt="Service Image 1"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="w-1/2">
            <img
              loading="lazy"
              src="./Our_services/2.webp"
              alt="Service Image 2"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="bg-gray-300 w-full h-8 xl:h-16"></div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-300 w-full flex flex-col items-center justify-center">
        <div className="bg-gray-300 w-full max-w-7xl px-4 flex flex-col min-h-[60vh] lg:min-h-[90vh]">
          <div className="mb-8">
            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-left text-gray-800">
              Why Choose Us?
            </h2>
          </div>

          <div className="flex lg:flex-row flex-col items-stretch justify-between flex-1 gap-6 lg:gap-4 py-4 lg:py-0">
            <SingleBoxService
              icon="./Our_services/light_bulb.svg"
              title="Expertise"
              description="With years of experience in property ownership and management, we bring a wealth of knowledge to every project."
            />
            <SingleBoxService
              icon="./Our_services/hand_shake.svg"
              title="Client-Centric Focus"
              description="We prioritise the needs of our tenants and stakeholders, ensuring clear communication and proactive problem-solving."
            />
            <SingleBoxService
              icon="./Our_services/certified.svg"
              title="Sustainability"
              description="Our approach integrates modern solutions and sustainable practices, promoting energy efficiency and long-term value for the properties we manage."
            />
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="bg-gray-300 w-full h-8 sm:h-20"></div>

      <Divider />
      <Service />
    </div>
  );
}

export default Services;
