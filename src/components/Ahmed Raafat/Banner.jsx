import React, { Component } from "react";
import "./About.css";

// class Banner extends Component {
//   render() {
//     return (
//       <div className="bannerBackground">
//       </div>
//     );
//   }
// }

// export default Banner;
class Banner extends Component {
  render() {
    return (
    <div>
      <div className="banner">
      <div className="bannerContent">
        {/* Image */}
        <div className="bannerImg">
        <img
          src="./images/banner.jpg"
          alt="A beautiful retail shop"
        />
        </div>
  
        {/* Text */}
        <div className="textContent">
        <div className="bannerSpan">
          <span>Your trusted and reliable retail shop</span>
        </div>
        <div className="bannerSpan2">
          <span>
          Praesent sed semper metus. Nunc aliquet dolor <br></br>
          mauris, et fringilla elit gravida eget. Nunc <br></br>
          consequat auctor urna a placerat.
          </span>
        </div>
  
        <div>
          <button className="button">
          <img src="./images/play.png" alt="Play"></img>
          </button>
        </div>
        </div>
      </div>
      </div>
    </div>
    );
  }
  }
  
  export default Banner;
