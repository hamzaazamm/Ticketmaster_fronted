"use client";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

import Link from "next/link";
import CustomHotelIcon from "./CustomHotelIcon";
import CustomGiftCardIcon from "./CustomGiftCardIcon";
import CustomSignupIcon from "./CustomSignupIcon"; // Adjust the path as needed
import CustomLocationIcon from "./CustomLocationIcon";
import CustomCancelIcon from "./CustomCancelIcon";
import CustomCalendarIcon from "./CustomCalendarIcon";
import CustomArrowIcon from "./CustomArrowIcon";
import DateSelector from "./DateSelector";

import Logo from "./Logo";

import CustomPayPalIcon from "./CustomPayPalIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Oneed for type in JS (TypeScript would require it)
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showConcertsDropdown, setShowConcertsDropdown] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showConcertsDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowConcertsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showConcertsDropdown]);

  return (
    <header>
      {/* Top black header */}
      <div className="w-full bg-black text-white text-md flex justify-between items-center h-11 px-4">
        {/* Left side - US flag and country name */}
        <div className="flex items-center gap-1 mb-2 lg:mb-0">
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-black border border-white overflow-hidden cursor-pointer hover:opacity-80">
            <span className="text-2xl">🇺🇸</span>
          </div>
          <span className="cursor-pointer hover:underline">US</span>
        </div>

        {/* Right side - Links */}
        <div className="hidden xl:flex items-center space-x-3 text-white">
          <span className="flex items-center gap-1 hover:underline cursor-pointer">
            <CustomHotelIcon className="w-4 h-4 text-white" />
            Hotels
          </span>
          <span className="hover:underline cursor-pointer">Sell</span>
          <span className="flex items-center gap-1 hover:underline cursor-pointer">
            <CustomGiftCardIcon className="w-4 h-4 text-white" />
            Gift Cards
          </span>
          <span className="hover:underline cursor-pointer">Help</span>
          <span className="hover:underline cursor-pointer">VIP</span>
          <span className="flex items-center gap-1 cursor-pointer hover:opacity-80">
            <CustomPayPalIcon className="h-full text-white" />
          </span>
        </div>
      </div>

      <nav className="hidden lg:flex bg-[rgb(2,77,223)] text-white py-4 px-6 flex justify-between items-center text-2xl relative">
        <div className="pl-6 scale-110">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-1 pl-10 ${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:flex`}
        >
          <div className="flex space-x-7 text-lg font-semibold">
            {/* Concerts Dropdown */}
            <div className="dropdown-container relative ">
              <button
                onClick={() => setShowConcertsDropdown(!showConcertsDropdown)}
                className="cursor-pointer hover:bg-indigo-800 "
              >
                Concerts
              </button>

              {/* Updated to use showConcertsDropdown */}
              {showConcertsDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute   top-full -left-65 w-screen bg-black text-white shadow-lg  z-50 p-15"
                >
                  {/* Popular Section */}
                  <div>
                    <div className="flex items-center justify-between mb-10">
                      <h3 className="font-bold text-3xl uppercase">Popular</h3>
                      <button className="px-4 py-2 border border-white text-blue-600 bg-transparent rounded hover:bg-white hover:text-black transition duration-300">
                        See All Concerts
                      </button>
                    </div>
                    <div className="flex space-x-7">
                      {/* Each Category with Zoom-In Effect on Hover */}
                      <div
                        className="relative bg-cover bg-center w-full h-25 p-4 text-white transition-transform duration-500 ease-in-out transform hover:scale-110"
                        style={{
                          backgroundImage: "url('/theme/theme1.jpg')", // Rock Background
                        }}
                      >
                        <div className="absolute bottom-4 left-4">
                          <span className="font-semibold text-white border-b-4 border-blue-600">
                            ROCK
                          </span>
                        </div>
                      </div>

                      <div
                        className="relative bg-cover bg-center w-full h-25 p-4 text-white transition-transform duration-500 ease-in-out transform hover:scale-110"
                        style={{
                          backgroundImage: "url('/theme/theme1.jpg')", // Hip-Hop/Rap Background
                        }}
                      >
                        <div className="absolute bottom-4 left-4">
                          <span className="font-semibold text-white border-b-[4px] border-blue-600">
                            HIP-HOP/RAP
                          </span>
                        </div>
                      </div>

                      <div
                        className="relative bg-cover bg-center w-full h-25 p-4 text-white transition-transform duration-500 ease-in-out transform hover:scale-110"
                        style={{
                          backgroundImage: "url('/theme/theme1.jpg')", // Country Background
                        }}
                      >
                        <div className="absolute bottom-4 left-4">
                          <span className="font-semibold text-white border-b-[4px] border-blue-600">
                            COUNTRY
                          </span>
                        </div>
                      </div>

                      <div
                        className="relative bg-cover bg-center w-full h-25 p-4 text-white transition-transform duration-500 ease-in-out transform hover:scale-110"
                        style={{
                          backgroundImage: "url('/theme/theme1.jpg')", // Latin Background
                        }}
                      >
                        <div className="absolute bottom-4 left-4">
                          <span className="font-semibold text-white border-b-[4px] border-blue-600">
                            LATIN
                          </span>
                        </div>
                      </div>

                      <div
                        className="relative bg-cover bg-center w-full h-25 p-4 text-white transition-transform duration-500 ease-in-out transform hover:scale-110"
                        style={{
                          backgroundImage: "url('/theme/theme1.jpg')", // Alternative Background
                        }}
                      >
                        <div className="absolute bottom-4 left-4">
                          <span className="font-semibold text-white border-b-[4px] border-blue-600">
                            ALTERNATIVE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Divider */}
                  <hr className="border-gray-200 my-4" />

                  {/* Discover More Section */}
                  <div>
                    <h3 className="font-bold text-4xl p-3 uppercase">
                      Discover More
                    </h3>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="space-y-2"></div>
                      <div className="space-y-2">
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Alternative
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Ballad/Romantic
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Blues
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Children&apos;s Music
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Classical
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Country
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Dance/Electronic
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Folk
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Hip-Hop/Rap
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Holiday
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Jazz
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Latin
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Medieval/Renaissance
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Metal
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          New Age
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Other
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Pop
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          R&B
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Reggae
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Religious
                        </div>
                        <div className="cursor-pointer font-md hover:text-gray-200 hover:underline">
                          Rock
                        </div>
                        <div className="cursor-pointer font-sm hover:text-gray-200 hover:underline">
                          World
                        </div>
                        <div className="cursor-pointer  hover:text-gray-200 hover:underline font-sm text-indigo-600">
                          All Concerts →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a href="#" className="cursor-pointer hover:bg-indigo-800">
              Sports
            </a>
            <a href="#" className="cursor-pointer hover:bg-indigo-800">
              Arts, Theater & Comedy
            </a>
            <a href="#" className="cursor-pointer hover:bg-indigo-800">
              Family
            </a>
          </div>
        </div>

        {/* Sign In/Register */}
        <Link
          href="/signup"
          className="text-lg  cursor-pointer hover:bg-indigo-800 px-3 py-1 rounded transition-colors duration-200 flex items-center gap-2"
        >
          <CustomSignupIcon className="w-6 h-6 text-white" />
          Sign In/Register
        </Link>
      </nav>

      <nav className="flex lg:hidden items-center bg-[rgb(2,77,223)] justify-between px-4 py-3 text-white relative">
        {/* Left: Hamburger Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Ensure space between items */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Logo next to the hamburger menu */}
          <Logo className="h-4" />
        </div>

        {/* Right: Sign In/Register */}
        <div>
          <Link
            href="/signup"
            className="text-lg cursor-pointer flex items-center gap-1"
          >
            <CustomSignupIcon className="w-6 h-6 text-white" />
          </Link>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 min-h-[100dvh] bg-black bg-opacity-95 w-full text-white z-50 p-1 overflow-hidden">
          {/* Wrapper for animations */}
          <div className="relative w-full h-full">
            {/* Main Menu */}
            <div
              className={`absolute top-0 left-0 w-full h-full p-6 transition-transform duration-300 ease-in-out ${
                activeSubMenu ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-5">
                <Logo />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8 mt-10 font-bold text-xl">
                {[
                  { key: "Concerts", label: "CONCERTS" },
                  { key: "Sports", label: "SPORTS" },
                  {
                    key: "Arts, Theater & Comedy",
                    label: "ARTS, THEATER & COMEDY",
                  },
                  { key: "Family", label: "FAMILY" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveSubMenu(key)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span>{label}</span>
                    <span className="text-5xl">{"›"}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submenu Page */}
            <div
              className={`absolute top-0 left-0 w-full h-full p-6 transition-transform duration-300 ease-in-out bg-black bg-opacity-95 ${
                activeSubMenu ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center mb-6 border-b border-gray-600 pb-4">
                <button
                  onClick={() => setActiveSubMenu(null)}
                  className="text-left text-lg font-bold flex items-center"
                >
                  <span className="text-4xl mr-2">‹</span>
                  <span className="uppercase">{activeSubMenu}</span>
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-light"
                >
                  ✕
                </button>
              </div>
              <h2 className="text-white text-3xl font-semibold mb-4">
                Popular
              </h2>
              <ul className="space-y-4 text-lg text-gray-300">
                {activeSubMenu === "Concerts" && (
                  <>
                    <li>Rock</li>
                    <li>Pop</li>
                    <li>Hip-Hop/Rap</li>
                    <li>Country</li>
                    <li>Jazz</li>
                  </>
                )}

                {activeSubMenu === "Sports" && (
                  <>
                    <li>Football</li>
                    <li>Basketball</li>
                    <li>Baseball</li>
                  </>
                )}

                {activeSubMenu === "Arts, Theater & Comedy" && (
                  <>
                    <li>Musicals</li>
                    <li>Plays</li>
                    <li>Classical</li>
                  </>
                )}

                {activeSubMenu === "Family" && (
                  <>
                    <li>Kids Shows</li>
                    <li>Disney</li>
                  </>
                )}
              </ul>
              <div className="border-t border-gray-600 my-6" />

              <h2 className="text-white text-3xl font-bold mb-4">
                Discover More
              </h2>
              <button
                onClick={() => console.log("Clicked:", activeSubMenu)}
                className="flex items-center font-bold gap-2 text-blue-900 hover:text-blue-600 text-base font-md transition-colors duration-200"
              >
                <span className="capitalize">all {activeSubMenu}</span>
                <span className="text-5xl">›</span>
              </button>
              <ul className="mt-4 space-y-4 text-gray-300 text-lg">
                {activeSubMenu === "Concerts" && (
                  <>
                    <li>Upcoming Tours</li>
                    <li>Local Events</li>
                    <li>New Artists</li>
                  </>
                )}

                {activeSubMenu === "Sports" && (
                  <>
                    <li>Top Teams</li>
                    <li>Season Highlights</li>
                    <li>Stadium Events</li>
                  </>
                )}

                {activeSubMenu === "Arts, Theater & Comedy" && (
                  <>
                    <li>Broadway Shows</li>
                    <li>Comedy Nights</li>
                    <li>Art Exhibits</li>
                  </>
                )}

                {activeSubMenu === "Family" && (
                  <>
                    <li>Weekend Activities</li>
                    <li>Theme Parks</li>
                    <li>Educational Shows</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Fixed Buttons (Hotels, Sell, etc.) */}
          {!activeSubMenu && (
            <div className="absolute bottom-0 left-0 w-full">
              <div className="w-full divide-y divide-gray-300">
                <button className="w-full flex items-center gap-2 py-3 px-4">
                  <CustomHotelIcon className="w-6 h-6" />
                  <span className="flex-1 text-left">Hotels</span>
                </button>

                <button className="w-full py-3 px-4 text-left">Sell</button>

                <button className="w-full flex items-center gap-2 py-3 px-4">
                  <CustomGiftCardIcon className="w-6 h-6" />
                  <span className="flex-1 text-left">Gift Cards</span>
                </button>

                <button className="w-full py-3 px-4 text-left">Help</button>

                <button className="w-full py-3 px-4 text-left">VIP</button>
              </div>
              <span className="block w-70 ">
                <CustomPayPalIcon className="w-full" />
              </span>
            </div>
          )}
        </div>
      )}

<section
  className="bg-[rgb(2,77,223)] py-0 lg:py-9 flex justify-center"
  aria-label="Search events"
>
  <div className="w-full sm:max-w-full lg:max-w-4xl bg-white px-2 py-2 flex flex-col lg:flex-row lg:items-center">
    {/* Location + Date Container */}
    <div className="flex flex-row w-full lg:w-auto pb-3 lg:pb-0 border-b border-gray-200 lg:border-b-0 lg:border-r lg:border-gray-300">
      {/* Location Selector */}
      <div
        className="flex items-center bg-white text-black px-3 py-2 w-full sm:w-full md:w-1/2 lg:w-[200px] text-md border-r border-gray-300"
        role="region"
        aria-label="Location selector"
      >
        <span className="mr-2" aria-hidden="true">
          <CustomLocationIcon className="w-5 h-5 text-blue-700" />
        </span>
        <span className="truncate">City or Zip Code</span>
        <button className="ml-2" aria-label="Clear location">
          <CustomCancelIcon className="w-4 h-4 text-slate-500 hover:text-red-600" />
        </button>
      </div>

      {/* Date Selector */}
      <div
  className="flex items-center bg-white text-black px-0 lg:pr-0 py-2 w-full sm:w-full md:w-1/2 lg:w-[200px] text-md"
  role="region"
  aria-label="Date selector"
>
  <DateSelector />
</div>
    </div>

    {/* Search Input + Button */}
    <div className="relative flex items-center w-full pt-3 lg:pt-0 lg:pl-4 lg:border-l-0 lg:border-gray-300 h-full">
    <input
        type="text"
        placeholder="Search by Artist, Event or Venue"
        className="flex-1 pr-10 pl-4 lg:pl-10 text-md text-black h-12 rounded-md focus:outline-none border lg:border-0 border-gray-300"
        aria-label="Search by Artist, Event or Venue"
      />
      <span className="absolute right-3 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <FaSearch className="w-5 h-5" />
      </span>
      <button
        className="hidden lg:block bg-blue-600 text-white px-5 py-[10px] rounded-md font-medium text-md-bold hover:bg-blue-700 ml-3"
        aria-label="Search"
      >
        Search
      </button>
    </div>
  </div>
</section>








    </header>
  );
}
