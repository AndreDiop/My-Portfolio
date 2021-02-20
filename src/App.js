import React from "react";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
  return (
    <>
      <div className="nes-container is-rounded">
        <h1>Andre Diop</h1>
        <a className="nes-btn" href="#">
          About
        </a>
        <a className="nes-btn" href="#">
          Skills
        </a>
        <a className="nes-btn" href="#">
          Portfolio
        </a>
        <a className="nes-btn" href="#">
          Resume
        </a>
        <a href="https://twitter.com/theandrediop">
          <i className="nes-icon twitter is-medium"></i>
        </a>
        <a href="https://github.com/AndreDiop">
          <i className="nes-icon github is-medium"></i>
        </a>

        <a href="https://www.linkedin.com/in/andre-diop-998754200/">
          <i className="nes-icon linkedin is-medium"></i>
        </a>
      </div>

      <p>Hello world</p>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
