import React from 'react';
import './ProductItem.css';
import { Link, useNavigate } from 'react-router-dom';

export const summarize = (text, limit) =>
	text.split(' ').slice(0, limit).join(' ') + '...';

export default function ProductItem({
	id,
	name,
	originalPrice,
	discountPrice,
	image,
	ratings,
	numRatings,
}) {
	const navigate = useNavigate();

	const addToCart = () => {
		navigate('/dashboard/cart');
	};

	const addToWhish = () => {
		navigate('/dashboard/whishlist');
	};

	return (
		<div className='product-card card'>
			<div className='image-cont'>
				<img src={image} alt='Product' className='product-image' />
				<div className='middle'>
					<div className='icons'>
						<button className='icon' onClick={() => addToWhish()}>
							<i className='fa-regular fa-heart'></i>
						</button>
						<button className='icon' onClick={() => addToCart()}>
							<i className='fa-solid fa-cart-shopping'></i>
						</button>
						<button
							className='icon'
							onClick={() => navigate(`/product/${id}`)}
						>
							<i className='fa-regular fa-eye'></i>
						</button>
					</div>
				</div>
			</div>
			<div className='product-info'>
				<div className='product-rating'>
					{Array.from({ length: Math.floor(ratings) }, (_, index) => (
						<span key={index}>
							<i className='fa-solid fa-star'></i>
						</span>
					))}
					{Array.from(
						{ length: 5 - Math.floor(ratings) },
						(_, index) => (
							<span key={index}>
								<i className='fa-regular fa-star'></i>
							</span>
						)
					)}
					<span className='numRating'>({numRatings})</span>
				</div>
				<p className='product-title'>{summarize(name, 10)}</p>
				<div className='prices d-flex flex-row align-items-center '>
					<p className='original-price'>{originalPrice}</p>
					<p className='product-price'>{discountPrice}</p>
				</div>
			</div>
		</div>
	);
}
