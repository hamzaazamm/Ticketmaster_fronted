// components/Discover.js

export default function Discover() {
  return (
    <section className="px-6 py-5 bg-gray-100  ">
      <div className="w-[100%]">
        <div>
          <div className="border-t border-gray-300 w-full mb-4 mt-0"></div>
          <h2 className="text-2xl font-bold text-black mb-7 text-center">
            DISCOVER MORE
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className=" rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
            {/* Image container with hover overlay and blue slide */}
            <div className="relative w-full h-65 z-0">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

              {/* Image */}
              <img
                src="/discover-images/haim1.jpg"
                alt="Disney On Ice"
                className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
              />

              {/* Blue sliding bar */}
              <div className="absolute top-0 right-0 w-0 group-hover:w-[30px] h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="flex items-center justify-center h-full text-white text-2xl">
                  ➔
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 relative z-20">
              <p className="text-sm text-gray-500 mb-1">Theater</p>
              <h3 className="font-semibold text-lg mt-1 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                Disney On Ice Guide
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Here&apos;s what you need to know about how to make your Disney
                On Ice outing a dream come true.
              </p>
              <a
                href="#"
                className="text-indigo-600 mt-3 inline-block font-medium text-sm hover:underline"
              >
                Discover More →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
            {/* Image container with hover overlay and sliding bar */}
            <div className="relative w-full h-65 z-0">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

              {/* Image */}
              <img
                src="/discover-images/feroz.png"
                alt="Concert Tips"
                className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
              />

              {/* Sliding blue bar */}
              <div className="absolute top-0 right-0 w-0 group-hover:w-[30px] h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="flex items-center justify-center h-full text-white text-2xl">
                  ➔
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 relative z-20">
              <p className="text-sm text-gray-500 mb-1">Music</p>
              <h3 className="font-semibold text-lg mt-1 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                What to Bring to a Concert
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Read our ultimate packing checklist before you go to your next
                concert.
              </p>
              <a
                href="#"
                className="text-indigo-600 mt-3 inline-block font-medium text-sm hover:underline"
              >
                Discover More →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
            {/* Image container with hover overlay and sliding bar */}
            <div className="relative w-full h-65 z-0">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

              {/* Image */}
              <img
                src="/discover-images/ronaldo.jpg"
                alt="Ticketmaster Tips"
                className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
              />

              {/* Sliding blue bar */}
              <div className="absolute top-0 right-0 w-0 group-hover:w-[30px] h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="flex items-center justify-center h-full text-white text-2xl">
                  ➔
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 relative z-20">
              <p className="text-sm text-gray-500 mb-1">Tips</p>
              <h3 className="font-semibold text-lg mt-1 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                Get Started on Ticketmaster
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Everything you need to know about buying tickets, navigating
                your account, and more.
              </p>
              <a
                href="#"
                className="text-indigo-600 mt-3 inline-block font-medium text-sm hover:underline"
              >
                Discover More →
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className=" rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
            {/* Image container with hover overlay and sliding bar */}
            <div className="relative w-full h-65 z-0">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

              {/* Image */}
              <img
                src="/discover-images/zack.jpg"
                alt="Broadway Shows"
                className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
              />

              {/* Sliding blue bar */}
              <div className="absolute top-0 right-0 w-0 group-hover:w-[30px] h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="flex items-center justify-center h-full text-white text-2xl">
                  ➔
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 relative z-20">
              <p className="text-sm text-gray-500 mb-1">Arts & Theater</p>
              <h3 className="font-semibold text-lg mt-1 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                9 Broadway Shows to See This Spring in NYC
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Need ideas for family activities in NYC? Here are the best
                Broadway shows to see during the 2025 spring season.
              </p>
              <a
                href="#"
                className="text-indigo-600 mt-3 inline-block font-medium text-sm hover:underline"
              >
                Discover More →
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className=" rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
            {/* Image container with hover overlay and sliding bar */}
            <div className="relative w-full h-65 z-0">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

              {/* Image */}
              <img
                src="/discover-images/hi.jpg"
                alt="Ticket Sales Tips"
                className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
              />

              {/* Sliding blue bar */}
              <div className="absolute top-0 right-0 w-0 group-hover:w-[30px] h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="flex items-center justify-center h-full text-white text-2xl">
                  ➔
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 relative z-20">
              <p className="text-sm text-gray-500 mb-1">Tips</p>
              <h3 className="font-semibold text-lg mt-1 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                Don’t Play It By Ear — Prepare for Ticket Sales
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Tips to help you prepare for ticket sales and boost your chances
                to be there live.
              </p>
              <a
                href="#"
                className="text-indigo-600 mt-3 inline-block font-medium text-sm hover:underline"
              >
                Discover More →
              </a>
            </div>
          </div>

          {/* Card 6 */}
          <div className=" rounded-md overflow-hidden shadow-none hover:shadow-none transition duration-300 relative group cursor-pointer">
            {/* Image container with hover overlay and sliding bar */}
            <div className="relative w-full h-65 z-0">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

              {/* Image */}
              <img
                src="/discover-images/justin.jpg"
                alt="MLB Season"
                className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
              />

              {/* Sliding blue bar */}
              <div className="absolute top-0 right-0 w-0 group-hover:w-[30px] h-full bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="flex items-center justify-center h-full text-white text-2xl">
                  ➔
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 relative z-20">
              <p className="text-sm text-gray-500 mb-1">Sports</p>
              <h3 className="font-semibold text-lg mt-1 text-black group-hover:text-blue-500 group-hover:underline transition duration-200">
                MLB 2025 Season FAQs
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Get excited for Spring Training and Opening Day with our guide
                to the 2025 MLB season.
              </p>
              <a
                href="#"
                className="text-indigo-600 mt-3 inline-block font-medium text-sm hover:underline"
              >
                Discover More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
