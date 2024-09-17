import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import { getProductByID } from '../../../API/ProductsAPI.mjs';
import Fancybox from '../Fancybox';

function ProductDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	let { addProduct } = useContext(CartContext);

	useEffect(() => {
		getProductByID(id, function (data) {
			setProduct(data[0]);
			setLoading(false);
		});
	}, [id]);

	return (
		<>
			<section className='tw-text-gray-600 tw-my-10 body-font tw-overflow-hidden'>
				{loading ? (
					<h2>Loading...</h2>
				) : (
					<>
						<div className='container'>
							<div className='lg:tw-w-4/5 tw-mx-auto tw-flex tw-items-center tw-flex-wrap'>
								<Fancybox
									options={{
										contentClick: 'toggleMax',
										Toolbar: {
											display: {
												left: [],
												middle: [],
												right: ['close'],
											},
										},
										Images: {
											Panzoom: {
												panMode: 'mousemove',
												mouseMoveFactor: 1.1,
												mouseMoveFriction: 0.12,
												maxScale: 3,
											},
										},
									}}
								>
									<a data-fancybox href={product.image}>
										<img
											src={product.image}
											className='lg:tw-w-full tw-w-full lg:tw-h-auto tw-h-64 tw-object-contain tw-object-center tw-rounded'
											alt={product.name}
										/>
									</a>
								</Fancybox>

								<div className='lg:tw-w-[70%] tw-w-full lg:tw-pl-10 lg:tw-py-6 tw-mt-6 lg:tw-mt-0'>
									<p className='tw-text-lg tw-text-slate-600'>
										{product.main_category} /{' '}
										{product.sub_category}
									</p>
									<h1 className='tw-text-gray-900 tw-text-2xl title-font tw-font-medium tw-mb-5'>
										{product.name}
									</h1>
									<div className='tw-flex tw-items-center tw-space-x-2 tw-mb-4'>
										<span>
											{Array.from(
												{
													length: Math.floor(
														product.ratings
													),
												},
												(_, index) => (
													<span
														key={index}
														className='tw-text-yellow-500'
													>
														<i className='fa-solid fa-star'></i>
													</span>
												)
											)}
											{Array.from(
												{
													length:
														5 -
														Math.floor(
															product.ratings
														),
												},
												(_, index) => (
													<span key={index}>
														<i className='fa-regular fa-star'></i>
													</span>
												)
											)}
										</span>
										<span>
											({product.no_of_ratings}) ratings
										</span>
									</div>
									<p className='tw-leading-relaxed tw-mb-4'>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Nisi aperiam corporis
										harum excepturi in delectus enim
										exercitationem? Aperiam molestias
										delectus eveniet repellendus quas quasi
										dolores, laborum vero nisi, rerum
										repellat.
									</p>

									<div className='tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between tw-items-start tw-gap-5'>
										<span className='title-font tw-font-medium tw-text-2xl tw-text-gray-900'>
											{product.discount_price}
											<span className='tw-line-through tw-text-lg tw-p-2 tw-text-red-400'>
												{product.actual_price}
											</span>
										</span>
										<div className='tw-flex'>
											<button
												onClick={() =>
													addProduct(product)
												}
												className='tw-flex tw-items-center tw-gap-3 tw-ml-auto tw-text-white tw-bg-yellow-500 tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-yellow-600 tw-rounded'
											>
												<i className='fas fa-cart-shopping'></i>
												Add To Cart
											</button>
											<button className='tw-rounded-full tw-w-10 tw-h-10 tw-bg-gray-200 tw-p-0 tw-border-0 tw-inline-flex tw-items-center tw-justify-center tw-text-gray-500 tw-ml-4'>
												<svg
													fill='currentColor'
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													className='tw-w-5 tw-h-5'
													viewBox='0 0 24 24'
												>
													<path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</section>
		</>
	);
}

export default ProductDetails;
