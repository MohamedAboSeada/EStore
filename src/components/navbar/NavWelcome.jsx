import React, { Component } from 'react';

let links = [
	'fa-facebook',
	'fa-twitter',
	'fa-linkedin',
	'fa-reddit',
	'fa-github',
];

export class NavWelcome extends Component {
	render() {
		return (
			<div className='welcome__header tw-bg-blue-950 tw-border-blue-900'>
				<div className='container tw-flex tw-items-center tw-justify-between'>
					<p className='tw-text-white tw-m-0 tw-hidden md:tw-block' href='#'>
						Welcome to EStore online eCommerce store
					</p>
					<div className='tw-flex tw-items-center tw-space-x-2'>
						<p className='tw-text-white tw-m-0'>Follow us:</p>
						<ul class='tw-list-none tw-p-0 tw-m-0 tw-flex tw-items-center tw-space-x-2'>
							{links.map((link, index) => (
								<li key={index}>
									<a
										href='#'
										className='tw-text-lg tw-text-white'
									>
										<i className={`fab ${link}`}></i>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NavWelcome;
