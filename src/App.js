import React from "react";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
  return (
    <>
      <nav className="level">
        <p className="level-item has-text-centered">
          <a className="link is-info">Home</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Menu</a>
        </p>
        <p className="level-item has-text-centered">
          <p>Andre Diop</p>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Reservations</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Contact</a>
        </p>
      </nav>
      <p>Hello world</p>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
