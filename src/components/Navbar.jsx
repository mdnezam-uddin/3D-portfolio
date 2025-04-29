import { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { styles } from "../style";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { FaHome, FaUser, FaCode, FaEnvelope, FaBriefcase } from "react-icons/fa";

// Icon mapping
const iconMap = {
  Home: <FaHome className="mr-2" />,
  About: <FaUser className="mr-2" />,
  Work: <FaBriefcase className="mr-2" />,
  Projects: <FaCode className="mr-2" />,
  Contact: <FaEnvelope className="mr-2" />,
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const isSpecialPage =
    location.pathname === "/about-me" || location.pathname === "/contact";

  const filteredNavLinks = isSpecialPage
    ? navLinks.filter((item) => item.title === "About" || item.title === "Contact")
    : navLinks;

  return (
    <motion.div
      className="w-full py-4 from-[#0b1320] to-[#162032] text-blue-50 border-b border-sky-900/40 fixed top-0 z-50 bg-primary"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${styles.paddingX} w-full`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo and Title */}
          <motion.div
            className="hidden sm:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" className="w-10 h-10" />
              <motion.p
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 md:pl-3 sm:pl-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Md Nezam Uddin
              </motion.p>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <motion.ul
              className="px-1 flex gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {filteredNavLinks.map((item, index) => (
                <motion.li
                  key={item.id}
                  className="rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(14, 165, 233, 0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full h-full"
                  >
                    {item.title === "About" ? (
                      <Link
                        to="/about-me"
                        className="flex items-center w-full h-full px-4 py-2 text-blue-200/80 hover:text-sky-400 transition-colors"
                        onClick={() => setActive(item.title)}
                      >
                        {iconMap[item.title]}
                        {item.title}
                      </Link>
                    ) : item.title === "Contact" ? (
                      <Link
                        to="/contact"
                        className="flex items-center w-full h-full px-4 py-2 text-blue-200/80 hover:text-sky-400 transition-colors"
                        onClick={() => setActive(item.title)}
                      >
                        {iconMap[item.title]}
                        {item.title}
                      </Link>
                    ) : (
                      <a
                        href={`#${item.id}`}
                        className="flex items-center w-full h-full px-4 py-2 text-blue-200/80 hover:text-sky-400 transition-colors"
                      >
                        {iconMap[item.title]}
                        {item.title}
                      </a>
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[160px] z-10 rounded-xl backdrop-blur-sm"
                >
                  <ul className="list-none flex justify-end items-start flex-col gap-4">
                    {filteredNavLinks.map((link) => (
                      <motion.li
                        key={link.id}
                        className={`${
                          active === link.title
                            ? "text-white"
                            : "text-secondary"
                        } font-poppins text-[18px] font-medium cursor-pointer`}
                        onClick={() => {
                          setActive(link.title);
                          setToggle(false);
                        }}
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.title === "About" ? (
                          <Link
                            to="/about-me"
                            className="flex items-center"
                            onClick={() => {
                              setActive(link.title);
                              setToggle(false);
                            }}
                          >
                            {iconMap[link.title]}
                            {link.title}
                          </Link>
                        ) : link.title === "Contact" ? (
                          <Link
                            to="/contact"
                            className="flex items-center"
                            onClick={() => {
                              setActive(link.title);
                              setToggle(false);
                            }}
                          >
                            {iconMap[link.title]}
                            {link.title}
                          </Link>
                        ) : (
                          <a
                            href={`#${link.id}`}
                            className="flex items-center"
                            onClick={() => setToggle(false)}
                          >
                            {iconMap[link.title]}
                            {link.title}
                          </a>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
