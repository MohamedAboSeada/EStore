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
			.eq('user_id', user.id);

		if (error) {
			console.error('Error fetching orders:', error);
		} else {
			setOrders(data);
		}
	}

	// fetch and set orders on mount
	useEffect(() => {
		if (user) {
			fetchOrders();
		}
	}, [user]); // removed 'orders' from dependency array

	// create order
	let makeOrder = async () => {
		let total = 0;

		// order total amount
		for (let item of cart) {
			if (item.discount_price) {
				total += extractPrice(item.discount_price) * item.quantity;
			} else {
				total += extractPrice(item.actual_price) * item.quantity;
			}
		}

		// order row
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

		if (error) {
			console.error('Error creating order:', error);
			return;
		}

		addOrderItems(data[0].id);
	};

	let addOrderItems = async (order_id) => {
		const { error } = await supabase.from('order_items').insert(
			cart.map((item) => ({
				id: order_id, // corrected from 'id' to 'order_id'
				pid: item.id,
				quantity: item.quantity,
				price: item.discount_price
					? extractPrice(item.discount_price)
					: extractPrice(item.actual_price),
			}))
		);

		if (error) {
			console.error('Error adding order items:', error);
		} else {
			fetchOrders();
			clearAll();
		}
	};

	return (
		<OrderContext.Provider value={{ orders, makeOrder }}>
			{children}
		</OrderContext.Provider>
	);
}

export { OrderContext, OrderProvider };
