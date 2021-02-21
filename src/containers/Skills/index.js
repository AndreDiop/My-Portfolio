import React from 'react';

const index = () => {
    return (
        <div>
             <div
            className="nes-container with-title is-rounded"
            id="skillsContainer"
          >
            <p className="title" id="skillsHeader">
              <h1>Skills</h1>
            </p>
            <p>Here you will see icons for stuff</p>
            {/* You can map over these iconse by changing after the fa- */}
            <i className="fab fa-js-square fa-5x"></i>
            <i className="fab fa-react fa-5x"></i>
            <i className="fab fa-npm fa-5x"></i>
            <i className="fab fa-node fa-5x"></i>
            <i className="fab fa-css3-alt fa-5x"></i>
            <i className="fab fa-html5-alt fa-5x"></i>
          </div>
        </div>
    );
};

export default index;