import React from 'react';
import './BestDeals.css'; // استيراد ملف CSS الخاص بالمكون
import { getProducts } from '../../../API/ProductsAPI.mjs';
import { useNavigate } from 'react-router-dom';
const BestDeals = () => {
	const [products, setProducts] = React.useState([]);
	const [page, setPage] = React.useState(1);

	React.useEffect(() => {
		getProducts(page, function (data) {
			setProducts(data);
		});
	}, [page]);
	const navigate = useNavigate();
	const addToCart = () => {
		console.log('Added to cart');
		//navigate to cart page
		navigate('/dashboard/cart');
	};
  
	const getFirstEightWords = (text) => {
		const words = text.split(' ');
		return words.slice(0, 8).join(' ') + (words.length > 4 ? '...' : '');
	};

	return (
		<div className='container'>
			<div className='contents container'>
				<div className='best-deals-info'>
					<h4>Best Deals</h4>
					<p className='deal-end'>Deals ends in</p>
					<div className='countdown'>
						<p>16d :</p>
						<p>21h :</p>
						<p>57m :</p>
						<p>23s</p>
					</div>
				</div>
				<div className='link-container'>
					<a href='#' className='browse-link'>
						Browse All Product{' '}
						<i className='fa-solid fa-arrow-right'></i>
					</a>
				</div>
			</div>
			<div className='class2'>
				<table>
					<tr>
						{products.slice(1, 2).map((product) => (
							<td rowSpan={2} className='dataContainer1'>
								<div className='container-fluid py-4'>
									<div style={{ position: 'relative' }}>
										<div
											style={{
												position: 'absolute',
												background: '#EFD33D',
												padding: '3px',
												borderRadius: '4px',
											}}
										>
											32% OFF
										</div>
										<div
											style={{
												position: 'absolute',
												top: '40px',
												background: '#EE5858',
												padding: '3px',
												borderRadius: '4px',
											}}
										>
											HOT
										</div>
										<img
											width={200}
											height={170}
											src={product.image}
											alt=''
										/>
									</div>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
										}}
									>
										<i
											style={{ color: '#EBC80C' }}
											class='fa-solid fa-star'
										></i>
										<i
											style={{ color: '#EBC80C' }}
											class='fa-solid fa-star'
										></i>
										<i
											style={{ color: '#EBC80C' }}
											class='fa-solid fa-star'
										></i>
										<i
											style={{ color: '#EBC80C' }}
											class='fa-solid fa-star'
										></i>
										<p style={{ marginTop: '15px' }}>
											(52,677)
										</p>
									</div>
									<h5>{product.name}</h5>
									<div style={{ display: 'flex' }}>
										<p
											style={{
												textDecoration: 'line-through',
											}}
										>
											$865.99
										</p>
										<p style={{ color: ' #2DA5F3' }}>
											$442.12
										</p>
									</div>
									<div>
										<p
											style={{
												color: 'rgb(169, 169, 169)',
											}}
										>
											Games built using the Xbox Series
											X|S <br />
											development kit showcase
											unparalleled <br />
											load times, visuals.
										</p>
									</div>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											gap: '5px',
										}}
									>
										<button
											style={{
												background: '#FFE7D6',
												border: '0px',
												padding: '0px 10px',
											}}
										>
											<i className='fas fa-heart'></i>
										</button>
										<button
											onClick={() => addToCart()}
											style={{
												background: '#FA8232',
												border: '0px',
												padding: '10px 20px',
												color: 'white',
											}}
										>
											<i className='fas fa-cart-shopping'></i>
											Add to card
										</button>
										<button
											onClick={() =>
												navigate(`/shop/${product.id}`)
											}
											style={{
												background: '#FFE7D6',
												border: '0px',
												padding: '0px 10px',
											}}
										>
											<i class='fa-regular fa-eye'></i>
										</button>
									</div>
								</div>
							</td>
						))}
						<div className='dataContainer2'>
							{products.slice(1, 5).map((product, index) => (
								<td
									key={index}
									className='rightDivs container-fluid'
								>
									<div style={{ position: 'relative' }}>
										{product.label && (
											<div
												style={{
													position: 'absolute',
													top: '10px',
													right: '0px',
													background:
														product.labelColor,
													padding: '3px',
													borderRadius: '4px',
													color: 'white',
												}}
											>
												{product.name}
											</div>
										)}
										<img
											onClick={() =>
												navigate(`shop/${product.id}`)
											}
											width={150}
											height={150}
											src={product.image}
											alt=''
										/>
									</div>
									<h5>{getFirstEightWords(product.name)}</h5>
									<p style={{ color: '#2DA5F3' }}>
										{product.actual_price}
									</p>
								</td>
							))}
						</div>
					</tr>

					<tr>
						<div className='dataContainer3'>
							{products.slice(5, 9).map((product, index) => (
								<td
									key={index}
									className='rightDivs container-fluid'
								>
									<div style={{ position: 'relative' }}>
										{product.label && (
											<div
												style={{
													position: 'absolute',
													top: '10px',
													right: '0px',
													background:
														product.labelColor,
													padding: '3px',
													borderRadius: '4px',
													color: 'white',
												}}
											>
												{product.label}
											</div>
										)}
										<img
											onClick={() =>
												navigate(`shop/${product.id}`)
											}
											width={150}
											height={150}
											src={product.image}
											alt=''
										/>
									</div>
									<h5>{getFirstEightWords(product.name)}</h5>
									<div
										style={{ display: 'flex', gap: '5px' }}
									>
										{product.oldPrice && (
											<p
												style={{
													textDecoration:
														'line-through',
												}}
											>
												{product.discount_price}
											</p>
										)}
										<p style={{ color: '#2DA5F3' }}>
											{product.actual_price}
										</p>
									</div>
								</td>
							))}
						</div>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default BestDeals;
