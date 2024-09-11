import React, { Component } from "react";
import "./Service.css";

class Service extends Component {
  render() {
    return (
      <div>
        {/* first component */}

        <div className="firstMain">


          <div className="firstImg">


            <div className="firstContent">
              <div >
                <span className="firstHeader">HELP CENTER</span>
              </div>
              <div>
                <h2 className="secondHeader">How we can help you!</h2>
              </div>
              <form className="search-form">
                <div className="search">
                    
                    <input type="text" placeholder="Enter your question or keyword" class="search-input"/>
                    <button type="submit" class="search-button">Search</button>
                </div>
              </form>

             

            
            
            </div>



          </div>




        </div>

        {/* ...........................................  */}
      </div>
    );
  }
}

export default Service;
