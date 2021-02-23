import React from "react";
import ".././Footer/styles.css"

const index = () => {
  return (
    <div id="contactContainer">
      <p className="nes-balloon nes-pointer">
        ANDRE DIOP <br />
        ItsJustAndre@gmail.com <br />
        (678) 310 - 5409
        <br />
        Atlanta Georgia
      </p>
      <br/>
      <a href="https://twitter.com/theandrediop">
            <i className="nes-icon twitter is-medium" id="twitterIcon"></i>
          </a>
          <a href="https://github.com/AndreDiop">
            <i className="nes-icon github is-medium" id="githubIcon"></i>
          </a>

          <a href="https://www.linkedin.com/in/andre-diop-998754200/">
            <i className="nes-icon linkedin is-medium" id="linkedinIcon"></i>
          </a>
    </div>
    
  );
};

export default index;
