import React from "react";
import Password from "../../assets/passgen.png"
const index = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="nes-container is-rounded" id="portfolioContainer">
        <p className="nes-balloon nes-pointer" id="portfolioCard">
          <img
            src={Password}
            width="200"
            height="200"
            id="portfolioImage"
            alt="Animated gif displaying the functionality of site"
          />
          <hr />
          <p>name here</p>
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
    </div>
  );
};

export default index;
