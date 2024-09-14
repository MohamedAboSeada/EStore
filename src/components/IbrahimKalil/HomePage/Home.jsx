import React, { Component } from "react";
import SpecialOffer from "./SpecialOffer1";
import Features from "./Features";
class Home extends Component {
  constructor() {
    super()
  }
  render() {
    return (
     <div>
		  <SpecialOffer/>
      <Features/>
	 </div>
    );
  }
}

export default Home;
