import React, { createContext, useEffect, useState } from 'react';

let CartContext = createContext();

function CartProvider({ children }) {
	let [cart, setCart] = useState([]);

	// Load cart from local storage
	useEffect(() => {
		let savedCart = localStorage.getItem('user-cart');
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	// Save cart to local storage
	let SaveCart = (updatedCart) => {
		let cartString = JSON.stringify(updatedCart);
		localStorage.setItem('user-cart', cartString);
	};

	// Check if product is in cart
	let isProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	// Add a product to the cart
	let addProduct = (product) => {
		if (!isProductInCart(product)) {
			setCart((prevItems) => {
				const updatedCart = [...prevItems, { ...product, quantity: 1 }];
				SaveCart(updatedCart); // Ensure cart is saved after updating state
				return updatedCart;
			});
		} else {
			UpdateProduct(product);
		}
	};

	// Remove a product or decrease its quantity
	let removeProduct = (product) => {
		setCart((prevCart) => {
			const updatedCart = prevCart
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

			SaveCart(updatedCart); // Save after updating state
			return updatedCart;
		});
	};

	// Remove all of a specific product
	let clearProduct = (product) => {
		let NewItems = cart.filter((item) => item.id !== product.id);
		setCart(NewItems);
		SaveCart(NewItems); // Save after clearing the product
	};

	// Update product quantity
	let UpdateProduct = (product) => {
		setCart((prevCart) => {
			const updatedCart = prevCart.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			SaveCart(updatedCart); // Save after updating the product
			return updatedCart;
		});
	};

	let clearAll = () => {
		if (cart.length > 0) {
			setCart([]);
			SaveCart([]);
		}
	};

	return (
		<CartContext.Provider
			value={{ cart, addProduct, removeProduct, clearProduct, clearAll }}
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProvider };
