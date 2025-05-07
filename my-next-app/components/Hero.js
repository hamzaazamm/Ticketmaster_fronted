// components/Hero.js
'use client';

export default function Hero() {
  return (
    <div
      className="relative bg-gray-700 text-white h-80 md:h-140 px-4 md:px-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-images/hero.png')" }}
    >
      {/* Bottom-left content */}
      <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 font-Poppins">
        <p className="text-xs uppercase">Promoted</p>
        <h1 className="text-xl md:text-3xl font-bold mb-2">
          Bryan Adams: Roll with the Punches
        </h1>
        <p className="mb-2 md:mb-4 text-sm md:text-base">PRESALE AVAILABLE NOW</p>
        <button className="bg-indigo-700 hover:bg-indigo-800 px-4 py-2 w-32 md:w-40 text-white rounded text-sm md:text-base">
          Find Tickets
        </button>
      </div>

      {/* Citi watermark */}
      <div className="absolute right-4 md:right-10 bottom-4 md:bottom-10 text-xl md:text-3xl font-bold text-white opacity-20">
        citi
      </div>
    </div>
  );
}