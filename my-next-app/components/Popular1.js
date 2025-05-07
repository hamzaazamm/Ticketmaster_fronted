"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

export default function Popular() {
  return (
    <div className="w-full px-2 md:px-4 lg:px-8 py-5 bg-gray-100">
      <div className="flex justify-between w-[100%] items-center pb-2 border-b border-gray-200">
        {/* Left-aligned 'Concerts' */}
        <span className="text-lg font-semibold text-left">Concerts</span>

        {/* Right-aligned 'See All Concerts' link */}
        <span className="text-sm text-blue-700 hover:text-blue-900 hover:underline cursor-pointer text-right">
          See All Concerts
        </span>
      </div>

      {/* Flex container to split 80% / 20% */}
      <div className="flex w-full">
        {/* Swiper section - 80% */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{
              draggable: true,
              hide: false, // Ensure it's always visible
              dragSize: 100, // Makes the draggable part wider
            }}
            className="pb-6"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                {/* Image container with the hover effect */}
                <div className="relative w-full h-65 z-0">
                  {/* Full card hover overlay (covers image only) */}
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                  <img
                    src="/popular-images/3.jpeg" // Change the image path accordingly
                    alt="Image 1"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />

                  {/* Blue bar (only appears over image) */}
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-4 relative ">
                  <p className="text-sm text-gray-700 mt-2 text-left">
                    Roll up in style as a VIP at this prestigious football
                    event.
                  </p>
                  <h3 className="font-semibold text-lg mt-2 text-black text-left group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Darlene Love
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                {/* Image container with the hover effect */}
                <div className="relative w-full h-65 z-0">
                  {/* Full card hover overlay (covers image only) */}
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                  <img
                    src="/popular-images/1.jpeg" // Change the image path accordingly
                    alt="Image 2"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />

                  {/* Blue bar (only appears over image) */}
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-4 relative z-20">
                  <p className="text-sm text-gray-700 mt-2 text-left">
                    Roll up in style as a VIP at this prestigious football
                    event.
                  </p>
                  <h3 className="font-semibold text-lg mt-2 text-left text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Beyonce
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                {/* Image container with the hover effect */}
                <div className="relative w-full h-65 z-0">
                  {/* Full card hover overlay (covers image only) */}
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                  <img
                    src="/popular-images/2.jpeg" // Change the image path accordingly
                    alt="Image 3"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />

                  {/* Blue bar (only appears over image) */}
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-4 relative z-20">
                  <p className="text-sm text-gray-700 mt-2 text-left">
                    Roll up in style as a VIP at this prestigious football
                    event.
                  </p>
                  <h3 className="font-semibold text-lg text-left mt-2 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Oasis
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                {/* Image container with the hover effect */}
                <div className="relative w-full h-65 z-0">
                  {/* Full card hover overlay (covers image only) */}
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                  <img
                    src="/popular-images/3.jpeg" // Change the image path accordingly
                    alt="Image 4"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />

                  {/* Blue bar (only appears over image) */}
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-4 relative z-20">
                  <p className="text-sm text-gray-700 text-left mt-2">
                    Roll up in style as a VIP at this prestigious football
                    event.
                  </p>
                  <h3 className="font-semibold text-left text-lg mt-2 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Concert D
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
                {/* Image container with the hover effect */}
                <div className="relative w-full h-65 z-0">
                  {/* Full card hover overlay (covers image only) */}
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                  <img
                    src="/popular-images/5.jpeg" // Change the image path accordingly
                    alt="Image 5"
                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                  />

                  {/* Blue bar (only appears over image) */}
                  <div className="absolute top-0 right-0 w-0 group-hover:w-1/22 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex items-center justify-center h-full text-white text-2xl">
                      ➔
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-4 relative z-20">
                  <p className="text-sm text-left text-gray-700 mt-2">
                    Roll up in style as a VIP at this prestigious football
                    event.
                  </p>
                  <h3 className="font-semibold text-left text-lg mt-2 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                    Concert E
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
