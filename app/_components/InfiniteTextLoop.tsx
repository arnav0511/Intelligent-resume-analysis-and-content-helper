"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const InfiniteTextLoop = () => {
  const textItems = [
    "AI-Powered Resume Builder",
    "Optimize Your Resume for ATS",
    "Generate Engaging LinkedIn Content",
    "Enhance Your Professional Presence",
    "AI-Driven Career Growth Tools",
  ];

  return (
    <div className="w-full py-10 bg-white overflow-hidden relative">
      {" "}
      {/* Increased padding, white background */}
      <div className="absolute inset-0 pointer-events-none"></div>
      {/* Very subtle gradient overlay */}
      <Swiper
        slidesPerView="auto"
        spaceBetween={48} // Increased spacing
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5500} // Tuned speed
        modules={[Autoplay]}
        className="flex items-center h-full"
      >
        {textItems.map((text, index) => (
          <SwiperSlide
            key={index}
            className="text-3xl font-semibold text-gray-500 px-16 py-3 whitespace-nowrap tracking-wide rounded-lg backdrop-blur-sm"
          >
            {" "}
            {/* Refined styling with rounded background and blur */}
            {text}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteTextLoop;
