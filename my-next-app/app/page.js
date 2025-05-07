"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaBlogger,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import Popular from "@/components/Popular";
import Discover from "@/components/Discover";
import Ticket from "@/components/Ticket";
import Footer from "@/components/Footer";
import Sponsored from "@/components/Sponsored";
import Popular1 from "@/components/Popular1";
import Popular2 from "@/components/Popular2";
import Popular3 from "@/components/Popular3";
import ImageSidebar from "@/components/ImageSidebar";
import Entertainment from "@/components/Entertainment.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <main className="min-h-screen font-sans bg-grey-100">
        <Header />
        <Hero />

        {/* Main content wrapper */}
        <div className="flex flex-col lg:flex-row px-4">
          {/* Main content area */}
          <div className="w-full lg:w-[80%] mb-4 lg:mb-0">
            <Ticket />
            <Sponsored />
            <Popular />
            <Popular1 />
            <Popular2 />
            <Popular3 />
            <Entertainment />
            <Discover />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[17%] bg-white mb-4 lg:mb-0">
            <ImageSidebar />
          </div>

          {/* Empty space, adjust if necessary */}
          <div className="w-full lg:w-[3%] bg-gray-100"></div>
        </div>

        <Footer />
      </main>
    </>
  );
}
