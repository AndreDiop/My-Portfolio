import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Landing from "./containers/Landing";
import Contact from "./containers/Contact";
import Works from "./assets/data.json";
import Skills from "./containers/Skills";
function App({}) {
  console.log(Works);

  return (
    <>
      <Router>
        <div
          className="nes-container is-rounded with-title is-centered"
          id="navbarContainer"
        >
          <div className="title" id="navbarTitle">
            <h1 id="navbarName">Andre Diop</h1>
            <p>Full Stack Web Developer</p>
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
        <div className="nes-container is-rounded" id="mainContainer">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
