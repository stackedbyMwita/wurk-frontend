import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-60">
        <div className="max-w-7xl z-100 flex-col mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo_1.webp"
                alt="Wurk"
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="hidden items-center md:flex space-x-8">
              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <ul className="flex gap-6 text-gray-600">
                  <li>Home</li>
                  <li>Browse skills</li>
                  <li>Post Jobs</li>
                  <details>
                    <summary>Services</summary>
                    <ul className="p-4 shadow-lg bg-white rounded-md  text-sm absolute">
                      <li>Job matching</li>
                      <li>Customer Service</li>
                      <li>Ai Assistance</li>
                    </ul>
                  </details>
                </ul>
              </div>

              {/* Auth Buttons */}
              <div className="hidden md:flex space-x-4">
                <Button label="Login" />
                <Button label="Signup" />
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-700 focus:outline-none"
              >
                {isSidebarOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}

              </button>
            </div>
          </div>
          {/* Sidebar - Mobile Only */}
          <div
            className={`fixed left-0  w-full bg-gray-100 shadow-lg z-50 transform ${isSidebarOpen ? "-translate-y-0" : "-translate-y-full top-0"} transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between`}
          >
            <div>
              {/* Close Button */}
              <div className="flex justify-end p-4">
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col space-y-4 p-6">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 font-medium text-lg"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 font-medium text-lg"
                >
                  Browse skills
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 font-medium text-lg"
                >
                  Post jobs
                </a>
              </div>
            </div>

            {/* Logout Button */}
            <div className="p-6">
              <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition">
                Logout
              </button>
              <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>



      {/* Optional Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 backdrop:backdrop-blur-lg z-50 md:hidden"
        ></div>
      )}
    </>
  );
}

export default Nav;
