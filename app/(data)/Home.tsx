"use client";
import React from "react";
import Navbar from "../_components/Navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";
import Atropos from "atropos/react";
import "atropos/css";
import InfiniteTextLoop from "../_components/InfiniteTextLoop";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="hero min-h-screen relative overflow-hidden w-[95dvw] mx-auto rounded-3xl ">
        {/* Background Video */}

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="hero-overlay bg-opacity-60 absolute top-0 left-0 w-full h-full bg-black"></div>

        {/* Content */}
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Heading with Typewriter Effect */}
            <h1 className="mb-5 text-7xl font-bold text-white">
              <Typewriter
                words={["Welcome to Your Professional Growth Companion"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            {/* Description */}
            <p className="mb-5 text-lg text-justify text-gray-300">
              Unlock your true potential with tools designed to empower your
              career. From crafting standout resumes to enhancing your
              professional presence, we’re here to help you achieve your goals
              effortlessly and effectively.
            </p>

            {/* Button */}
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>

      <br/>
      
      <div className="text-center">
      <InfiniteTextLoop />
      </div>

      <br />
      <div className="hero bg-white min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-6">
              Transform Your Career with{" "}
              <span className="text-blue-600">AI-Powered Tools</span>
            </h1>
            <p className="py-6 text-lg text-gray-700 leading-relaxed text-justify">
              Step into the future of career growth with our revolutionary
              platform designed to supercharge your professional journey. From
              optimizing your resume for ATS systems to crafting compelling
              LinkedIn posts, we provide AI-driven solutions tailored to your
              unique career aspirations. Explore, analyze, and excel with
              cutting-edge tools built just for you.
            </p>


            <div className="max-w-4xl mx-auto my-10">
              <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
                Revolutionizing Resume Building & LinkedIn 
              </h1>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                Our application is designed to simplify resume creation and
                content generation for LinkedIn. Whether you're a student or a
                seasoned professional, we leverage advanced AI capabilities to
                help you create ATS-friendly resumes, optimize your profiles,
                and craft compelling posts that stand out.
              </p>

              {/* Timeline Component */}

              <div className="relative my-10">
                {/* Timeline Rod */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

                <ul className="space-y-10">
                  {/* Feature 1 */}
                  <li className="flex items-start">
                    <div className="w-1/2 text-right pr-4">
                      <time className="font-mono italic text-blue-600">
                        Step 1
                      </time>
                      <div className="text-lg font-bold text-gray-800">
                        AI-Powered Resume Building
                      </div>
                      <p className="text-gray-600">
                        Input your career details, and let our AI craft a
                        professional, ATS-friendly resume tailored to your
                        target role.
                      </p>
                    </div>
                  </li>

                  {/* Feature 2 */}
                  <li className="flex items-start flex-row-reverse">
                    <div className="w-1/2 text-left pl-4">
                      <time className="font-mono italic text-green-600">
                        Step 2
                      </time>
                      <div className="text-lg font-bold text-gray-800">
                        Resume Improvement Suggestions
                      </div>
                      <p className="text-gray-600">
                        Upload your existing resume, and we’ll provide
                        actionable insights to optimize it for your desired job
                        role.
                      </p>
                    </div>
                  </li>

                  {/* Feature 3 */}
                  <li className="flex items-start">
                    <div className="w-1/2 text-right pr-4">
                      <time className="font-mono italic text-yellow-600">
                        Step 3
                      </time>
                      <div className="text-lg font-bold text-gray-800">
                        LinkedIn Content Creation
                      </div>
                      <p className="text-gray-600 ">
                        Generate professional captions for LinkedIn posts,
                        ensuring your updates are engaging, relevant, and
                        impactful.
                      </p>
                    </div>
                  </li>

                  {/* Feature 4 */}
                  <li className="flex items-start flex-row-reverse">
                    <div className="w-1/2 text-left pl-4">
                      <time className="font-mono italic text-red-600">
                        Step 4
                      </time>
                      <div className="text-lg font-bold text-gray-800">
                        LinkedIn Optimization Suggestions
                      </div>
                      <p className="text-gray-600 ">
                        Upload your LinkeIn profile, and we'll provide
                        actionable insights to optimise it for your better reach
                        in the network.
                      </p>
                    </div>
                  </li>

                  {/* Feature 5 */}
                  <li className="flex items-start">
                    <div className="w-1/2 text-right pr-4">
                      <time className="font-mono italic text-purple-600">
                        Step 5
                      </time>
                      <div className="text-lg font-bold text-gray-800">
                        AI-Powered Interviews
                      </div>
                      <p className="text-gray-600 ">
                        Practice and master the questions your interviewer might
                        ask in your upcoming interviews with the AI-Interviewer
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card section */}
      <div className="flex flex-wrap  gap-6 justify-center items-center min-h-screen m-10">
        {[
          {
            title: "Resume Builder",
            desc: "Create professional resumes in minutes.",
            bg: "bg-warning",
          },
          {
            title: "Resume Optimization",
            desc: "Optimize your resume for ATS and recruiters.",
            bg: "bg-error text-secondary-content",
          },
          {
            title: "Content Creator for LinkedIn",
            desc: "Generate engaging content for your LinkedIn profile.",
            bg: "bg-success text-accent-content",
          },
          {
            title: "LinkedIn Profile Optimization",
            desc: "Optimize your LinkedIn profile for maximum visibility.",
            bg: "bg-neutral text-neutral-content",
          },
          {
            title: "AI Interviewer",
            desc: "Practice your interview skills with AI.",
            bg: "bg-info text-info-content",
          },
        ].map((card, index) => (
          <Atropos key={index} className="w-96"   highlight={false}>
            <div
              className={`card ${card.bg} w-96 shadow-lg rounded-xl transition-transform duration-300 ease-in-out h-48`}
            >
              <div className="card-body text-neutral-content">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.desc}</p>
                <div className="card-actions justify-end">
                  <button className="btn glass text-neutral-content">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </Atropos>
        ))}
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
  );
}

export default Home;
