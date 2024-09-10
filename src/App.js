import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Ahmed Raafat/About";
import Session from "./components/Ahmed Raafat/Session";


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
      <Session/>
    
    );
  }
}

export default App;
