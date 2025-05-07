"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Scrollbar } from "swiper"; // Adjust the import statement
import "swiper/css/scrollbar";

export default function Sponsored() {
  return (
    <section className="py-5 pl-7 bg-gray-100 w-full text-center">
      {/* Title with Full Width Border */}
      <div className="border-t border-gray-300 pt-0 w-full pb-5">
        <h2 className="text-2xl font-bold text-black mt-6">
          SPONSORED PRESALES AND OFFERS
        </h2>
      </div>

      {/* Swiper for Mobile View */}
      <div className="sm:hidden">
        <Swiper spaceBetween={10} slidesPerView={1}>
          {/* Sponsored Card 1 */}
          <SwiperSlide>
            <div className="w-full p-2">
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                <div className="relative w-full h-65 z-0">
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <img
                    src="/ticket-images/add1.jpg"
                    alt="Advertisement 1"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-700 bg-opacity-75 text-white text-sm p-2 rounded-md">
                    <p>Presale Wed Apr 15, 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-left">
                    <p className="text-sm text-gray-700">
                      Sat • Jun 21 • 7:30 PM
                    </p>
                  </div>
                  <div className="text-right">
                    <img
                      src="https://uk.tmconst.com/production-10-183-0-10818958/images/logo/citi.svg"
                      alt="Citi Logo"
                      className="w-10 h-auto inline-block"
                    />
                  </div>
                </div>
                <div className="text-left mt-2">
                  <p className="text-md font-semibold text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Mariachi Sol De Mexico
                  </p>
                  <p className="text-sm text-gray-600">
                    Primm, NV • Star Of The Desert Arena at Primm Valley Resorts
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Sponsored Card 2 */}
          <SwiperSlide>
            <div className="w-full p-2">
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                <div className="relative w-full h-65 z-0">
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <img
                    src="/ticket-images/addd.jpg"
                    alt="Advertisement 2"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-700 bg-opacity-75 text-white text-sm p-2 rounded-md">
                    <p>Presale Wed Apr 15, 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-left">
                    <p className="text-sm text-gray-700">
                      Sat • Jun 21 • 7:30 PM
                    </p>
                  </div>
                  <div className="text-right">
                    <img
                      src="https://uk.tmconst.com/production-10-183-0-10818958/images/logo/citi.svg"
                      alt="Citi Logo"
                      className="w-10 h-auto inline-block"
                    />
                  </div>
                </div>
                <div className="text-left mt-2">
                  <p className="text-md font-semibold text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Sponsored Product 2
                  </p>
                  <p className="text-sm text-gray-600">
                    Primm, NV • Star Of The Desert Arena at Primm Valley Resorts
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Sponsored Card 3 */}
          <SwiperSlide>
            <div className="w-full p-2">
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                <div className="relative w-full h-65 z-0">
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <img
                    src="/ticket-images/ticket1.jpg"
                    alt="Advertisement 3"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-700 bg-opacity-75 text-white text-sm p-2 rounded-md">
                    <p>Presale Wed Apr 15, 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-left">
                    <p className="text-sm text-gray-700">
                      Sat • Jun 21 • 7:30 PM
                    </p>
                  </div>
                  <div className="text-right">
                    <img
                      src="https://uk.tmconst.com/production-10-183-0-10818958/images/logo/citi.svg"
                      alt="Citi Logo"
                      className="w-10 h-auto inline-block"
                    />
                  </div>
                </div>
                <div className="text-left mt-2">
                  <p className="text-md font-semibold text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Sponsored Product 3
                  </p>
                  <p className="text-sm text-gray-600">
                    Primm, NV • Star Of The Desert Arena at Primm Valley Resorts
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Static Cards for Desktop */}
      <div className="hidden sm:flex w-full bg-gray-100">
        {/* Sponsored Cards Container */}
        <div className="flex w-full">
          {/* Sponsored Card 1 */}
          <div className="w-1/3 p-2">
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
              <div className="relative w-full h-65 z-0">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src="/ticket-images/add1.jpg"
                  alt="Advertisement 1"
                  className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                />
                <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="flex items-center justify-center h-full text-white text-2xl">
                    ➔
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-700 bg-opacity-75 text-white text-sm p-2 rounded-md">
                  <p>Presale Wed Apr 15, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-left">
                  <p className="text-sm text-gray-700">
                    Sat • Jun 21 • 7:30 PM
                  </p>
                </div>
                <div className="text-right">
                  <img
                    src="https://uk.tmconst.com/production-10-183-0-10818958/images/logo/citi.svg"
                    alt="Citi Logo"
                    className="w-10 h-auto inline-block"
                  />
                </div>
              </div>
              <div className="text-left mt-2">
                <p className="text-md font-semibold text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  Mariachi Sol De Mexico
                </p>
                <p className="text-sm text-gray-600">
                  Primm, NV • Star Of The Desert Arena at Primm Valley Resorts
                </p>
              </div>
            </div>
          </div>

          {/* Sponsored Card 2 */}
          <div className="w-1/3 p-2">
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
              <div className="relative w-full h-65 z-0">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src="/ticket-images/addd.jpg"
                  alt="Advertisement 2"
                  className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                />
                <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="flex items-center justify-center h-full text-white text-2xl">
                    ➔
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-700 bg-opacity-75 text-white text-sm p-2 rounded-md">
                  <p>Presale Wed Apr 15, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-left">
                  <p className="text-sm text-gray-700">
                    Sat • Jun 21 • 7:30 PM
                  </p>
                </div>
                <div className="text-right">
                  <img
                    src="https://uk.tmconst.com/production-10-183-0-10818958/images/logo/citi.svg"
                    alt="Citi Logo"
                    className="w-10 h-auto inline-block"
                  />
                </div>
              </div>
              <div className="text-left mt-2">
                <p className="text-md font-semibold text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  Sponsored Product 2
                </p>
                <p className="text-sm text-gray-600">
                  Primm, NV • Star Of The Desert Arena at Primm Valley Resorts
                </p>
              </div>
            </div>
          </div>

          {/* Sponsored Card 3 */}
          <div className="w-1/3 p-2">
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
              <div className="relative w-full h-65 z-0">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src="/ticket-images/ticket1.jpg"
                  alt="Advertisement 3"
                  className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                />
                <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="flex items-center justify-center h-full text-white text-2xl">
                    ➔
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-700 bg-opacity-75 text-white text-sm p-2 rounded-md">
                  <p>Presale Wed Apr 15, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-left">
                  <p className="text-sm text-gray-700">
                    Sat • Jun 21 • 7:30 PM
                  </p>
                </div>
                <div className="text-right">
                  <img
                    src="https://uk.tmconst.com/production-10-183-0-10818958/images/logo/citi.svg"
                    alt="Citi Logo"
                    className="w-10 h-auto inline-block"
                  />
                </div>
              </div>
              <div className="text-left mt-2">
                <p className="text-md font-semibold text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  Sponsored Product 3
                </p>
                <p className="text-sm text-gray-600">
                  Primm, NV • Star Of The Desert Arena at Primm Valley Resorts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
