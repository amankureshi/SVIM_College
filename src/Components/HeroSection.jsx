// import { FaGraduationCap } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="relative bg-[#fdf9f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          {/* Left */}

          <div>
            {/* <FaGraduationCap className="text-5xl text-[#0d2b52] mb-6" /> */}

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#0d2b52]">
              Build Your
              <br />
              Future, Choose
              <br />
              your Course
            </h1>

            <p className="text-gray-500 mt-8 leading-8 max-w-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
              <span className="font-semibold text-black">
                {" "}
                Velit officia consequat.
              </span>
            </p>

            <button className="mt-10 bg-green-600 hover:bg-green-700 duration-300 text-white px-9 py-4 rounded-full font-semibold">
              Get Started
            </button>
          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-t-full rounded-br-full bg-sky-200 overflow-hidden">
              <img
                src="/images/student1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-square rounded-t-full rounded-bl-full bg-blue-300 overflow-hidden">
              <img
                src="/images/student2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-square rounded-bl-full rounded-tr-none bg-pink-200 overflow-hidden">
              <img
                src="/images/student3.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-square rounded-full bg-cyan-200 overflow-hidden">
              <img
                src="/images/student4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorations */}

      <div className="absolute left-0 top-52 w-14 h-14 bg-yellow-300 rounded-br-full"></div>

      <div className="absolute right-0 bottom-12 w-16 h-16 bg-purple-700 rounded-tl-full"></div>

      <div className="absolute left-8 bottom-16 grid grid-cols-6 gap-2 opacity-30">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-purple-400 rounded-full"></span>
        ))}
      </div>

      <div className="absolute right-8 top-28 grid grid-cols-6 gap-2 opacity-30">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-purple-400 rounded-full"></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
