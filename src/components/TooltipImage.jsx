import React from "react";

const TooltipImage = ({ imgSrc, label = "More info" }) => {
  return (
    <div className="mt-5 relative">
      <button
        type="button"
        className="mt-2 px-3 py-2 rounded-full bg-[#d9d9d9] text-xs text-[#4a4a4a] flex items-center gap-1 relative group focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
        aria-describedby="umf-mgo-tooltip"
      >
        <svg
          className="w-3 h-3"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z" />
        </svg>
        {label}

        <div
          id="umf-mgo-tooltip"
          role="tooltip"
          className="absolute top-full mt-2 rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50
             left-2 md:left-50 sm:left-1/2 sm:-translate-x-1/2
             w-[220px] sm:w-[300px] md:w-[380px] lg:w-[450px]"
        >
          <img
            src={imgSrc}
            alt="UMF & MGO details"
            className="w-full h-auto object-contain rounded"
          />
        </div>
      </button>
    </div>
  );
};

export default TooltipImage;