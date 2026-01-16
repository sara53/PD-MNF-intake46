// this -- default case -- this == window
// this -- refer to caller

// var added to window object -- function -- Var -- expression --
// var fname = "mona";

// // console.log(fname); // window.fname
// // console.log(window.fname); //

// function sayHello() {
// 	console.log("Welcome pd track");
// }

// sayHello(); // window

// // window.sayHello(); // caller -- window

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		console.log("hello display");
// 	},
// };

// person.display(); // caller -- person
// ==========================================
// this -- window -- caller
// this - by default - window
// var fname = "mona";
// var password = "PD";

// function getName() {
// 	console.log(this.fname); // window.fname
// }

// // getName(); // window

// var person = {
// 	fname: "Ahmed",
// 	password: "SMFKF",
// 	display: getName, // function
// 	getPassword: function () {
// 		console.log(this.password);
// 	},
// };

// let result = person.getPassword; //

// result(); // pd
// window.result(); // Error
// console.log(window.result);
// result(); // undefined window.password
// result == window
// result();

// window.result(); // window

// password -- 10
// undefined --- 6
// person.getPassword(); //
// person.display(); // caller -- person
// function sayHello() {
// 	// function scope
// 	var trackName = "pd"; // hoisting
// 	console.log(trackName);
// 	console.log("hello pd");
// 	return "iti";
// }

// var result = sayHello();
// console.log(trackName); // error
// console.log(result);

// shadwing == concept
// var fname = "mona";

// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		getName.call(this); // window -- person.fname
// 		//window.getName();
// 		//console.log(this);
// 		// var result = getName; // window.getName // window
// 		// result();
// 		//person.getName();
// 		//console.log(person.getName);
// 	},
// };

// person.display(); // person

/////////////////////////////////////////////////////////////
// var person1 = {
// 	fname: "ahmed",
// 	lname: "alaa",
// 	display: function (emoji1, emoji2) {
// 		console.log(emoji1 + " " + this.fname + " " + this.lname + " " + emoji2);
// 		// console.log("hello");
// 	},
// };

// var person2 = {
// 	fname: "Sama",
// 	lname: "Mohamed",
// };
// // call -- return function

// // var result = person1.display.bind(person1);

// // result(":)", ":(");

// // hard binding
// var output = person1.display.bind(person2);
// output();
// output.call(person1, ":)", ":(");

// output(":)", ":(");
// person1.display(":)", ":(");
// person1.display.call(person1, ":)", ":(");
// person1.display.call(person2, "^_^", ":=)");
// console.log("--------------------------------------");
// person1.display.apply(person1, [":)", ":("]);
// person1.display.apply(person2, ["^_^", ":=)"]);
// impicit biniding  // person
// explicit binding
// person2.display();
// var person = {
// 	fname: "Ahmed",
// 	display: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this.fname);
// 			}.bind(this),
// 			1000
// 		);
// 	},
// };

// person.display();
// var fname = "mona";

/// v2 -- that pattern

// var person = {
// 	fname: "Ahmed",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 1000);
// 	},
// };

// person.display();
/// v2 -- that pattern

// this -- window
// var fname = "mona";

// var person = {
// 	fname: "Ahmed",
// 	display: function () {
// 		console.log(this);
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 1000); // window
// 	},
// };

// person.display(); // person
// function showData() {
// 	var trackName = "pd";

// 	return function () {
// 		console.log("hello " + trackName);
// 	};
// }

// var result = showData();

// result();

// hello undefined
// hello pd -- closure
// hellp pd - undefined
// error

// function counter() {
// 	var count = 0;
// 	return function () {
// 		console.log(count++);
// 	};
// }

// var result = counter();

// result();
// result();
// result();
// result();
// console.log("-----------------------");

// var output = counter(); // counter -- colsure  -- 1 - 2,3

// output();
// output();
// output();

// find solution in your lab to make the output 0  1 2
// function getArr() {
// 	var arr = [];
// 	// closure

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}
// 	return arr;
// }

// let result = getArr();
// result[0]();
// result[1]();
// result[2]();

//
// var product = {
// 	id: 1,
// 	name: "book",
// 	discount: function () {},
// };
// var product2 = {
// 	id: 1,
// 	discount: function () {},
// };
// factory pattern

// template -- factory pattern
// object.create
// function product(_id, _name, _price) {
// 	return {
// 		id: _id || "",
// 		name: _name || "",
// 		price: _price || "",
// 		discount: function (rate) {
// 			return this.price * rate;
// 		},
// 	};
// }

// var p1 = product(1, "Book", 200);
// var p2 = product(2, "Pen", 400);
// var p2 = product(2, "Pen", 400);

// console.log(p1);
// console.log(p2);

// factory pattern

// function createUser(name, role) {
// 	var lastLogin = null;
// 	return {
// 		login: function () {
// 			lastLogin = new Date();
// 			console.log(name + " logged as " + role);
// 		},
// 		getLastLogin: function () {
// 			return lastLogin;
// 		},
// 	};
// }

// var user1 = createUser("sara", "admin");

// user1.login();

// console.log(user1.getLastLogin());

// let user2 = createUser("ahmed", "guest");
// user2.login();
