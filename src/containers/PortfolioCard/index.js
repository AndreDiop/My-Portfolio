import React from "react";
import "../PortfolioCard/styles.css"

const index = ({ name, picture, deployedLink, githubLink, projectInfo }) => {
  return (
    <div className="nes-balloon nes-pointer" id="portfolioCard">
      <p> {name}</p>
      <img src={picture} width="360" height="180" id="id" alt="alt text here" />

      <hr />
   
  <p> {projectInfo} </p>
{/* 
      <hr/>
      <p>Tech used in the app was</p>
      <hr /> */}
   
      {/* <a href="#" id="badge" className="nes-badge">
  <span className="is-warning">Javascript</span>
</a>
      <a href="#" id="badge" className="nes-badge">
  <span className="is-warning">Javascript</span>
</a> */}

      <hr/>


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
