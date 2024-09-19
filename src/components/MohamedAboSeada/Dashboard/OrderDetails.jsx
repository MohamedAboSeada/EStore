import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../RegisterPage/helper/client.mjs';
import OrderDetailsItems from './OrderDetailsItems';

function OrderDetails() {
	let [orderProducts, setOrderProducts] = useState([]);
	let [loading, setLoading] = useState(true);
	let { id } = useParams();

	useEffect(() => {
		let fetchProductsUnderOrder = async () => {
			let { data: order_items, error } = await supabase
				.from('order_items')
				.select('*')
				.eq('id', id)
				.select();

			if (!error) {
				setOrderProducts(order_items);
				setLoading(false);
			}
		};
		fetchProductsUnderOrder();
	}, []);

	return loading ? (
		<h1>Loading...</h1>
	) : (
		<div className='tw-col-span-12 md:tw-col-span-9 tw-border-[1px] tw-border-stone-300 tw-border-solid tw-bg-white tw-rounded-lg tw-shadow-sm'>
			<h1 className='tw-text-lg m-0 tw-uppercase tw-font-[500] tw-p-3 tw-border-b-[1px] tw-border-solid tw-border-transparent tw-border-b-stone-300'>
				Order #{id} Details
			</h1>
			{orderProducts.map((product, index) => (
				<OrderDetailsItems
					key={index}
					pid={product.pid}
					price={product.price}
					quantity={product.quantity}
				/>
			))}
		</div>
	);
}

export default OrderDetails;
