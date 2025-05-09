"use client";

import Logo from "./Logo";

export default function TabletFooterView() {
  return (
    <div className=" sm:flex md:hidden bg-black text-white py-10 px-6 flex-col">
      {/* Grid layout */}
      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
        {/* Left Column: Logo, Social Icons, Apps */}
        <div className="space-y-6">
          <div className="scale-110">
            <Logo />
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">Let&apos;s connect</p>
            <div className="flex gap-4">
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
              <a href="#" aria-label="Blog">
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
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">Download Our Apps</p>
            <div className="flex gap-4 mb-3">
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
            <p className="text-sm">
              By continuing past this page, you agree to our terms of use
            </p>
          </div>
        </div>

        {/* Right Column: Helpful Links */}
        <div className="space-y-8 text-sm">
          <div>
            <p className="font-bold text-lg mb-2">Helpful Links</p>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Live Nation</li>
              <li className="hover:underline cursor-pointer">House of Blues</li>
              <li className="hover:underline cursor-pointer">Front Gate Tickets</li>
              <li className="hover:underline cursor-pointer">Ticketmaster Blog</li>
              <li className="hover:underline cursor-pointer">TicketWeb</li>
              <li className="hover:underline cursor-pointer">universe</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-2">Live Nation</p>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Ticketing Truths</li>
              <li className="hover:underline cursor-pointer">NFL</li>
              <li className="hover:underline cursor-pointer">NBA</li>
              <li className="hover:underline cursor-pointer">NHL</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-2">Ticketmaster Blog</p>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Ad Choices</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Innovation</li>
              <li className="hover:underline cursor-pointer">Ticket Your Event</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-2">PayPal</p>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Allieux</li>
              <li className="hover:underline cursor-pointer">AWS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="block md:hidden border-t border-gray-400 mt-6 w-full"></div>

      {/* Bottom Footer Bar */}
      <div className="flex flex-wrap text-gray-100 justify-between items-center text-sm font-semibold mt-6 pt-6 border-t border-gray-400 w-full">
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
    </div>
  );
}
