import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MidNav.css';
import { getProducts } from '../../API/ProductsAPI.mjs';

const MidNav = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false); // حالة لإظهار/إخفاء النتائج
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShowResults(true); // إظهار النتائج عند الكتابة
  };

  useEffect(() => {
    getProducts(page, (data) => {
      setProducts(data);
    });
  }, [page]);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts([]);
      setShowResults(false); // إخفاء النتائج إذا كان الاستعلام فارغًا
      return;
    }
    
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(results);
  }, [query, products]);

  const handleResultClick = (productId) => {
    setShowResults(false); // إخفاء النتائج عند الضغط على نتيجة
    navigate(`product/${productId}`);
  };
  const getFirstTenWords = (text) => {
    const words = text.split(' ');
    return words.slice(0, 10).join(' ') + (words.length > 4 ? '...' : '');
  };
  return (
    <div className='mid__header'>
      <div className='container'>
        <Link to='/' className='mid__header-logo'>
          EStore
        </Link>
        <div className='search__field'>
          <input
            className='input__field'
            type='text'
            placeholder='Search for anything...'
            onChange={handleChange}
            value={query}
          />
          {showResults && (
            <div className='search-results'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className='search-result-item' 
                    onClick={() => handleResultClick(product.id)} // استخدام دالة الضغط
                  >
                      <h6>{getFirstTenWords(product.name)}</h6>
                     <img width={70} height={70} src={product.image} alt="" />
                  </div>
                ))
              ) : (
                query && <div className='no-results'>No results found</div>
              )}
            </div>
          )}
          <div className='search__icon'>
            <i className='fas fa-search'></i>
          </div>
        </div>
        <div style={{ marginRight: '10px' }} className='mid__btns'>
          <button className='mid__btn'>
            <Link to="/cart">
              <i className='fas fa-cart-shopping' />
            </Link>
          </button>
          <button className='mid__btn'>
            <i className='fas fa-heart'></i>
          </button>
          <Link to='/register' className='mid__btn'>
            <i className='fas fa-user'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MidNav;
