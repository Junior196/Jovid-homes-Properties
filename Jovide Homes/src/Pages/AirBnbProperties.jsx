import Divider from "../Components/Divider";
import SinglePropertyGalleryItem from "../Components/Properties/SInglePropertyGallerItem";

export default function AirBnbProperties() {
  return (
    <>
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[75vh] xl:h-screen">
        <img
          loading="lazy"
          src="./airbnb/air-bnb-hero.jpg"
          className="absolute top-0 right-0 w-4/5 sm:w-[92%] h-full z-40 object-cover"
          alt="Air BnB Properties Banner"
        />
        <div className="absolute inset-0 flex justify-center items-center pl-5 z-40">
          <h1 className="pt_serif text-white font-bold text-2xl sm:text-4xl">
            Air BnB Properties
          </h1>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <SinglePropertyGalleryItem
          img="./airbnb/air-bnb-1.webp"
          address="Overdale, Telford"
          button_link="/overdale"
        />
        <SinglePropertyGalleryItem
          img="./airbnb/air-bnb-2.webp"
          address="Parkview, Telford"
          button_link="/park-view"
        />
      </div>
    </>
  );
}
