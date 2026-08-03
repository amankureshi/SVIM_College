import { useState } from "react";
// import HeroSection from "./Pages/HeroSection";

import "./App.css";

// import Navbar from "./Components/Common/Navbar";
// import HeroSection from "./Components/Home/HeroSection";
// import AboutSection from "./Components/Home/AboutSection";
// import CoursesSection from "./Components/Home/CoursesSection";
// import FacultySection from "./Components/Home/FacultySection";
// import GallerySection from "./Components/Home/GallerySection";
// import CTASection from "./Components/Home/CTASection";
// import CourseHero from "./Components/Home/CourseHero";
// import ContactSection from "./Components/Home/ContactSection";
// import GoogleMap from "./Components/Home/GoogleMap";
// import Footer from "./Components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Home from "./Pages/Home";
import AdmissionPage from "./Pages/AdmissionPage";
import FacultyPage from "./Pages/FacultyPage";
import PlacementPage from "./Pages/PlacementPage";
import CampusPage from "./Pages/CampusPage";
// import About from "./Pages/AboutPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/placements" element={<PlacementPage />} />
        <Route path="/Campus" element={<CampusPage />} />
      </Routes>
    </>
  );
}

export default App;
