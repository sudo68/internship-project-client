async function handleFormSubmit(ev) {
	ev.preventDefault();
	const data = {
		id: 1,
		name: "Demo content",
		image: "democontent.jpg",
		price: 39.95,
		desc: "demo demo demo",
	};
	const isCreated = await createProduct(data);
	if (!isCreated) {
		alert("Product not created!");
	}
	alert("Product created!");
}
