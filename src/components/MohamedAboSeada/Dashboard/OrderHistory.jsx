import React from 'react';
import { Link } from 'react-router-dom';

const tableRows = ['order id', 'status', 'date', 'total', 'action'];


function mapToColor(order_status) {
	switch(order_status){
		case 'in progress':
			return 'tw-text-orange-500'
		case 'completed':
			return 'tw-text-green-500'
		case 'canceled':
			return 'tw-text-red-500'
		default:
			return 'tw-text-stone-700'
	}
}

const tableData = [
	{
		id: '#' + crypto.randomUUID().split('-')[0],
		status: 'in progress',
		date: new Date().toLocaleDateString('en-US', {
			dateStyle: 'short',
		}),
		Total: '1500 (3 Products)',
	},
	{
		id: '#' + crypto.randomUUID().split('-')[0],
		status: 'completed',
		date: new Date(Date.now() - 86400000).toLocaleDateString('en-US', {
			dateStyle: 'short',
		}),
		Total: '2200 (5 Products)',
	},
	{
		id: '#' + crypto.randomUUID().split('-')[0],
		status: 'canceled',
		date: new Date(Date.now() - 172800000).toLocaleDateString('en-US', {
			dateStyle: 'short',
		}),
		Total: '800 (2 Products)',
	},
	{
		id: '#' + crypto.randomUUID().split('-')[0],
		status: 'completed',
		date: new Date(Date.now() - 259200000).toLocaleDateString('en-US', {
			dateStyle: 'short',
		}),
		Total: '3000 (7 Products)',
	},
	{
		id: '#' + crypto.randomUUID().split('-')[0],
		status: 'in progress',
		date: new Date(Date.now() - 345600000).toLocaleDateString('en-US', {
			dateStyle: 'short',
		}),
		Total: '1800 (4 Products)',
	},
];

function OrderHistory() {
	return (
		<div className='tw-col-span-9 tw-border-[1px] tw-border-stone-300 tw-border-solid tw-bg-white tw-rounded-lg tw-shadow-sm'>
			<h1 className='tw-text-lg m-0 tw-uppercase tw-font-[500] tw-p-3 tw-border-b-[1px] tw-border-solid tw-border-transparent tw-border-b-stone-300'>
				Order History
			</h1>
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
				{tableData.map((data, index) => (
					<tr key={index} className='tw-border-b tw-border-stone-200'>
						<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
							{data.id}
						</th>
						<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
							<span className={mapToColor(data.status)}>
								{data.status}
							</span>
						</th>
						<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
							{data.date}
						</th>
						<th className='tw-text-center tw-p-3 tw-uppercase tw-text-stone-700 m-0'>
							${data.Total}
						</th>
						<th className='tw-text-center tw-p-3 tw-text-sky-600 m-0'>
							<Link className='tw-font-[500] tw-tracking-wide tw-text-lg m-0'>
								View Details
							</Link>
						</th>
					</tr>
				))}
			</table>
		</div>
	);
}

export default OrderHistory;
