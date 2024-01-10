const BASE_URL = "http://localhost:3000";
const HEADERS = new Headers({
	"Content-Type": "application/json",
});

export async function getAllProduct() {
	const response = await fetch(`${BASE_URL}/products`, {
		method: "GET",
		headers: HEADERS,
	});
	return response.json();
}

export async function singleProduct(productId) {
	const response = await fetch(`${BASE_URL}/products/${productId}`, {
		method: "GET",
		headers: HEADERS,
	});
	return await response.json();
}

export async function createProduct() {
	const response = await fetch(`${BASE_URL}/products`, {
		method: "POST",
		headers: HEADERS,
		body: JSON.stringify(data),
	});
	return response.ok;
}

export async function updateProduct(productId) {
	const response = await fetch(`${BASE_URL}/products/${productId}`, {
		method: "PUT",
		headers: HEADERS,
		body: data,
	});
	return response.ok;
}

export async function deleteProduct(productId) {
	const response = await fetch(`${BASE_URL}/products/${productId}`, {
		method: "DELETE",
		headers: HEADERS,
	});
	return response.ok;
}
