import { Helmet } from "react-helmet";

export default function PropertyPageGallery({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
}) {
  // Centralized img attributes for better optimization and CLS avoidance:
  const aboveTheFoldAttrs = {
    loading: "eager",
    decoding: "async",
    fetchPriority: "high",
  };
  const deferredAttrs = {
    loading: "lazy",
    decoding: "async",
  };

  return (
    <>
      <Helmet>
        {/* Preload the most important images */}
        <link rel="preload" href={image1} as="image" />
        <link rel="preload" href={image2} as="image" />
        <link rel="preload" href={image3} as="image" />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4 md:space-y-6">
          {/* Top row - Hero images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image1}
                alt="Property image 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
                {...aboveTheFoldAttrs}
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image2}
                alt="Property image 2"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
                {...aboveTheFoldAttrs}
              />
            </div>
          </div>

          {/* Middle row - Three thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <img
                src={image3}
                alt="Property image 3"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 33vw, 50vw"
                {...aboveTheFoldAttrs}
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <img
                src={image4}
                alt="Property image 4"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 33vw, 50vw"
                {...deferredAttrs}
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md ">
              <img
                src={image5}
                alt="Property image 5"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
                {...deferredAttrs}
              />
            </div>
          </div>

          {/* Bottom row - Two larger images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image6}
                alt="Property image 6"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
                {...deferredAttrs}
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image7}
                alt="Property image 7"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
                {...deferredAttrs}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
