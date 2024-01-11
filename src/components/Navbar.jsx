import React, { useState, useEffect } from "react";
import About from "./About";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`bg-zinc-950 pl-6 bg-red flex items-center justify-between p-5 fixed top-0 left-0 right-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <a
          href="/"
          className="text-white text-[30px] cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Khalid Adan
        </a>
        <div className="gap-8 flex">
          <a
            href="#About"
            className="text-white text-[20px] cursor-pointer flex "
            onClick={() => {
              window.scrollTo(570, 570);
            }}
          >
            About
          </a>
          <a
            href="#Projects"
            className="text-white text-[20px] cursor-pointer "
            onClick={() => {
              window.scrollTo(1250, 1250);
            }}
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="text-white text-[20px] cursor-pointer"
            onClick={() => {
              window.scrollTo(9500, 9050);
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
