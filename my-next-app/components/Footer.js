"use client"; // Add this line at the top

import { useState, useEffect } from "react";
import Logo from "./Logo";
import TabletFooterView from "./TabletFooterView";

export default function Footer() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLiveNationOpen, setIsLiveNationOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isPayPalOpen, setIsPayPalOpen] = useState(false);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 950);
    };

    // Set initial screen size
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenSize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <>
      {/* Only render main footer for larger screens */}
      {!isTablet && (
        <footer className="bg-black text-gray-100 px-4 py-8 md:px-10 md:py-18 text-base">
          <div className="max-w-9xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
            {/* Left column with logo and social links */}
            <div className="flex flex-col items-start sm:col-span-1 md:col-span-2">
              <div className="scale-110 pb-10">
                <Logo />
              </div>
              <p className="mb-3 text-md font-semibold">Let&apos;s connect</p>

              <div className="flex justify-start space-x-5 mb-5">
                <a href="#" aria-label="Facebook">
                  <img
                    src="https://uk.tmconst.com/production-10-185-2-10862459/images/logo/facebook.svg"
                    alt="Facebook"
                    className="h-7 w-7"
                  />
                </a>
                <a href="#" aria-label="X">
                  <img
                    src="https://uk.tmconst.com/production-10-185-2-10862459/images/logo/x.svg"
                    alt="X"
                    className="h-7 w-7"
                  />
                </a>
                <a href="#" aria-label="blog">
                  <img
                    src="https://uk.tmconst.com/production-10-185-2-10862459/images/logo/blog.svg"
                    alt="Blog"
                    className="h-7 w-7"
                  />
                </a>
                <a href="#" aria-label="YouTube">
                  <img
                    src="https://uk.tmconst.com/production-10-185-2-10862459/images/logo/youtube.svg"
                    alt="YouTube"
                    className="h-7 w-7"
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <img
                    src="https://uk.tmconst.com/production-10-185-2-10862459/images/logo/instagram.svg"
                    alt="Instagram"
                    className="h-7 w-7"
                  />
                </a>
              </div>

              {/* Download Our Apps */}
              <div className="mt-5 text-md sm:text-lg font-semibold mb-5">
                <p>Download Our Apps</p>

                <div className="flex items-center gap-5 mt-2">
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                      alt="App Store"
                      className="h-10"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                      alt="Google Play"
                      className="h-10"
                    />
                  </a>
                </div>

                <p className="text-md sm:text-sm text-gray-100 mt-10">
                  By continuing past this page, you agree to our terms of use
                </p>
              </div>
            </div>

            {/* Info columns */}
            <div className="border-t pt-4 md:pt-0 md:border-none">
              <div
                className="flex items-center justify-between cursor-pointer md:block"
                onClick={() => setIsHelpOpen(!isHelpOpen)}
              >
                <h6 className="text-xl font-bold mb-4">Helpful Links</h6>

                {/* Arrow Icon - mobile only */}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 md:hidden ${
                    isHelpOpen ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Dropdown list */}
              <ul
                className={`space-y-6 text-md transition-all duration-300 ease-in-out overflow-hidden
      sm:block sm:max-h-full sm:opacity-100
      md:block md:max-h-full md:opacity-100
      ${isHelpOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <li className="hover:underline cursor-pointer">Live Nation</li>
                <li className="hover:underline cursor-pointer">House of Blues</li>
                <li className="hover:underline cursor-pointer">
                  Front Gate Tickets
                </li>
                <li className="hover:underline cursor-pointer">Ticketmaster Blog</li>
                <li className="hover:underline cursor-pointer">TicketWeb</li>
                <li className="hover:underline cursor-pointer">universe</li>
              </ul>
            </div>

            {/* Additional dropdowns */}
            <div className="border-t pt-4 md:pt-0 md:border-none">
              <div
                className="flex items-center justify-between cursor-pointer md:block"
                onClick={() => setIsLiveNationOpen(!isLiveNationOpen)}
              >
                <h6 className="text-lg font-semibold mb-4">Live Nation</h6>

                {/* Arrow icon - mobile only */}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 sm:hidden ${
                    isHelpOpen ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Dropdown List */}
              <ul
                className={`space-y-6 text-md transition-all duration-300 ease-in-out overflow-hidden
      md:block md:max-h-full md:opacity-100
      ${isLiveNationOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <li className="hover:underline cursor-pointer">Ticketing Truths</li>
                <li className="hover:underline cursor-pointer">NFL</li>
                <li className="hover:underline cursor-pointer">NBA</li>
                <li className="hover:underline cursor-pointer">NHL</li>
                <li className="hover:underline cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            <div className="border-t pt-4 md:pt-0 md:border-none">
      <div
        className="flex items-center justify-between cursor-pointer md:block"
        onClick={() => setIsBlogOpen(!isBlogOpen)}
      >
        <h6 className="text-lg font-semibold mb-4">Ticketmaster Blog</h6>

        {/* Arrow icon - mobile only */}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 sm:hidden ${
            isBlogOpen ? "rotate-90" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Dropdown List */}
      <ul
        className={`space-y-6 text-md transition-all duration-300 ease-in-out overflow-hidden md:block md:max-h-full md:opacity-100 ${
          isBlogOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <li className="hover:underline cursor-pointer">Blog</li>
        <li className="hover:underline cursor-pointer">News</li>
        <li className="hover:underline cursor-pointer">Entertainment</li>
        <li className="hover:underline cursor-pointer">Sports</li>
        <li className="hover:underline cursor-pointer">Music</li>
      </ul>
    </div>
    <div className="border-t pt-4 md:pt-0 md:border-none">
      <div
        className="flex items-center justify-between cursor-pointer md:block"
        onClick={() => setIsPayPalOpen(!isPayPalOpen)}
      >
        <h6 className="text-lg font-semibold mb-4">Pay with PayPal</h6>

        {/* Arrow Icon - mobile only */}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 md:hidden ${
            isPayPalOpen ? "rotate-90" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Dropdown list */}
      <ul
        className={`space-y-6 text-md transition-all duration-300 ease-in-out overflow-hidden md:block md:max-h-full md:opacity-100 ${
          isPayPalOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <li className="hover:underline cursor-pointer">PayPal Homepage</li>
        <li className="hover:underline cursor-pointer">PayPal Credit</li>
      </ul>
      
    </div>
    
          </div>
{/* Top horizontal border for mobile only */}
<div className="block md:hidden border-t border-gray-400 mt-6 w-full"></div>

<div className="flex flex-wrap text-gray-100 justify-between items-center text-sm font-semibold mt-15 pt-6 border-t border-gray-400 w-full">
  {/* Left Side: Policy Links */}
  <div className="flex flex-wrap items-center justify-center w-full md:w-auto text-center md:text-left">
    <a href="#" className="hover:underline pr-4">
      Purchase Policy
    </a>
    <a href="#" className="hover:underline border-l border-gray-700 px-4">
      Privacy Policy
    </a>
    <a href="#" className="hover:underline border-l border-gray-700 px-4">
      Cookie Policy
    </a>
    <a href="#" className="hover:underline border-l border-gray-700 px-4">
      Manage my cookies and ad choices
    </a>
  </div>

  {/* Right Side: Copyright */}
  <div className="w-full md:w-auto mt-4 md:mt-0 text-center md:text-right text-gray-100">
    © 1999–2025 Ticketmaster. All rights reserved.
  </div>
  </div>
        </footer>
      )}


      {/* Only render tablet footer for tablet-sized screens */}
      {isTablet && <TabletFooterView />}
    </>
  );
}
