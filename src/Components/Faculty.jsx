import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowLeft,
} from "react-icons/fa";

const faculties = [
  {
    id: 1,
    name: "Dr. Rupesh Vyas",
    designation: "Director of MCA Department",
    expertise: "AI & Machine Learning",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Bhumika Arora",
    designation: "Assistant Professor",
    expertise: "Data Warehousing and Data Mining, Full Stack Development",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Prof. Vishwa Chaudhari",
    designation: "Associate Professor",
    expertise: "Advanced Object Oriented Technology, Advanced Networking",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 4,
    name: "Prof. Palak Suthar",
    designation: "Assistant Professor",
    expertise: "Cloud Computing, Python, Web Technologies",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Pending....",
    designation: "Assistant Professor",
    expertise: "Cyber Security",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function FacultyCarousel() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev === faculties.length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    setActive((prev) => (prev === 0 ? faculties.length - 1 : prev - 1));
  };

  const visibleCards = [
    faculties[active],
    faculties[(active + 1) % faculties.length],
    faculties[(active + 2) % faculties.length],
  ];

  return (
    // <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-20">
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center text-white">
          <h1 className="text-4xl font-bold">Meet Our MCA Faculty</h1>

          <p className="mt-3 text-blue-200">
            Experienced mentors shaping future IT professionals
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={previous}
            className="rounded-full bg-white/20 px-5 py-3 text-2xl text-white backdrop-blur hover:bg-white/30"
          >
            <FaArrowAltCircleLeft />
          </button>

          <motion.div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {visibleCards.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`
                  rounded-3xl border border-white/20
                  bg-white/10 p-6 text-center
                  text-white backdrop-blur-xl
                  shadow-2xl
                  ${index === 1 ? "md:scale-110" : ""}
                `}
              >
                <div className="relative mx-auto w-fit">
                  <img
                    src={faculty.image}
                    className="h-32 w-32 rounded-full border-4 border-blue-950 object-cover"
                  />

                  <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-2 border-white bg-green-500"></span>
                </div>

                <h2 className="mt-5 text-xl font-bold">{faculty.name}</h2>

                <p className="mt-2 text-blue-200">{faculty.designation}</p>

                <div className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm">
                  {faculty.expertise}
                </div>

                <button className="mt-6 rounded-full bg-[#A42F2B] px-6 py-2 font-semibold hover:bg-blue-600">
                  View Profile
                </button>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={next}
            className="rounded-full bg-white/20 px-5 py-3 text-2xl text-white backdrop-blur hover:bg-white/30"
          >
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
}
