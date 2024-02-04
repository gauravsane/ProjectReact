import React, { useEffect } from 'react'
import './Skills.css'
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='skill_component'>
      
      <h1 className='heading'>MY Skills</h1>

      <div className="box-container">

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease-in">
            <SiHtml5 size={80} className='icons'/>
            <h3>HTML 5</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease-in">
            <SiCss3 size={80}/>
            <h3>CSS 3</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="ease-in">
            <SiJavascript size={80}/>
            <h3>Javascript</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" data-aos-easing="ease-in">
            <SiPython size={80}/>
            <h3>Python</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900" data-aos-easing="ease-in">
            <DiNodejs size={80}/>
            <h3>Node js</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1100" data-aos-easing="ease-in">
            <GrReactjs size={80}/>
            <h3>React js</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300" data-aos-easing="ease-in">
            <SiMongodb size={80}/>
            <h3>MongoDB</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1500" data-aos-easing="ease-in">
            <SiMysql size={80}/>
            <h3>MySQL</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
            <FaSass size={80}/>
            <h3>SASS</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>

        <div className="box" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
            <SiJquery size={80}/>
            <h3>JQuery</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, beatae.</p>
            {/* <a href="#" className='btn'>Read More</a> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
