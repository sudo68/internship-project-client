import { singleProduct } from "./functions.js";

document.addEventListener("DOMContentLoaded", async function () {
	console.log("Welcome to single product page");

	const displayArea = document.querySelector(".product");

	// Accessing query parameters
	const searchParams = new URLSearchParams(window.location.search);
	const id = searchParams.get("id");

	const product = await singleProduct(id);

	const productContainer = document.createElement("div");

	const productImage = document.createElement("img");
	productImage.href = product.image;
	productImage.alt = `A Picture of ${product.name}`;

	const productName = document.createElement("h4");
	productName.textContent = product.name.toUpperCase();

	const productPrice = document.createElement("p");
	productPrice.textContent = `Rs. ${product.price}`;

	const productDescription = document.createElement("p");
	productDescription.textContent = product.desc;

	productContainer.appendChild(productImage);
	productContainer.appendChild(productName);
	productContainer.appendChild(productPrice);
	productContainer.appendChild(productDescription);
	displayArea.append(productContainer);
});
