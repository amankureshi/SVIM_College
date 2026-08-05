import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const MCACollegeFooter = () => {
  const quickLinks = [
    "Home",
    "About",
    "Courses",
    "Faculty",
    "Admission",
    "Placement",
    "Contact",
  ];

  const programs = [
    "Web Development",
    "Artificial Intelligence",
    "Data Science",
    "Cyber Security",
    "Programming Labs",
  ];

  const socialIcons = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "#",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "#",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#A42F2B] to-[#12396d] text-white">
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-white to-blue-300 animate-pulse" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >

          {/* About */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl"
          >
            <h2 className="text-2xl font-bold">
              SVIM Master of Computer Applications
            </h2>

            <p className="mt-5 text-gray-200 text-sm leading-relaxed">
              The MCA Department at ABC Institute of Computer Applications
              provides advanced computer education with industry-focused
              learning, practical training, innovative research, and modern
              technology skills to prepare students for successful careers.
            </p>

            <div className="mt-6 flex gap-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  aria-label={social.name}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>


          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{
                      x: 8,
                    }}
                    className="text-gray-200 hover:text-white transition-all duration-300 text-sm"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* Programs */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold mb-5">
              MCA Programs
            </h3>

            <ul className="space-y-3">
              {programs.map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{
                      x: 8,
                    }}
                    className="text-gray-200 hover:text-white transition-all duration-300 text-sm"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                📍 SVIM MCA, KSV, Kadi, Gujarat
              </li>

              <li>
                📞 +91 98765 43210
              </li>

              <li>
                ✉️ info@abcinstitute.edu
              </li>

              <li>
                🕒 Mon - Sat : 9:00 AM - 5:00 PM
              </li>
            </ul>
          </motion.div>

        </motion.div>


        {/* Newsletter */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5"
        >

          <div>
            <h3 className="text-xl font-semibold">
              Subscribe To MCA Updates
            </h3>

            <p className="text-sm text-gray-200 mt-1">
              Get latest college news, events and announcements.
            </p>
          </div>


          <div className="flex w-full md:w-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 px-4 py-3 rounded-l-xl bg-white/20 border border-white/30 placeholder-gray-200 text-white outline-none focus:ring-2 focus:ring-white"
            />

            <button
              className="px-5 py-3 rounded-r-xl bg-white text-[#12396d] font-semibold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>

          </div>

        </motion.div>


        {/* Bottom Footer */}
        <div className="mt-10 border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-200">

          <p>
            © {new Date().getFullYear()} SVIM MCA
            All Rights Reserved.
          </p>


          <motion.button
            onClick={scrollTop}
            whileHover={{
              scale: 1.15,
            }}
            className="w-11 h-11 rounded-full bg-white text-[#A42F2B] flex items-center justify-center shadow-xl"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default MCACollegeFooter;