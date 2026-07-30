import React from "react";
import { motion } from "framer-motion";

import goldMedal from "../assets/gold_medal.png";
import faculty from "../assets/Courses/female.png";
import skill from "../assets/Courses/degree.png";

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
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <motion.img
              src="https://assets.website-files.com/64003e34c782ee4342316f07/646d9ba42c037b5778b00526_home-about-two.png"
              alt="Student"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="relative z-10 object-contain"
            />

            {/* Satisfaction Card */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="absolute bottom-15 -left-10 z-20 rounded-xl bg-white/30 p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex justify-center">
                <img src={goldMedal} alt="Gold Medal" width={40} />
              </div>

              <p className="mt-2 text-center text-gray-500">
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
          >
            <h1 className="text-5xl font-bold leading-tight text-[#102b57]">
              Improve your
              <br />
              Knowledge with
              <br />
              our Course
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Provide most popular courses that help students build their career
              with practical knowledge and modern technology skills.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 space-y-5">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    x: 10,
                  }}
                  className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-50">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-12 w-12"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-gray-500">{item.desc}</p>
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
