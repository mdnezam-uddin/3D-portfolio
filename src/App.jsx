import {  Routes, Route, BrowserRouter } from "react-router-dom";
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
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Tech />
                <Projects />
                <Feedbacks />
              </>
            }
          />
          <Route path="/about-me" element={<AboutMe />} />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <StarsCanvas />
              </>
            }
          />
        </Routes>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;



