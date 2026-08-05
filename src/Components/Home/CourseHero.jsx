import React from "react";
import { motion } from "framer-motion";
import goldMedal from "../../assets/Courses/gold_medal.png";
import faculty from "../../assets/Courses/female.png";
import skill from "../../assets/Courses/degree.png";

const CourseHero = () => {
  const features = [
    {
      icon: faculty,
      title: "Expert Faculty",
      desc: "Learn from experienced professors and industry experts.",
    },
    {
      icon: skill,
      title: "Skill Based Learning",
      desc: "Practical knowledge with career focused courses.",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2">

          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex w-full justify-center"
          >
            <motion.img
              src="https://assets.website-files.com/64003e34c782ee4342316f07/646d9ba42c037b5778b00526_home-about-two.png"
              alt="Student"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="relative z-10 mx-auto h-auto w-full max-w-[320px] object-contain sm:max-w-[90%] lg:max-w-none"
            />

            {/* Satisfaction Card */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-xl bg-white/30 p-4 shadow-xl backdrop-blur-xl sm:bottom-10 sm:left-0 sm:-left-5 sm:translate-x-0 sm:p-5 lg:bottom-15 lg:-left-10"
            >
              <div className="flex justify-center">
                <img src={goldMedal} alt="Gold Medal" width={40} />
              </div>

              <p className="mt-2 text-center text-sm text-gray-500 sm:text-base body-font">
                95% Students
                <br />
                Satisfaction
              </p>
            </motion.div>
          </motion.div>


          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl font-bold leading-tight text-[#102b57] sm:text-4xl lg:text-5xl heading-font">
              Improve your
              <br />
              Knowledge with
              <br />
              our Course
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg lg:mx-0 body-font">
              Provide most popular courses that help students build their career
              with practical knowledge and modern technology skills.
            </p>


            {/* Feature Cards */}
            <div className="mt-8 space-y-5 sm:mt-10">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    x: 10,
                  }}
                  className="flex flex-col gap-4 rounded-xl bg-white p-4 text-left shadow-[0_10px_35px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-green-50 sm:h-16 sm:w-16">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="break-words text-lg font-semibold text-gray-800 sm:text-xl heading-font">
                      {item.title}
                    </h3>

                    <p className="mt-1 break-words text-sm text-gray-500 sm:text-base body-font">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CourseHero;