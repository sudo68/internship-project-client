import { singleProduct, updateProduct } from "./functions.js";

const button = document.querySelector("#editProduct");
const productId = document.querySelector("#productId");
const productName = document.querySelector("#productName");
const productImage = document.querySelector("#productImage");
const productPrice = document.querySelector("#productPrice");
const productDesc = document.querySelector("#productDesc");

document.addEventListener("DOMContentLoaded", async function () {
	const searchParams = new URLSearchParams(window.location.search);
	const id = searchParams.get("id");

	const product = await singleProduct(Number(id));
	productId.value = product.id;
	productName.value = product.name;
	productImage.value = product.image;
	productPrice.value = product.price;
	productDesc.value = product.desc;
});

button.addEventListener("click", async function (ev) {
	ev.preventDefault();
	const data = {
		id: Number(productId.value),
		name: productName.value,
		image: productImage.value,
		price: productPrice.value,
		desc: productDesc.value,
	};
	console.log(data);

	const isUpdated = await updateProduct(data.id, data);
	if (!isUpdated) {
		alert("Product Not Updated!");
	}
	alert("Product Updated!");
});
