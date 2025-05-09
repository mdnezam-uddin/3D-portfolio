import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../utils/motion";
import { navLinks } from "../constants";


const Footer = () => {
  const [year, setYear] = useState("");
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/mdnezam-uddin",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/mdnezamuddin/",
      label: "LinkedIn",
    },
    {
      icon: <SiGmail size={20} />,
      href: "mailto:nezam0266@gmail.com",
      label: "Email",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/mdnazam.uddin.908347/",
      label: "Instagram",
    },
  ];

  return (
    <div className=" bg-black-100 w-full h-full ">
      <div className="flex flex-col justify-center items-center max-w-7xl">
        <div className="p-10 flex flex-col md:flex-row flex-wrap gap-20">
          {/* Name and Social */}
          <motion.div
            variants={fadeIn("", "spring", 0.1, 0.75)}
            className="flex-1 min-w-[250px]"
          >
            <h2 className="text-white text-[20px] font-bold">MD NEZAM UDDIN</h2>
            <p className="text-secondary text-sm mt-2">
              Full Stack Developer focused on modern solutions.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-white hover:bg-sky-100 text-gray-700 hover:text-sky-600 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn("", "spring", 0.2, 0.75)}
            className="flex-1 min-w-[200px]"
          >
            <h3 className="text-white text-[18px] font-semibold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  to="/"
                  className="text-secondary hover:text-white transition"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </Link>
              </motion.li>
              {navLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={`#${link.id}`}
                    className="text-secondary hover:text-white transition"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeIn("", "spring", 0.3, 0.75)}
            className="flex-1 min-w-[250px]"
          >
            <h3 className="text-white text-[18px] font-semibold">
              Let’s Collaborate
            </h3>

            <p className="text-secondary mt-2 flex items-center gap-2">
              <MdLocationOn className="text-lg text-sky-500" />
              Currently in Sichuan, China
            </p>
            <p className="text-secondary mt-1 flex  items-center gap-2">
              <FaHandshake className="text-lg text-sky-500" />
              Open to projects & partnerships 
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-sky-100 text-sky-600 border border-sky-300 rounded-lg hover:bg-sky-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend className="text-lg" />
              Drop Me a Line
            </motion.a>
          </motion.div>
        </div>

        <div className="h-px w-[100vw] bg-gray-700 opacity-30 my-2"></div>

        <div className="text-center text-sm text-secondary pb-6">
          <p>© {year} Md Nezam Uddin. All rights reserved.</p>
          <p className="mt-1">Thoughtfully designed with precision and elegance.</p>
        </div>

       
        {showTopButton && (
  <motion.button
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-br from-blue-500 to-sky-600 text-white shadow-lg hover:from-blue-600 hover:to-sky-700 transition-all duration-300 backdrop-blur-md border border-white/20"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    title="Back to Top"
  >
    <FaArrowUp className="w-2 h-2" />
  </motion.button>
)}
      </div>
    </div>
  );
};

export default Footer;
