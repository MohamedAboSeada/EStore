import React from 'react'
import trophy from '../Images/Trophy.png'
import airbodsVector from '../Images/airbodsVector.png'
import CreditCard from '../Images/CreditCard.png'
import Package from '../Images/Package.png'
import './Features.css'
const Features = () => {
  return (
      <div style={{display:'flex',justifyContent:'space-between'}} className="container content">
          <div className='containerDiv' style={{display:'flex'}}>
            <div>
                <img src={trophy} alt="" />
            </div>
            <div>
                <h4>Fasted Delivery</h4>
                <p className='lineUnderLine'>Delivery in 24/H</p>
            </div>
          </div>
            <div className='line' style={{backgroundColor:"rgb(174, 173, 173)"}} ></div>
          <div className='containerDiv' style={{display:'flex'}}>
            <div>
                <img src={airbodsVector} alt="" />
            </div>
            <div>
                <h4>24 Hours Return</h4>
                <p>100% money-back guarantee</p>
            </div>
          </div>
          <div className='line' style={{backgroundColor:"rgb(174, 173, 173)"}} ></div>
          <div className='containerDiv' style={{display:'flex'}}>
            <div>
                <img src={CreditCard} alt="" />
            </div>
            <div>
                <h4>Secure Payment</h4>
                <p>Your money is safe</p>
            </div>
          </div>
          <div className='line' style={{backgroundColor:"rgb(174, 173, 173)"}} ></div>
          <div className='containerDiv' style={{display:'flex'}}>
            <div>
                <img src={Package} alt="" />
            </div>
            <div>
                <h4>Support 24/7</h4>
                <p>Live contact/message</p>
            </div>
          </div>
          <div className='line lastLine' style={{backgroundColor:"rgb(174, 173, 173)"}} ></div>
      </div>
  )
}

export default Features
