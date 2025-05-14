import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { journey } from "../constants";

const AboutMe = () => {
  const bioRef = useRef(null);
  const journeyRef = useRef(null);

  const bioInView = useInView(bioRef, { once: false, threshold: 0.3 });
  const journeyInView = useInView(journeyRef, { once: false, threshold: 0.1 });

  const bioControls = useAnimation();
  const journeyControls = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (bioInView) bioControls.start("visible");
    if (journeyInView) journeyControls.start("visible");
  }, [bioInView, journeyInView]);

  return (
    <div className="bg-tertiary min-h-screen text-white px-6 md:px-12 py-12">
      {/* Hero Section */}
      <div className="relative h-[25vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-900/30 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tertiary" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ letterSpacing: "0.1em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 1.2 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building impactful digital solutions with innovation and precision.
          </motion.p>
        </motion.div>
      </div>

      {/* Bio Section */}
      <motion.div
        ref={bioRef}
        className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        initial="hidden"
        animate={bioControls}
      >
        {/* Bio Text */}
        <motion.div
          className="lg:w-1/2"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r  from-purple-400 to-purple-600 ">
            Hello, I&apos;m Nezam Uddin
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            A dedicated 3rd-year Software Engineering student at Sichuan
            University, specializing in building impactful web applications and
            aiming to pursue advanced studies in a native English-speaking
            country.
          </p>
          <p className="text-base text-gray-400">
            My expertise lies in full-stack development with the MERN stack,
            focusing on creating responsive, scalable, and user-centric digital
            solutions. Currently, I am enhancing my communication skills while
            preparing for the IELTS exam to further my academic and professional
            goals on an international stage.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 shadow-xl rounded-2xl overflow-hidden">
            <motion.img
              src="/src/assets/nez.jpg"
              alt="Nezam Uddin"
              className="w-full h-full object-cover rounded-2xl"
              style={{ filter: "contrast(1.1) brightness(1.1)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="h-1 w-28 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full" />

      {/* Journey Section */}
      <motion.div
        ref={journeyRef}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate={journeyControls}
      >
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          My Journey
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] border border-sky-900/30 rounded-xl shadow-xl p-6 hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-1">
                {item.year}
              </h3>
              <h4 className="text-lg font-medium text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about-me");
