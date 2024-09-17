import React, { createContext, useEffect, useState } from 'react';

let CartContext = createContext();

function CartProvider({ children }) {
	let [cart, setCart] = useState([]);

	useEffect(() => {
		let savedCart = localStorage.getItem('user-cart');
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	let SaveCart = () => {
		let cartString = JSON.stringify(cart);
		localStorage.setItem('user-cart', cartString);
	};

	let isProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	let addProduct = (product) => {
		if (!isProductInCart(product)) {
			setCart((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
		} else {
			UpdateProduct(product);
		}
		SaveCart(); // Fix here
	};

	let removeProduct = (product) => {
		setCart((prevCart) => {
			return prevCart
				.map((item) => {
					if (item.id === product.id) {
						if (item.quantity > 1) {
							return { ...item, quantity: item.quantity - 1 };
						}

						return null;
					}
					return item;
				})
				.filter((item) => item !== null);
		});
		SaveCart();
	};

	let clearProduct = (product) => {
		let NewItems = cart.filter((item) => item.id !== product.id);
		setCart(NewItems);
	};

	let UpdateProduct = (product) => {
		setCart(
			cart.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
		SaveCart();
	};

	return (
		<CartContext.Provider
			value={{ cart, addProduct, removeProduct, clearProduct }} // Fix here
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProvider };
