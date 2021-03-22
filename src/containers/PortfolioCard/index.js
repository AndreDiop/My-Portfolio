import React from "react";
import "../PortfolioCard/styles.css";

const index = ({
  name,
  picture,
  deployedLink,
  githubLink,
  projectInfo,
  tech1,
  tech2,
  tech3,
}) => {
  return (
    <div className="nes-balloon nes-pointer" id="portfolioCard">
      <p> {name}</p>
      <img src={picture} width="360" height="180" id="id" alt="alt text here" />

      <hr />

      <p> {projectInfo} </p>
      <hr />

      <a href="#" id="badge" className="nes-badge">
        <span className="is-warning">{tech1}</span>
      </a>
      <a href="#" id="badge" className="nes-badge">
        <span className="is-warning">{tech2}</span>
      </a>
      <a href="#" id="badge" className="nes-badge">
        <span className="is-warning">{tech3}</span>
      </a>

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
