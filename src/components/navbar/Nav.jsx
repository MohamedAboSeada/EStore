import React, { Component } from 'react';
import './Nav.css';

// nav components
import ToHeader from './ToHeader';
import NavWelcome from './NavWelcome';
import MidNav from './MidNav';
class Nav extends Component {
	render() {
		return (
			<nav>
				<ToHeader />
				<NavWelcome />
				<MidNav />
			</nav>
		);
	}
}

export default Nav;
