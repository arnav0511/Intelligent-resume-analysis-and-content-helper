'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SideNav() {
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(true);

  const toggleFeaturesVisibility = () => {
    setIsFeaturesVisible(!isFeaturesVisible);
  };

  return (
    <div className="w-64 h-screen bg-white text-gray-800 flex flex-col p-6 space-y-6 border-r border-gray-300">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* Home Button */}
      <button className="text-lg font-bold p-2 rounded hover:bg-gray-200 w-full text-left border-b border-gray-300">
        Home
      </button>

      {/* Personal Info */}
      <button className="text-lg font-bold p-2 rounded hover:bg-gray-200 w-full text-left border-b border-gray-300 " >
        Personal Info
      </button>

      {/* Features Section with Toggle Button */}
      <div className="w-full">
        <button
          className="text-lg font-bold p-2 rounded hover:bg-gray-200 flex justify-between items-center w-full text-left border-b border-gray-300"
          onClick={toggleFeaturesVisibility}
        >
          Features
          <span>{isFeaturesVisible ? '▼' : '►'}</span> {/* Toggle Arrow */}
        </button>

        {isFeaturesVisible && (
          <div className="ml-4 space-y-2">
           <Link href="/dashboard/AI-Resume"> <button className="text-sm font-bold p-2 rounded hover:bg-gray-200 w-full text-left border-b border-gray-300">
              AI-Powered Resume Building
            </button>
            </Link>
            <button className="text-sm font-bold p-2 rounded hover:bg-gray-200 w-full text-left border-b border-gray-300">
              Resume Optimization
            </button>
            <button className="text-sm font-bold p-2 rounded hover:bg-gray-200 w-full text-left border-b border-gray-300">
              LinkedIn Content Creation
            </button>
            <button className="text-sm font-bold p-2 rounded hover:bg-gray-200 w-full text-left border-b border-gray-300">
              LinkedIn Profile Optimization
            </button>
            <button className="text-sm font-bold p-2 rounded hover:bg-gray-200 w-full text-left">
              AI-Powered Interviews
            </button>
          </div>
        )}
      </div>

      {/* History Section */}
      <button className="text-lg font-bold p-2 rounded hover:bg-gray-200 w-full text-left">
        History
      </button>
    </div>
  );
}

export default SideNav;
