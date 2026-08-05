import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const courses = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Learn HTML, CSS, JavaScript, ReactJS, NodeJS and Full Stack Development.",
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "Database Management",
    desc: "Master SQL, MySQL, MongoDB and database design concepts.",
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    title: "Mobile Application",
    desc: "Develop Android and cross-platform mobile applications.",
  },
  {
    id: 4,
    icon: <FaCloud />,
    title: "Cloud Computing",
    desc: "Understand AWS, Azure, cloud architecture and deployment.",
  },
  {
    id: 5,
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    desc: "Explore AI, Machine Learning, Deep Learning and Data Science.",
  },
  {
    id: 6,
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    desc: "Learn ethical hacking, network security and cyber defense.",
  },
];

const CoursesSection = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading Animation */}
        <motion.div
          className="text-center mb-14"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#B45309] font-semibold uppercase tracking-widest body-font">
            Our Courses
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0d2b52] mt-3 heading-font">
            Master of Computer Applications (MCA)
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto body-font">
            Gain practical knowledge and industry-ready skills with our
            comprehensive MCA program designed for the modern IT world.
          </p>
        </motion.div>


        {/* Cards Animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              onTouchStart={() => setActiveCourse(course.id)}
              onTouchEnd={() =>
                setTimeout(() => setActiveCourse(null), 500)
              }
              onMouseLeave={() => setActiveCourse(null)}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}

              whileHover={{
                y: -10,
              }}

              className={`bg-white p-8 rounded-2xl shadow-md transition-all duration-300 group hover:shadow-xl ${activeCourse === course.id
                ? "shadow-xl"
                : ""
                }`}
            >

              {/* Icon */}
              <motion.div
                animate={
                  activeCourse === course.id
                    ? { rotate: 360 }
                    : { rotate: 0 }
                }
                transition={{ duration: 0.5 }}

                className={`w-16 h-16 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center text-3xl transition-all duration-300 ${activeCourse === course.id
                  ? "bg-[#0d2b52] text-white"
                  : ""
                  } group-hover:bg-[#0d2b52] group-hover:text-white`}
              >
                {course.icon}
              </motion.div>


              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#0d2b52] mt-6 heading-font">
                {course.title}
              </h3>


              {/* Description */}
              <p className="text-gray-500 mt-4 leading-7 body-font">
                {course.desc}
              </p>


              {/* Button */}
              <button
                className={`mt-6 font-semibold heading-font transition-all duration-300 ${activeCourse === course.id
                  ? "text-[#B45309]"
                  : "text-[#0d2b52]"
                  } hover:text-[#B45309] hover:underline`}
              >
                Read More →
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;