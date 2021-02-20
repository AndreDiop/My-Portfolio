import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Landing from "./containers/Landing";
import Password from "./assets/passgen.png";
import Andre from "./assets/andreFull.png";
import Start from "./assets/pressStart.png";
function App() {
  return (
    <>
      <Router>
        <div className="nes-container is-rounded with-title is-centered">
          <div className="title">
            <h1>Andre Diop</h1>
            <p>Full Stack Web Developer</p>
          </div>
          <Link to="/About">
            <button className="nes-btn">About</button>
          </Link>
          <Link to="/Portfolio">
            <button className="nes-btn">Contact</button>
          </Link>
          <Link to="/Contact">
            <button className="nes-btn">Portfolio</button>
          </Link>
          <a
            className="nes-btn"
            href="https://docs.google.com/document/d/1dTJWmXF4xxfdqOr-1irQTLGApzNkcN9Xx62cDILAa9A/edit?usp=sharing"
          >
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
          <div className="nes-container is-rounded">
            <About />
            <section className="message -left">
              <div className="nes-balloon ">
                <p>
                  My name is Andre Diop and I am an Atlanta based full stack web
                  developer responsible for all parts of the development
                  lifecycle.
                </p>
              </div>
              <div className="nes-balloon from-left">
                <p>
                  Aside from deploying awesomely responsive mobile first
                  websites and applications, I can be found training in
                  Brazilian Jiu Jitsu (I'm a blue belt), playing Settlers of
                  Catan (I'm unstoppable) or trying to master the Aerobie
                  Orbiter (it's amazing!).
                </p>
              </div>
            </section>
            <img
              src="https://media.giphy.com/media/7eW3Rof21dV3MZ948r/giphy.gif"
              width="200"
              height="200"
            />
          </div>

          <div className="nes-container with-title is-rounded">
            <p className="title">
              <h1>Skills</h1>
            </p>
            <p>Here you will see icons for stuff</p>

            <i className="fab fa-js-square fa-5x"></i>
            <i className="fab fa-react fa-5x"></i>
            <i className="fab fa-npm fa-5x"></i>
            <i className="fab fa-node fa-5x"></i>
            <i className="fab fa-css3-alt fa-5x"></i>
            <i className="fab fa-html5-alt fa-5x"></i>
          </div>
          <Portfolio />
          <div className="nes-container is-rounded" id="portfolioContainer">
            <p className="nes-balloon nes-pointer" id="portfolioCard">
              <img
                src={Password}
                width="200"
                height="200"
                id="portfolioImage"
              />
              <hr />
              <p>Name of the portfolio object</p>
              <section />
              <a
                className="nes-btn"
                href="https://github.com/AndreDiop/Password-Generator"
                id="portfolioRepoButton"
              >
                Github Repo
              </a>

              <a
                className="nes-btn is-primary"
                href="https://andrediop.github.io/Password-Generator/"
                id="portfolioDeployLinkButton"
              >
                Deployed Link
              </a>
            </p>
          </div>
          <Landing />
          <div
            className="nes-container is-rounded is-dark"
            id="landingLogoContainer"
          >
            <p className="nes-balloon nes-pointer">
              <img src={Andre} id="landingLogo" />
              <section />
              <Link to="/About">
                <img src={Start} id="pressStart" />
              </Link>
            </p>
          </div>
        </div>

        {/* Below is commentted out so that when the handlers and dynamic loading occurs, 
    you can abstract the files to external location and just have this dynamically loading in a container 
    as each element is accessed.  */}

        {/* <Switch>
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
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
