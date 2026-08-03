import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import CTASection from "../Components/Home/CTASection";

import { motion } from "framer-motion";
import {
    FaBook,
    FaLaptopCode,
    FaBus,
    FaWifi,
    FaUtensils,
    FaBasketballBall,
} from "react-icons/fa";
import Container from "./Container";

const facilities = [
    {
        icon: <FaBook />,
        title: "Modern Library",
        desc: "A well-equipped library with thousands of books, journals and digital resources.",
        image: "http://nicsm.ac.in/images/image5.jpeg",
    },
    {
        icon: <FaLaptopCode />,
        title: "Computer Labs",
        desc: "High-performance computer labs with latest software and internet facilities.",
        image: "http://nicsm.ac.in/images/image10.jpeg",
    },
    {
        icon: <FaWifi />,
        title: "Wi-Fi Campus",
        desc: "High-speed Wi-Fi connectivity available throughout the campus.",
        image: "/images/campus/wifi.jpg",
    },
    {
        icon: <FaBasketballBall />,
        title: "Sports",
        desc: "Indoor and outdoor sports facilities for physical fitness and recreation.",
        image: "/images/campus/sports.jpg",
    },
    {
        icon: <FaBus />,
        title: "Transportation",
        desc: "Safe and comfortable transport service connecting nearby cities and towns.",
        image: "/images/campus/bus.jpg",
    },
    {
        icon: <FaUtensils />,
        title: "Cafeteria",
        desc: "Clean and spacious cafeteria serving fresh and hygienic food.",
        image: "/images/campus/canteen.jpg",
    },
];

const gallery = [
    "/images/campus/gallery1.jpg",
    "/images/campus/gallery2.jpg",
    "/images/campus/gallery3.jpg",
    "/images/campus/gallery4.jpg",
    "/images/campus/gallery5.jpg",
    "/images/campus/gallery6.jpg",
];

const CampusPage = () => {
    return (
        <>
            <Navbar />

            {/* Intro */}
            <section className="bg-[#142d5c] py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">

                        <p className="text-[#d6b36a] uppercase tracking-widest text-sm md:text-base font-semibold mb-4 pt-10">
                            Welcome To Our Campus
                        </p>

                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-5 font-bold">
                            Learn, Explore & Grow
                        </h1>

                        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                            Our campus offers a modern learning environment with advanced
                            laboratories, a well-equipped library, sports facilities, Wi-Fi
                            connectivity, and student-friendly infrastructure designed to
                            support academic excellence and overall student development.
                        </p>

                    </div>
                </div>
            </section>

            {/* Facilities */}

            <section className="py-20 bg-slate-50">

                <Container>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {facilities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />

                                <div className="p-6">
                                    <div className="w-14 h-14 rounded-full bg-[#12396d] text-white flex items-center justify-center text-xl">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#12396d] mt-5">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 mt-4 leading-7">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </div>

                </Container>

            </section>

            {/* Gallery */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-8">

                    <div className="text-center mb-14">

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-14"
                        >
                            <span className="uppercase tracking-[4px] text-[#A42F2B] font-semibold">
                                Campus Gallery
                            </span>

                            <h2 className="text-5xl font-bold text-[#12396d] mt-4">
                                Explore Our Campus
                            </h2>
                        </motion.div>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {gallery.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="overflow-hidden rounded-3xl shadow-lg"
                            >
                                <img
                                    src={img}
                                    alt="Campus"
                                    className="w-full h-72 object-cover transition duration-500 hover:scale-110"
                                />
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default CampusPage;