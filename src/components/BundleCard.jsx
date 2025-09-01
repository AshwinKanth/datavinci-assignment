import React from "react";
import recommend1 from "../assets/recommend 1.png";
import recommend2 from "../assets/recommend 2.png";
import recommend3 from "../assets/recommend 3.png";

const BundleCard = () => {
  return (
    <div className="bg-[#e9e9e9] rounded-xl p-4 max-w-[480px] text-xs md:text-sm font-normal space-y-3">
      <div className="flex items-center justify-center gap-2 text-[#2a2a2a] font-semibold">
        <span tabIndex={0} className="text-sm focus:outline-none focus:ring-2 focus:ring-[#d98a4a]" role="button" aria-label="Previous bundle">‹</span>
        <span>Beauty Bundle</span>
        <span tabIndex={0} className="text-sm focus:outline-none focus:ring-2 focus:ring-[#d98a4a]" role="button" aria-label="Next bundle">›</span>
      </div>

      <div className="flex flex-col justify-between md:flex-row lg:flex-row items-center">
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-center text-center">
            <img
              src={recommend1}
              alt="UMF 20+"
              className="mx-auto object-contain h-12 w-12"
            />
            <p className="font-semibold mt-1">UMF 20+</p>
            <select
              aria-label="Select UMF 20+ size"
              className="mt-1 text-xs rounded border border-gray-300 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
            >
              <option>250g</option>
            </select>
          </div>

          <span className="font-bold text-2xl mb-4 md:mb-12 mx-2">+</span>

          <div className="flex flex-col items-center text-center">
            <img
              src={recommend2}
              alt="UMF 24+"
              className="mx-auto object-contain h-12 w-12"
            />
            <p className="font-semibold mt-1">UMF 24+</p>
            <select
              aria-label="Select UMF 24+ size"
              className="mt-1 text-xs rounded border border-gray-300 px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
            >
              <option>250g</option>
            </select>
          </div>

          <span className="font-bold text-2xl mb-4 md:mb-12 mx-2">+</span>

          <div className="flex flex-col items-center text-center mb-2 ml-2">
            <img
              src={recommend3}
              alt="Wooden spoon"
              className="mx-auto object-contain h-12 w-12"
            />
            <p className="font-semibold mt-1 w-12">Wooden Spoon</p>
          </div>
        </div>

        <div className="text-center mt-4 md:mt-0 items-center">
          <p className="line-through text-xs text-gray-500">$478.75 USD</p>
          <p className="font-semibold text-sm">
            $430.88 USD <span className="text-green-600 font-normal">Save 10%</span>
          </p>
          <button
            className="mt-2 bg-[#2a2a2a] text-white rounded-full py-2 px-3 text-xs font-semibold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
            aria-label="Add Beauty Bundle to cart"
          >
            ADD BUNDLE TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default BundleCard;