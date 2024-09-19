import React, { useContext, useRef } from 'react';
import useInnerWidth from '../MariamElagamii/Cart/useInnerWidth';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../MohamedAboSeada/RegisterPage/helper/handleAuthentication';
import useClickOutside from './clickOutside';

let items = [
	{
		name: 'Home',
		linkTo: '/',
	},
	{
		name: 'shop',
		linkTo: '/shop',
	},
	{
		name: 'about us',
		linkTo: '/about',
	},
	{
		name: 'Customer Service',
		linkTo: '/customer-service',
	},
];

let btns = [
	{
		1: 'fas fa-user',
		2: 'fas fa-user-plus',
	},
	'fas fa-bars',
];

// desktop tw-items-center tw-space-x-3
function MidNav() {
	let menu = useRef(null);
	let dropdown = useRef(null);
	let innerWidth = useInnerWidth();
	let { user, SignOut } = useContext(AuthContext);
	let navigate = useNavigate();

	useClickOutside(dropdown);
	useClickOutside(menu);

	let handleLogOut = () => {
		let sure = window.confirm('Are you sure you want to logout ?');
		if (sure) {
			SignOut();
			navigate('/register');
		}
	};

	return (
		<div className='mid_nav tw-bg-blue-950 tw-relative'>
			<div className='container tw-flex tw-items-center tw-justify-between'>
				{/* logo */}
				<Link
					to='/'
					className='tw-m-0 tw-no-underline tw-text-3xl tw-uppercase tw-text-white tw-font-bold tw-tracking-wider'
				>
					ESTORE
				</Link>

				{/* nav menu */}
				<ul
					ref={menu}
					className={`nav__menu ${innerWidth <= 600 ? 'hide' : ''}`}
				>
					{items.map((item) => (
						<li className='nav__item'>
							<NavLink
								className={({ isActive }) =>
									`nav__link ${
										isActive
											? 'tw-text-orange-300'
											: 'tw-text-white'
									}`
								}
								to={item.linkTo}
							>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>

				{/* nav buttons */}
				<div className='tw-flex tw-items-center tw-space-x-2'>
					<button
						onClick={() => {
							if (user) {
								dropdown.current.classList.toggle('hide');
							} else {
								navigate('/register');
							}
						}}
						className='tw-border-none tw-relative tw-bg-blue-500 tw-text-white tw-w-[50px] tw-h-[50px] tw-rounded-md tw-text-lg tw-grid tw-place-items-center tw-no-underline'
					>
						<i
							className={`fas ${
								user ? 'fa-user' : 'fa-user-plus'
							}`}
						></i>
						<ul
							ref={dropdown}
							className='dropdown hide tw-absolute tw-right-0 tw-z-50 tw-m-0 tw-p-0 tw-list-none tw-bg-white tw-rounded-md shadow-sm'
						>
							<li className='dropdown__item'>
								<Link
									className='dropdown__link'
									to='/dashboard/user-data'
								>
									<i className='fas fa-user'></i>
									Profile
								</Link>
							</li>
							<li className='dropdown__item'>
								<Link
									className='dropdown__link'
									to='/dashboard/cart'
								>
									<i className='fas fa-cart-shopping'></i>
									Cart
								</Link>
							</li>
							<li className='dropdown__item'>
								<Link
									className='dropdown__link'
									to='/dashboard/whishlist'
								>
									<i className='fas fa-heart'></i>
									Whishlist
								</Link>
							</li>
							<li className='dropdown__item'>
								<Link
									className='dropdown__link'
									to='/dashboard/settings'
								>
									<i className='fas fa-gear'></i>
									Settings
								</Link>
							</li>
							<li className='dropdown__item'>
								<a
									className='dropdown__link'
									onClick={handleLogOut}
								>
									<i className='fas fa-right-from-bracket'></i>
									Log Out
								</a>
							</li>
						</ul>
					</button>
					{innerWidth <= 600 && (
						<button
							onClick={() => {
								if (innerWidth <= 600) {
									menu.current.classList.toggle('hide');
								} else {
									if (
										menu.current.classList.contains('hide')
									) {
										menu.current.classList.remove('hide');
									}
								}
							}}
							className='tw-border-none tw-bg-blue-500 tw-text-white tw-w-[50px] tw-h-[50px] tw-rounded-md tw-text-lg'
						>
							<i className='fas fa-bars'></i>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default MidNav;
