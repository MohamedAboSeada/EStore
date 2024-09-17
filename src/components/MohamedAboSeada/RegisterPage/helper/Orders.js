import { supabase } from './client.mjs';

export async function getOrders(page, uid) {
	const offset = (page - 1) * 20;
	let {
		data: orders,
		error,
		count,
	} = await supabase
		.from('orders')
		.select('*', { count: 'exact' })
		.eq('user_id', uid)
		.range(offset, offset + 20 - 1);

	if (error) {
		return { orders: [], total: 0, error: error.message };
	}
	return { orders, total: count };
}

export async function makeOrder(uid, order) {
	const { data, error } = await supabase
		.from('orders')
		.insert({ ...order, user_id: uid })
		.select();
}

export async function deleteOrder(order_id) {
	const { error } = await supabase.from('orders').delete().eq('id', order_id);
}

export async function updateOrder(order_id, updated_order) {
	const { data, error } = await supabase
		.from('orders')
		.update({ ...updated_order })
		.eq('id', order_id)
		.select();
}
