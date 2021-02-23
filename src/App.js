import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer"
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Landing from "./containers/Landing";
import Contact from "./containers/Contact";
import Skills from "./containers/Skills";
import Works from "./assets/data.json";
function App() {
  console.log(Works);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <div className="nes-container is-rounded" id="mainContainer">
            <Route path="/About">
              <Navbar />
              <About />
              <Footer/>
            </Route>
            <Route path="/Portfolio">
              <Navbar />
              <Portfolio />
              <Footer/>
            </Route>
            <Route path="/Contact">
              <Navbar />
              <Contact />
              <Footer/>
            </Route>
            <Route path="/Skills">
              <Navbar />
              <Skills />
              <Footer/>
            </Route>
        </div>
          </Switch>
      </Router>
    </>
  );
}

export default App;
