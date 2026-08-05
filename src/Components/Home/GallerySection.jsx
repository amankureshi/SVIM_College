import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import events from "../../assets/Events_Image/Event_Expert.jpeg";
import coding from "../../assets/Events_Image/Coding.jpeg";
import yuvaGita from "../../assets/Events_Image/Yuva_Gita.jpeg";
import fresherParty from "../../assets/Events_Image/Fresher_Party.jpg";
import sports from "../../assets/Events_Image/sports.jpeg";
import culturalWeek from "../../assets/Events_Image/Cultural_week.jpeg";

const gallery = [
  {
    image: events,
    title: "Event Expert 2025",
    date: "15 March 2025",
    category: "Technology",
  },
  {
    image: coding,
    title: "IVy 2025",
    date: "20 July 2025",
    category: "Competition",
  },
  {
    image: yuvaGita,
    title: "Yuva Gita",
    date: "10 February 2025",
    category: "Self Development",
  },
  {
    image: fresherParty,
    title: "Fresher Party",
    date: "05 January 2025",
    category: "Fresher Party",
  },
  {
    image: sports,
    title: "Sport Day",
    date: "18 April 2025",
    category: "Sports",
  },
  {
    image: culturalWeek,
    title: "Convocation Ceremony",
    date: "25 May 2025",
    category: "cultural",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const GallerySection = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-[#B45309] uppercase tracking-[4px] font-semibold heading-font">
            Event Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#163A70] mt-3 heading-font">
            Campus Events & Memories
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto body-font">
            Explore memorable moments from seminars, workshops, cultural
            festivals, technical events and student activities.
          </p>
        </div>

        {/* Gallery */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {gallery.map((event, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-72 object-cover duration-700 group-hover:scale-110"
                />
              </div>

              {/* Category */}

              <span className="absolute top-4 left-4 bg-[#163A70] text-white text-xs px-4 py-2 rounded-full heading-font">
                {event.category}
              </span>

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#163A70]/95 via-[#163A70]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold heading-font">{event.title}</h3>

                <div className="flex items-center gap-2 mt-3 text-white/90 heading-font">
                  <FaCalendarAlt />

                  <span>{event.date}</span>
                </div>

                <button className="mt-5 w-fit bg-white text-[#163A70] px-5 py-2 rounded-full font-medium hover:bg-[#A42F2B] hover:text-white duration-300 heading-font">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
