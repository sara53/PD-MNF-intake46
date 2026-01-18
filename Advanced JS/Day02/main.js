// function Person(id, name, age) {
// 	this.id = id || "";
// 	this.name = name || "";
// 	this.age = age || "";
// }

// console.log(Person.prototype); // empty object {}
// var p1 = new Person(1, "Ali", 25);
// var p2 = new Person(2, "Mona", "26");

// console.log(p1);
// console.log(p2);

// fun --
/**
 * 1- create empty object {}
 * 2- this refere {}
 * 3- return {}
 */

// literal creation

// var product = new Object();

// var product = {
// 	name: "Book",
// 	price: 200,
// };

// console.log(product.__proto__.constructor.name);
// console.log(Object.prototype.constructor.name);

// console.log(product);
// var user = new Object(); // ctor
// console.log(product.toString()); //
// console.log(product.__proto__.toString()); // true
// console.log(product.toString());

// console.log(product.display());

// console.log(product.name);
// console.log(product.category); //

// console.log(user.toString());
// console.log(product.toString());
// console.log(user.toString());

// product.test();
// user.toDisplay();

// console.log(Object.prototype);

// // toString -- objects --

// console.log(product.__proto__ == Object.prototype);

// console.log(user.__proto__ == Object.prototype);

// console.log(user.__proto_ == product.__proto_);
// function Person(id, name, age) {
// 	this.id = id || "";
// 	this.name = name || "";
// 	this.age = age || "";
// }

// Person.prototype.trackName = "PD";

// Person.prototype.display = function () {
// 	console.log(this.name + " " + this.age);
// };

// var p1 = new Person(1, "Ali", 25);
// var p2 = new Person(2, "Mona", "26");

// console.log(p1);
// console.log(p2);
// p1.display();
// p2.display();

// console.log(Person.prototype); // empty object {}
// console.log(p1.__proto__ == Person.prototype);
// console.log(p2.__proto__ == Person.prototype);
// console.log(p2.__proto__ == p1.__proto__);
// console.log(p2.__proto__.__proto__ == Object.prototype);

// console.log(p1);
// console.log(p2);
// parent -- super class
// function Person(id, name, age) {
// 	this.id = id || "";
// 	this.name = name || "";
// 	this.age = age || "";
// }

// Person.prototype.trackName = "PD";

// Person.prototype.display = function () {
// 	console.log(this.name + " " + this.age);
// };

// /**==================================== */
// // child -- subclass
// function User(id, name, age, password) {
// 	Person.call(this, id, name, age);
// 	this.password = password || "";
// }
// // inheritance

// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;

// User.prototype.generatePassword = function () {
// 	return this.password.toUpperCase() + "#$%^#";
// };
// //override
// User.prototype.display = function () {
// 	console.log("New Code");
// };
// var myUser = new User(1, "Ahmed", 25, "ahmed");
// console.log(myUser);

// // console.log(myUser.trackName);

// myUser.display();
// myUser.generatePassword();

// // var product = {
// // 	name: "book",
// // 	discount: function () {
// // 		console.log("discount");
// // 	},
// // };

// // var result = Object.create(product);

// // result.studentName = "salah";

// // result.__proto__.name = "pen";

// // console.log(result);

// // console.log(product);
// // inhertance -- polymorphism
// // ecapsulation - abstraction
// // static member
// function Emp(id, name, _salary) {
// 	// private feild
// 	var salary = _salary;
// 	this.id = id;
// 	this.name = name;
// 	// get -- closure -- privilage method
// 	this.getSalary = function () {
// 		return salary;
// 	};
// 	// set
// 	this.setSalary = function (value) {
// 		salary = value;
// 	};
// }

// Emp.prototype.showManger = function () {
// 	console.log(this.name + "his manger is ahmed Ali");
// };

// var emp1 = new Emp(1, "kareem", 2000);

// emp1.name; //get
// emp1.name = "new Name"; // set

// emp1.setSalary(4000); // set
// console.log(emp1.getSalary()); // get
// function Emp(id, name, _salary) {
// 	var salary = _salary;
// 	this.id = id;
// 	this.name = name;
// 	Object.defineProperty(this, "salaryHandler", {
// 		get: function () {
// 			// conditions
// 			return salary;
// 		},
// 		set: function (value) {
// 			salary = value;
// 		},
// 	});
// }

// Emp.prototype.showManger = function () {
// 	console.log(this.name + "his manger is ahmed Ali");
// };

// var emp1 = new Emp(1, "kareem", 2000);

// console.log(emp1);
// emp1.salaryHandler = 4000; // set
// console.log(emp1.salaryHandler); // get

/**====================== */
// iterable -- for -- in --
// var product = {
// 	name: "book",
// 	price: 200,
// };

// Object.defineProperty(product, "category", {
// 	value: "school",
// 	writable: true,
// 	configurable: true,
// 	enumerable: false,
// });

// // product.category = "phones"; // override
// // delete product.category;
// console.log(product);

// for (var key in product) {
// 	console.log(key);
// }

// product.name = "pen"; // set

// delete product.name;
// console.log(product.name);

//
