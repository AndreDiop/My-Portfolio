import React from "react";
import "../Skills/styles.css";
import Icons from "../../assets/data.json";
import Icon from "../Icon";
const index = () => {
  console.log(Icons);
  return (
    <div>
      <div className="nes-container is-rounded" id="skillsContainer">
        <h1>Skills</h1>

        <p>Languages and frameworks that I use</p>

        {Icons.map((icon) =>(
          <Icon {...icon} />
          
        ))}
      </div>
    </div>
  );
};

export default index;
