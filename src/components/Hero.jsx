import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

// Animation variants
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Animated Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col gap-6`}
      >
        <motion.div variants={textVariant} custom={0}>
          <div className="flex flex-row items-start gap-5">
            {/* Left vertical design */}
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            {/* Hero Text */}
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Nezam
                </span>
              </h1>
              <p className={`${styles.heroSubText} mt-1 text-white-100`}>
                I&apos;m a Full-Stack Developer with a passion for building sleek user
                interfaces <br className="sm:block hidden" />
                and scalable, high-performance web applications.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Vertically Aligned Action Buttons */}
      <motion.div
        variants={textVariant}
        custom={0.5}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col gap-4 z-10"
      >
        {/* Resume Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Nezam_Resume.pdf"
          download="Nezam_Resume.pdf"
          className="flex items-center gap-2 bg-[#915EFF] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#7e4dfc] transition"
        >
          <BsFillFileEarmarkPersonFill size={20} />
          Resume
        </motion.a>

        {/* GitHub Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/mdnezam-uddin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-lg shadow-md hover:bg-white hover:text-black transition"
        >
          <FaGithub size={20} />
          GitHub
        </motion.a>

        {/* LinkedIn Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/mdnezamuddin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-blue-500 text-blue-400 px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </motion.a>
      </motion.div>

      {/* Canvas Background */}
      <ComputersCanvas />

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-1 cursor-pointer w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
