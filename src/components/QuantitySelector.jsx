import React, { useState } from "react";

const QuantitySelector = () => {
  const [qty, setQty] = useState(1);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(99, q + 1));

  return (
    <div className="flex justify-around items-center bg-[#dba93f] rounded-full w-[140px] px-4 text-white font-semibold">
      <button
        aria-label="Decrease quantity"
        onClick={dec}
        className="text-2xl leading-none focus:outline-none focus:ring-2 focus:ring-white rounded-full"
      >
        −
      </button>
      <span aria-live="polite">{qty}</span>
      <button
        aria-label="Increase quantity"
        onClick={inc}
        className="text-2xl leading-none focus:outline-none focus:ring-2 focus:ring-white rounded-full"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;