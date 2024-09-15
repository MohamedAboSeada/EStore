import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// static components
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';

// IbrahimKhalil
import Home from './components/IbrahimKalil/HomePage/Home';

// MohamedAboSeada
import RegisterForm from './components/MohamedAboSeada/RegisterPage/RegisterForm';
import Verify from './components/MohamedAboSeada/RegisterPage/Verify';
import { AuthProvider } from './components/MohamedAboSeada/RegisterPage/helper/handleAuthentication';

// MariamElagamii
import ProductList from './components/MariamElagamii/Products/ProductList';
import Cart from './components/MariamElagamii/Cart/Cart';
import ProductDetail from './components/MariamElagamii/Products/ProductDetail';

import './App.css';



class App extends React.Component {
	render() {
		return (
			<Router>
				<AuthProvider>
					<Nav />
					{/* routes */}
					<Routes>
						<Route path='/' element={<Home />}></Route>
						{/* Cart Route */}
						<Route 
							path="/cart" 
							element={<Cart />}>
						</Route>
						{/* Product Route */}
						<Route 
							path="/product/:id" 
							element={<ProductDetail />}>
						</Route>
						{/* Register Routes */}
						<Route
							path='/register'
							element={<RegisterForm />}
						></Route>
						<Route
							path='/verify-email'
							element={<Verify />}
						></Route>

						{/* Register Routes */}
					</Routes>
					{/* routes */}
					<Footer />
				</AuthProvider>
			</Router>
		);
	}
}

export default App;
