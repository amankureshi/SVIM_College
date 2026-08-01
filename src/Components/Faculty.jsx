import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
    expertise: "Data Warehousing, Data Mining & Full Stack Development",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Prof. Vishwa Chaudhari",
    designation: "Associate Professor",
    expertise: "Networking & Object Oriented Technology",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 4,
    name: "Prof. Palak Suthar",
    designation: "Assistant Professor",
    expertise: "Cloud Computing, Python & Web Technologies",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Prof. Rahul Patel",
    designation: "Assistant Professor",
    expertise: "Cyber Security",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const FacultySlider = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-[4px] text-[#A42F2B]">
            Our Faculty
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#12396d]">
            Meet Our Expert Faculty
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Experienced professors guiding students with practical knowledge and
            industry focused learning.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {faculties.map((faculty) => (
            <SwiperSlide key={faculty.id}>
              <motion.div
                whileHover={{
                  y: -10,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-lg
                  "
              >
                {/* Image */}

                <div
                  className="
                    relative
                     overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 
                    p-8
                    text-center
                  "
                >
                  <div
                    className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    text-white
                    "
                  >
                    <FaGraduationCap />
                  </div>

                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="
                      mx-auto
                      h-32
                      w-32
                      rounded-full
                      border-4
                      border-white
                      object-cover
                      "
                  />
                </div>

                {/* Content */}

                <div className="p-6 text-center">
                  <h3
                    className="
                    text-xl
                    font-bold
                    text-[#12396d]
                    "
                  >
                    {faculty.name}
                  </h3>

                  <p
                    className="
                    mt-2
                    font-semibold
                    text-[#A42F2B]
                    "
                  >
                    {faculty.designation}
                  </p>

                  <p
                    className="
                    mt-4
                    text-sm
                    leading-6
                    text-gray-600
                    "
                  >
                    {faculty.expertise}
                  </p>

                  <div
                    className="
                    mt-5
                    flex
                    justify-center
                    gap-3
                    "
                  >
                    <button
                      className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      text-[#12396d]
                      hover:bg-[#12396d]
                      hover:text-white
                      "
                    >
                      <FaLinkedin />
                    </button>

                    <button
                      className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-red-50
                      text-[#A42F2B]
                      hover:bg-[#A42F2B]
                      hover:text-white
                      "
                    >
                      <FaEnvelope />
                    </button>
                  </div>

                  <button
                    className="
                    mt-6
                    rounded-full
                    bg-[#12396d]
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#A42F2B]
                    "
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FacultySlider;
