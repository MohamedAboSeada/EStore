import React from 'react'
import './Banner.css'
import { getProducts } from '../../../API/ProductsAPI.mjs'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getProducts(page, function (data) {
      setProducts(data);
    });
  }, [page]);
    const navigate=useNavigate()
  return (
   <div className="container content m-auto">
        {products.slice(1,2).map((product)=>(
          <div className='banner1'>
          
          <div className="container">
          <p className='paragraph'>INTRODUCING</p>
           <h3 style={{marginTop:'10px',marginBottom:'20px'}}>{product.name}</h3>
           <p style={{marginBottom:'30px'}}>Jam-packed with innovation, <br /> HomePod mini delivers unexpectedly.</p>
           <button onClick={()=>navigate(`shop/${product.id}`)} className='btn'>Shop now  <i class="fa-solid fa-arrow-right"></i></button>
          </div>
     <div>
       <img src={product.image} alt="" />
     </div>
</div>
        ))}
      {
        products.slice(5,6).map((product)=>(
          <div className='banner2'>
      <div>
                <div className="container">
                <p className='paragraph2'>INTRODUCING NEW</p>
                 <h3 style={{marginTop:'10px',color:'white'}}>{product.name}</h3>
                 <p style={{opacity:'.9',marginBottom:'20px'}}>*Data provided by internal <br /> laboratories. Industry measurment.</p>
                 <button onClick={()=>navigate(`shop/${product.id}`)} className='btn'>Shop now  <i class="fa-solid fa-arrow-right"></i></button>
                </div>
           </div>
           <div className="price-tag">
                        229$
                      </div>
             <img src={product.image} alt="" />
      </div>
        ))
      }
   </div>
  )
}

export default Banner