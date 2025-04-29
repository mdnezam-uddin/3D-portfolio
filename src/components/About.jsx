import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

import PropTypes from "prop-types";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card"
      >
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-20 h-20" />
          <h3 className="text-center text-white text-[20px] font-bold">
            {title}
          </h3>
        </Tilt>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="text-[17px] leading-[30px] mt-4 max-w-3xl text-secondary"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
