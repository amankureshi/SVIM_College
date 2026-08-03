import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-10 lg:pt-0">
      <div className="mx-auto max-w-7xl">
        {/* Background Blur */}

        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#12396d]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#A42F2B]/10 blur-3xl"></div>

        {/* Dots */}

        <div
          // className="absolute top-24 left-10 opacity-20"
          className="absolute top-24 left-10 hidden opacity-20 lg:block"
        >
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-[#12396d]"></span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full border border-white bg-white/20 px-5 py-2 shadow-lg backdrop-blur-[30px]"
              >
                <FaGraduationCap className="text-[#A42F2B]" />

                <span className="text-sm font-semibold text-[#12396d]">
                  Admission Open 2026-27
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center text-4xl font-extrabold leading-tight text-[#12396d] sm:text-5xl md:text-6xl lg:mt-8 lg:text-left lg:text-7xl"
              >
                Build Your
                <br />
                <span className="text-[#A42F2B]">Dream Career</span>
                <br />
                With SVIM
              </motion.h1>

              {/* Description */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left"
              >
                Unlock your potential with industry-focused education,
                experienced faculty, modern infrastructure and outstanding
                placement opportunities. Begin your journey towards a successful
                future today.
              </motion.p>

              {/* Buttons */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <button
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full p-[2px] shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 sm:w-auto"
                >
                  {/* Animated Border */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A42F2B] via-orange-400 to-[#12396d] opacity-100 blur-sm transition-all duration-500 group-hover:blur-md" />

                  {/* Button Body */}
                  <span className="relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#A42F2B] px-8 py-4 font-semibold text-white sm:w-auto">
                    {/* Shine Effect */}
                    <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/30 transition-all duration-700 group-hover:left-[120%]" />

                    {/* Text */}
                    <span className="relative z-10">Apply Now</span>

                    {/* Arrow Circle */}
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#A42F2B] transition-all duration-500 group-hover:bg-[#12396d] group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1"
                      >
                        <path d="M13.172 12L8.222 7.05L9.636 5.636L16 12L9.636 18.364L8.222 16.95L13.172 12Z" />
                      </svg>
                    </span>
                  </span>
                </button>

                <button className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#12396d] px-8 py-4 font-semibold text-[#12396d] duration-300 hover:bg-[#12396d] hover:text-white sm:w-auto">
                  <FaPlay />
                  Explore Courses
                </button>
              </motion.div>

              {/* Stats */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                // className="flex flex-wrap gap-8 mt-16"
                className="mt-12 grid grid-cols-2 justify-center gap-6 sm:flex lg:justify-start"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#12396d] text-white">
                    <FaUsers />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#12396d]">5000+</h3>

                    <p className="text-gray-500">Students</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A42F2B] text-white">
                    <FaAward />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#12396d]">95%</h3>

                    <p className="text-gray-500">Placement</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ==========================
             PART-2 Added Image
             ========================== */}

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative mt-10 flex justify-center lg:mt-0"
            >
              {/* Main Image */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <div className="h-[360px] w-[280px] overflow-hidden rounded-[30px] border-4 border-white shadow-[0_25px_60px_rgba(0,0,0,.25)] sm:h-[430px] sm:w-[340px] sm:border-8 md:h-[500px] md:w-[400px] lg:h-[520px] lg:w-[420px] lg:rounded-[40px]">
                  <img
                    src="https://college-npccsm.vercel.app/images/fCollege.jpg"
                    alt="Student"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Background Circle */}

              {/* <div className="absolute top-10 w-[420px] h-[420px] rounded-full bg-[#12396d]/10 blur-2xl"></div> */}
              <div className="absolute top-10 h-[280px] w-[280px] rounded-full bg-[#12396d]/10 blur-2xl sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]"></div>

              {/* Circle Border */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-8 right-8 h-28 w-28 rounded-full border-[3px] border-dashed border-[#A42F2B]"
              ></motion.div>

              {/* Placement Card */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-2 top-6 z-30 rounded-2xl bg-white p-3 shadow-xl sm:left-0 sm:top-12 sm:p-5"
              >
                <h3 className="text-3xl font-bold text-[#A42F2B]">95%</h3>

                <p className="text-gray-500">Placement</p>
              </motion.div>

              {/* Students Card */}

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                // className="absolute right-0 bottom-20 bg-white rounded-3xl shadow-xl p-5 z-30"
                className="absolute bottom-10 right-2 z-30 rounded-2xl bg-white p-3 shadow-xl sm:bottom-20 sm:right-0 sm:p-5"
              >
                <h3 className="text-3xl font-bold text-[#12396d]">5000+</h3>

                <p className="text-gray-500">Students</p>
              </motion.div>

              {/* NAAC Card */}

              <motion.div
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                }}
                // className="absolute left-10 bottom-5 bg-[#12396d] text-white px-6 py-4 rounded-2xl shadow-xl z-30"
                className="absolute bottom-0 left-4 z-30 rounded-xl bg-[#12396d] px-4 py-3 text-white shadow-xl sm:left-10 sm:rounded-2xl sm:px-6"
              >
                <p className="text-lg font-bold">NAAC</p>

                <span className="text-sm text-white/80">Accredited</span>
              </motion.div>

              {/* Admission Badge */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                // className="absolute -right-6 top-36 bg-[#A42F2B] text-white px-6 py-3 rounded-full shadow-xl z-30"
                className="absolute right-0 top-24 z-30 rounded-full bg-[#A42F2B] px-4 py-2 text-xs text-white shadow-xl sm:-right-4 sm:top-36 sm:px-6 sm:py-3 sm:text-base lg:-right-6"
              >
                Admission Open
              </motion.div>

              {/* Decorative Dots */}

              <div className="absolute -left-10 bottom-32 grid grid-cols-5 gap-2 opacity-30">
                {[...Array(25)].map((_, i) => (
                  <span
                    key={i}
                    // className="w-2 h-2 rounded-full bg-[#12396d]"
                    className="absolute -left-10 bottom-32 hidden grid-cols-5 gap-2 opacity-30 md:grid"
                  ></span>
                ))}
              </div>

              {/* Small Floating Circle */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                // className="absolute top-0 right-36 w-6 h-6 rounded-full bg-[#A42F2B]"
                className="absolute right-36 top-0 hidden bg-[#A42F2B] md:block"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-8 right-48 h-10 w-10 rounded-full border-4 border-[#12396d]"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;