import React, { Component, createRef } from 'react';

class TopHeader extends Component {
	constructor(props) {
		super(props);

		this.TopHeader = createRef(null);
	}

	handleClose = () => {
		this.TopHeader.current.style.display = 'none';
	};

	render() {
		return (
			<div ref={this.TopHeader} className='discount__header bg-dark'>
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
					<button
						onClick={this.handleClose}
						className='discount__header-close'
					>
						<i className='fas fa-times'></i>
					</button>
				</div>
			</div>
		);
	}
}

export default TopHeader;
