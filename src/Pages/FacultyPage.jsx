import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const FacultyPage = () => {
    const facultyMembers = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/5212321/pexels-photo-5212321.jpeg?_gl=1*1tays8r*_ga*NjY5NTY4MDk4LjE3NzEyMTYyNDA.*_ga_8JE65Q40S6*czE3ODU2NzQwMzkkbzMkZzEkdDE3ODU2NzQyNzIkajEwJGwwJGgw",
            name: "Dr. Bhumika Arora",
            designation: " Head of Department",
            qualification: "PhD (CS), M.Phil. (CS), MCA",
            experience: "15+ Years",
            expertise: "Data Warehousing and Data Mining, Web Technologies, DBMS, Machine Learning, Data Science",
            email: "priya.sharma@college.edu",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/6913213/pexels-photo-6913213.jpeg?_gl=1*1u1g7p8*_ga*NjY5NTY4MDk4LjE3NzEyMTYyNDA.*_ga_8JE65Q40S6*czE3ODU2NzQwMzkkbzMkZzEkdDE3ODU2NzQzMTIkajQ3JGwwJGgw",
            name: "Prof. Vishwa Chaudhari",
            designation: "Assistant Professor",
            qualification: " M.Tech(C&A), B.E(ET)",
            experience: "3+ Years",
            expertise: "Advanced Object Oriented Technology, Advanced Networking, Mobile Programming (Android)",
            email: "rahul.mehta@college.edu",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/3862126/pexels-photo-3862126.jpeg?_gl=1*1u3rw8m*_ga*NjY5NTY4MDk4LjE3NzEyMTYyNDA.*_ga_8JE65Q40S6*czE3ODU2NzQwMzkkbzMkZzEkdDE3ODU2NzQ0MjUkajE2JGwwJGgw",
            name: "Prof. Palak Suthar",
            designation: "Professor",
            qualification: "Ph.D. in Data Science",
            experience: "3+ Years",
            expertise: ": Web Technologies, Mobile Cross Platform Development ,Cloud Computing, Python",
            email: "neha.patel@college.edu",
        },
    ];

    const supportStaff = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/5212321/pexels-photo-5212321.jpeg?_gl=1*1tays8r*_ga*NjY5NTY4MDk4LjE3NzEyMTYyNDA.*_ga_8JE65Q40S6*czE3ODU2NzQwMzkkbzMkZzEkdDE3ODU2NzQyNzIkajEwJGwwJGgw",
            name: "Mr. Amit Kumar",
            designation: "Lab Assistant",
            department: "Computer Laboratory",
            contact: "+91 9876543210",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/6913213/pexels-photo-6913213.jpeg?_gl=1*oo76pd*_ga*NjY5NTY4MDk4LjE3NzEyMTYyNDA.*_ga_8JE65Q40S6*czE3ODU2NzQwMzkkbzMkZzEkdDE3ODU2NzQzMTIkajQ3JGwwJGgw",
            name: "Ms. Riya Shah",
            designation: "Administrative Assistant",
            department: "Department Office",
            contact: "+91 9876543211",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/350x420",
            name: "Mr. Karan Singh",
            designation: "Technical Support Executive",
            department: "IT Support Cell",
            contact: "+91 9876543212",
        },
    ];

    return (
        <>
            <Navbar />
            <section className="bg-[#142d5c] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="max-w-4xl">

                        {/* Small Heading */}
                        <p className="text-[#d6b36a] uppercase tracking-widest text-sm md:text-base font-semibold mb-4 pt-10">
                            Meet Our Mentors
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl  leading-tight mb-5 font-bold">
                            Expert Faculty
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                            Learn from highly qualified and experienced faculty members who are
                            dedicated to inspiring innovation, nurturing talent, and preparing
                            students for successful careers in the ever-evolving world of technology.
                        </p>

                    </div>
                </div>
            </section>
            <div className="bg-slate-50">
                {/* Head of Department */}
                <section className="py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <img
                                        src="https://images.pexels.com/photos/8197541/pexels-photo-8197541.jpeg?_gl=1*umkuas*_ga*NjY5NTY4MDk4LjE3NzEyMTYyNDA.*_ga_8JE65Q40S6*czE3ODU2NzQwMzkkbzMkZzEkdDE3ODU2NzQyMjUkajU3JGwwJGgw"
                                        alt="Head of Department"
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                    Director of MCA Department
                                </span>

                                <h2 className="mt-5 text-4xl font-bold text-slate-800">
                                    Dr. Rupesh Vyas
                                </h2>

                                <div className="mt-8 space-y-3 text-slate-600">
                                    <p>
                                        <span className="font-semibold text-slate-800">
                                            Designation:
                                        </span>{" "}
                                        Director & Professor
                                    </p>

                                    <p>
                                        <span className="font-semibold text-slate-800">
                                            Qualification:
                                        </span>{" "}
                                        Ph.D. in Computer Science
                                    </p>

                                    <p>
                                        <span className="font-semibold text-slate-800">
                                            Experience:
                                        </span>{" "}
                                        22+ Years
                                    </p>

                                    <p>
                                        <span className="font-semibold text-slate-800">Email:</span>{" "}
                                        hod@college.edu
                                    </p>
                                </div>

                                <p className="mt-8 text-lg leading-8 text-slate-600">
                                    Dr. Rajesh Kumar is an experienced academician, researcher, and
                                    mentor dedicated to building future-ready professionals through
                                    quality education and innovation.
                                </p>

                                <p className="mt-6 leading-8 text-slate-600">
                                    Throughout his distinguished career, Dr. Rajesh Kumar has guided
                                    numerous research scholars, published papers in reputed
                                    international journals, and actively collaborated with industry
                                    experts to bridge the gap between academics and professional
                                    practice. His teaching philosophy focuses on experiential
                                    learning, critical thinking, innovation, and ethical leadership.
                                    Under his guidance, the department has achieved remarkable
                                    progress in research, student placements, academic excellence,
                                    and industry partnerships while continuously encouraging
                                    students to develop technical expertise alongside strong
                                    professional values.
                                </p>

                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Faculty */}
                <section className="bg-white py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <h2 className="text-4xl font-bold text-slate-800">
                                Our Faculty
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Meet our experienced faculty members committed to academic
                                excellence, innovative teaching, research, and student success.
                            </p>
                        </motion.div>

                        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {facultyMembers.map((faculty, index) => (
                                <motion.div
                                    key={faculty.id}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    className="overflow-hidden rounded-3xl bg-white shadow-xl"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="h-80 w-full object-cover transition duration-500 hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-7">
                                        <h3 className="text-2xl font-bold text-slate-800">
                                            {faculty.name}
                                        </h3>

                                        <p className="mt-2 font-medium text-red-900">
                                            {faculty.designation}
                                        </p>

                                        <div className="mt-6 space-y-3 text-slate-600">
                                            <p>
                                                <span className="font-semibold">Qualification:</span>{" "}
                                                {faculty.qualification}
                                            </p>

                                            <p>
                                                <span className="font-semibold">Experience:</span>{" "}
                                                {faculty.experience}
                                            </p>

                                            <p>
                                                <span className="font-semibold">Expertise:</span>{" "}
                                                {faculty.expertise}
                                            </p>

                                            <p className="break-all">
                                                <span className="font-semibold">Email:</span>{" "}
                                                {faculty.email}
                                            </p>
                                        </div>

                                        <div className="mt-8 flex gap-4">
                                            <a
                                                href="#"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white transition hover:bg-red-800"
                                            >
                                                <span className="text-sm font-bold">in</span>
                                            </a>

                                            <a
                                                href="#"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white transition hover:bg-red-800"
                                            >
                                                <span className="text-sm font-bold">f</span>
                                            </a>

                                            <a
                                                href="#"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white transition hover:bg-red-800"
                                            >
                                                <span className="text-sm font-bold">𝕏</span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Support Staff */}
                <section className="py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <h2 className="text-4xl font-bold text-slate-800">
                                Support Staff
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Our dedicated support staff ensures smooth academic and
                                administrative operations while providing excellent assistance to
                                students and faculty members.
                            </p>
                        </motion.div>

                        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {supportStaff.map((staff, index) => (
                                <motion.div
                                    key={staff.id}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    className="overflow-hidden rounded-3xl bg-white shadow-xl"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={staff.image}
                                            alt={staff.name}
                                            className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-7">
                                        <h3 className="text-2xl font-bold text-slate-800">
                                            {staff.name}
                                        </h3>

                                        <p className="mt-2 font-medium text-blue-600">
                                            {staff.designation}
                                        </p>

                                        <div className="mt-6 space-y-3 text-slate-600">
                                            <p>
                                                <span className="font-semibold">Department:</span>{" "}
                                                {staff.department}
                                            </p>

                                            <p>
                                                <span className="font-semibold">Contact:</span>{" "}
                                                {staff.contact}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

        </>
    );
};

export default FacultyPage;