import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "../Router/router.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </Router>
  </React.StrictMode>
);
