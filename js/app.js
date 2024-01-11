import { getAllProduct } from "./functions.js";
document.addEventListener("DOMContentLoaded", async function () {
	const displayArea = document.querySelector(".displayArea");
	const allProducts = await getAllProduct();
	console.log(allProducts);

	allProducts.forEach((product) => {
		const container = document.createElement("div");

		const productImage = document.createElement("img");
		productImage.src = product.image;
		productImage.alt = `A picture of ${product.name}`;
		productImage.height = 200;
		productImage.width = 200;

		const newLine = document.createElement("br");

		const productName = document.createElement("p");
		productName.textContent = product.name;

		const productPrice = document.createElement("p");
		productPrice.textContent = `Rs. ${product.price}`;

		const editLink = document.createElement("a");
		editLink.textContent = "Edit";
		editLink.href = `./edit-product.html?id=${product.id}`;

		const productDetails = document.createElement("a");
		productDetails.href = `./single-product.html?id=${product.id}`;
		productDetails.textContent = "View Details";

		container.appendChild(newLine);
		container.appendChild(productImage);
		container.appendChild(productName);
		container.appendChild(productPrice);
		container.appendChild(editLink);
		container.appendChild(newLine);
		container.appendChild(productDetails);
		displayArea.appendChild(container);
	});
});
