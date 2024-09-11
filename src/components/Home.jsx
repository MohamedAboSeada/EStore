import React, { Component } from 'react';
import { getProducts } from '../../API/ProductsAPI.mjs';

export class Home extends Component {
	render() {
		getProducts((data) => {
			console.log(data);
		});

		return <div>App</div>;
	}
}

export default Home;
