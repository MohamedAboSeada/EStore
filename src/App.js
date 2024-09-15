import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// static components
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';

// IbrahimKhalil
import Home from './components/IbrahimKalil/HomePage/Home';

// MohamedAboSeada
import RegisterForm from './components/MohamedAboSeada/RegisterPage/RegisterForm';
import { AuthProvider } from './components/MohamedAboSeada/RegisterPage/helper/handleAuthentication';

// Dashboard
import Dashboard from './components/MohamedAboSeada/Dashboard/Dashboard';
import UserData from './components/MohamedAboSeada/Dashboard/UserData';
import OrderHistory from './components/MohamedAboSeada/Dashboard/OrderHistory';
import Settings from './components/MohamedAboSeada/Dashboard/Settings';
import ProtectedRoute from './components/MohamedAboSeada/RegisterPage/helper/ProtectedRoute';

// MariamElagamii
import ProductList from './components/MariamElagamii/Products/ProductList';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<AuthProvider>
					<Nav />
					<Routes>
						{/* home page */}
						<Route path='/' element={<Home />}></Route>

						{/* register page */}
						<Route
							path='/register'
							element={<RegisterForm />}
						></Route>

						{/* dashboard page */}
						<Route
							path='/dashboard'
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
								path='settings'
								element={<Settings />}
							></Route>
						</Route>

						{/* products list page */}
						<Route path='/shop' element={<ProductList />}></Route>
					</Routes>

					<Footer />
				</AuthProvider>
			</Router>
		);
	}
}

export default App;
