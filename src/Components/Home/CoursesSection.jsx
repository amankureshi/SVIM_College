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
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-[#B45309] font-semibold uppercase tracking-widest">
            Our Courses
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0d2b52] mt-3">
            Master of Computer Applications (MCA)
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Gain practical knowledge and industry-ready skills with our
            comprehensive MCA program designed for the modern IT world.
          </p>
        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center text-3xl group-hover:bg-[#0d2b52] group-hover:text-white duration-300">
                {course.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#0d2b52] mt-6">
                {course.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">{course.desc}</p>

              <button className="mt-6 text-[#0d2b52] font-semibold hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
