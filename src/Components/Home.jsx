import React, { useEffect, useState } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Achivements from "./Achivements";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Home = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    const load = () => {
      setTimeout(() => {
        setText("Web Developer");
      }, 0);
      setTimeout(() => {
        setText("MERN Developer");
      }, 4000);
      setTimeout(() => {
        setText("Freelancer");
      }, 8000); 
    };

    const intervalId = setInterval(load, 12000);
    load();

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // empty dependency array ensures the effect runs only once

  return (
    <div>
      <Header />
      <div class="container d-flex align-items-center justify-content-center flex-column vh-100 text-light" id="homeMenu">
      <h1 className=" fw-bold text-center nameTextxt" style={{color:"black", fontSize:"150px"}}>NAVEEN</h1>
        <p className="fs-2 text-dark">
          I'm a <br />
          <span id="namingText" className="d-flex namingText fs-1 fw-bold">
            {text}
          </span>
        </p>
        <a href="#Achievements" class="btn btn-lg btn-light text-dark">
          Explore My Activity
        </a>
      </div>
      <div>
        <About />
      </div>
      <div className="mt-5">
      <Projects/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Achivements/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
