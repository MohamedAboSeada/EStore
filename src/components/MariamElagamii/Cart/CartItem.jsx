import React from 'react';
import { summarize } from '../Products/ProductItem';
import useInnerWidth from './useInnerWidth';
/*
{
  "id": 3,
  "name": "OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs...",
  "main_category": "tv, audio & cameras",
  "sub_category": "All Electronics",
  "image": "https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL320_.jpg",
  "link": "https://www.amazon.in/Oneplus-Bluetooth-Wireless-Earphones-Bombastic/dp/B09TVVGXWS/ref=sr_1_6?qid=1679133649&s=electronics&sr=1-6",
  "ratings": "4.2",
  "no_of_ratings": "90,304",
  "discount_price": "₹1,999",
  "actual_price": "₹2,299",
  "quantity": 6
}
 */

let extractPrice = (priceString) => {
	return parseFloat(priceString.replace(/[^0-9.-]+/g, ''));
};

const CartItem = ({ item, addProduct, removeProduct, clearProduct }) => {
	let screenWidth = useInnerWidth();

	return (
		<div className='tw-flex tw-items-center tw-gap-4 tw-w-full tw-p-5'>
			<div className='tw-w-[70px] tw-relative tw-border-[1px] tw-border-solid tw-border-slate-300 tw-p-3 tw-rounded-md'>
				<img className='tw-w-full' src={item.image} alt={item.name} />
				<button
					className='tw-border-solid tw-border-[2px] tw-text-red-500 tw-bg-white hover:tw-bg-red-500 hover:tw-text-white tw-border-red-500 tw-rounded-full tw-text-sm tw-w-[30px] tw-h-[30px] tw-absolute tw-top-[-10px] tw-left-[-10px]'
					onClick={() => clearProduct(item)}
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
				<div className='tw-flex tw-items-center tw-gap-5'>
					<p className='m-0 tw-text-sm md:tw-text-lg lg:tw-text-xl tw-text-slate-600 tw-font-[600]'>
						${extractPrice(item.discount_price)}
					</p>
					<div className='tw-flex tw-gap-2 tw-items-center'>
						<button
							onClick={() => addProduct(item)}
							className='tw-border-solid tw-border-red-500 tw-w-[30px] tw-h-[30px] tw-text-red-500 tw-rounded-full tw-text-sm tw-bg-transparent'
						>
							<i className='fas fa-add'></i>
						</button>
						<p className='m-0 tw-text-sm md:tw-text-lg lg:tw-text-xl tw-text-slate-600 tw-font-[600]'>
							{item.quantity}
						</p>
						<button
							onClick={() => removeProduct(item)}
							className='tw-border-solid tw-border-red-500 tw-w-[30px] tw-h-[30px] tw-text-red-500 tw-rounded-full tw-text-sm tw-bg-transparent'
						>
							<i className='fas fa-minus'></i>
						</button>
					</div>
					<p className='m-0 tw-text-sm md:tw-text-lg lg:tw-text-xl tw-text-slate-600 tw-font-[600]'>
						${extractPrice(item.discount_price) * item.quantity}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
