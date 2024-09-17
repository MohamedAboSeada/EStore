import React from 'react';
import './BestDeals.css';  // استيراد ملف CSS الخاص بالمكون
import pic from '../Images/carsol1.png';
import plane from '../Images/plane.png';
import camera from '../Images/camera.png';
import playstation from '../Images/playstation.png';
import phone2 from '../Images/phone2.png';
import screen from '../Images/screen.png';
import games from '../Images/games.png';
import playstation2 from '../Images/playstation2.png';
import { getProducts } from '../../../API/ProductsAPI.mjs';
const BestDeals = () => {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getProducts(page, function (data) {
      setProducts(data);
    });
  }, [page]);
  return (
   <div className="container">
     <div className="contents container">
      <div className="best-deals-info">
        <h4>Best Deals</h4>
        <p className="deal-end">Deals ends in</p>
        <div className="countdown">
          <p >16d :</p>
          <p>21h :</p>
          <p>57m :</p>
          <p>23s</p>
        </div>
      </div>
      <div className="link-container">
        <a href="#" className="browse-link">
          Browse All Product <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
      <div  className='class2'>
        <table >
          <tr>
            <td rowSpan={2} className='dataContainer1'>
             <div className="container-fluid py-4">
               <div style={{position:'relative'}}>
                <div style={{position:'absolute',background: "#EFD33D",padding:'3px',borderRadius:'4px',}}>32% OFF</div>
                <div style={{position:'absolute',top:'40px',background: "#EE5858",padding:'3px',borderRadius:'4px'}}>HOT</div>
               <img width={200} height={170} src={playstation2} alt="" />
               </div>
               <div style={{display:'flex',alignItems:'center'}}>
                <i style={{color:'#EBC80C'}} class="fa-solid fa-star"></i>
                <i style={{color:'#EBC80C'}}class="fa-solid fa-star"></i>
                <i style={{color:'#EBC80C'}} class="fa-solid fa-star"></i>
                <i style={{color:'#EBC80C'}} class="fa-solid fa-star"></i>
                 <p style={{marginTop:'15px'}}>(52,677)</p>
               </div>
              <h5>Xbox Series S - 512GB SSD Console <br /> with Wireless Controller - EU Versio...</h5>
              <div style={{display:'flex'}}>
              <p style={{ textDecoration: 'line-through' }}>$865.99</p>
                <p style={{color:' #2DA5F3'}}>$442.12</p>
              </div>
                <div>
                <p style={{color:'rgb(169, 169, 169)'}}>Games built using the Xbox Series X|S  <br />
                   development kit showcase unparalleled  <br />
                    load times, visuals.</p>
                </div>
                <div style={{display:'flex' ,justifyContent:'center',gap:'5px'}}>
                   <button style={{background: '#FFE7D6',border:'0px',padding:'0px 10px'}}><i className='fas fa-heart'></i></button>
                   <button style={{background: '#FA8232',border:'0px',padding:"10px 20px",color:'white' }}><i className='fas fa-cart-shopping'></i>Add to card</button>
                   <button style={{background: '#FFE7D6',border:'0px',padding:'0px 10px'}}><i class="fa-regular fa-eye"></i></button>
                </div>
             </div>
            </td>
           <div className='dataContainer2' >
           <td className='rightDivs container-fluid'>
           <div style={{position:'relative'}}>
                <div style={{position:'absolute',top:'10px',right:'0px',background: '#929FA5',padding:'3px',borderRadius:'4px',color:'white'}}>SOLD OUT</div>
               <img width={150} height={150} src={camera} alt="" />
               </div>
              <h5>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h5>
              <p style={{color:' #2DA5F3'}}>$442.12</p>
            </td>
            <td className='rightDivs container-fluid'>
            <div style={{position:'relative'}}>
                <div style={{position:'absolute',top:'10px',right:'0px',background: "EFD33D#",padding:'3px',borderRadius:'4px',}}>19% OFF</div>
               <img width={150} height={150} src={playstation2} alt="" />
               </div>
            <h5>Simple Mobile 4G LTE Prepaid Smartphone</h5>
            <p style={{color:' #2DA5F3'}}>$442.12</p>
            </td>
            <td className='rightDivs container-fluid'>
            <img width={150} height={150} src={phone2} alt="" />
            <h5>4K UHD LED Smart TV with Chromecast Built-in</h5>
            <p style={{color:' #2DA5F3'}}>$442.12</p>
            </td>
            <td className='rightDivs container-fluid'>
            <img width={150} height={150} src={playstation} alt="" />
             <h5>Sony DSCHX8 High Zoom Point & Shoot Camera</h5>
             <p style={{color:' #2DA5F3'}}>$442.12</p>
            </td>
           </div>
          </tr>


          <tr>
            <div className='dataContainer3'>
            <td className='rightDivs container-fluid'>
              <img width={150} height={150} src={screen} alt="" />
             <h5>Dell Optiplex 7000x7480 All-in-One Computer Monitor</h5>
             <p style={{color:' #2DA5F3'}}>$447.12</p>
            </td>
            <td className='rightDivs container-fluid'>
              <img width={150} height={150} src={plane} alt="" />
            <h5>Portable Wshing Machine, 11lbs capacity Model 18NMFIAM</h5>
            <div style={{display:'flex',gap:'5px'}}>
              <p style={{textDecoration:'line-through'}}>$865.99</p>
              <p  style={{color:' #2DA5F3'}}>$70</p>
            </div>
            </td>
            <td className='rightDivs container-fluid'>
            <div style={{position:'relative'}}>
                <div style={{position:'absolute',top:'10px',right:'0px',background: "#EE5858",padding:'3px',borderRadius:'4px'}}>HOT</div>
               <img width={200} height={170} src={games} alt="" />
               </div>
             <h5>2-Barrel Carburetor Carb 2100 Engine Increase Horsepower</h5>
             <p style={{color:' #2DA5F3'}}>$160</p>
            </td>
            <td className='rightDivs container-fluid'>
            <div style={{position:'relative'}}>
                <div style={{position:'absolute',top:'10px',right:'0px',background: '#EFD33D',padding:'3px',borderRadius:'4px',color:'white'}}>32% OFF</div>
               <img width={150} height={150} src={pic} alt="" />
               </div>
              <h5>JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black</h5>
              <div style={{display:'flex',gap:'5px'}}>
              <p style={{textDecoration:'line-through'}}>$360</p>
              <p   style={{color:' #2DA5F3'}}>$250</p>
            </div>
            </td>
            </div>
          </tr>
        </table>
      </div>
   </div>
  );
}

export default BestDeals;
