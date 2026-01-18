// function Person(id, name, age) {
// 	if (this.constructor == Person) {
// 		throw new Error("can not take object from abstract class");
// 	}
// 	this.id = id || "";
// 	this.name = name || "";
// 	this.age = age || "";
// }

// Person.prototype.display = function () {
// 	throw "method not implemented";
// };

// function User(id, name, age, password) {
// 	Person.call(this, id, name, age);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype); //
// User.prototype.constructor = User;

// var user1 = new User();

// console.log(user1);

// function Student(id, name, age) {
// 	this.id = id || "";
// 	this.name = name || "";
// 	this.age = age || "";
// }

// Student.myStaticMethod = function (param) {
// 	console.log("hello static method");
// };

// var student1 = new Student();

// Student.myStaticMethod();
// student1.myStaticMethod(); // Error

// var arr = [];

// // arr.__proto__
// // var arr = new Array()
// // arr.push();

// // console.log(Array.prototype);

// // override
// Array.prototype.push = function () {
// 	console.log("Hello pd");
// 	// logic push
// };

// arr.push("ahmed");
// console.log(arr);

// function 1

// const SHAPES = {
// 	CIRCLE: "circle",
// 	SQURE: "square",
// };
// function calcArea(shape) {
// 	if (shape.type == SHAPES.CIRCLE) {
// 		return Math.PI * shape.r * shape.r;
// 	}
// 	if ((shape.type = SHAPES.SQURE)) {
// 		return shape.l * shape.l;
// 	}
// }

// calcArea({ type: "circle", r: 1 });
// calcArea({ type: "square", l: 2 });
// calcArea({ type: "rectangle", l: 2 });

/**================================================= */

// function sum() {
//     if ( arguments.length == 2 ) {

//     }
// }

// sum(2, 3);

// sum(2, 3, 4);
