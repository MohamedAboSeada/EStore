import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/IbrahimKalil/HomePage/Home";
// static components
import Nav from "./components/navbar/Nav";
import Footer from "./components/Footer/Footer";

import Service from "./components/Ahmed Raafat/Service";
import About from "./components/Ahmed Raafat/About";
import ProductDetail from "./components/MariamElagamii/Products/ProductDetail";
import Cart from "./components/MariamElagamii/Cart/Cart";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/help" element={<Service />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
        {/* routes */}
        <Footer />
      </Router>
    );
  }
}

export default App;
