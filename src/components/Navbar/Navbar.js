import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import Luffy from '../../images/luffy1.gif';
import "./Navbar.css";

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  
  return (
    <header>
      <h3>Gaurav</h3>
      {/* <img src={Luffy} width='120px' height='80px'></img> */}

      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Skills">Skills</a>
        <a href="/Qualification">Qualification</a>
        <a href="/Portfolio">Portfolio</a>
        <a href="/Contact">Contact</a>
        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
