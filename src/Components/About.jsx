import React from "react";
import img from '../Assets/img/Developer activity.gif'

const About = () => {
  
  return (
    <section className="About mt-3" id="About">
      <div className="container bg-light About p-5">
        <h2 className="text-center fs-2 fw-bold">ABOUT ME</h2>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-wrap">
               Hello! 👋 I'm NAVEEN P, a recent graduate in Computer Science
              and Engineering, specializing in MERN stack development.
               I'm on a mission to bring innovative web
              solutions to life. My journey began during my academic studies,
              where I focused on honing my skills in building robust and
              scalable web applications using the MERN stack. As a MERN stack
              developer, I bring expertise in MongoDB, Express.js, React.js, and
              Node.js. I've worked on diverse projects, enhancing not only my
              technical skills😎 but also deepening my understanding of software
              development best practices. What sets me apart is my love for
              problem-solving and continuous learning in the dynamic field of
              web development. Whether you're seeking a MERN stack developer or
              want to connect with a fellow enthusiast, I'm eager to explore
              collaboration opportunities. Thank you for exploring my portfolio.
              Excited about the possibilities ahead, I look forward to
              connecting with developers, collaborators, and potential
              employers. ---
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img src={img} alt="img not found" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
