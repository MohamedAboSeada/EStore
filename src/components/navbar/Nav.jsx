import React, { Component } from 'react';
import './Nav.css';

// nav components
import ToHeader from './ToHeader';
import NavWelcome from './NavWelcome';
import MidNav from './MidNav';
import LastNav from './LastNav';
class Nav extends Component {
	render() {
		return (
			<nav>
				<ToHeader />
				<NavWelcome />
				<MidNav />
				<LastNav/>
			</nav>
		);
	}
}

export default Nav;
