import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className='bg-dark text-white'>
				<div className='container pt-5'>
					<div className='row'>
						<div className='estore__footer col-6 col-md-4 mb-3'>
							<h1 className='footer__logo text-warning'>ESTORE</h1>
							<div className='support'>
								<p className='support__header'>
									customer support
								</p>
								<h4 className='support__number text-warning'>
									(926) 555-0129
								</h4>
							</div>
							<h4 className='support__address text-secondary'>
								<i className='fas fa-location-pin'></i>4517
								Cairo Eve
							</h4>
							<a className='support__link text-secondary' href='#'>
								team@gmail.com
							</a>
						</div>
						<div className='col-6 col-md-2 mb-3'>
							<h5>Quick Links</h5>
							<ul className='nav flex-column'>
								<li className='nav-item mb-2'>
									<Link
										to='/'
										className='nav-link p-0 text-secondary'
									>
										Home
									</Link>
								</li>
								<li className='nav-item mb-2'>
									<a
										href='#'
										className='nav-link p-0 text-secondary'
									>
										Shop Product
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a
										href='#'
										className='nav-link p-0 text-secondary'
									>
										Shopping Cart
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a
										href='#'
										className='nav-link p-0 text-secondary'
									>
										WhishList
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a
										href='#'
										className='nav-link p-0 text-secondary'
									>
										Track Order
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a
										href='#'
										className='nav-link p-0 text-secondary'
									>
										About Us
									</a>
								</li>
							</ul>
						</div>

						<div className='col-md-5 offset-md-1 mb-3'>
							<form>
								<h5>Subscribe to our newsletter</h5>
								<p className='text-secondary'>
									Monthly digest of what's new and exciting
									from us.
								</p>
								<div className='d-flex flex-column flex-sm-row w-100 gap-2'>
									<label
										for='newsletter1'
										className='visually-hidden'
									>
										Email address
									</label>
									<input
										id='newsletter1'
										type='text'
										className='form-control'
										placeholder='Email address'
									/>
									<button
										className='btn btn-primary'
										type='button'
									>
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>

					<div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
						<p>© 2024 EStore Company, Inc. All rights reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
