import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import './SpecialOffers.css';
import carsol1 from '../Images/carsol1.png';
import carsol2 from '../Images/carsol2.png';
import carsol3 from '../Images/carsol3.jpg';
import NewGoogle from '../Images/NewGoogle.png';
import airbods from '../Images/airbods.png';

class SpecialOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "1",
          image: carsol1,
          description: "Description for Product 1",
          price: '229$'
        },
        {
          id: "2",
          image: carsol2,
          description: "Description for Product 2",
          price: '559$'
        },
        {
          id: "3",
          image: carsol3,
          description: "Description for Product 3",
          price: '977$'
        },
      ],
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div className="container">
        <div className="row">
          {/* Carousel Section */}
          <div className="col-12 col-md-8 carousel-container h-100">
            <Splide
              aria-label="Product Carousel"
              options={{
                type: 'loop',
                perPage: 1,
                arrows: false,
                pagination: true,
                autoplay: true,
                interval: 3000,
              }}
            >
              {products.map((product, index) => (
                <SplideSlide key={index}>
                  <div className="carousel-slide">
                   <div className="contents">
				   <div className="carousel-content">
                      <div className="carousel-header">
                        <div className="header-line"></div>
                        <p>THE BEST PLACE TO PLAY</p>
                      </div>
                      <h1>Xbox Consoles</h1>
                      <h5>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</h5>
                      <button style={{color:'white',background: '#FA8232'}} className="btn shop-button">
                        Shop Now
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="carousel-image-wrapper">
                      <img
                        className="carousel-image"
                        src={product.image}
                        alt={`Product ${index}`}
                      />
                      <div className="price-tag">
                        {product.price}
                      </div>
                    </div>
				   </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Sidebar Section */}
          <div className="col-12 col-md-4 sidebar-container">
            <div className="sale-banner">
             <div className="contents">
			 <div className="sale-content">
                <h6 className="sale-title">SUMMER SALES</h6>
                <h4 className="sale-description">New Google <br />
					Pixel 6 Pro</h4>
                <button style={{color:'white',background: '#FA8232'}} className="btn shop-button">
                  Shop Now
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="sale-image-wrapper">
                <div className="discount-badge">29% OFF</div>
                <img className="sale-image" src={NewGoogle} alt="Google Pixel 6 Pro" />
              </div>
            </div>
			 </div>
            <div className="product-highlight">
              <img className="highlight-image" src={airbods} alt="Xiaomi FlipBuds Pro" />
              <div className="highlight-details">
                <h4>Xiaomi <br /> FlipBuds Pro</h4>
                <h4>$299 USD</h4>
                <button style={{color:'white',background: '#FA8232'}} className="btn shop-button">
                  Shop Now
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialOffer;
