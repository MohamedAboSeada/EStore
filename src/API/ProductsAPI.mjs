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

const ProductsEndpoint =
	'https://eujyskejmvkjdtpitmqc.supabase.co/rest/v1/products';
	
export async function getProducts(page=1,callback) {
	let res = await fetch(ProductsEndpoint + `?limit=20&offset=${(page - 1) * 20}`, requestOptions);
	let data = await res.json();

	callback(data);
}

export async function getProductByID(id, callback) {
	let res = await fetch(ProductsEndpoint + `?id=eq.${id}`, requestOptions);
	let data = await res.json();

	callback(data);
}
