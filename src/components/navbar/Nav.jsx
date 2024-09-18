import React, { Component } from 'react';

// nav components
import NavWelcome from './NavWelcome';
import MidNav from './MidNav';

import './Nav.css';

class Nav extends Component {
	render() {
		return (
			<nav>
				<NavWelcome />
				<MidNav />
			</nav>
		);
	}
}

export default Nav;
