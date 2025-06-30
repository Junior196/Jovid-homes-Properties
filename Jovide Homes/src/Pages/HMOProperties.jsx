import Divider from '../Components/Divider';
import SinglePropertyGalleryItem from '../Components/Properties/SInglePropertyGallerItem';

export default function HMOProperties() {
  return (
    <>
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[75vh] xl:h-screen">
        <img
          loading="lazy"
          src="./hmo/hmo-property.png"
          className="absolute top-0 right-0 w-4/5 sm:w-[92%] h-full z-40 object-cover"
          alt="HMO Properties Banner"
        />
        <div className="absolute inset-0 flex justify-center items-center pl-5 z-40">
          <h1 className="pt_serif text-white font-bold text-2xl sm:text-4xl">
            HMOs Properties
          </h1>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <SinglePropertyGalleryItem
          img="./hmo/home-slide-3.webp"
          address="46, Dunsheath, Telford"
          button_link="/dunshealth"
        />
        <SinglePropertyGalleryItem
          img="./hmo/home-slide-4.webp"
          address="55, Hadley Park, Telford"
          button_link="/hadley-park"
        />
      </div>
    </>
  );
}
