// Base URL of our API.
const BASE_URL = "http://localhost:3000";

// Headers used in each request to our API.
const HEADERS = new Headers({
	"Content-Type": "application/json",
});

// Request function for fetching All Products.
export async function getAllProduct() {
	const response = await fetch(`${BASE_URL}/products`, {
		method: "GET",
		headers: HEADERS,
	});
	return response.json();
}

// Request function for fetching Single Product.
export async function singleProduct(productId) {
	const response = await fetch(`${BASE_URL}/products/${productId}`, {
		method: "GET",
		headers: HEADERS,
	});
	return await response.json();
}

// Request function for creating a Product.
export async function createProduct() {
	const response = await fetch(`${BASE_URL}/products`, {
		method: "POST",
		headers: HEADERS,
		body: JSON.stringify(data),
	});
	return response.ok;
}

// Request function for updating a Product.
export async function updateProduct(productId) {
	const response = await fetch(`${BASE_URL}/products/${productId}`, {
		method: "PUT",
		headers: HEADERS,
		body: data,
	});
	return response.ok;
}

// Request function for deleting a Product.
export async function deleteProduct(productId) {
	const response = await fetch(`${BASE_URL}/products/${productId}`, {
		method: "DELETE",
		headers: HEADERS,
	});
	return response.ok;
}
