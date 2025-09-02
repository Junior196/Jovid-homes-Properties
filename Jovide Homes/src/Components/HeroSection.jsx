import { useState, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Optimized data structure for hero slides
const heroSlides = [
  {
    id: 1,
    bg: "/Home_Slides/home-slide-1.webp",
    subtitle: "WELCOME TO JOVID HOMES",
    title: "Quality serviced accommodation in Telford area.",
    description: "Your Dream Home Starts Here...........",
    buttonText: "Learn More",
    buttonAction: "learn-more",
  },
  {
    id: 2,
    bg: "/Home_Slides/home-slide-2.webp",
    title: "The Grove, Telford",
    description: "Telford, United Kingdom",
    buttonText: "View Property",
    buttonAction: "view-property",
  },
  {
    id: 3,
    bg: "/Home_Slides/home-slide-3.webp",
    title: "46, Dunshealth, Telford",
    description: "Telford, United Kingdom",
    buttonText: "View Property",
    buttonAction: "view-property",
  },
  {
    id: 4,
    bg: "./Home_Slides/home-slide-4.webp",
    title: "55, Hadley Park, Telford",
    description: "Telford, United Kingdom",
    buttonText: "View Property",
    buttonAction: "view-property",
  },
  {
    id: 5,
    bg: "./Home_Slides/home-slide-5.webp",
    title: "Find Your Perfect Place. We'll Guide You There.",
    description: "Let's help you out........",
    buttonText: "View Property",
    buttonAction: "view-property",
  },
  {
    id: 6,
    bg: "./Home_Slides/home-slide-6.webp",
    title: "Experience the Difference. Experience Jovid Homes.",
    description: "Your real estate journey starts now......",
    buttonText: "View Property",
    buttonAction: "view-property",
  },
  {
    id: 7,
    bg: "./Home_Slides/home-slide-7.webp",
    title: "More Than Just Houses, We Build Homes.",
    description: "Building futures, one home at a time........",
    buttonText: "View Property",
    buttonAction: "view-property",
  },
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-90 hover:bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-90 hover:bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
  </button>
);

// Custom Dots Component
const CustomDots = ({ dots }) => (
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
    <ul className="flex space-x-3">{dots}</ul>
  </div>
);

// Decorative Divider Component
const DecorativeDivider = () => (
  <div className="w-full h-12 flex justify-center items-center relative my-6">
    <div className="w-36 h-px bg-white bg-opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    <div className="w-5 h-5 bg-secondary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg animate-pulse" />
  </div>
);

// Slide Content Component
const SlideContent = ({ slide }) => {
  const handleButtonClick = () => {
    // Handle button actions based on slide.buttonAction
    console.log(`Action: ${slide.buttonAction} for slide ${slide.id}`);

    // Add your navigation logic here
    if (slide.buttonAction === "learn-more") {
      // Navigate to about page or scroll to services
      window.location.href = "/about";
    } else if (slide.buttonAction === "view-property") {
      // Navigate to properties page
      window.location.href = "/our-properties";
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 lg:px-16 z-20">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        {/* Welcome Bar for first slide */}
        {slide.subtitle && (
          <div className="w-32 h-1 bg-secondary mx-auto mb-6 animate-slide-in-left" />
        )}

        {/* Subtitle */}
        {slide.subtitle && (
          <p className="text-sm md:text-lg font-medium mb-4 tracking-wide opacity-90 animate-fade-in-up animation-delay-200">
            {slide.subtitle}
          </p>
        )}

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up animation-delay-400 drop-shadow-lg">
          {slide.title}
        </h1>

        {/* Decorative Divider */}
        <div className="animate-fade-in animation-delay-600">
          <DecorativeDivider />
        </div>

        {/* Description */}
        <p className="text-base md:text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in-up animation-delay-800 drop-shadow-md">
          {slide.description}
        </p>

        {/* CTA Button */}
        <button
          onClick={handleButtonClick}
          className="inline-flex items-center space-x-2 bg-secondary hover:bg-primary text-white font-semibold rounded-md px-8 py-4 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up animation-delay-1000 group transform"
        >
          <span>{slide.buttonText}</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// Loading Component
const LoadingSlide = () => (
  <div className="h-screen bg-primary flex items-center justify-center">
    <div className="text-center text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-secondary mx-auto mb-4"></div>
      <p className="text-lg">Loading...</p>
    </div>
  </div>
);

// Main Hero Section Component
export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    const imagePromises = heroSlides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded((prev) => prev + 1);
          resolve();
        };
        img.onerror = reject;
        img.src = slide.bg;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoading(false); // Show content even if some images fail
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "slick-dots custom-dots",
    customPaging: (i) => (
      <button className="w-3 h-3 bg-white bg-opacity-50 rounded-full hover:bg-white hover:bg-opacity-100 transition-all duration-300 transform hover:scale-125">
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  if (isLoading) {
    return <LoadingSlide />;
  }

  return (
    <>
      <section className="relative overflow-hidden w-full">
        <div className="hero-slider-container">
          <Slider {...sliderSettings}>
            {heroSlides.map((slide) => (
              <div key={slide.id} className="relative outline-none">
                <div
                  className="h-screen bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: `url(${slide.bg})`,
                    backgroundAttachment: "fixed", // Parallax effect
                  }}
                >
                  {/* Enhanced Overlay with Gradient */}
                  <div className="absolute inset-0 bg-black bg-opacity-20" />

                  {/* Additional overlay for better text readability */}
                  <div className="absolute inset-0 bg-primary bg-opacity-20" />

                  {/* Content */}
                  <SlideContent slide={slide} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-slider-container {
          height: 100vh;
          width: 100%;
        }

        .hero-slider-container .slick-slider {
          height: 100vh;
        }

        .hero-slider-container .slick-list {
          height: 100vh;
        }

        .hero-slider-container .slick-track {
          height: 100vh;
        }

        .hero-slider-container .slick-slide {
          height: 100vh;
        }

        .hero-slider-container .slick-slide > div {
          height: 100vh;
        }

        .custom-dots {
          bottom: 24px !important;
          z-index: 30;
        }

        .custom-dots li {
          margin: 0 6px;
        }

        .custom-dots li button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .custom-dots li.slick-active button {
          background: rgba(199, 171, 124, 1);
          border-color: white;
          transform: scale(1.2);
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          animation-fill-mode: both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Ensure proper stacking */
        .slick-slider {
          position: relative;
          z-index: 1;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hero-slider-container {
            height: 100vh;
          }

          .hero-slider-container .slick-slider,
          .hero-slider-container .slick-list,
          .hero-slider-container .slick-track,
          .hero-slider-container .slick-slide,
          .hero-slider-container .slick-slide > div {
            height: 100vh;
          }
        }
      `}</style>
    </>
  );
}
