import React, { Component } from "react";
import SpecialOffer from "./SpecialOffer1";
import Features from "./Features";
import BestDeals from "./BestDeals";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts";
import Banner from "./Banner";
import Subscribe from "./Subscribe";
import LatestNews from "./LatestNews";
class Home extends Component {
  constructor() {
    super()
  }
  render() {
    return (
     <div>
        <SpecialOffer/>
        <Features/>
        <BestDeals/>
        <Slider/>
        <FeaturedProducts/>
        <Banner/>
        <LatestNews/>
        <Subscribe/>
	 </div>
    );
  }
}

export default Home;
