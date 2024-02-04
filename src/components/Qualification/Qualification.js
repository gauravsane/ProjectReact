import React, { useEffect } from "react";
import "./Qualification.css";
import svmLogo from '../../images/svm_logo.png';
import khalsaLogo from '../../images/khalsa_logo.png';
import bloomzenLogo from '../../images/bloomzen_Logo.png';
import livetechLogo from '../../images/livetech_logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Qualification = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="qualification-content">
        <h1 className="heading">Qualification</h1>
        <div className="timeline">
          <div className="container1 left-container">
            {/* <img src={svmLogo} alt="svm"/> */}
            <div className="span"></div>
            <div className="text-box">
              <h2>SSC</h2>
              <small>2018</small>
              <p>
                The B.Sc. in Computer Science course provides students with a
                solid foundational understanding of the concepts behind data
                innovation, software engineering, and other related fields...
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container1 right-container">
            {/* <img src={svmLogo} alt="svm"/> */}
            <div className="span"></div>
            <div className="text-box">
              <h2>HSC</h2>
              <small>2018 - 2020</small>
              <p>
                The B.Sc. in Computer Science course provides students with a
                solid foundational understanding of the concepts behind data
                innovation, software engineering, and other related fields...
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container1 left-container">
            {/* <img src={khalsaLogo} alt="khalsaclg"/> */}
            <div className="span"></div>
            <div className="text-box">
              <h2>BSC-CS</h2>
              <small>2020 - 2023</small>
              <p>
                The B.Sc. in Computer Science course provides students with a
                solid foundational understanding of the concepts behind data
                innovation, software engineering, and other related fields...
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container1 right-container">
            {/* <img src={bloomzenLogo} alt="bloomzen"/> */}
            <div className="span"></div>
            <div className="text-box">
              <h2>Web Designing</h2>
              <small>2021</small>
              <p>
                The B.Sc. in Computer Science course provides students with a
                solid foundational understanding of the concepts behind data
                innovation, software engineering, and other related fields...
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container1 left-container">
            {/* <img src={khalsaLogo} alt="khalsaclg"/> */}
            <div className="span"></div>
            <div className="text-box">
              <h2>Android App Development</h2>
              <small>2022</small>
              <p>
                The B.Sc. in Computer Science course provides students with a
                solid foundational understanding of the concepts behind data
                innovation, software engineering, and other related fields...
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container1 right-container">
            {/* <img src={livetechLogo} alt="livetechIndia"/> */}
            <div className="span"></div>
            <div className="text-box">
              <h2>Full Stack Development</h2>
              <small>2023 - 2024</small>
              <p>
                The B.Sc. in Computer Science course provides students with a
                solid foundational understanding of the concepts behind data
                innovation, software engineering, and other related fields...
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="qualification-content-mobile">
        <h1 className="heading">Qualification</h1>
        <div className="box-container1">

          <div className="box1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
            <img src={svmLogo} />
            <h3>SSC</h3>
            <p><span>Year: </span>2018</p>
            <p><span>Percentage: </span>81.80%</p>
            <p>I have completed my state board from Shardasaram Vidyamandir Technical School Dadar(W)</p>
            <h3></h3>
          </div>

          <div className="box1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
            <img src={svmLogo} />
            <h3>HSC</h3>
            <p><span>Year: </span>2020</p>
            <p><span>Percentage: </span>74%</p>
            <p>I have completed my Higher Secondary Education in Science Stream from Shardasaram Vidyamandir Juniar College of Arts,Commerce and Science Dadar(W)</p>
            <h3></h3>
          </div>

          <div className="box1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-delay="400">
            <img src={khalsaLogo} />
            <h3>Bsc-Cs</h3>
            <p><span>Year: </span>2023</p>
            <p><span>Cgpa: </span>8.89</p>
            <p>I have completed my graduation in Bsc-computer science</p>
            <h3></h3>
          </div>

          <div className="box1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-delay="400">
            <img src={bloomzenLogo} />
            <h3>Web Designing</h3>
            <p><span>Year: </span>2021</p>
            <p>I have completed SASS Course from Bloomzen Infosolution Pvt.ltd</p>
            <h3></h3>
          </div>

          <div className="box1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-delay="400">
            <img src={khalsaLogo} />
            <h3>Android App Development</h3>
            <p><span>Year: </span>2022</p>
            <p>I have also completed Android App Development from Guru Nanak Khalse College Matunga</p>
            <h3></h3>
          </div>

          <div className="box1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-delay="400">
            <img src={livetechLogo} width='30px' height='30px' alt="" />
            <h3>Full Stack Developer</h3>
            <p><span>Year: </span>2023-24</p>
            <p>Currently Pursuing Full Stack Development Course from LivetechIndia</p>
            <h3></h3>
          </div>

          

        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Qualification;
