import React from 'react';
import { Link } from "react-router-dom";

const index = () => {
    return (
        <div>
            <div
          className="nes-container is-rounded with-title is-centered"
          id="navbarContainer"
        >
          <div className="title" id="navbarTitle">
          <Link to="/">
            <h1 id="navbarName">Andre Diop</h1>
            <p>Full Stack Web Developer</p>
          </Link>
          </div>
          <Link to="/About">
            <button className="nes-btn" id="aboutButton">
              About
            </button>
          </Link>
          <Link to="/Skills">
            <button className="nes-btn" id="contactButton">
              Skills
            </button>
          </Link>
          <Link to="/Portfolio">
            <button className="nes-btn" id="portfolioButton">
              Portfolio
            </button>
          </Link>
          <Link to="/Contact">
            <button className="nes-btn" id="contactButton">
              Contact
            </button>
          </Link>

          <a
            className="nes-btn"
            href="https://docs.google.com/document/d/1dTJWmXF4xxfdqOr-1irQTLGApzNkcN9Xx62cDILAa9A/edit?usp=sharing"
            id="resumeButton"
          >
            Resume
          </a>
          <a href="https://twitter.com/theandrediop">
            <i className="nes-icon twitter is-medium" id="twitterIcon"></i>
          </a>
          <a href="https://github.com/AndreDiop">
            <i className="nes-icon github is-medium" id="githubIcon"></i>
          </a>

          <a href="https://www.linkedin.com/in/andre-diop-998754200/">
            <i className="nes-icon linkedin is-medium" id="linkedinIcon"></i>
          </a>
        </div> 
        </div>
    );
};

export default index;