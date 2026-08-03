import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import PageHero from "../Pages/PageHero";
import CTASection from "../Components/Home/CTASection";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const AboutPage = () => {
    return (
        <>
            <Navbar />

            <PageHero title="About SVIM College" subtitle="Home / About" />

            {/* About College */}

            <section className="py-24 bg-white ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#A42F2B] font-semibold uppercase tracking-[4px]">
                                About Our College
                            </span>

                            <h2 className="text-5xl font-bold text-[#12396d] mt-5 leading-tight">
                                Excellence In Education
                                <br />
                                Since 2005
                            </h2>

                            <p className="text-gray-600 mt-8 leading-8">
                                SVIM College is committed to delivering quality education,
                                innovation, and practical learning experiences. We focus on
                                preparing students for successful careers through industry
                                oriented programs, experienced faculty members, and modern
                                infrastructure.
                            </p>

                            <p className="text-gray-600 mt-6 leading-8">
                                Our campus encourages creativity, leadership, teamwork, and
                                lifelong learning while providing students with opportunities to
                                grow academically as well as professionally.
                            </p>
                        </motion.div>

                        {/* Right */}

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-[40px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://i.postimg.cc/sx7Gr4kB/about-institute.jpg"
                                    alt="College"
                                    className="w-full h-[520px] object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-8 -left-8 bg-[#12396d] text-white rounded-3xl px-8 py-6 shadow-xl">
                                <h3 className="text-4xl font-bold">20+</h3>

                                <p>Years of Excellence</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Mission */}

            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl shadow-lg p-10 border-t-4 border-[#A42F2B]"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#A42F2B] text-white flex justify-center items-center text-2xl">
                                <FaBullseye />
                            </div>

                            <h3 className="text-3xl font-bold text-[#12396d] mt-6">
                                Our Mission
                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">
                                To provide quality education, practical knowledge, and
                                professional skills that prepare students for successful careers
                                while developing ethical values and leadership.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl shadow-lg p-10 border-t-4 border-[#12396d]"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#12396d] text-white flex justify-center items-center text-2xl">
                                <FaEye />
                            </div>

                            <h3 className="text-3xl font-bold text-[#12396d] mt-6">
                                Our Vision
                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">
                                To become a leading institution that inspires innovation,
                                excellence, research, and lifelong learning while creating
                                responsible professionals for society.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AboutPage;
