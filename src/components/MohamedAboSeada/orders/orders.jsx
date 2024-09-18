import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../RegisterPage/helper/client.mjs';
import { CartContext } from '../../MariamElagamii/Cart/CartContext';
import { AuthContext } from '../RegisterPage/helper/handleAuthentication';
import { extractPrice } from '../../MariamElagamii/Cart/Cart';
const OrderContext = createContext(null);

function OrderProvider({ children }) {
	let [orders, setOrders] = useState([]);
	let { cart, clearAll } = useContext(CartContext);
	let { user } = useContext(AuthContext);

	// fetch orders
	async function fetchOrders() {
		const { data, error } = await supabase
			.from('orders')
			.select('*')
			.eq('user_id', user.id)
			.select();
		if (!error) {
			setOrders(data);
		}
	}

	// fetch and set orders on mount
	useEffect(() => {
		if (user) {
			fetchOrders();
		}
	}, [user,orders]);

	// create order
	let makeOrder = async () => {
		let total = cart.reduce(
			(p, c) => p + extractPrice(c?.discount_price),
			0
		);

		let row = {
			status: 'in progress',
			total_price: total,
			user_id: user.id,
			total_products: cart.length,
		};

		// first add order to orders table
		const { data, error } = await supabase
			.from('orders')
			.insert(row)
			.select();

		if (!error) {
			addOrderitems(data[0].id);
			clearAll();
		}
	};

	let addOrderitems = async (order_id) => {
		const { data, error } = await supabase
			.from('order_items')
			.insert(
				cart.map((item) => ({
					id: order_id,
					pid: item.id,
					quantity: item.quantity,
					price: extractPrice(item.discount_price),
				}))
			)
			.select();
		if (!error) {
			fetchOrders();
		}
	};

	return (
		<OrderContext.Provider value={{ orders, makeOrder }}>
			{children}
		</OrderContext.Provider>
	);
}

export { OrderContext, OrderProvider };
