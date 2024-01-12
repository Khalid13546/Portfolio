import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Contact from "./src/components/Contact";
import Hero from "./src/components/Hero";
import Projectcard from "./src/components/Projects";
import About from "./src/components/About";
import "./index.css";
import StarsCanvas from "./src/components/Star";

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <StarsCanvas />
        <div>
          <About />
          <Projectcard />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
