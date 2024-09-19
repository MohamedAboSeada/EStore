import React, { useEffect, useState } from 'react'
import './LatestNews.css'
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../../API/ProductsAPI.mjs';

const LatestNews = () => {
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
        return words.slice(0, 7).join(' ') + (words.length > 4 ? '...' : '');
      };
  return (
    <div>
        <div className='LatestNewsDiv'>
            <h1 style={{textAlign:'center',paddingTop:'40px'}}>Latest News</h1>
        <div className='container contentCards'>
        {products.slice(17,20).map((product)=>(
          <div key={product.id} className="card-lastDiv">
          <img style={{margin:'10px auto'}} width='70%' height={220} src={product.image} alt={product.main_category} className="card-image" />
             <div className='imgDivAndText' >
                  <div >
                    <img src="/Images/UserCircle.png" alt="" />Kristin
                  </div>
                  <div >
                    <img src="/Images/CalendarBlank.png" alt="" />19Dec, 2013
                  </div>
                  <div >
                    <img src="/Images/UserCircle.png" alt="" />453
                  </div>
             </div>
          <div className="card-content">
            <h4 className="card-title">{getFirstFourWords(product.name)}</h4>
            <p className="card-description">{product.name}</p>
            <p className="card-price">${product.actual_price}</p>
              <button onClick={()=>navigate(`product/${product.id}`)} className='btnReadMore'>Read more <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
       ))}
        </div>
    </div>
    </div>
  )
}

export default LatestNews