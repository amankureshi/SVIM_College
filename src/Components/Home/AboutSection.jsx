import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side Image Animation */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-[500px] w-full overflow-hidden rounded-3xl">
              <img
                src="https://i.postimg.cc/sx7Gr4kB/about-institute.jpg"
                alt="About College"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <motion.div
              className="absolute bottom-4 right-4 rounded-2xl bg-blue-950 p-4 text-white shadow-xl sm:-bottom-8 sm:-right-8 sm:p-6"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl body-font">
                25+
              </h2>
              <p className="mt-2 text-xs sm:text-sm body-font">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>


          {/* Right Content Animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-semibold uppercase tracking-widest text-[#B45309] body-font">
              About Our College
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0d2b52] lg:text-5xl heading-font">
              Empowering Students
              <br />
              For A Better Future
            </h2>

            <p className="mt-6 leading-8 text-gray-600 body-font">
              Our college provides quality education with experienced faculty,
              modern classrooms, practical learning, and excellent placement
              opportunities to help every student build a successful career.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 body-font">
              {[
                "Experienced Faculty",
                "Modern Classrooms",
                "Placement Support",
                "Digital Library",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                >
                  <FaCheckCircle className="text-xl text-[#12396d]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <button className="mt-10 rounded-full bg-[#A42F2B] px-8 py-4 font-semibold text-white duration-300 hover:bg-[#12396d] heading-font">
              Learn More
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;