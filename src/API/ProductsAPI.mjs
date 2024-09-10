const myHeaders = new Headers();

myHeaders.append('apiKey', process.env.REACT_APP_API_KEY);

const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
};

/**
 * @param {*} callback
 * 
 * @description this function fetch products from the product table
 * then pass the fetch products to a callback function to handle it
 *
 * @example
 * getProducts((data) => {
 * 	console.log(data);
 * });
 * 
 * @requires
 * اعمل للدالة دي import 
 * قبل ما تبدأ تستخدمها
 */


export async function getProducts(callback) {
	let res = await fetch(
		'https://eujyskejmvkjdtpitmqc.supabase.co/rest/v1/products',
		requestOptions
	);
	let data = await res.json();

	callback(data);
}