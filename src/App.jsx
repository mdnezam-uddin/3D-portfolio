import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
  Footer,
} from "./components";
import AboutMe from "./components/AboutMe";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />

        <Projects />
        <Feedbacks />
        <div className="relative z-0 bg-primary">
          <AboutMe />
        </div>
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
