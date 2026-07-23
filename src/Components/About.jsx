import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white py-20 mx-auto w-full max-w-[1150px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Image */}

          <div className="relative">
            <div className="w-full h-[500px] rounded-3xl overflow-hidden">
              <img
                src="http://nicsm.ac.in/assets/img/about_institute.jpeg"
                alt="About College"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Card */}

            <div className="absolute -bottom-8 -right-8 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-bold">25+</h2>
              <p className="text-sm mt-2">Years of Excellence</p>
            </div>
          </div>

          {/* Right Side */}

          <div>
            <span className="text-[#B45309] font-semibold uppercase tracking-widest">
              About Our College
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d2b52] mt-4 leading-tight">
              Empowering Students
              <br />
              For A Better Future
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Our college provides quality education with experienced faculty,
              modern classrooms, practical learning, and excellent placement
              opportunities to help every student build a successful career.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Experienced Faculty</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Modern Classrooms</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Placement Support</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-xl" />
                <span>Digital Library</span>
              </div>
            </div>

            <button className="mt-10 bg-[#A42F2B] hover:bg-[#12396d] duration-300 text-white px-8 py-4 rounded-full font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
