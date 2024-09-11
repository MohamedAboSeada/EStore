import React, { Component } from 'react';

export class NavWelcome extends Component {
	render() {
		return (
			<div className='welcome__header'>
				<div className='container'>
					<p className='welcome__header-text' href='#'>
						Welcome to EStore online eCommerce store
					</p>
					<div className='welcome__links'>
						<p className='welcome__links-text'>Follow us:</p>
						<ul class='socail'>
							<li>
								<a className='scoail__link' href='#'>
									<i className='fab fa-facebook'></i>
								</a>
							</li>
							<li>
								<a className='scoail__link' href='#'>
									<i className='fab fa-twitter'></i>
								</a>
							</li>
							<li>
								<a className='scoail__link' href='#'>
									<i className='fab fa-pinterest'></i>
								</a>
							</li>
							<li>
								<a className='scoail__link' href='#'>
									<i className='fab fa-reddit'></i>
								</a>
							</li>
							<li>
								<a className='scoail__link' href='#'>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
							<li>
								<a className='scoail__link' href='#'>
									<i className='fab fa-github'></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NavWelcome;
