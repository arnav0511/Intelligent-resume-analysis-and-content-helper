"use client";

import React, { useState } from "react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn } = useUser();

  function handleSubmit() {
    setIsLoading(true);

    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="navbar bg-base-100 text-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <ul className="p-2">
              <li>
                <a>Resume Builder</a>
              </li>
              <li>
                <a>Resume Optimization</a>
              </li>
              <li>
                <a>Content Creator for LinkedIn</a>
              </li>
              <li>
                <a>LinkedIn Profile Optimization</a>
              </li>
              <li>
                <a>AI Interviewer</a>
              </li>
            </ul>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Resume Analysis and More</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <details>
              <summary>Learn More</summary>
              <ul className="p-2 h-52 overflow-y-auto rounded-none z-10">
                <li>
                  <a>Resume Builder</a>
                </li>
                <li>
                  <a>Resume Optimization</a>
                </li>
                <li>
                  <a>Content Creator for LinkedIn</a>
                </li>
                <li>
                  <a>LinkedIn Profile Optimization</a>
                </li>
                <li>
                  <a>AI Interviewer</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {isSignedIn ? (
          <>
            <Link
              href={"/dashboard"}
              className={`btn gap-2 ${
                isLoading ? "loading loading-spinner text-primary" : ""
              }`}
              onClick={handleSubmit}
            >
              {isLoading ? "Loading..." : "Dashboard"}
            </Link>
            <UserButton />
          </>
        ) : (
          <div
            className={`btn ${
              isLoading ? "loading loading-spinner text-primary" : ""
            }`}
            onClick={handleSubmit}
          >
            <SignInButton />
          </div>
        )}
      </div>
    </div>
  );
}
