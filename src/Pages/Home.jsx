import Navbar from "../Components/Common/Navbar";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import CoursesSection from "../Components/Home/CoursesSection";
import FacultySection from "../Components/Home/FacultySection";
import GallerySection from "../Components/Home/GallerySection";
import ContactSection from "../Components/Home/ContactSection";
import GoogleMap from "../Components/Home/GoogleMap";
import CTASection from "../Components/Home/CTASection";
import Footer from "../Components/Common/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <CoursesSection />
            <FacultySection />
            <GallerySection />
            <ContactSection />
            <GoogleMap />
            <CTASection />
            <Footer />
        </>
    );
};

export default Home;