import React, { useEffect, useState } from 'react';
import { getProductByID } from '../../../API/ProductsAPI.mjs';
import { summarize } from '../../MariamElagamii/Products/ProductItem';
import useInnerWidth from '../../MariamElagamii/Cart/useInnerWidth';

function OrderDetailsItems({ pid, price, quantity }) {
	let [product, setProduct] = useState([]);
	let [loading, setLoading] = useState(true);
	let screenWidth = useInnerWidth();

	useEffect(() => {
		getProductByID(pid, (data) => {
			if (data) {
				setProduct(data[0]);
				setLoading(false);
			}
		});
	}, []);

	return loading ? (
		<h1>Loading...</h1>
	) : (
		<div className='tw-flex tw-items-center tw-gap-4 tw-w-full tw-p-5'>
			<div className='tw-w-[70px] tw-relative tw-border-[1px] tw-border-solid tw-border-slate-300 tw-p-3 tw-rounded-md'>
				<img
					className='tw-w-full'
					src={product?.image || 'https://placehold.co/400'}
					alt={product.name}
				/>
			</div>

			<div style={{ width: 'calc(100% - 70px)' }}>
				<h4 className='tw-text-sm md:tw-text-lg'>
					{screenWidth > 600
						? summarize(product.name, 15)
						: summarize(product.name, 5)}
				</h4>
				<div className='tw-flex tw-items-center tw-gap-2'>
					<p className='m-0 tw-text-sm md:tw-text-lg lg:tw-text-xl tw-text-slate-600 tw-font-[600]'>
						${price}
					</p>

					<p className='m-0 tw-text-sm md:tw-text-lg lg:tw-text-xl tw-text-slate-600 tw-font-[600]'>
						x{quantity}
					</p>

					<p className='m-0 tw-text-sm md:tw-text-lg lg:tw-text-xl tw-text-slate-600 tw-font-[600]'>
						${price * quantity}
					</p>
				</div>
			</div>
		</div>
	);
}

export default OrderDetailsItems;
