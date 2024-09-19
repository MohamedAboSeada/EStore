import React, { Component } from "react";
import "./About.css";
import Session from "./Session";
import LastSession from "./LastSession";
import Banner from "./Banner";

class About extends Component {
  render() {
    return (
      <>
         {/* About Section */}
          <div className="firstAbout container">
            <div className="Main">
              <div style={{marginBottom:'20px'}} className="firstHeader1">
                <span style={{background: '#2DA5F3',padding:'10px 20px'}}>WHO WE ARE</span>
              </div>

              <div className="firstHeader2">
                <h1>Kinbo - largest electronics retail shop in the world.</h1>
              </div>
              <div className="firstContent">
                <span>
                  Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
                  vestibulum risus, ac tincidunt diam lectus id magna.
                  Praesent maximus lobortis neque sit amet rhoncus.
                  Nullam tempus lectus a dui aliquet, non ultricies
                  nibh elementum. Nulla ac nulla dolor.
                </span>
              </div>
              <div className="addressFirst">
                <p>Great 24/7 customer services.</p>
                <p>600+ Dedicated employe.</p>
                <p>50+ Branches all over the world.</p>
                <p>Over 1 Million Electronics Products</p>
              </div>
            </div>
            <div className="img">
              <img width='100%' src="./images/first.png" alt="error"></img>
            </div>
          </div>
        <Session />
        <Banner />
        <LastSession />
      </>
    );
  }
}

export default About;
