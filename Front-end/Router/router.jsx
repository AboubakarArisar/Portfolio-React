import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../src/App";
import Navbar from "../src/Navbar";
import Skills from "../src/Skills";
import Contact from "../src/Contact";
import Footer from "../src/Footer";
import Projects from "../src/Projects";
import About from "../src/About";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRoutes;
