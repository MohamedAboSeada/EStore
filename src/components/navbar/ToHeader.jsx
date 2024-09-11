import React, { Component } from 'react';

class TopHeader extends Component {
	render() {
		return (
			<div className='discount__header bg-dark'>
				<div className='container'>
					<h3 className='discount__header-logo' href='#'>
						<span className='special__logo bg-warning text-black'>
							Black
						</span>
						Friday
					</h3>
					<p className='discount__header-deal'>
						Up To <span className='text-warning'>59%</span> Off
					</p>
					<button className='discount__header-close'>
						<i className='fas fa-times'></i>
					</button>
				</div>
			</div>
		);
	}
}

export default TopHeader;
