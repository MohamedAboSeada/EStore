import React, { createContext, useState } from 'react';

let WhishListContext = createContext();

function WhishListProvider({ children }) {
	let [whishlist, setWhishlist] = useState([]);

	let isProductInWhishList = (product) => {
		return whishlist.some((item) => item.id === product.id);
	};

	let addProductToWhishlist = (product) => {
		if (!isProductInWhishList(product)) {
			setWhishlist((items) => [...items, product]);
		}
	};

	let removeProductfromWhishlist = (product) => {
		setWhishlist((products) =>
			products
				.map((item) => (item.id === product.id ? null : item))
				.filter((item) => item !== null)
		);
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
