// Set up request headers with API key from environment
const myHeaders = new Headers({
	apiKey: process.env.REACT_APP_API_KEY,
});

// Request options for fetch calls
const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
};

// IndexedDB constants
const DB_NAME = 'ProductDB';
const STORE_NAME = 'ProductsStore';

// Function to open the IndexedDB
function openDB() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, 1);

		// Handle database upgrade and schema creation
		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME, { keyPath: 'id' });
			}
		};

		// Successfully opened the DB
		request.onsuccess = (event) => resolve(event.target.result);

		// Error handling
		request.onerror = (event) => reject(event.target.errorCode);
	});
}

// Function to retrieve data from IndexedDB by key
function getFromDB(key) {
	return openDB().then((db) => {
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(STORE_NAME, 'readonly');
			const store = transaction.objectStore(STORE_NAME);
			const request = store.get(key);

			request.onsuccess = () =>
				resolve(request.result ? request.result.data : null);
			request.onerror = (event) => reject(event.target.errorCode);
		});
	});
}

// Function to save data to IndexedDB
function saveToDB(data) {
	return openDB().then((db) => {
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(STORE_NAME, 'readwrite');
			const store = transaction.objectStore(STORE_NAME);
			const request = store.put(data);

			request.onsuccess = () => resolve(request.result);
			request.onerror = (event) => reject(event.target.errorCode);
		});
	});
}

// Endpoint for product data
const ProductsEndpoint =
	'https://eujyskejmvkjdtpitmqc.supabase.co/rest/v1/products';

/**
 * Fetches products from the API or retrieves cached products from IndexedDB.
 *
 * @param {number} [page=1] - The page number of products to fetch (pagination).
 * @param {function} callback - Function to handle the fetched products.
 *
 * @example
 * getProducts(1, (data) => {
 *   console.log(data);
 * });
 */
export async function getProducts(page = 1, callback) {
	const cacheKey = `products_page_${page}`;

	try {
		// Check if data is cached in IndexedDB
		const cachedData = await getFromDB(cacheKey);

		if (cachedData) {
			// Return cached data if available
			callback(cachedData);
		} else {
			// Fetch data from API
			const res = await fetch(
				`${ProductsEndpoint}?limit=20&offset=${(page - 1) * 20}`,
				requestOptions
			);

			if (!res.ok) throw new Error('Network response was not ok');

			const data = await res.json();

			// Save fetched data to IndexedDB
			await saveToDB({ id: cacheKey, data });

			// Return fetched data
			callback(data);
		}
	} catch (error) {
		console.error('Error fetching products:', error);
	}
}

/**
 * Fetches a product by ID from the API or retrieves cached product from IndexedDB.
 *
 * @param {number|string} id - The ID of the product to fetch.
 * @param {function} callback - Function to handle the fetched product.
 *
 * @example
 * getProductByID(1, (data) => {
 *   console.log(data);
 * });
 */
export async function getProductByID(id, callback) {
	const cacheKey = `product_${id}`;

	try {
		// Check if data is cached in IndexedDB
		const cachedData = await getFromDB(cacheKey);

		if (cachedData) {
			// Return cached data if available
			callback(cachedData);
		} else {
			// Fetch data from API
			const res = await fetch(
				`${ProductsEndpoint}?id=eq.${id}`,
				requestOptions
			);

			if (!res.ok) throw new Error('Network response was not ok');

			const data = await res.json();

			// Save fetched data to IndexedDB
			await saveToDB({ id: cacheKey, data });

			// Return fetched data
			callback(data);
		}
	} catch (error) {
		console.error(`Error fetching product with ID ${id}:`, error);
	}
}
