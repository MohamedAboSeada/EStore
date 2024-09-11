import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="first">
          <div className="img">
              <img src="./images/first.png" alt="error"></img>
            </div>


            <div className="Main">

              <div className="firstHeader1">
                <span >WHO WE ARE</span>
              </div>
            {/* ........................... */}

              <div className="firstHeader2">
                <h1 >
                  Kinbo - largest electronics retail shop in the world.
                </h1>
              </div>
              {/* ........................ */}

              {/* <div className="img">
                <img src="./images/first.png" alt="error"></img>
              </div> */}
            {/* .............................. */}

              <div className="firstContent">
                <span >
                  Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
                  vestibulum <br></br>risus, ac tincidunt diam lectus id magna. Praesent
                  maximus lobortis <br></br>neque sit amet rhoncus. Nullam tempus lectus a
                  dui aliquet, <br></br>non ultricies nibh elementum. Nulla ac nulla dolor.
                </span>
            
          </div>
          {/* .................................. */}

          <div className="addressFirst">
            <p>Great 24/7 customer services.</p>
            <p>600+ Dedicated employe.</p>
            <p>50+ Branches all over the world.</p>
            <p>Over 1 Million Electronics Products</p>
          </div>
          </div>

          {/* <div className="img">
            <img src="./images/first.png" alt="error"></img>
          </div> */}

        </div>
      </div>
    );
  }
}

export default About;
