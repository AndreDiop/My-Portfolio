import React from "react";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
  return (
    <>
      <div className="nes-container is-rounded with-title is-centered">
        <div className="title">
          <h1>
            Andre Diop
            <p>Full Stack Web Developer</p>
          </h1>
        </div>
        <a className="nes-btn" href="#">
          About
        </a>
        <a className="nes-btn" href="#">
          Contact
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

      <div className="nes-container is-rounded">
        <About />
        <section className="message -left">
          <div className="nes-balloon ">
            <p>
              My name is Andre Diop and I am an Atlanta based full stack web
              developer responsible for all parts of the development lifecycle.
            </p>
          </div>
          <div className="nes-balloon from-left">
            <p>
            Aside from deploying awesomely responsive mobile first websites and applications, I can be found training in Brazilian Jiu Jitsu (I'm a blue belt), playing Settlers of Catan (I'm unstoppable) or trying to master the Aerobie Orbiter (it's amazing!).
            </p>
          </div>
        </section>
        <img
          src="https://media.giphy.com/media/7eW3Rof21dV3MZ948r/giphy.gif"
          width="200"
          height="200"
        />
      </div>
      
    </>
  );
}

export default App;
