import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

const ImageGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index) => setCurrentIndex(index),
    accessibility: true, 
  };

  return (
    <div className="space-y-4 max-w-[600px] mx-auto sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px]">
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, i) => (
          <div
            key={i}
            className="relative h-[250px] sm:h-[280px] md:h-[300px] lg:h-[500px]"
          >
            <img
              src={src}
              alt={`Product image ${i + 1}`}
              className="w-full h-full object-contain mx-auto rounded-2xl"
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnails */}
      <div className="hidden lg:grid mt-2 w-full max-w-[800px] mx-auto gap-2 grid-cols-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`rounded focus:outline-none focus:ring-2 focus:ring-[#d98a4a] ${
              i === currentIndex
                ? "ring-2 ring-[#d98a4a]"
                : "border border-transparent hover:border-gray-300"
            }`}
            aria-label={`Go to image ${i + 1}`}
            aria-pressed={i === currentIndex}
          >
            <img
              src={src}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-[150px] object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
    onClick={onClick}
    aria-label="Next image"
  >
    <img src={rightArrow} alt="Next" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
    onClick={onClick}
    aria-label="Previous image"
  >
    <img src={leftArrow} alt="Previous" />
  </button>
);

export default ImageGallery;