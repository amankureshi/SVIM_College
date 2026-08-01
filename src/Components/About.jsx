import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side Image */}
          <div className="relative">
            <div className="h-[500px] w-full overflow-hidden rounded-3xl">
              <img
                src="http://nicsm.ac.in/assets/img/about_institute.jpeg"
                alt="About College"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-4 right-4 rounded-2xl bg-blue-950 p-4 text-white shadow-xl sm:-bottom-8 sm:-right-8 sm:p-6">
              <h2 className="text-3xl font-bold sm:text-4xl">25+</h2>
              <p className="mt-2 text-xs sm:text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="font-semibold uppercase tracking-widest text-[#B45309]">
              About Our College
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0d2b52] lg:text-5xl">
              Empowering Students
              <br />
              For A Better Future
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our college provides quality education with experienced faculty,
              modern classrooms, practical learning, and excellent placement
              opportunities to help every student build a successful career.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-[#12396d]" />
                <span>Experienced Faculty</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-[#12396d]" />
                <span>Modern Classrooms</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-[#12396d]" />
                <span>Placement Support</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-[#12396d]" />
                <span>Digital Library</span>
              </div>
            </div>

            <button className="mt-10 rounded-full bg-[#A42F2B] px-8 py-4 font-semibold text-white duration-300 hover:bg-[#12396d]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
