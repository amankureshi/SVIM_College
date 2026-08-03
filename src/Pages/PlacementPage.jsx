import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import Container from "./Container";
import { FaBriefcase } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { GiBullseye, GiTrophyCup } from "react-icons/gi";

const PlacementPage = () => {
    const stats = [
        ["Highest Package", "18 LPA", <FaBriefcase />],
        ["Average Package", "6.5 LPA", <GrLineChart />],
        ["Total Offers", "250+", <GiBullseye />],
        ["Placement Rate", "95%", <GiTrophyCup />],
    ];

    const recruiters = [
        "Infosense",
        "RadixWeb",
        "CodeTrade.io",
        "TechMahindra",
        "Qrious Tech Team LLP",
        "Sarjen Systems Pvt. Ltd.",
    ];

    const process = [
        "Registration",
        "Training",
        "Aptitude Preparation",
        "Technical Interview",
        "HR Interview",
        "Final Selection",
    ];

    const students = [
        {
            name: "Abc...",
            company: "TCS",
            package: "8 LPA",
            year: "2025",
        },
        {
            name: "Abc...",
            company: "Infosys",
            package: "7 LPA",
            year: "2025",
        },
        {
            name: "Abc...",
            company: "Accenture",
            package: "9 LPA",
            year: "2024",
        },
    ];

    const animation = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    };

    return (
        <>

            <Navbar />
            <section className="bg-[#142d5c] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">

                        <p className="text-[#d6b36a] uppercase tracking-widest text-sm md:text-base font-semibold mb-4 pt-10">
                            Career Success
                        </p>

                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-5 font-bold">
                            MCA Placements
                        </h1>

                        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                            Empowering students with outstanding placement opportunities through
                            industry partnerships, expert career guidance, technical training, and
                            campus recruitment drives to build successful careers in leading IT
                            companies.
                        </p>

                    </div>
                </div>
            </section>

            <div className="bg-slate-50 text-slate-800">

                {/* Statistics */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid  gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {stats.map(([title, value, icon], index) => (
                            <motion.div
                                key={title}
                                {...animation}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -8 }}
                                className="rounded-3xl bg-white p-7 text-center shadow-lg"
                            >
                                <div className="flex justify-center text-4xl text-blue-850 text-center">
                                    {icon}
                                </div>

                                <h3 className="mt-4 font-semibold">
                                    {title}
                                </h3>

                                <p className="mt-2 text-3xl font-bold text-red-900">
                                    {value}
                                </p>

                            </motion.div>
                        ))}

                    </div>
                </section>


                {/* Training Placement Cell */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center gap-12  lg:grid-cols-2">

                        <motion.img
                            {...animation}
                            src="https://placehold.co/600x400"
                            loading="lazy"
                            alt="Training"
                            className="rounded-3xl shadow-xl"
                        />


                        <motion.div {...animation}>

                            <h2 className="text-4xl font-bold text-slate-800">
                                Training & Placement Cell
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                The placement cell focuses on preparing students through
                                technical training, mock interviews, resume building, aptitude
                                sessions, and industry interaction.
                            </p>


                            <div className="mt-6 space-y-3 text-slate-700">
                                <p>✓ Industry Connections</p>
                                <p>✓ Technical Preparation</p>
                                <p>✓ Mock Interviews</p>
                                <p>✓ Soft Skill Development</p>
                            </div>

                        </motion.div>

                    </div>
                </section>


                {/* Recruiters */}
                <section className="bg-white py-16">

                    <motion.h2
                        {...animation}
                        className="text-center text-4xl font-bold"
                    >
                        Top Recruiters
                    </motion.h2>


                    <Container className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 sm:grid-cols-3 lg:grid-cols-6">

                        {recruiters.map((company, index) => (
                            <motion.div
                                key={company}
                                {...animation}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="rounded-2xl bg-slate-50 p-6 text-center shadow"
                            >

                                <img
                                    src="https://placehold.co/120x60"
                                    loading="lazy"
                                    alt={company}
                                    className="mx-auto"
                                />

                                <p className="mt-3 font-semibold">
                                    {company}
                                </p>

                            </motion.div>
                        ))}

                    </Container>

                </section>


                {/* Process */}
                <Container className="">

                    <motion.h2
                        {...animation}
                        className="text-center text-4xl font-bold"
                    >
                        Placement Process
                    </motion.h2>


                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {process.map((step, index) => (
                            <motion.div
                                key={step}
                                {...animation}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                                className="rounded-2xl bg-white p-6 shadow"
                            >

                                <span className="font-bold text-red-900">
                                    {index + 1}.
                                </span>{" "}

                                {step}

                            </motion.div>
                        ))}

                    </div>

                </Container>


                {/* Student Success */}
                <section className="bg-white py-16">

                    <motion.h2
                        {...animation}
                        className="text-center text-4xl font-bold"
                    >
                        Student Success Stories
                    </motion.h2>


                    <Container className="mx-auto mt-12 grid max-w-6xl gap-8 px-6 md:grid-cols-3">

                        {students.map((student, index) => (
                            <motion.div
                                key={student.name}
                                {...animation}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -8 }}
                                className="rounded-3xl bg-slate-50 p-6 shadow-lg"
                            >

                                <img
                                    src="https://placehold.co/250x250"
                                    loading="lazy"
                                    alt={student.name}
                                    className="mx-auto h-40 w-40 rounded-full object-cover"
                                />


                                <h3 className="mt-5 text-xl font-bold">
                                    {student.name}
                                </h3>


                                <p className="mt-2 text-red-900 font-semibold">
                                    {student.company}
                                </p>


                                <p className="mt-2">
                                    Package: {student.package}
                                </p>


                                <p>
                                    Batch: {student.year}
                                </p>


                            </motion.div>
                        ))}

                    </Container>

                </section>

                {/* CTA */}
                <section className="bg-blue-950 py-16 text-center">
                    <motion.div {...animation}>
                        <h2 className="text-4xl font-bold text-white">
                            Start Your Career Journey With MCA
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-gray-200">
                            Build your future with quality education, industry exposure,
                            and excellent placement support.
                        </p>

                        <button className="mt-8 rounded-full bg-red-900 px-8 py-3 font-semibold text-white transition hover:bg-red-800">
                            Contact Admission Team
                        </button>
                    </motion.div>

                </section>
            </div>
            <Footer />
        </>
    );
};

export default PlacementPage;