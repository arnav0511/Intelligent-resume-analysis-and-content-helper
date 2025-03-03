<<<<<<< HEAD
import React from 'react'
import SideNav from '../_components/SideNav'

function dashboard() {
  return (
    <div>
      <SideNav/>
    </div>
  )
}

export default dashboard
=======
"use server";

import React from "react";
import SideNav from "../_components/Navbar/SideNav";
import dynamic from "next/dynamic";

// Dynamic import of Swiper to prevent hydration errors
const SwiperDashboard = dynamic(() => import("../_components/SwiperDashboard"), {
  
});

function Page() {
  return (
    <div className="flex h-screen">
      {/* Side Navigation */}
      <SideNav />

      <div className="p-20 flex-col w-full">
        {/* Dashboard Header */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-600 mb-20">
          Welcome! Explore our tools to optimize your profile, enhance your resume, and boost your career.
        </p>

        {/* Swiper Animation for Cards - ONLY THIS SECTION REMAINS */}
        <SwiperDashboard />
      </div>
    </div>
  );
}

export default Page;
>>>>>>> 0ec330c (mid evaluation update)
