import React, { Component } from "react";
import "./Service.css";
import FaqPage from "../MariamElagamii/FAQ/FaqPage";
class Service extends Component {
  render() {
    return (
      <>
        <div>
          {/* first component */}

          <div className="firstMain">
            <div className="firstImg">
              <div className="firstContent">
                <div>
                  <span className="firstHeader">HELP CENTER</span>
                </div>
                <div>
                  <h2 className="secondHeader">How we can help you!</h2>
                </div>
                <form className="search-form">
                  <div className="search">
                    <input
                      type="text"
                      placeholder="Enter your question or keyword"
                      class="search-input"
                    />
                    <button type="submit" class="search-button">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* done ...................................................................................  */}

          {/* ........................................................................................................ */}

          {/* second component */}

          <div className="serviceMain">
            <h1 className="serviceHeader1">
              What can we assist you with today?
            </h1>

            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-3 mb-4">
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/truck.png" alt="error"></img>
                      <button class="button1">Track Order</button>
                    </div>
                  </div>

                  {/* ........... */}
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/Stack.png" alt="error"></img>
                      <button class="button1">Wishlist & Compare</button>
                    </div>
                  </div>
                </div>
                {/* ...................................................... */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-3 mb-4">
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/LockOpen.png" alt="error"></img>
                      <button class="button1">Reset Password</button>
                    </div>
                  </div>

                  {/* ........... */}
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/Notepad.png" alt="error"></img>
                      <button class="button1">Shipping & Billing</button>
                    </div>
                  </div>
                </div>
                {/* ....................... */}

                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-3 mb-4">
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/CreditCard2.png" alt="error"></img>
                      <button class="button1">Payment Option</button>
                    </div>
                  </div>

                  {/* ........... */}
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/CreditCard2.png" alt="error"></img>
                      <button class="button1">Shoping Cart & Wallet</button>
                    </div>
                  </div>
                </div>
                {/* .............................. */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-3 mb-4">
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/User.png" alt="error"></img>
                      <button class="button1">User & Account</button>
                    </div>
                  </div>

                  {/* ........... */}
                  <div className="Help">
                    <div class="button-container">
                      <img src="./images/Storefront.png" alt="error"></img>
                      <button class="button1">Sell on Clicon</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* .................................................. */}

          {/* third component */}
          <hr className="line2"></hr>

          <div className="topic">
            <h1 className="topicHeader">Popular Topics</h1>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-4 mb-4">
                  <div className="popularTopic">
                    <ul className="ul">
                      <li> How do I return my item? </li>
                      <li className="policy">
                        What is Clicons Returns Policy?
                      </li>
                      <li> How long is the refund process? </li>
                    </ul>
                  </div>
                </div>
                {/* /////////////////////////////////////////////// */}

                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-4 mb-4">
                  <div className="popularTopic">
                    <ul className="ul">
                      <li> What are the 'Delivery Timelines'? </li>
                      <li>What is 'Discover Your Daraz Campaign 2022'?</li>
                      <li>
                        {" "}
                        What is the Voucher & Gift Offer in this Campaign?{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /////////////////////////////////////////////// */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-4 mb-4">
                  <div className="popularTopic">
                    <ul className="ul">
                      <li> How to cancel Clicon Order. </li>
                      <li>Ask the Digital and Device Community</li>
                      <li> How to change my shop name?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////// */}

          {/* done */}

          {/* The fourth component */}

          {/* ///////////////////////////////////////// */}
          {/* now */}

          <div className="card">
            <div className="conect">
              <span className="conectSpan">CONTACT US</span>
              <br></br>
              <h1 className="conectHeader">
                {" "}
                Don’t find your answer.<br></br>Contact with us
              </h1>
            </div>

            <div className="container">
              <div className="row">
                {/* First Card */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-6 mb-4">
                  <div className="card-item d-flex align-items-center">
                    <div className="icon">
                      <img src="./images/conect.png" alt="Icon" />
                    </div>
                    <div className="content">
                      <h3>Call us now</h3>
                      <p>
                        We are available online from 9:00 AM to 5:00 PM
                        (GMT+5:45). Talk with us now.
                      </p>
                      <h4>+1-202-555-0126</h4>
                      <button className="btn1">Call now</button>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-6 mb-4">
                  <div className="card-item d-flex align-items-center">
                    <div className="icon">
                      <img src="./images/conect2.png" alt="Icon" />
                    </div>
                    <div className="content">
                      <h3>Chat with us</h3>
                      <p>
                        We are available online from 9:00 AM to 5:00 PM
                        (GMT+5:45). Talk with us now.
                      </p>
                      <h4>Support@clicon.com</h4>
                      <button className="btn2">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ...................................................................... */}
        </div>
        <FaqPage />
      </>
    );
  }
}

export default Service;
