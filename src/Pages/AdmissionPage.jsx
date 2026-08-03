import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import { motion } from "framer-motion";
import Container from "./Container";
import {
    FaUserGraduate,
    FaFileAlt,
    FaCheckCircle,
    FaPaperPlane,
} from "react-icons/fa";

const AdmissionPage = () => {
    const steps = [
        {
            icon: <FaFileAlt />,
            title: "Fill Application",
            desc: "Complete the online admission form with accurate details.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Document Verification",
            desc: "Submit and verify all required documents.",
        },
        {
            icon: <FaUserGraduate />,
            title: "Admission Confirmation",
            desc: "After verification, your admission will be confirmed.",
        },
        {
            icon: <FaPaperPlane />,
            title: "Start Your Journey",
            desc: "Attend orientation and begin your academic journey.",
        },
    ];

    return (
        <>
            <Navbar />

            {/* Admission Banner */}
            <section className="bg-[#142d5c] py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">

                        <p className="text-[#d6b36a] uppercase tracking-widest text-sm md:text-base font-semibold mb-4 pt-10">
                            Join MCA
                        </p>

                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-5 font-bold">
                            MCA Admission
                        </h1>

                        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                            Join our prestigious program and master the future of technology with
                            an industry-aligned curriculum and hands-on practical training.
                        </p>

                    </div>
                </div>
            </section>

            <div className="py-20 bg-white ">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="uppercase tracking-[4px] text-[#A42F2B] font-semibold">
                        Admission Open 2026-27
                    </span>

                    <h2 className="text-5xl font-bold text-[#12396d] mt-4">
                        Begin Your Future With SVIM College
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
                        Join one of the leading institutions offering quality education,
                        experienced faculty, modern infrastructure and excellent placement
                        opportunities.
                    </p>

                </div>
            </div>

            {/* Process */}

            <section className="py-20 bg-slate-50">

                <Container className="">

                    <h2 className="text-center text-4xl font-bold text-[#12396d] mb-16">
                        Admission Process
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl shadow-lg p-8 text-center"
                            >

                                <div className="w-16 h-16 mx-auto rounded-full bg-[#12396d] text-white flex items-center justify-center text-2xl">
                                    {step.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#12396d] mt-6">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 mt-4 leading-7">
                                    {step.desc}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </Container>

            </section>

            {/* Eligibility + Documents */}

            <section className="py-20 bg-white">
                <Container className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

                        <h3 className="text-3xl font-bold text-[#12396d] mb-6">
                            Eligibility
                        </h3>

                        <ul className="space-y-4 text-gray-600">

                            <li>✔ Bachelor's Degree with minimum required percentage.</li>

                            <li>✔ Valid Entrance Exam (if applicable).</li>

                            <li>✔ Original Academic Certificates.</li>

                            <li>✔ Passport Size Photographs.</li>

                        </ul>

                    </div>

                    <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

                        <h3 className="text-3xl font-bold text-[#12396d] mb-6">
                            Required Documents
                        </h3>

                        <ul className="space-y-4 text-gray-600">

                            <li>📄 10th Marksheet</li>

                            <li>📄 12th Marksheet</li>

                            <li>📄 Graduation Marksheet</li>

                            <li>📄 Aadhaar Card</li>

                            <li>📄 Passport Size Photos</li>

                        </ul>

                    </div>

                </Container>

            </section>

            {/* Form */}

            <section className="py-20 bg-slate-50">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="bg-white rounded-3xl shadow-xl p-10">

                        <h2 className="text-4xl font-bold text-center text-[#12396d] mb-10">
                            Apply For Admission
                        </h2>

                        <form className="grid md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border rounded-xl p-4 focus:border-[#A42F2B] outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded-xl p-4 focus:border-[#A42F2B] outline-none"
                            />

                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="border rounded-xl p-4 focus:border-[#A42F2B] outline-none"
                            />

                            <select className="border rounded-xl p-4 focus:border-[#A42F2B] outline-none">
                                <option>Select Course</option>
                                <option>MCA</option>
                                <option>BCA</option>
                                <option>MBA</option>
                            </select>

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="md:col-span-2 border rounded-xl p-4 focus:border-[#A42F2B] outline-none"
                            ></textarea>

                            <button
                                className="md:col-span-2 bg-[#A42F2B] hover:bg-[#8d2724] text-white py-4 rounded-xl font-semibold transition"
                            >
                                Submit Application
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default AdmissionPage;