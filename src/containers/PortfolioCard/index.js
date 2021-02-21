import React from "react";

const index = ({name, picture, deployedLink,githubLink}) => {
  return (
    <div className="nes-balloon nes-pointer" id="portfolioCard">
      <p> {name}</p>
      <img
        src={picture}
        width="200"
        height="200"
        id="id"
        alt="alt text here"
      />

      <hr />
      <a className="nes-btn" href={githubLink} id="portfolioRepoButton">
        Github Repo
      </a>

      <a
        className="nes-btn is-primary"
        href={deployedLink}
        id="portfolioDeployLinkButton"
      >
        Deployed Link
      </a>
    </div>
  );
};

export default index;
