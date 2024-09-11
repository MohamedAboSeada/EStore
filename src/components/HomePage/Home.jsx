import React, { Component } from 'react';
import { getProducts, getProductByID } from '../../API/ProductsAPI.mjs';

export class Home extends Component {
	render() {

        getProducts(1, (data) => {
    console.log(data);
});

getProductByID(5, (data) => {
    console.log(data);
});
        
		return <div>Home</div>;
	}
}

export default Home;
