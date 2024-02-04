import React, { useEffect } from "react";
import "./Home.css";
import heroImage from "../../images/heroImage.jpeg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="hero-component" id="home">
      <div className="left" data-aos="fade-in" data-aos-easing="ease-in" data-aos-duration="1000">
        <h1 >Hii I'am Gaurav</h1>
        <h4>Full Stack Developer</h4>
        <p>
          I am a Full Stack Web Developer with an emphasis on responsive web
          design
        </p>
        <p>I design and code beautifully simple things. and I love what I do.</p>
        <div className="home__content grid">
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/gaurav-sane-5878711ba/"
            className="linkedin"
            target="_blank"
           
          >
           <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/gauravsane17"
            className="insta"
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://github.com/gauravsane"
            className="github"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
        </div>
      </div>
      </div>

      <div className="right" data-aos="fade-in" data-aos-easing="ease-in" data-aos-duration="1000">
        <img src={heroImage} alt="hero"/>
      </div>

    </div>
  );
};

export default Home;
