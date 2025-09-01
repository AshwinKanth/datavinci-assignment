import React, { useState } from "react";
import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import NewZealandHoneyLogo from "../assets/NewZealandHoneyLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#fefbf7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-2xl text-black focus:outline-none focus:ring-2 focus:ring-[#d98a4a] rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <button
                type="button"
                className="text-[10px] font-normal text-black rounded-full border border-black py-2 px-5 leading-none hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
              >
                WHICH MANUKA IS FOR ME?
              </button>
              <a className="text-sm font-normal text-black hover:underline focus:outline-none focus:ring-2 focus:ring-[#d98a4a]" href="#">
                Shop
              </a>
              <a className="text-sm font-normal text-black hover:underline focus:outline-none focus:ring-2 focus:ring-[#d98a4a]" href="#">
                Explore
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 mx-4 lg:mx-0">
            <img
              src={NewZealandHoneyLogo}
              alt="New Zealand Honey Co. logo"
              className="h-12 w-auto sm:ml-20 md:ml-15"
              width="120"
              height="40"
            />
          </div>

          {/* Right section */}
          <div className="hidden lg:flex items-center space-x-6">
            <a className="text-sm font-normal text-black hover:underline focus:outline-none focus:ring-2 focus:ring-[#d98a4a]" href="#">About</a>
            <a className="text-sm font-normal text-black hover:underline focus:outline-none focus:ring-2 focus:ring-[#d98a4a]" href="#">Rewards</a>
            <a className="text-sm font-normal text-black hover:underline focus:outline-none focus:ring-2 focus:ring-[#d98a4a]" href="#">Contact</a>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-4 ml-2">
            <button aria-label="User account" className="text-black text-lg focus:outline-none focus:ring-2 focus:ring-[#d98a4a] rounded">
              <FaUser />
            </button>
            <button aria-label="Search" className="text-black text-lg focus:outline-none focus:ring-2 focus:ring-[#d98a4a] rounded">
              <FaSearch />
            </button>
            <button aria-label="Shopping cart" className="relative text-black text-lg focus:outline-none focus:ring-2 focus:ring-[#d98a4a] rounded">
              <FaShoppingBag />
              <span className="absolute -top-1 -right-2 bg-[#f2b01e] text-[10px] font-semibold text-black rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 space-y-4 bg-[#fefbf7] border-t border-gray-200">
          <button
            type="button"
            className="block w-full text-[10px] tracking-widest font-normal text-black border border-black py-2 px-5 rounded-full leading-none hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
          >
            WHICH MANUKA IS FOR ME?
          </button>

          {["Shop", "Explore", "About", "Rewards", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm font-normal text-black hover:underline focus:outline-none focus:ring-2 focus:ring-[#d98a4a]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;