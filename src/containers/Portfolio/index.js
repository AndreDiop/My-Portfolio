import React from "react";
import Password from "../../assets/passgen.png"
const index = () => {
  return (
    <div>
      <div className="nes-container is-rounded" id="portfolioContainer">
      <h1>Portfolio</h1>
        <p className="nes-balloon nes-pointer" id="portfolioCard">
          <p>name here</p>
          <img
            src={Password}
            width="200"
            height="200"
            id="portfolioImage"
            alt="Animated gif displaying the functionality of site"
          />
          <br />
          <hr />
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
    </div>
  );
};

export default index;
