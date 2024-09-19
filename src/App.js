import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// static components
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';

import Service from './components/Ahmed Raafat/Service';
import About from './components/Ahmed Raafat/About';
import BreadChrumb from './components/navbar/BreadChrumb';

// IbrahimKhalil
import Home from './components/IbrahimKalil/HomePage/Home';

// MohamedAboSeada
import RegisterForm from './components/MohamedAboSeada/RegisterPage/RegisterForm';
import { AuthProvider } from './components/MohamedAboSeada/RegisterPage/helper/handleAuthentication';
import { CartProvider } from './components/MariamElagamii/Cart/CartContext';
import { WhishListProvider } from './components/MohamedAboSeada/Dashboard/WhishListContext';
import { OrderProvider } from './components/MohamedAboSeada/Dashboard/orders';

// Dashboard
import Dashboard from './components/MohamedAboSeada/Dashboard/Dashboard';
import UserData from './components/MohamedAboSeada/Dashboard/UserData';
import OrderHistory from './components/MohamedAboSeada/Dashboard/OrderHistory';
import Settings from './components/MohamedAboSeada/Dashboard/Settings';
import ProtectedRoute from './components/MohamedAboSeada/RegisterPage/helper/ProtectedRoute';
import Whishlist from './components/MohamedAboSeada/Dashboard/Whishlist';
import OrderDetails from './components/MohamedAboSeada/Dashboard/OrderDetails';

// MariamElagamii
import ProductList from './components/MariamElagamii/Products/ProductList';
import Cart from './components/MariamElagamii/Cart/Cart';
import ProductDetails from './components/MariamElagamii/Products/ProductDetails';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<AuthProvider>
					<CartProvider>
						<WhishListProvider>
							<OrderProvider>
								<Nav />
								<BreadChrumb />
								{/* routes */}
								<Routes>
									<Route
										path='/EStore'
										element={<Home />}
									></Route>
									{/* customer service */}
									<Route
										path='/customer-service'
										element={<Service />}
									></Route>

									{/* about */}
									<Route
										path='/about'
										element={<About />}
									></Route>

									{/* shop */}
									<Route
										path='/shop'
										element={<ProductList />}
									></Route>
									<Route
										path='/shop/:id'
										element={<ProductDetails />}
									></Route>

									{/* dashboard */}
									<Route
										path='EStore/dashboard'
										element={
											<ProtectedRoute>
												<Dashboard />
											</ProtectedRoute>
										}
									>
										<Route
											path='user-data'
											element={<UserData />}
										></Route>
										<Route
											path='order-history'
											element={<OrderHistory />}
										></Route>
										<Route
											path='order-history/:id'
											element={<OrderDetails />}
										></Route>
										<Route
											path='cart'
											element={<Cart />}
										></Route>
										<Route
											path='whishlist'
											element={<Whishlist />}
										></Route>
										<Route
											path='settings'
											element={<Settings />}
										></Route>
									</Route>

									{/* Register Routes */}
									<Route
										path='/register'
										element={<RegisterForm />}
									></Route>
								</Routes>
								{/* routes */}
								<Footer />
							</OrderProvider>
						</WhishListProvider>
					</CartProvider>
				</AuthProvider>
			</Router>
		);
	}
}

export default App;
