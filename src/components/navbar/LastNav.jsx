import React from 'react'
import './LastNav.css'
const LastNav = () => {
  return (
    <div>
        <div className='container lastNavContent'>
         <div  className='btnLastNav'>
            <button style={{padding:'10px 10px',border:'0px'}}>
            All Category  <img src="/Images/arrowDown.png" alt="" />
            </button>
            <button style={{padding:'5px 20px',border:'0px',backgroundColor:'white'}}>
            <img src="/Images/MapPinLine.png" alt="" />Track Order
            </button>
            <button style={{padding:'5px 20px',border:'0px',backgroundColor:'white'}}>
            <img src="/Images/ArrowsCounter.png" alt="" />  Compare
            </button>
            <button style={{padding:'5px 20px',border:'0px',backgroundColor:'white'}}>
            <img src="/Images/Headphones.png" alt="" />  Customer Support
            </button>
            <button style={{padding:'5px 20px',border:'0px',backgroundColor:'white'}}>
            <img src="/Images/Info.png" alt="" />  Need Help
            </button>
         </div>
         <div style={{display:'flex'}}>
             <img src="/Images/telephone.png" alt="" />
            <h6 style={{marginTop:'5px'}}>+1-202-555-0104</h6>
         </div>
        
    </div>
      <div style={{width:'100% ',height:'1px',backgroundColor:'gainsboro'}}></div>
    </div>
  )
}

export default LastNav