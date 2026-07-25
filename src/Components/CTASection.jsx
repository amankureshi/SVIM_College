import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg,#12396d 0%,#12396d 45%,#A42F2B 100%)",
      }}
    >
      {/* Background Blur */}

      <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#A42F2B]/40 blur-3xl"></div>

      <div className="absolute top-20 right-20 w-5 h-5 rounded-full bg-white/30"></div>

      <div className="absolute bottom-20 left-24 w-8 h-8 rounded-full border-2 border-white/30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >
          {/* Left */}

          <div>
            <span className="uppercase tracking-[5px] text-[#FFD166] font-semibold">
              Join SVIM College
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mt-5">
              Shape Your Future
              <br />
              <span className="text-[#FFD166]">With Quality Education</span>
            </h2>

            <p className="text-white/80 mt-8 leading-8 text-lg max-w-2xl">
              Join SVIM College and gain practical knowledge with experienced
              faculty, modern infrastructure, industry-oriented curriculum,
              internships, and excellent placement opportunities.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl">
                <h3 className="text-3xl font-bold text-white">5000+</h3>
                <p className="text-white/70 text-sm">Students</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl">
                <h3 className="text-3xl font-bold text-white">95%</h3>
                <p className="text-white/70 text-sm">Placement</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl">
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-white/70 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right */}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white rounded-[35px] p-10 shadow-2xl max-w-md w-full">
              <h3 className="text-3xl font-bold text-[#12396d]">
                Admission Open
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Begin your academic journey today and become part of one of the
                best colleges for higher education.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                w-full
                mt-8
                py-4
                rounded-full
                text-white
                font-semibold
                text-lg
                bg-[#A42F2B]
                hover:bg-[#8d2724]
                duration-300
                shadow-xl
                "
              >
                Apply For Admission →
              </motion.button>

              <button
                className="
                w-full
                mt-4
                py-4
                rounded-full
                border-2
                border-[#12396d]
                text-[#12396d]
                font-semibold
                hover:bg-[#12396d]
                hover:text-white
                duration-300
                "
              >
                Download Brochure
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
