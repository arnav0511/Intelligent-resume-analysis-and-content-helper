import React from 'react';

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Left Section */}
      <div className="flex-1">
        <a href="#" className="btn btn-ghost text-xl font-bold">
          Resume Analyzer
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <details>
              <summary>More</summary>
              <ul className="bg-base-100 rounded-t-none p-2 shadow-md">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
