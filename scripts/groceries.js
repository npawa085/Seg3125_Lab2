// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "milk",
		nutAllergy: true,
		lactoseIntolerant: false,
		price: 2.50
	},
	{
		name: "Oat Milk",
		nutAllergy: true,
		lactoseIntolerant: true,
		price: 3.50
	},
	{
		name: "salmon",
		nutAllergy: true,
		lactoseIntolerant: true,
		price: 10.00
	},
    {
		name: "peanuts",
		nutAllergy: false,
		lactoseIntolerant: true,
		price: 1.70
	},
    {
		name: "cheese",
		nutAllergy: true,
		lactoseIntolerant: false,
		price: 4.33
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Nut Allergy") && (prods[i].nutAllergy == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Lactose Intolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}