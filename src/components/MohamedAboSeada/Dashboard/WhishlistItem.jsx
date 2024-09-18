import React from 'react';
import { Link } from 'react-router-dom';
import useInnerWidth from '../../MariamElagamii/Cart/useInnerWidth';
import { summarize } from '../../MariamElagamii/Products/ProductItem';

function WhishlistItem({ item, handleRemove }) {
	let screenWidth = useInnerWidth();
	
	return (
		<div className='tw-flex tw-items-center tw-gap-4 tw-w-full tw-p-5'>
			<div className='tw-w-[70px] tw-relative tw-border-[1px] tw-border-solid tw-border-slate-300 tw-p-3 tw-rounded-md'>
				<img className='tw-w-full' src={item.image} alt={item.name} />
				<button
					className='tw-border-solid tw-border-[2px] tw-text-red-500 tw-bg-white hover:tw-bg-red-500 hover:tw-text-white tw-border-red-500 tw-rounded-full tw-text-sm tw-w-[30px] tw-h-[30px] tw-absolute tw-top-[-10px] tw-left-[-10px]'
					onClick={() => handleRemove(item)}
				>
					<i className='fas fa-times '></i>
				</button>
			</div>
			<div style={{ width: 'calc(100% - 70px)' }}>
				<h4 className='tw-text-sm md:tw-text-lg'>
					{screenWidth > 600
						? summarize(item.name, 15)
						: summarize(item.name, 5)}
				</h4>
				<Link
					to={`/shop/${item.id}`}
					className='tw-text-lg tw-text-blue-500 tw-no-underline tw-flex tw-items-center tw-gap-2'
				>
					View product details <i className='fas fa-arrow-right'></i>
				</Link>
			</div>
		</div>
	);
}

export default WhishlistItem;
