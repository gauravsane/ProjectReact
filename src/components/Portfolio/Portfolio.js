import React, { useEffect } from "react";
import "./Portfolio.css";
import work1 from '../../images/work1.png';
import work2 from '../../images/work2.png';
import work3 from '../../images/work3.png';
import { FaExternalLinkAlt } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    useEffect(()=>{
        AOS.init();
      },[])
  return (
    <div id="portfolio">
      <div className="container2">
        <h1 className="heading">My Work</h1>
        <div className="work-list">

            <div className="work" data-aos="fade-out" data-aos-easing="ease-in" data-aos-duration="1000">
                <img src={work1} alt="" />
                <div className="layer">
                    <h3>Snake Game Replica</h3>
                    <p>Created Replica Of Snake Game Using Html, Css, Javascript</p>
                    <a href="https://github.com/gauravsane/Snake-Game"><FaExternalLinkAlt color="black"/></a>
                </div>
            </div>

            <div className="work" data-aos="fade-out" data-aos-easing="ease-in" data-aos-duration="1000">
                <img src={work2} alt="" />
                <div className="layer">
                    <h3>User Management System</h3>
                    <p>Created User Management System(CRUD)  using Nodejs, Express js with MongoDB as a Database</p>
                    <a href="https://github.com/gauravsane/UserManagementSystem"><FaExternalLinkAlt color="black"/></a>
                </div>
            </div>

            <div className="work" data-aos="fade-out" data-aos-easing="ease-in" data-aos-duration="1000">
                <img src={work3} alt="" />
                <div className="layer">
                    <h3>E-commerce Website</h3>
                    <p>Created Ecommerce Website Using React js , Redux and React-hooks</p>
                    <a href="#"><FaExternalLinkAlt color="black"/></a>
                </div>
            </div>
        </div>
        <a href="https://github.com/gauravsane" className="btn1">See More</a>
      </div>
    </div>
  );
};

export default Portfolio;
