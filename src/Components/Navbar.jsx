import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className=" text-xl rounded-full w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="" srcset="" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-800">SVIM College</h1>
              <p className="text-xs text-gray-500">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </a>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium"
              >
                Courses
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {courseOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-48 py-2">
                  <a href="#bca" className="block px-4 py-2 hover:bg-blue-50">
                    BCA
                  </a>

                  <a href="#bba" className="block px-4 py-2 hover:bg-blue-50">
                    BBA
                  </a>

                  <a href="#mba" className="block px-4 py-2 hover:bg-blue-50">
                    MBA
                  </a>
                </div>
              )}
            </div>

            <a
              href="#admissions"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Admissions
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </a>

            <button className="bg-orange-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              Login
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-5 space-y-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded hover:bg-blue-50"
            >
              Home
            </a>

            <a
              href="#about"
              className="block px-3 py-2 rounded hover:bg-blue-50"
            >
              About
            </a>

            <button
              onClick={() => setCourseOpen(!courseOpen)}
              className="flex items-center justify-between w-full px-3 py-2 hover:bg-blue-50 rounded"
            >
              Courses
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {courseOpen && (
              <div className="ml-5 space-y-2">
                <a href="#bca" className="block text-gray-600">
                  BCA
                </a>

                <a href="#bba" className="block text-gray-600">
                  BBA
                </a>

                <a href="#mba" className="block text-gray-600">
                  MBA
                </a>
              </div>
            )}

            <a
              href="#admissions"
              className="block px-3 py-2 rounded hover:bg-blue-50"
            >
              Admissions
            </a>

            <a
              href="#contact"
              className="block px-3 py-2 rounded hover:bg-blue-50"
            >
              Contact
            </a>

            <button className="w-full bg-blue-600 text-white py-2 rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
