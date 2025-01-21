'use client'

import React from 'react';
import {useState} from 'react';

function Home() {
  const [pending,setPending] = useState(false);

  function clickme(){
    setPending(!pending)  
  }

  console.log(pending)

  return (
    <div className="flex flex-col min-h-screen">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
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
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className={`${pending}?btn border-2 : btn loading loading-spinner text-primary`} href="/dashboard" onClick ={clickme}>Dashboard</a>
          {/* <span className="loading loading-spinner text-primary"></span> */}
        </div>
      </div>
      {/* navbar */}

      {/* Hero section */}
      <div
        className="hero min-h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp")',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Card section */}
      <div className="flex grid-cols-5 gap-6 mt-10 px-10">
        <div className="card bg-warning  w-96">
          <div className="card-body">
            <h2 className="card-title">Resume Builder</h2>
            <p>Create professional resumes in minutes.</p>
            <div className="card-actions justify-end">
              <button className="btn glass">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-error text-secondary-content w-96">
          <div className="card-body text-neutral-content">
            <h2 className="card-title">Resume Optimization</h2>
            <p>Optimize your resume for ATS and recruiters.</p>
            <div className="card-actions justify-end">
              <button className="btn glass text-neutral-content">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-success text-accent-content w-96">
          <div className="card-body text-neutral-content">
            <h2 className="card-title">Content Creator for LinkedIn</h2>
            <p>Generate engaging content for your LinkedIn profile.</p>
            <div className="card-actions justify-end">
              <button className="btn glass text-neutral-content">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body">
            <h2 className="card-title">LinkedIn Profile Optimization</h2>
            <p>Optimize your LinkedIn profile for maximum visibility.</p>
            <div className="card-actions justify-end">
              <button className="btn glass">Learn More</button>
            </div>
          </div>
        </div>
        <div className="card bg-info text-info-content w-96">
          <div className="card-body text-neutral-content">
            <h2 className="card-title">AI Interviewer</h2>
            <p>Practice your interview skills with AI.</p>
            <div className="card-actions justify-end">
              <button className="btn glass text-neutral-content">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  )
}

export default Home