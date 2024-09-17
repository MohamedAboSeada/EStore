import React, { useContext, useState } from 'react';
import useInnerWidth from '../MariamElagamii/Cart/useInnerWidth';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../MohamedAboSeada/RegisterPage/helper/handleAuthentication';
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

// desktop tw-items-center tw-space-x-3
function MidNav() {
	let innerWidth = useInnerWidth();
	let { user } = useContext(AuthContext);
	let navigate = useNavigate();
	let [isNavOpen, setIsNavOpen] = useState(false);

	let handleUserButton = () => {
		if (user) {
			navigate('/dasboard/user-data');
		}
	};

	return (
		<div className='tw-bg-blue-900 tw-relative'>
			{/* logo */}
			<div className='container tw-flex tw-items-center tw-justify-between'>
				<div className='tw-flex tw-items-center tw-space-x-5'>
					<h3 className='tw-uppercase tw-font-bold tw-text-white tw-m-0'>
						Estore
					</h3>
					<ul
						className={`tw-list-none tw-flex tw-px-3 tw-py-4 m-0 tw-transition-all tw-absolute tw-top-full tw-bg-stone-950 tw-left-0 tw-flex-col tw-z-50 tw-w-full tw-space-y-2 tw-items-start ${
							isNavOpen && innerWidth <= 600
								? 'tw-opacity-100'
								: 'tw-opacity-0'
						}`}
					>
						{items.map((item, index) => (
							<li key={index}>
								<NavLink
									className={({ isActive }) =>
										`tw-capitalize tw-no-underline tw-text-lg tw-font-[600] ${
											isActive
												? 'tw-text-orange-300'
												: 'tw-text-gray-300'
										}`
									}
									to={item.linkTo}
								>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<div className='tw-flex tw-items-center tw-space-x-2'>
					{innerWidth <= 600 && (
						<button
							onClick={() => setIsNavOpen(!isNavOpen)}
							className='tw-border-none tw-w-[45px] tw-h-[45px] tw-bg-blue-500 tw-text-white tw-text-lg tw-rounded-md'
						>
							<i className='fas fa-bars'></i>
						</button>
					)}
					{user && (
						<>
							<button className='tw-border-none tw-w-[45px] tw-h-[45px] tw-bg-blue-500 tw-text-white tw-text-lg tw-rounded-md'>
								<i className='fas fa-heart'></i>
							</button>
							<button className='tw-border-none tw-w-[45px] tw-h-[45px] tw-bg-blue-500 tw-text-white tw-text-lg tw-rounded-md'>
								<i className='fas fa-cart-shopping'></i>
							</button>
						</>
					)}
					<button
						onClick={handleUserButton}
						className='tw-border-none tw-w-[45px] tw-h-[45px] tw-bg-blue-500 tw-text-white tw-text-lg tw-rounded-md'
					>
						{user ? (
							<i className='fas fa-user'></i>
						) : (
							<i className='fas fa-user-plus'></i>
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default MidNav;
