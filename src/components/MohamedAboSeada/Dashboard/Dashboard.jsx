import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const menu_items = [
	{
		icon: <i className='fas fa-layer-group'></i>,
		text: 'Dashboard',
		tab: 'user-data',
	},
	{
		icon: <i className='fas fa-shop'></i>,
		text: 'order history',
		tab: 'order-history',
	},
	{
		icon: <i className='fas fa-cart-shopping'></i>,
		text: 'Shopping Cart',
		tab: 'cart',
	},
	{
		icon: <i className='fas fa-heart'></i>,
		text: 'Whishlist',
		tab: 'whishlist',
	},
	{
		icon: <i className='fas fa-gear'></i>,
		text: 'settings',
		tab: 'settings',
	},
];

function Dashboard() {
	return (
		<div
			id='dashboard'
			className='container tw-grid tw-grid-cols-12 tw-gap-4 tw-items-start tw-py-14'
		>
			<ul className='tw-shadow-sm tw-list-none tw-p-0 tw-col-span-12 md:tw-col-span-3 tw-border-solid tw-border-[1px] tw-border-stone-300 tw-rounded tw-py-3'>
				{menu_items.map((item, index) => (
					<li className='tw-w-full' key={index}>
						<NavLink
							className={({ isActive, isPending }) =>
								`tw-flex tw-no-underline tw-w-full tw-font-[500] tw-items-center tw-gap-2 tw-underline-none tw-py-2 tw-px-3 tw-capitalize tw-transition-colors ${
									isActive
										? 'tw-bg-orange-500 tw-text-white'
										: 'tw-text-stone-600 tw-bg-white'
								}`
							}
							to={item.tab}
						>
							{item.icon}
							{item.text}
						</NavLink>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
}

export default Dashboard;
