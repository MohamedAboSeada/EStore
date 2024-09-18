import React, { useRef, useState, useEffect } from "react";
import { getProducts } from "../../../API/ProductsAPI.mjs";
import "./Slider.css";
import { useNavigate } from "react-router-dom";
const Slider = () => {
  const [products, setProducts] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    getProducts(1, (data) => {
      console.log('Fetched products:', data);
      setProducts(data);
    });
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };
    const navigate=useNavigate()
  return (
    <section className="slider py-8 container">
        <h3 style={{textAlign:'center',paddingBottom:"90px"}}>Shop with Categorys</h3>
      <div className="slider-container relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="slider-content flex overflow-x-auto snap-x snap-mandatory"
        >
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="slider-item snap-center"
                style={{ height: "400px" }}
              >
                <img
                   onClick={()=>navigate(`shop/${product.id}`)}
                  src={product.image || 'https://via.placeholder.com/400'}
                  alt={product.name}
                  className="slider-image"
                />
                <p style={{marginTop:'40px'}}>
                 {product.name.split(' ').slice(0, 3).join(' ')}
               </p>

              </div>
            ))
          ) : (
            <div className="slider-item">No products available</div>
          )}
        </div>
        <button className="scroll-button scroll-left" onClick={scrollLeft}>
        <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button className="scroll-button scroll-right" onClick={scrollRight}>
        <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Slider;
