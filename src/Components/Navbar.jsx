import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Programs",
      dropdown: true,
    },
    {
      name: "Admissions",
    },
    {
      name: "Faculty",
    },
    {
      name: "Placements",
    },
    {
      name: "Campus",
    },
    {
      name: "Contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/90 shadow-lg backdrop-blur-xl"
        : "bg-white shadow-md"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="SVIM Logo"
              className="h-16 w-16 object-contain"
              whileHover={{
                scale: 1.05,
                rotate: 5,
              }}
              transition={{
                type: "spring",
              }}
            />

            <div>
              <h1 className="text-xl font-bold text-[#12396d]">
                SVIM College
              </h1>

              <p className="text-xs text-gray-500">
                Excellence in Education
              </p>
            </div>
          </div>


          {/* Desktop Menu */}

          <div className="hidden items-center gap-8 lg:flex">

            <a
              href="#home"
              className="group relative font-medium text-gray-700 transition hover:text-[#A42F2B]"
            >
              Home

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#A42F2B] transition-all duration-300 group-hover:w-full"></span>
            </a>


            <a
              href="#about"
              className="group relative font-medium text-gray-700 transition hover:text-[#A42F2B]"
            >
              About

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#A42F2B] transition-all duration-300 group-hover:w-full"></span>
            </a>


            {/* Programs Dropdown */}

            <div className="relative">

              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-[#A42F2B]"
              >
                Programs

                <ChevronDownIcon
                  className={`h-4 w-4 transition ${courseOpen ? "rotate-180" : ""
                    }`}
                />
              </button>


              <AnimatePresence>

                {courseOpen && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 15,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="absolute left-0 top-10 w-52 rounded-xl bg-white p-3 shadow-xl"
                  >

                    <a
                      href="#mca"
                      className="block rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-[#12396d]"
                    >
                      MCA
                    </a>


                    <a
                      href="#bca"
                      className="block rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-[#12396d]"
                    >
                      BCA
                    </a>


                    <a
                      href="#mba"
                      className="block rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-[#12396d]"
                    >
                      MBA
                    </a>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>


            {menuItems
              .filter((item) => !item.dropdown)
              .map((item, index) => (

                <a
                  key={index}
                  href={`#${item.name.toLowerCase()}`}
                  className="group relative font-medium text-gray-700 transition hover:text-[#A42F2B]"
                >

                  {item.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#A42F2B] transition-all duration-300 group-hover:w-full"></span>

                </a>

              ))}



            {/* Apply Button */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative overflow-hidden rounded-full bg-[#A42F2B] px-7 py-3 font-semibold text-white shadow-lg"
            >

              <span className="relative z-10">
                Apply Now
              </span>


              <span
                className="
                absolute
                inset-0
                translate-y-full
                bg-[#12396d]
                transition-all
                duration-500
                group-hover:translate-y-0
                "
              />

            </motion.button>


          </div>



          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >

            {mobileOpen ? (
              <XMarkIcon className="h-8 w-8 text-[#12396d]" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-[#12396d]" />
            )}

          </button>


        </div>


      </div>



      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed right-0 top-20 h-screen w-80 bg-white p-6 shadow-xl lg:hidden"
          >


            <div className="space-y-4">


              {[
                "Home",
                "About",
                "Programs",
                "Admissions",
                "Faculty",
                "Placements",
                "Campus",
                "Contact",
              ].map((item, index) => (

                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-[#12396d]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>

              ))}


              <button
                className="
                w-full
                rounded-full
                bg-[#A42F2B]
                py-3
                font-semibold
                text-white
                "
              >
                Apply Now
              </button>


            </div>


          </motion.div>

        )}

      </AnimatePresence>


    </motion.nav>
  );
};

export default Navbar;