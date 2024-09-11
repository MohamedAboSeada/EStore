import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Project Components
import Home from './components/MohamedAboSeada/HomePage/Home';

// static components
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Nav />
				{/* routes */}
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
				{/* routes */}
				<Footer />
			</Router>
		);
	}
}

export default App;
