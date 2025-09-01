import React, { useState } from "react";

const SizeSelector = ({ variants = [] }) => {
  const [selected, setSelected] = useState(variants[0]?.id ?? null);

  return (
    <div className="flex flex-wrap gap-4 max-w-[480px]">
      {variants.map((v) => {
        const isActive = v.id === selected;
        return (
          <button
            key={v.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => setSelected(v.id)}
            className={`rounded-lg w-[100px] h-[100px] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#d98a4a] ${
              isActive
                ? "border border-[#d98a4a]"
                : "border border-transparent hover:border-[#d98a4a]"
            }`}
          >
            <img
              src={v.image}
              alt={v.id}
              className="object-contain h-[100px] w-[100px]"
            />
          </button>
        );
      })}
    </div>
  );
};

export default SizeSelector;