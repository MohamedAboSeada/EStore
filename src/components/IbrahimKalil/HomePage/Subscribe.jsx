import React from 'react'
import './Subscripe.css'
const Subscribe = () => {
  return (
    <div className='contentsService' >
        <div style={{textAlign:'center'}}>
        <h1 > Subscribe to our newsletter</h1>
            <p>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et <br /> cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
             <div className='inputContainer'>
             <input type="email"placeholder='Email address' />
              <button>Subscribe
              <i class="fa-solid fa-arrow-right"></i>
              </button>
             </div>
            <div>
                <img src="/Images/google.png" alt="" />
                <img src="/Images/amazon.png" alt="" />
                <img src="/Images/philips.png" alt="" />
                <img src="/Images/toshiba.png" alt="" />
                <img src="/Images/samsung.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Subscribe