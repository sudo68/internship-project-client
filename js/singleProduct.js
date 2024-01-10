// Importing singleProduct function from ./functions.js file
import { singleProduct } from "./functions.js";

// An event listener listening to the loading of DOM.
// when event is triggered, an anonymous async function runs.
document.addEventListener("DOMContentLoaded", async function () {
	console.log("Welcome to single product page");

	// Selecting displayArea from Html Page.
	const displayArea = document.querySelector(".product");

	// Accessing query parameters from URL.
	const searchParams = new URLSearchParams(window.location.search);
	const id = searchParams.get("id");

	// Fetching a single product.
	const product = await singleProduct(id);

	// Rendering a product information in Html page.
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
