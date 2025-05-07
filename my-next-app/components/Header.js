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
import Logo from "./Logo";

import CustomPayPalIcon from "./CustomPayPalIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showConcertsDropdown, setShowConcertsDropdown] = useState(false);
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
        <div className="flex items-center gap-1 mb-2 sm:mb-0">
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-black border border-white overflow-hidden">
            <span className="text-2xl">🇺🇸</span>
          </div>
          <span>US</span>
        </div>

        {/* Right side - Links */}
        <div className="hidden sm:flex items-center space-x-3">
          <span className="flex items-center gap-1">
            <CustomHotelIcon className="w-4 h-4 text-white" />
            Hotels
          </span>
          <span>Sell</span>
          <span className="flex items-center gap-1">
            <CustomGiftCardIcon className="w-4 h-4 text-white" />
            Gift Cards
          </span>
          <span>Help</span>
          <span>VIP</span>
          <span className="flex items-center gap-1">
            <CustomPayPalIcon className="h-full text-white" />
          </span>
        </div>
      </div>

      <nav className="hidden sm:flex bg-[rgb(2,77,223)] text-white py-4 px-6 flex justify-between items-center text-2xl relative">
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
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Alternative
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Ballad/Romantic
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Blues
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Children&apos;s Music
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Classical
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Country
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Dance/Electronic
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Folk
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Hip-Hop/Rap
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Holiday
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Jazz
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Latin
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Medieval/Renaissance
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Metal
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          New Age
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Other
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Pop
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          R&B
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Reggae
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Religious
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          Rock
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline">
                          World
                        </div>
                        <div className="cursor-pointer hover:text-indigo-600 hover:underline font-semibold text-indigo-600">
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

      <nav className="flex sm:hidden items-center bg-[rgb(2,77,223)] justify-between px-4 py-3 text-white sm:hidden relative">
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

      <section
        className="bg-[rgb(2,77,223)] py-0 sm:py-9 flex justify-center"
        aria-label="Search events"
      >
        <div className="w-full max-w-4xl bg-white px-2 py-2 flex flex-col sm:flex-row sm:items-center">
          {/* Location + Date Container */}
          <div className="flex flex-row w-full sm:w-auto pb-3 sm:pb-0 border-b border-gray-200 sm:border-b-0 sm:border-r sm:border-gray-300">
            {/* Location Selector - has right border in both views */}
            <div
              className="flex items-center bg-white text-black px-3 py-2 w-1/2 sm:w-[200px] text-md border-r border-gray-300"
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
              className="flex items-center bg-white text-black px-4 py-2 w-1/2 sm:w-[180px] text-md"
              role="region"
              aria-label="Date selector"
            >
              <span className="mr-2" aria-hidden="true">
                <CustomCalendarIcon className="w-5 h-5 text-blue-700" />
              </span>
              <span className="truncate">All Dates</span>
              <span className="flex items-center ml-auto">
                <CustomArrowIcon className="w-5 h-5 text-blue-700 sm:rotate-0 rotate-270" />
              </span>
            </div>
          </div>

          {/* Search Container */}
          <div className="relative flex items-center w-full pt-3 sm:pt-0 sm:pl-3">
            <input
              type="text"
              placeholder="Search by Artist, Event or Venue"
              className="flex-1 pr-10 pl-4 sm:pl-10 text-md text-black h-12 rounded-md focus:outline-none border sm:border-0 border-gray-300"
              aria-label="Search by Artist, Event or Venue"
            />
            <span className="absolute right-3 sm:right-auto sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch className="w-5 h-5" />
            </span>
            <button
              className="hidden sm:block bg-blue-600 text-white px-5 py-[10px] rounded-md font-medium text-md-bold hover:bg-blue-700 ml-3"
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
