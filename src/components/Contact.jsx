import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "MD NEZAM UDDIN",
          from_email: form.email,
          to_email: "nezam0266@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully. I will get back to you soon.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
        toast.error("Failed to send message. Please try again.");
      });
  };
  


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden flex">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Stay tuned.</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>


        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8 mx-auto justify-center'
      >
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your Name"
          className="bg-tertiary p-4 px-6 rounded-lg outline-none border-none placeholder:text-secondary text-white font-medium"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder=" Your Email"
          className="bg-tertiary p-4 px-6 rounded-lg outline-none border-none placeholder:text-secondary text-white font-medium"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="What do you want to say?"
          value={form.message}
          className="bg-tertiary p-4 px-6 rounded-lg outline-none border-none placeholder:text-secondary text-white font-medium"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none  text-white font-bold shadow-md shadow-primary"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      </motion.div>

      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
