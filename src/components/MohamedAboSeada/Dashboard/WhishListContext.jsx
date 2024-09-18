import React, { createContext, useEffect, useState } from 'react';

let WhishListContext = createContext();

function WhishListProvider({ children }) {
	let [whishlist, setWhishlist] = useState([]);

	// Load wishlist from local storage
	useEffect(() => {
		let savedWhishlist = localStorage.getItem('user-whishlist');
		if (savedWhishlist) {
			setWhishlist(JSON.parse(savedWhishlist));
		}
	}, []);

	// Save wishlist to local storage
	let saveWhishlist = (updatedWhishlist) => {
		let whishlistString = JSON.stringify(updatedWhishlist);
		localStorage.setItem('user-whishlist', whishlistString);
	};

	// Check if product is in the wishlist
	let isProductInWhishList = (product) => {
		return whishlist.some((item) => item.id === product.id);
	};

	// Add product to the wishlist
	let addProductToWhishlist = (product) => {
		if (!isProductInWhishList(product)) {
			setWhishlist((items) => {
				const updatedWhishlist = [...items, product];
				saveWhishlist(updatedWhishlist); // Save after updating
				return updatedWhishlist;
			});
		}
	};

	// Remove product from the wishlist
	let removeProductfromWhishlist = (product) => {
		setWhishlist((products) => {
			const updatedWhishlist = products
				.map((item) => (item.id === product.id ? null : item))
				.filter((item) => item !== null);

			saveWhishlist(updatedWhishlist); // Save after removing
			return updatedWhishlist;
		});
	};

	return (
		<WhishListContext.Provider
			value={{
				whishlist,
				addProductToWhishlist,
				removeProductfromWhishlist,
			}}
		>
			{children}
		</WhishListContext.Provider>
	);
}

export { WhishListProvider, WhishListContext };
