import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950  text-white pt-16 pb-6 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-10"
        >
          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-[#A42F2B]">SVIM</span> College
            </h2>

            <p className="text-gray-300 mt-4 leading-7">
              Empowering students through quality education, innovation, and
              career-focused learning.
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#A42F2B] duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <Icon />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-[#A42F2B] cursor-pointer">Home</li>
              <li className="hover:text-[#A42F2B] cursor-pointer">About</li>
              <li className="hover:text-[#A42F2B] cursor-pointer">Courses</li>
              <li className="hover:text-[#A42F2B] cursor-pointer">Faculty</li>
              <li className="hover:text-[#A42F2B] cursor-pointer">Gallery</li>
            </ul>
          </div>

          {/* Courses */}

          <div>
            <h3 className="text-xl font-semibold mb-5">Programs</h3>

            <ul className="space-y-3 text-gray-300">
              <li>MCA</li>
              <li>BCA</li>
              <li>BBA</li>
              <li>B.Com</li>
              <li>MBA</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold mb-5">Contact</h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#A42F2B]" />
                <p>Ahmedabad, Gujarat</p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-[#A42F2B]" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-[#A42F2B]" />
                <p>info@svimcollege.edu</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} SVIM College. All Rights Reserved.
          </p>

          <p className="text-gray-300">
            Developed by{" "}
            <span className="text-[#A42F2B] font-semibold">Aman Kureshi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
