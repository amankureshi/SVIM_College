import React from "react";
import { motion } from "framer-motion";

const PageHero = ({
  category = "Curricular Activities",
  title = "Seminars & Expert Talks",
  description = "Connecting students with industry leaders, alumni experts, and academic stalwarts through curated knowledge-sharing sessions that bridge classroom and career.",
  stats = [
    {
      number: "30+",
      label: "Sessions Held",
      icon: "🎙️",
    },
    {
      number: "500+",
      label: "Students Reached",
      icon: "👥",
    },
    {
      number: "20+",
      label: "Industry Speakers",
      icon: "💼",
    },
  ],
}) => {
  return (
    <section
      className="
      relative 
      overflow-hidden
      bg-gradient-to-r 
      from-[#0b1d44]
      via-[#122957]
      to-[#182f5c]
      px-8
      py-24
      text-white
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        right-0
        top-0
        h-full
        w-[400px]
        bg-blue-400/10
        blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 flex items-center gap-3 text-sm text-gray-300"
        >
          <span>{category}</span>

          <span>›</span>

          <span className="font-semibold text-[#d9ae68]">
            {title.toUpperCase()}
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
          max-w-4xl
          text-5xl
          font-bold
          leading-tight
          "
        >
          {title}
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
          mt-5
          max-w-3xl
          text-lg
          leading-relaxed
          text-gray-300
          "
        >
          {description}
        </motion.p>

        {/* Stats Cards */}

        <div className="mt-10 flex flex-wrap gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
              }}
              className="
              flex
              min-w-[150px]
              items-center
              gap-4
              rounded-xl
              bg-white/10
              px-5
              py-4
              backdrop-blur-md
              border
              border-white/10
              "
            >
              <div className="text-2xl">{item.icon}</div>

              <div>
                <h3 className="text-2xl font-bold">{item.number}</h3>

                <p
                  className="
                text-xs
                uppercase
                text-gray-300
                "
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Circle */}

      <div
        className="
        absolute
        bottom-0
        right-10
        h-14
        w-14
        translate-y-1/2
        rounded-full
        bg-[#d9ae68]
        flex
        items-center
        justify-center
        text-white
        "
      >
        ↑
      </div>
    </section>
  );
};

export default PageHero;
