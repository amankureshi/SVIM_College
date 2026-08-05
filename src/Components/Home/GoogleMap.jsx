const GoogleMap = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#A42F2B] font-semibold uppercase tracking-widest heading-font">
            Find Us
          </p>

          <h2 className="text-4xl font-bold text-[#12396d] mt-2 heading-font">
            Visit Our Campus
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11165.980965407985!2d72.325334!3d23.289178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c180b60502367%3A0x4e88f7a27828ed54!2sNarsinhbhai%20Institute%20of%20Computer%20Studies%20and%20Management%20-%20Kadi!5e1!3m2!1sen!2sin!4v1784814925029!5m2!1sen!2sin"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14658.928857150995!2d72.325334!3d23.289178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c180b60502367%3A0x4e88f7a27828ed54!2sNarsinhbhai%20Institute%20of%20Computer%20Studies%20and%20Management%20-%20Kadi!5e0!3m2!1sen!2sin!4v1784815393546!5m2!1sen!2sin"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px]"
            title="College Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
