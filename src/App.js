import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Ahmed Raafat/About";
import Session from "./components/Ahmed Raafat/Session";
import LastSession from "./components/Ahmed Raafat/LastSession";
import Banner from "./components/Ahmed Raafat/Banner";

// routes
import Home from "./components/HomePage/Home";

// Project Components
class App extends React.Component {
  render() {
    return (
     
      // <Router>
      //   <Routes>
      //     <Route path="/" element={<Home />}></Route>
      //   </Routes>
      // </Router>

      // <About/>
      // <Session/>
      
      // <LastSession/>
      <Banner/>
    
    );
  }
}

export default App;
