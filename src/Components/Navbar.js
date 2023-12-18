import React from 'react';
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import svgImage from './svgImage.svg';
import './style.css'


const Navbar = () => {

  return (
    <>
      <nav class="navbar-dark navbar-expand-lg">
        <a Link="#home" class="navbar-brand">
          <span class="globe-icon">🌐 DefraDB is open source!</span>
          <BsEmojiHeartEyesFill style={{ color: 'yellow', marginRight: '5px' }} />
          <BsEmojiHeartEyesFill style={{ color: 'yellow', marginRight: '5px' }} />
          <BsEmojiHeartEyesFill style={{ color: 'yellow' }} />
        </a>
        <a Link="#try-it" className="try-it-link">
          Try DefraDB
        </a>
      </nav>

      {/* Second Navbar with SVG background */}
      <nav className="navbar navbar-light navbar-expand-lg sticky-top" >
        <a href="#home" className="navbar-brand">
          <img src={svgImage} alt="SVG Logo" className="svg-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarLinks">
          <div className="navbar-links ml-auto">
            <a href="#defraDB">DefraDB</a>
            <a href="#sourceHub">SourceHub</a>
            <a href="#token">Token</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#open quest">OPEN Quest</a>
            <FaGithub className="FaGithub" />
          </div>
        </div>
      </nav>

    </>
  );
};
export default Navbar;
