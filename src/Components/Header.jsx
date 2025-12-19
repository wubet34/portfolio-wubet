import React, { useState, useEffect } from "react";
import { Icons } from "../assets";
import logo from '../assets/logow.png'

const Header = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isMoonToggle, setIsMoonToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Hero", id: "hero" },
    { name: "About", id: "about" },
    { name: "Project", id: "project" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  // Toggle dark/light mode
  const darkToggle = () => {
    const newValue = !isMoonToggle;
    setIsMoonToggle(newValue);
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  };

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsMoonToggle(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for header
      for (let link of navLinks) {
        const section = document.getElementById(link.id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(link.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpenMobile(false); // close mobile menu
    }
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 text-black dark:text-white sticky top-0 z-50  backdrop-blur-lg shadow border-neutral-700/80">
      <nav className="flex items-center justify-between lg:justify-around p-6 gap-10 lg:gap-40">
        {/* Logo */}
        <img src={logo} className="w-10" alt="" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`transition ${
                  activeSection === link.id
                    ? "text-green-500 font-semibold"
                    : "hover:text-blue-500 dark:hover:text-orange-400"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark Mode */}
        <button
          onClick={darkToggle}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {isMoonToggle ? <Icons.Moon /> : <Icons.Sun />}
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpenMobile(!isOpenMobile)} className="md:hidden text-2xl">
          {isOpenMobile ? <Icons.X /> : <Icons.Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpenMobile && (
        <ul className="md:hidden flex flex-col items-center gap-4 px-6 pb-4 bg-white dark:bg-gray-900">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`block py-2 transition ${
                  activeSection === link.id
                    ? "text-green-500 font-semibold"
                    : "hover:text-blue-500 dark:hover:text-orange-400"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
