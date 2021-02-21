import React from "react";

const index = (data) => {
  return (
    <div className="nes-balloon nes-pointer" id="portfolioCard">
      <p> {data.name}</p>
      <img
        src={data.picture}
        width="200"
        height="200"
        id="id"
        alt="alt text here"
      />

      <hr />
      <a className="nes-btn" href={data.githubLink} id="portfolioRepoButton">
        Github Repo
      </a>

      <a
        className="nes-btn is-primary"
        href={data.deployLink}
        id="portfolioDeployLinkButton"
      >
        Deployed Link
      </a>
    </div>
  );
};

export default index;
