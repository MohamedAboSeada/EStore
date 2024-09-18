import React, { useState, useEffect } from 'react';
import { OrderContext } from '../orders/orders';
import { useParams } from 'react-router-dom';

function OrderDetails() {
	let [orderProducts,setOrderProducts] = useState([]);
    let [loading, setLoading] = useState(true);
	let { id } = useParams();

	useEffect(() => {
        
    }, []);

	return <div>OrderDetails</div>;
}

export default OrderDetails;
