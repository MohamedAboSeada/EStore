import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOrders } from '../RegisterPage/helper/Orders';
import { OrderContext } from '../orders/orders';
const tableRows = ['order id', 'status', 'date', 'total', 'action'];

function mapToColor(order_status) {
	switch (order_status) {
		case 'in progress':
			return 'tw-text-orange-500';
		case 'completed':
			return 'tw-text-green-500';
		case 'canceled':
			return 'tw-text-red-500';
		default:
			return 'tw-text-stone-700';
	}
}

function OrderHistory() {
	let { orders } = useContext(OrderContext);

	return (
		<div className='tw-col-span-12 md:tw-col-span-9 tw-border-[1px] tw-border-stone-300 tw-border-solid tw-bg-white tw-rounded-lg tw-shadow-sm'>
			<h1 className='tw-text-lg m-0 tw-uppercase tw-font-[500] tw-p-3 tw-border-b-[1px] tw-border-solid tw-border-transparent tw-border-b-stone-300'>
				Order History
			</h1>
			{orders.length > 0 ? (
				<table className='tw-w-full'>
					<tr className='tw-bg-gray-50'>
						{tableRows.map((row, index) => (
							<th
								className='tw-text-center tw-uppercase tw-p-3 m-0'
								key={index}
							>
								{row}
							</th>
						))}
					</tr>
					{orders.map((data, index) => (
						<tr
							key={index}
							className='tw-border-b tw-border-stone-200'
						>
							<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
								{data.id}
							</th>
							<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
								<span className={mapToColor(data.status)}>
									{data.status}
								</span>
							</th>
							<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
								{new Date(data.created_at).toLocaleString(
									'en-US',
									{
										dateStyle: 'medium',
										timeStyle: 'short',
									}
								)}
							</th>
							<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
								${data.total_price}
							</th>
							<th className='tw-text-center tw-p-3 tw-text-sky-600 m-0'>
								<Link className='tw-font-[500] tw-tracking-wide tw-text-lg m-0'>
									View Details
								</Link>
							</th>
						</tr>
					))}
				</table>
			) : (
				<h4 className='tw-p-5 tw-text-center tw-font-[600] tw-text-gray-600'>
					No Orders
				</h4>
			)}
		</div>
	);
}

export default OrderHistory;
