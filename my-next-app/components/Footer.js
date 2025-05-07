// components/Footer.js
"use client"; // Add this line at the top

import { useState } from "react";
import Logo from "./Logo";

export default function Footer() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLiveNationOpen, setIsLiveNationOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isPayPalOpen, setIsPayPalOpen] = useState(false);

  return (
    <footer className="bg-black text-white px-4 py-8 md:px-16 md:py-12 text-base">
      <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Left column with logo and social links */}
        <div className="text-left md:text-left flex flex-col items-start md:items-start">
          <div className="scale-110 pb-10">
            <Logo />
          </div>
          <p className="mb-3 text-lg">Let&apos;s connect</p>

          <div className="flex justify-start space-x-5 mb-5">
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                className="h-7 w-7"
              />
            </a>
            <a href="#" aria-label="X">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="X"
                className="h-7 w-7"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                className="h-7 w-7"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="h-7 w-7"
              />
            </a>
          </div>

          {/* Download Our Apps */}
          <div className="flex flex-row justify-start mt-10 space-x-4 mb-5">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-5 text-left">
            By continuing past this page, you agree to our terms of use
          </p>
        </div>

        {/* Info columns */}
        <div className="pl-5 sm:pl-10">
          <h6
            className="text-xl font-semibold mb-4 cursor-pointer md:block"
            onClick={() => setIsHelpOpen(!isHelpOpen)}
          >
            Help/FAQ
          </h6>
          <ul
            className={`space-y-3 text-lg ${
              isHelpOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="hover:underline cursor-pointer">Live Nation</li>
            <li className="hover:underline cursor-pointer">House of Blues</li>
            <li className="hover:underline cursor-pointer">
              Front Gate Tickets
            </li>
            <li className="hover:underline cursor-pointer">
              Ticketmaster Blog
            </li>
            <li className="hover:underline cursor-pointer">TicketWeb</li>
            <li className="hover:underline cursor-pointer">universe</li>
          </ul>
        </div>

        <div className="pl-5 sm:pl-10">
          <h6
            className="text-xl font-semibold mb-4 cursor-pointer md:block"
            onClick={() => setIsLiveNationOpen(!isLiveNationOpen)}
          >
            Live Nation
          </h6>
          <ul
            className={`space-y-2 text-lg ${
              isLiveNationOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="hover:underline cursor-pointer">Ticketing Truths</li>
            <li className="hover:underline cursor-pointer">NFL</li>
            <li className="hover:underline cursor-pointer">NBA</li>
            <li className="hover:underline cursor-pointer">NHL</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="pl-5 sm:pl-10">
          <h6
            className="text-xl font-semibold mb-4 cursor-pointer md:block"
            onClick={() => setIsBlogOpen(!isBlogOpen)}
          >
            Ticketmaster Blog
          </h6>
          <ul
            className={`space-y-2 text-lg ${
              isBlogOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="hover:underline cursor-pointer">Ad Choices</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Innovation</li>
            <li className="hover:underline cursor-pointer">
              Ticket Your Event
            </li>
          </ul>
        </div>

        <div className="pl-5 sm:pl-10">
          <h6
            className="text-xl font-semibold mb-4 cursor-pointer md:block"
            onClick={() => setIsPayPalOpen(!isPayPalOpen)}
          >
            PayPal
          </h6>
          <ul
            className={`space-y-2 text-lg ${
              isPayPalOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="hover:underline cursor-pointer">Allieux</li>
            <li className="hover:underline cursor-pointer">AWS</li>
          </ul>
        </div>
      </div>

      {/* Legal and policy links */}
      <div className="flex flex-wrap justify-start gap-6 text-sm mt-12 pt-6 border-t border-gray-700">
        <a href="#" className="hover:underline">
          Purchase Policy
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Cookie Policy
        </a>
        <a href="#" className="hover:underline">
          Manage my cookies and ad choices
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 mt-6 text-left">
        <p>Do Not Sell or Share My Personal Information</p>
        <p className="mt-3">© 2025 Ticketmaster. All rights reserved.</p>
      </div>
    </footer>
  );
}
