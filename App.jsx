import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./public/components/Navbar";
import Contact from "./public/components/Contact";
import Hero from "./public/components/Hero";
import Projectcard from "./public/components/Projects";
import About from "./public/components/About";
import "./index.css";
import StarsCanvas from "./public/components/Star";

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
