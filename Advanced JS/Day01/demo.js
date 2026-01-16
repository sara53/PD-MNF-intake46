function Product(name, price, category) {
	this.name = name;
	this.price = price;
	this.category = category;
}

Product.prototype.discount = function () {
	console.log("discount function");
};
var p1 = new Product("Book", 200, "school");
var p2 = new Product("phone", 3000, "electronics");

console.log(p1);
console.log(p2);

// new -- create empty object
// this - empety
// return this object
