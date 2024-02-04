import React from "react";
import "./About.css";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import Coding from '../../images/bg.gif'
import Resume from "./Gaurav(Resume Fsd)-1.pdf";

const About = () => {
  const { text } = useTypewriter({
    words: ["Developer", "Programmer", "Freelancer"],
    loop: true,
    typeSpeed: 120,
  });
  return (
    <div className="about_component" id="about">
      <div className="head">
        <h1>About Me</h1>
      </div>

      <div className="about_parent">
        <div className="left-div">
          <div className="container">
            <h1>
              I'm a{" "}
              <span className="auto_type">
                <Typewriter
                  words={["Developer", "Programmer", "Freelancer"]}
                  loop={0}
                  cursor
                  cursorStyle="</>"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={20}
                />
              </span>
            </h1>
          </div>
          <div class="about__data">
            <p class="about__description">
              I am a MERN Stack Developer knowledge of React Node js Express js
              and MongoDB building Responsive websites using javascript popular
              library React js
            </p>

            <div class="about__info">
              <div>
                <span class="about__info-title">03</span>
                <span class="about__info-name">
                  Months <br /> experience
                </span>
              </div>

              <div>
                <span class="about__info-title">8+</span>
                <span class="about__info-name">
                  Completed <br /> Project
                </span>
              </div>

              <div>
                <span class="about__info-title">02</span>
                <span class="about__info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <a
                href={Resume}
                download
                className="button button--flex"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="right-div">
          <img src={Coding} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
