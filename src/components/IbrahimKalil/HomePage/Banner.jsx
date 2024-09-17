import React from 'react'
import './Banner.css'
import ball1 from '../Images/ball1.png'
import mobo2 from '../Images/mobo2.png'
const Banner = () => {
  return (
   <div className="container content">
      <div className='banner1'>
          
                <div className="container">
                <p className='paragraph'>INTRODUCING</p>
                 <h3 style={{marginTop:'10px'}}>New Apple <br /> Homepod Mini</h3>
                 <p>Jam-packed with innovation, <br /> HomePod mini delivers unexpectedly.</p>
                 <button className='btn'>Shop now  <i class="fa-solid fa-arrow-right"></i></button>
                </div>
           <div>
             <img src={ball1} alt="" />
           </div>
      </div>
      <div className='banner2'>
      <div>
                <div className="container">
                <p className='paragraph2'>INTRODUCING NEW</p>
                 <h3 style={{marginTop:'10px'}}>Xiaomi Mi 11 Ultra <br />
                 12GB+256GB</h3>
                 <p style={{opacity:'.5'}}>*Data provided by internal <br /> laboratories. Industry measurment.</p>
                 <button className='btn'>Shop now  <i class="fa-solid fa-arrow-right"></i></button>
                </div>
           </div>
           <div className="price-tag">
                        229$
                      </div>
             <img src={mobo2} alt="" />
      </div>
   </div>
  )
}

export default Banner