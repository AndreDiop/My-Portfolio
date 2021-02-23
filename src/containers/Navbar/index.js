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
            <button className="nes-btn is-primary" id="contactButton">
              Skills
            </button>
          </Link>
          <Link to="/Portfolio">
            <button className="nes-btn is-success" id="portfolioButton">
              Portfolio
            </button>
          </Link>
          <Link to="/Contact">
            <button className="nes-btn is-warning" id="contactButton">
              Contact
            </button>
          </Link>

          <a
            className="nes-btn is-error"
            href="https://docs.google.com/document/d/1dTJWmXF4xxfdqOr-1irQTLGApzNkcN9Xx62cDILAa9A/edit?usp=sharing"
            id="resumeButton"
          >
            Resume
          </a>

        </div> 
        </div>
    );
};

export default index;