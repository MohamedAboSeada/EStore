import React from "react";
import somethings from "../Images/somethings.jpg";
import { getProducts } from "../../../API/ProductsAPI.mjs";
import "./FeaturedProducts.css";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getProducts(page, function (data) {
      setProducts(data);
    });
  }, [page]);
  const getFirstFourWords = (text) => {
    const words = text.split(' ');
    return words.slice(0, 4).join(' ') + (words.length > 4 ? '...' : '');
  };
  const navigate=useNavigate()
  return (
   <div className="container">
     <div className="featured-products-container">
      <div className="sidebar">
        <div className="sidebar-content">
          <p className="category-title">COMPUTER & ACCESSORIES</p>
          <h4 className="discount">32% Discount</h4>
          <p className="description">For all electronics products</p>
          <div className="offer-end" >
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
         {products.slice(1,9).map((product, index) => (
      <div
        key={index}
        className={`product-item ${product.isSoldOut ? 'sold-out' : ''} ${product.isDiscounted ? 'discount' : ''} ${product.isHot ? 'hot' : ''}`}
      >
        <img onClick={()=>navigate(`shop/${product.id}`)} src={product.image} alt="Product" width={product.isSoldOut || product.isHot ? 100 : undefined} />
        <div className="product-info">
          {product.badgeText && <div className={`badge ${product.isSoldOut ? 'sold-out-badge' : 'discount-badge'}`}></div>}
          {product.discountText && !product.isSoldOut && <div className="badge discount-badge">{product.discountText}</div>}
          <div className="rating">
            {[...Array(4)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            <p>(738)</p>
          </div>
          <h5>{getFirstFourWords(product.name)}</h5>
           <div style={{display:'flex',}}>
           <p style={{color: "#2DA5F3"}} className="price">{product.actual_price}</p>
           <p style={{marginLeft:'5px'}} className="price">{product.discount_price}</p>
           </div>
        </div>
      </div>
    ))}
  </div>
      </div>
    </div>
   </div>
  );
};

export default FeaturedProducts;
