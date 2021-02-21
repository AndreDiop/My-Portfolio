import React from "react";
import PortfolioCard from "../PortfolioCard";
import Works from "../../assets/data.json";
const index = () => {
  return (
    <div>
      <div className="nes-container is-rounded" id="portfolioContainer">
        <h1>Portfolio</h1>
        {Works.map((data) => (
          <PortfolioCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default index;
