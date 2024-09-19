import React, { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import { CartContext } from './CartContext';
import { OrderContext } from '../../MohamedAboSeada/Dashboard/orders';
import { Link } from 'react-router-dom';

import './CartItem.css';

export let extractPrice = (priceString) => {
	return parseFloat(priceString.replace(/[^0-9.-]+/g, ''));
};

const Cart = () => {
	let { cart, addProduct, removeProduct, clearProduct } =
		useContext(CartContext);
	let { makeOrder } = useContext(OrderContext);
	let [total, setTotal] = useState(0);

	useEffect(() => {
		let totalPrice = 0;
		cart.forEach((item) => {
			totalPrice += extractPrice(item.discount_price) * item.quantity;
		});
		setTotal(totalPrice);
	}, [cart]);

	return (
		<div className='tw-col-span-12 md:tw-col-span-9'>
			<div className='p-0 tw-overflow-hidden tw-flex tw-flex-col tw-border-[1px] tw-border-gray-300 tw-border-solid tw-rounded-md tw-shadow-sm'>
				<h1 className='tw-text-lg m-0 tw-uppercase tw-font-[500] tw-p-3 tw-border-b-[1px] tw-border-solid tw-border-transparent tw-border-b-stone-300'>
					Shopping Cart
				</h1>
				{cart.length > 0 ? (
					<>
						<div className='tw-flex tw-flex-col sp_div'>
							{cart.map((item) => (
								<CartItem
									key={item.id}
									item={item}
									addProduct={addProduct}
									removeProduct={removeProduct}
									clearProduct={clearProduct}
								/>
							))}
						</div>
						<div className='total_div tw-py-3 tw-px-5 tw-flex tw-items-center tw-justify-between tw-border-t tw-border-slate-300'>
							<h3 className='tw-font-bold tw-text-2xl'>Total</h3>
							<h3 className='tw-font-bold tw-text-2xl'>
								${total}
							</h3>
						</div>
					</>
				) : (
					<h2 className='tw-text-center tw-p-10 tw-font-[600] tw-text-gray-600'>
						No Products In Cart
					</h2>
				)}

				<button
					onClick={() => {
						makeOrder();
					}}
					className='tw-py-3 tw-bg-orange-500 hover:tw-bg-orange-600 tw-border-none tw-text-slate-200 tw-text-lg tw-flex tw-items-center tw-justify-center tw-gap-3'
				>
					Make Order
					<i className='fas fa-arrow-right'></i>
				</button>
			</div>
		</div>
	);
};

export default Cart;
