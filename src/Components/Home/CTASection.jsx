import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-24 mb-25"
      style={{
        background:
          "linear-gradient(135deg,#12396d 0%,#12396d 45%,#A42F2B 100%)",
      }}
    >
      {/* Background Blur */}
      <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#A42F2B]/40 blur-3xl"></div>

      <div className="absolute top-20 right-20 h-5 w-5 rounded-full bg-white/30"></div>

      <div className="absolute bottom-20 left-24 h-8 w-8 rounded-full border-2 border-white/30"></div>

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid items-center gap-14 lg:grid-cols-2"
        >
          {/* Left */}

          <div>
            <span className="font-semibold uppercase tracking-[5px] text-[#FFD166] body-font">
              Join SVIM College
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl heading-font">
              Shape Your Future
              <br />
              <span className="text-[#FFD166]">With Quality Education</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 body-font">
              Join SVIM College and gain practical knowledge with experienced
              faculty, modern infrastructure, industry-oriented curriculum,
              internships, and excellent placement opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">5000+</h3>
                <p className="text-sm text-white/70">Students</p>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">95%</h3>
                <p className="text-sm text-white/70">Placement</p>
              </div>

              <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-sm text-white/70">Years Experience</p>
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
            <div className="w-full max-w-md rounded-[35px] bg-white p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#12396d] heading-font">
                Admission Open
              </h3>

              <p className="mt-4 leading-7 text-gray-500 body-font">
                Begin your academic journey today and become part of one of the
                best colleges for higher education.
              </p>

              <motion.button
                whileHover={{ scale: 1.06, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full rounded-full bg-[#A42F2B] py-4 text-lg font-medium text-white shadow-xl duration-300 hover:bg-[#8d2724] heading-font"
              >
                Apply For Admission →
              </motion.button>

              <button className="mt-4 w-full rounded-full border-2 border-[#12396d] py-4 font-medium text-[#12396d] duration-300 hover:bg-[#12396d] hover:text-white heading-font">
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
