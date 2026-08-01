import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "info@college.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Ahmedabad, Gujarat",
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    value: "Mon - Sat : 9 AM - 5 PM",
  },
];

export default function Contact() {
  return (
    <section className="py-24 bg-slate-50 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#A42F2B] font-semibold uppercase tracking-[4px]">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-[#12396d] mt-3">
            Let's Start A Conversation
          </h2>

          <p className="text-gray-500 mt-4">
            We'd love to answer your questions and help you with admissions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-5"
          >
            {info.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 bg-white rounded-3xl p-6 shadow hover:-translate-y-2 hover:shadow-xl duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#12396d] text-white flex justify-center items-center text-xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-[#12396d] text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white rounded-[35px] p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-xl p-4 outline-none focus:border-[#A42F2B]"
              />

              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-xl p-4 outline-none focus:border-[#A42F2B]"
              />

              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded-xl p-4 outline-none focus:border-[#A42F2B]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-xl p-4 outline-none focus:border-[#A42F2B]"
              />
            </div>

            <textarea
              rows={6}
              placeholder="Write Your Message..."
              className="border border-gray-300 rounded-xl p-4 w-full mt-5 resize-none outline-none focus:border-[#A42F2B]"
            ></textarea>

            <button
              className="
              mt-6
              bg-gradient-to-r
              from-[#12396d]
              to-[#A42F2B]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              duration-300
              shadow-lg
              "
            >
              Send Message →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
