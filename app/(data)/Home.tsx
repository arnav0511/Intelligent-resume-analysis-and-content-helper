import React from "react";
import Navbar from "../_components/Navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
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
            <h1 className="mb-5 text-5xl font-bold">Welcome to Your Professional Growth Companion</h1>
            <p className="mb-5 text-justified">
              Unlock your true potential with tools designed to empower your career. From crafting standout resumes to enhancing your professional presence, we’re here to help you achieve your goals effortlessly and effectively
            </p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>
      <br /><br />
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
              <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
                Revolutionizing Resume Building
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
                        User-Friendly Interface
                      </div>
                      <p className="text-gray-600 ">
                        Navigate seamlessly with an intuitive interface designed
                        to simplify the resume-building process for everyone.
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
                        Secure and Private
                      </div>
                      <p className="text-gray-600 ">
                        Your data is encrypted and securely stored, ensuring
                        your privacy at every step of the process.
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
      <div className="flex flex-wrap md:flex-nowrap gap-6  m-10">
        <div className="card bg-warning  w-96">
          <div className="card-body">
            <h2 className="card-title">Resume Builder</h2>
            <p>Create professional resumes in minutes.</p>
            <div className="card-actions justify-end">
              <button className="btn glass">Learn More</button>
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
  );
}

export default Home;
