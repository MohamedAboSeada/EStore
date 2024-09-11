import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Project Components
import Home from "./components/MohamedAboSeada/HomePage/Home";

// static components
import Nav from "./components/navbar/Nav";
import Footer from "./components/Footer/Footer";

import About from "./components/Ahmed Raafat/About";
import Service from "./components/Ahmed Raafat/Service";

class App extends React.Component {
  render() {
    return (
      // <Router>
      //   <Nav />
      //   <Routes>
      //     <Route path="/" element={<Home />}></Route>
      //     <Route path="/about" element={<About />}></Route>
      //   </Routes>
      //   <Footer />
      // </Router>

      <Service/>



    );
  }
}

export default App;
