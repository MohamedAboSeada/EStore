import React from "react";
import pic from "../Images/carsol1.png";
import plane from "../Images/plane.png";
import camera from "../Images/camera.png";
import playstation from "../Images/playstation.png";
import phone2 from "../Images/phone2.png";
import screen from "../Images/screen.png";
import games from "../Images/games.png";
import playstation2 from "../Images/playstation2.png";
import somethings from "../Images/somethings.jpg";
import { getProducts } from "../../../API/ProductsAPI.mjs";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getProducts(page, function (data) {
      setProducts(data);
    });
  }, [page]);

  return (
   <div className="container">
     <div className="featured-products-container">
      <div className="sidebar">
        <div className="sidebar-content">
          <p className="category-title">COMPUTER & ACCESSORIES</p>
          <h4 className="discount">32% Discount</h4>
          <p className="description">For all electronics products</p>
          <div className="offer-end">
            <p>Offers ends in:</p>
            <h6 className="offer-end-date">ENDS OF CHRISTMAS</h6>
          </div>
          <button className="shop-now-btn">
            Shop now
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <img className="sidebar-image" src={somethings} alt="Featured Offer" />
        </div>
      </div>
      <div className="main-content">
        <div className="navigation">
          <h4>Featured Products</h4>
          <ul>
            <li><a href="#">All Product</a></li>
            <li><a href="#">Smart Phone</a></li>
            <li><a href="#">Laptop</a></li>
            <li><a href="#">Headphone</a></li>
            <li><a href="#">Tv</a></li>
            <li><a href="#" className="browse-all" style={{color: '#FA8232'}}>
              Browse All Product
              <i className="fa-solid fa-arrow-right"></i>
            </a></li>
          </ul>
        </div>
        <div className="products-grid">
          <div className="product-item sold-out">
            <img width={100} height={100} src={camera} alt="Product" />
            <div className="product-info">
              <div className="badge sold-out-badge">SOLD OUT</div>
              <div className="rating">
                {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                <p>(738)</p>
              </div>
              <h5>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h5>
              <p className="price">$442.12</p>
            </div>
          </div>
          <div className="product-item discount">
            <img src={playstation2} alt="Product" />
            <div className="product-info">
              <div className="badge discount-badge">19% OFF</div>
              <div className="rating">
                {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                <p>(738)</p>
              </div>
              <h5>Simple Mobile 4G LTE Prepaid Smartphone</h5>
              <p className="price">$442.12</p>
            </div>
          </div>
          <div className="product-item">
            <img src={phone2} alt="Product" />
            <div className="product-info">
              <div className="rating">
                {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                <p>(738)</p>
              </div>
              <h5>4K UHD LED Smart TV with Chromecast Built-in</h5>
              <p className="price">$442.12</p>
            </div>
          </div>
          <div className="product-item">
            <img width={100} src={playstation} alt="Product" />
            <div className="product-info">
              <div className="rating">
                {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                <p>(738)</p>
              </div>
              <h5>Sony DSCHX8 High Zoom Point & Shoot Camera</h5>
              <p className="price">$442.12</p>
            </div>
          </div>
          <div className="product-item">
            <img src={screen} alt="Product" />
            <div className="product-info">
              <div className="rating">
                {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                <p>(738)</p>
              </div>
              <h5>Dell Optiplex 7000x7480 All-in-One Computer Monitor</h5>
              <p className="price">$447.12</p>
            </div>
          </div>
          <div className="product-item discount">
            <img src={plane} alt="Product" />
            <div className="product-info">
              <div className="rating">
                {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                <p>(738)</p>
              </div>
              <h5>Portable Washing Machine, 11lbs capacity Model 18NMFIAM</h5>
              <div className="price">
                <p className="original-price">$865.99</p>
                <p className="discounted-price">$70</p>
              </div>
            </div>
          </div>
          <div className="product-item hot">
            <img src={games} alt="Product" />
            <div className="product-info">
              <div className="badge hot-badge">HOT</div>
              <div className="rating">
                {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                <p>(738)</p>
              </div>
              <h5>2-Barrel Carburetor Carb 2100 Engine Increase Horsepower</h5>
              <p className="price">$160</p>
            </div>
          </div>
          <div className="product-item discount">
            <img src={pic} alt="Product" />
            <div className="discount-badge">32% OFF</div>
            <div className="rating">
              {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
              <p>(738)</p>
            </div>
            <h5>
              JBL FLIP 4 - Waterproof <br />
              Portable Bluetooth <br />
              Speaker - Black
            </h5>
            <div className="price">
              <p className="original-price">$360</p>
              <p className="discounted-price">$250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default FeaturedProducts;
