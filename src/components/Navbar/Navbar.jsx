import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL TO SECTION
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        px-[6vw] md:px-[8vw] lg:px-[20vw]
        ${isScrolled ? "bg-[#050414]/70 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center py-5 text-white">

        {/* LOGO */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="text-lg font-semibold cursor-pointer"
        >
          <span className="text-[#8245ec]">&lt;</span>
          Sachin
          <span className="text-[#8245ec]">/</span>
          Singh
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition-colors ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/" target="_blank" className="hover:text-[#8245ec]">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-[#8245ec]">
            <FaLinkedinIn size={22} />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414]/80 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`hover:text-[#8245ec] text-lg ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
