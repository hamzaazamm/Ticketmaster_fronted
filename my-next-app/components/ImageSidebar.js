"use client";
import React from "react";

const ImageSidebar = () => {
  return (
    <div>
      <div className="space-y-4">
        {/* Ad 1 */}
        <aside
          className="m-3 text-center"
          role="complementary"
          aria-label="Advertisement"
        >
          <a href="#" className="block">
            <img
              src="/sidebar-images/adddd.jpeg"
              alt="Advertisement"
              className="w-[90%] h-auto mx-auto shadow-md"
            />
          </a>
          <p className="text-sm text-black">Advertisement</p>
        </aside>

        {/* Ad 2 */}
        <aside
          className="w-full mx-auto border-t-2 border-gray-300 pt-6 flex justify-center"
          role="complementary"
          aria-label="Advertisement"
        >
          <a href="#" className="block w-[90%]">
            <img
              src="/sidebar-images/1.jpeg"
              alt="Advertisement"
              className="w-full h-auto rounded-sm"
            />
          </a>
        </aside>

        {/* Bottom border below Ad 2 */}
        <div className="w-full border-b-2 border-gray-300"></div>

        <div className="py-2 px-4">
          {/* Border above the heading */}
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            FEATURED
          </h2>

          <div className="flex flex-wrap justify-between gap-4">
            {/* Card 1 */}
            <div className="w-full sm:w-[100%] lg:w-[100%]  rounded-md overflow-hidden  relative group cursor-pointer">
              <div className="relative w-full h-40 z-0">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src="/ticket-images/fifa.jpeg"
                  alt="FIFA Club World Cup"
                  className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                />
                <div className="absolute top-0 right-0 w-0 group-hover:w-1/12 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="flex items-center justify-center h-full text-white text-2xl">
                    ➔
                  </div>
                </div>
              </div>
              <div className="p-1 relative z-20">
                <h3 className="font-semibold text-lg  text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  FIFA Club World Cup
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[100%] lg:w-[100%] rounded-md overflow-hidden relative group cursor-pointer">
              <div className="relative w-full h-40 z-0">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src="/sidebar-images/2.jpeg"
                  alt="NBA Finals"
                  className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                />
                <div className="absolute top-0 right-0 w-0 group-hover:w-1/12 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="flex items-center justify-center h-full text-white text-2xl">
                    ➔
                  </div>
                </div>
              </div>
              <div className="p-1 relative z-20">
                <h3 className="font-semibold text-lg text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  NBA Finals
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-[100%] lg:w-[100%]  rounded-md overflow-hidden  transition duration-300 relative group cursor-pointer">
              <div className="relative w-full h-40 z-0">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src="/sidebar-images/3.jpeg"
                  alt="Live Concert"
                  className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                />
                <div className="absolute top-0 right-0 w-0 group-hover:w-1/12 h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="flex items-center justify-center h-full text-white text-2xl">
                    ➔
                  </div>
                </div>
              </div>
              <div className="p-1 relative z-20">
                <h3 className="font-semibold text-lg text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  Live Concert
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSidebar;
