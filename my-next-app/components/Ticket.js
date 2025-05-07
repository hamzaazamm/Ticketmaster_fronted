"use client";

export default function Ticket() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="flex w-full">
        {/* Left Side - 80% */}
        <div className="w-[100%] px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* === Your 4 Cards (same as before) === */}
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
              {/* Image container with the hover effect */}
              <div className="relative w-full h-90 z-0">
                {/* Full card hover overlay (covers image only) */}
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                <img
                  src="/ticket-images/fifa.jpeg"
                  alt="FIFA Club World Cup"
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
              <div className="p-1.5 relative z-20">
                <p className="text-sm text-gray-700 mt-2 ">
                  Roll up in style as a VIP at this prestigious football event.
                </p>
                <h3 className="font-semibold text-lg mt-2 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  FIFA Club World Cup
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
              {/* Image container with the hover effect */}
              <div className="relative w-full h-90 z-0">
                {/* Full card hover overlay (covers image only) */}
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                <img
                  src="/ticket-images/haim1.jpg"
                  alt="Haim"
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
                <p className="text-sm text-gray-700 mt-2">
                  Roll up in style as a VIP at this prestigious football event.
                </p>
                <h3 className="font-semibold text-lg mt-2 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  Haim
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
              {/* Image container with the hover effect */}
              <div className="relative w-full h-90 z-0">
                {/* Full card hover overlay (covers image only) */}
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                <img
                  src="/ticket-images/musical.jpg"
                  alt="The Outsiders New Musical"
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
                <p className="text-sm text-gray-700 mt-2">
                  Roll up in style as a VIP at this prestigious football event.
                </p>
                <h3 className="font-semibold text-lg mt-2 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  The Outsiders New Musical
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
              {/* Image container with the hover effect */}
              <div className="relative w-full h-90 z-0">
                {/* Full card hover overlay (covers image only) */}
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

                <img
                  src="/ticket-images/images5.png"
                  alt="Farmer Lives In Danger"
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
                <p className="text-sm text-gray-700 mt-2">
                  Roll up in style as a VIP at this prestigious football event.
                </p>
                <h3 className="font-semibold text-lg mt-2 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                  Farmer Lives In Danger
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-15">
            {/* Desktop Image */}
            <img
              src="/ticket-images/advert.jpeg"
              alt="Center Image"
              className="mx-auto w-[700px] h-auto rounded-md shadow-md hidden sm:block"
            />

            {/* Mobile Image */}
            <img
              src="/ticket-images/195.jpeg" // Replace with the mobile image path
              alt="Center Image"
              className="mx-auto w-[300px] h-auto rounded-md shadow-md sm:hidden"
            />

            {/* Advertisement Text */}
            <p className="text-center text-sm text-gray-800">Advertisement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
