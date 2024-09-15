import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className='footer bg-dark'>
				<div className='container'>
					<div className='footer__section'>
						{/* p1 */}
						<div className='footer__part'>
							<Link to='/' className='footer__logo text-warning'>
								EStore
							</Link>
							<div className='footer__customer'>
								<p className='info__text'>Customer Supports:</p>
								<h4 className='info__number text-warning'>
									(629) 555-0129
								</h4>
							</div>
							<h4 className='info__address'>
								<i className='fas fa-location-pin'></i>
								Cairo, Eve
							</h4>
							<a
								className='footer__link'
								href='mailto:madoaxel287@gmail.com'
							>
								info@domain.com
							</a>
						</div>
						{/* p2 */}
						<div className='footer__part'>
							<h4 className='footer__part-heading'>
								Quick Links
							</h4>
							<ul className='footer__links'>
								<li>
									<Link to='/shop' className='footer__link'>
										Shop Products
									</Link>
								</li>
								<li>
									<a href='#' className='footer__link'>
										Shopping Cart
									</a>
								</li>
								<li>
									<a href='#' className='footer__link'>
										Whishlist
									</a>
								</li>
								<li>
									<a href='#' className='footer__link'>
										Track Order
									</a>
								</li>
								<li>
									<a href='#' className='footer__link'>
										Customer Help
									</a>
								</li>
								<li>
									<a href='#' className='footer__link'>
										About Us
									</a>
								</li>
							</ul>
						</div>
						{/* {p4} */}
						<div className='footer__part'>
							<h4 className='footer__part-heading'>
								Download App
							</h4>

							<div className='footer__apps'>
								<button className='footer__app'>
									<i className='fab fa-google-play'></i>
									<div className='btn__text'>
										<span className='btn__text-small'>
											get it now
										</span>
										<span className='btn__text-large'>
											Google Play
										</span>
									</div>
								</button>
								<button className='footer__app'>
									<i className='fab fa-apple'></i>

									<div className='btn__text'>
										<span className='btn__text-small'>
											get it now
										</span>
										<span className='btn__text-large'>
											App Store
										</span>
									</div>
								</button>
							</div>
						</div>
						{/* p3 */}
						<div className='footer__part'>
							<div>
								<h4 className='footer__part-heading'>
									Stay Updated !
								</h4>
								<p className='info__text'>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Perferendis perspiciatis
									vitae accusantium quidem quas id vero
									sapiente. Perspiciatis, iste adipisci?
								</p>
							</div>
							<div className='footer__email'>
								<input
									type='text'
									className='footer__input'
									placeholder='Enter your email...'
								/>
								<button className='footer__btn'>Send</button>
							</div>
						</div>
					</div>
					<p className='footer__copyrights'>
						&copy;2024 All rights recieved Team EStore
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
