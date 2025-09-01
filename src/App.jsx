import React from "react";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1a1a1a]">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-4 py-10">
        <ProductPage />
      </main>
    </div>
  );
}