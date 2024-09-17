import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './SpecialOffers.css';
import { getProducts } from '../../../API/ProductsAPI.mjs';
import { useNavigate } from 'react-router-dom';

const SpecialOffer = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts(page, (data) => {
      setProducts(data);
    });
  }, [page]);

  const getFirstFourWords = (text) => {
    const words = text.split(' ');
    return words.slice(0, 4).join(' ') + (words.length > 4 ? '...' : '');
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }
 
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
            {products.slice(9, 12).map((product) => (
              <SplideSlide key={product.id}>
                <div className="carousel-slide">
                  <div className="contents">
                    <div className="carousel-content">
                      <div className="carousel-header">
                        <div className="header-line"></div>
                        <p style={{ color: "#2484C2" }}>THE BEST PLACE TO PLAY</p>
                      </div>
                      <h1>{getFirstFourWords(product.main_category)}</h1>
                      <h5>{product.name}</h5>
                      <button
                        style={{ color: 'white', background: '#FA8232' }}
                        className="btn shop-button"  onClick={()=>navigate(`product/${product.id}`)}
                      >
                        Shop Now
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="carousel-image-wrapper">
                      <img
                        style={{ width: '300px' }}
                        className="carousel-image"
                        src={product.image}
                        alt={`Product ${product.id}`}
                      />
                      <div className="price-tag">{product.actual_price}</div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Sidebar Section */}
        <div className="col-12 col-md-4 sidebar-container">
          {products.slice(1, 2).map((item) => (
            <div key={item.id} className="sidebar-item">
              <div className="sale-banner">
                <div className="contents">
                  <div className="sale-content">
                    <h6 className="sale-title">{getFirstFourWords(item.main_category)}</h6>
                    <h4 className="sale-description">{getFirstFourWords(item.name)}</h4>
                    <button
                      style={{ color: 'white', background: '#FA8232' }}
                      className="btn shop-button"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="sale-image-wrapper">
                    <div className="discount-badge">{item.discount_price}</div>
                    <img
                      style={{ width: '97px' }}
                      className="sale-image"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {products.length > 5 && (
            <div className="product-highlight">
              <img
                className="highlight-image"
                src={products[5].image} // Assuming this is the intended highlight product
                alt={products[5].name}
              />
              <div className="highlight-details">
                <h4>{products[5].name}</h4>
                <h4>{products[5].actual_price}</h4>
                <button
                  style={{ color: 'white', background: '#FA8232' }}
                  className="btn shop-button"
                  onClick={() => navigate(`/product/${products[5].id}`)}
                >
                  Shop Now
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
