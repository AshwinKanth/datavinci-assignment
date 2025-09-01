import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import TooltipImage from "./TooltipImage";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import BundleCard from "./BundleCard";
import umfFrame from "../assets/umfFrame.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import rating from "../assets/rating.png";
import certifications1 from "../assets/certifications1.png";
import certifications2 from "../assets/certifications2.png";
import certifications3 from "../assets/certifications3.png";
import certifications4 from "../assets/certifications4.png";
import certifications5 from "../assets/certifications5.png";
import certifications6 from "../assets/certifications6.png";
import variant1 from "../assets/variant1.png";
import variant2 from "../assets/variant2.png";
import variant3 from "../assets/variant3.png";
import variant4 from "../assets/variant4.png";
import variant5 from "../assets/variant5.png";
import variant6 from "../assets/variant6.png";
import variant7 from "../assets/variant7.png";
import colourclub from "../assets/colourclub.png";
import afterpay from "../assets/afterpay.png";

const ProductPage = () => {
  const [selected, setSelected] = useState(24);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const certifications = [
    certifications1,
    certifications2,
    certifications3,
    certifications4,
    certifications5,
    certifications6,
  ];

  const variants = [
    { id: "125g", image: variant1 },
    { id: "250g", image: variant2 },
    { id: "250g+spoon", image: variant3 },
    { id: "500g", image: variant4 },
    { id: "500g+spoon", image: variant5 },
    { id: "2kg", image: variant6 },
    { id: "5kg", image: variant7 },
  ];

  const UMF_VALUES = [
    { label: "UMF™ 10+", value: 0, color: "#E87722" },
    { label: "UMF™ 15+", value: 5, color: "#E10600" },
    { label: "UMF™ 20+", value: 10, color: "#CE0F69" },
    { label: "UMF™ 24+", value: 15, color: "#830065" },
    { label: "UMF™ 26+", value: 20, color: "#0085CA" },
    { label: "UMF™ 28+", value: 25, color: "#3BAD4E" },
    { label: "UMF™ 30+", value: 30, color: "#203E96" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: Images */}
      <section className="space-y-4">
        <ImageGallery images={images} />
      </section>

      {/* Right: Details */}
      <section className="space-y-4 text-sm md:text-base">
        <div className="space-y-2 relative inline-block">
          <p className="font-normal text-lg md:text-3xl">Manuka Honey</p>
          <p className="font-normal text-2xl md:text-3xl">
            UMF <span className="font-semibold md:text-4xl">™ 24+</span>
          </p>
          <p className="font-normal text-2xl md:text-3xl">
            MGO <span className="font-semibold md:text-4xl">1122+</span>
          </p>

          <TooltipImage imgSrc={umfFrame} label="What is UMF and MGO?" />
        </div>

        <div className="flex justify-between mt-5">
          <p className="text-xs md:text-sm font-normal">The Optimiser</p>
          <div className="flex items-center gap-2 text-[#f4a300] text-xs font-semibold tracking-widest uppercase">
            <img
              src={rating}
              alt="Love Ratings"
              className="w-18 md:w-22 lg:w-30"
            />
            <span className="text-[10px] text-[#7a7a7a] tracking-normal">
              825 reviews
            </span>
          </div>
        </div>

        <p className="text-xs md:text-sm font-normal max-w-[480px]">
          For those times in life when quality comes first. This pure UMF™ 24+
          Manuka Honey is powerfully active, sourced from wild and rugged
          locations around Aotearoa New Zealand and great for almost all uses.
          It has a full, delicious flavour and your body will love you for it.
        </p>

        <div className="flex flex-wrap justify-between max-w-[480px]">
          {certifications.map((each, i) => (
            <img
              key={i}
              src={each}
              alt={`Certification ${i + 1}`}
              className="object-contain h-12 w-12"
            />
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide mb-1">
            SIZE (SELECT ONE)
          </p>
          <p className="text-sm mb-3">Variant: 125g | 4.4oz</p>
          <SizeSelector variants={variants} />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide mb-2">
            PAYMENT OPTIONS (SELECT ONE)
          </p>
          <div className="flex flex-col gap-4 max-w-[480px] bg-[#e9e9e9] rounded-xl p-4 text-xs md:text-sm font-normal">
            <div className="flex gap-4">
              <button
                aria-pressed="true"
                className="flex-1 bg-[#dba93f] text-white rounded-full py-2 px-3 sm:py-3 sm:px-4 flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#2a2a2a]"
              >
                <span>One-time purchase</span>
                <span className="font-semibold">$55.88 USD</span>
              </button>

              <button
                aria-pressed="false"
                className="flex-1 border border-[#dba93f] rounded-full py-2 px-3 sm:py-3 sm:px-4 flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#2a2a2a]"
              >
                <span>Subscribe & save 20%</span>
                <span className="font-semibold">$44.70 USD</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#4a4a4a]">
              <i className="fa-solid fa-rotate-right"></i>
              <span>What is a Subscription?</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6 justify-between max-w-[480px]">
          <p className="text-xs font-normal tracking-wide mb-2">
            SELECT QUANTITY
          </p>
          <div className="flex justify-between">
            <QuantitySelector />
            <button className="bg-[#2a2a2a] lg:w-[250px] text-white rounded-full py-2 px-5 md:py-3 md:px-8 lg:py-3 lg:px-8 text-xs md:text-sm font-semibold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#d98a4a]">
              ADD TO CART
            </button>
          </div>
        </div>

        <BundleCard />

        <div className="flex items-center gap-2 text-xs max-w-[480px] mt-4">
          <img
            alt="Colourclub logo"
            src={colourclub}
            className="object-contain h-6 w-6"
          />
          <p className="text-xs">
            Colourclub members earn up to{" "}
            <span className="inline-block bg-[#f2f2f2] rounded-full w-6 h-6 text-center text-[#dba93f] font-semibold">
              56
            </span>{" "}
            reward points when buy this item. Sign up or log in
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between max-w-[480px] text-xs mt-6">
          <div>
            <p className="font-semibold mb-2">DELIVERY</p>
            <p>FREE DELIVERY ON ORDERS OVER $30</p>
          </div>

          <div className="text-right mt-2 md:mt-0">
            <p className="font-semibold mb-1">ESTIMATED DELIVERY DATE:</p>
            <p>Jun 9 - Jun 13 to</p>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-4" />

        <div className="max-w-[480px] text-xs">
          <p className="font-semibold mb-2">After Pay</p>
          <p className="flex items-center gap-1">
            or 4 interest-free payments of $13.97 with{" "}
            <img
              alt="Dollar sign icon"
              className="inline-block"
              src={afterpay}
              width="70"
            />
            <i className="fa-solid fa-circle-info"></i>
          </p>
        </div>

        <hr className="border-t border-gray-300 max-w-[480px] my-4" />

        <div className="max-w-[480px] text-xs space-y-4">
          <div>
            <p className="font-semibold mb-2">UMF™ SCALE</p>
            <div className="flex justify-between items-center">
              {UMF_VALUES.map((umf) => {
                const isSelected = selected === umf.value;
                return (
                  <button
                    key={umf.value}
                    onClick={() => setSelected(umf.value)}
                    className={`pb-1 border-b-4 transition-colors duration-200 font-semibold focus:outline-none ${
                      isSelected
                        ? "font-bold"
                        : "text-gray-500 hover:border-gray-300"
                    }`}
                    style={{
                      borderColor: isSelected ? umf.color : "transparent",
                      color: isSelected ? umf.color : undefined,
                    }}
                  >
                    {umf.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">TASTE PROFILE</p>
            <div className="relative mt-2">
              <input
                type="range"
                min={UMF_VALUES[0].value}
                max={UMF_VALUES[UMF_VALUES.length - 1].value}
                step="1"
                value={selected}
                onChange={(e) => setSelected(Number(e.target.value))}
                className="w-full h-0.5 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
                style={{
                  background:
                    "linear-gradient(90deg,#E87722 0%,#E10600 28%,#CE0F69 42%,#830065 57%,#0085CA 72%,#3BAD4E 85%,#203E96 100%)",
                }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-600 mt-2">
              <span>Clean &amp; Intense</span>
              <span>Bold &amp; Intense</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;