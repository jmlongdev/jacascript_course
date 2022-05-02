'use strict';

//===============================================================================

/*
//  ==== Object Oriented Programming ====

Object Oriented programming (OOP)is a programming paradigm based on 
the concept of objects.

We use objects to model (describe) real-world or abstract features.

Objects may contain data (properties) and code (methods). By using 
objects, we pack data and the corresponding behavior into one block. 

In OOP, objects are self-contained pieces/blocks of code.

Objects are building blocks of applications, and interact with 
one another

Interactions happen through a public interface(API): methods that 
the code outside of the object can access and use to communicate 
with the object.

OOP was developed with the goal of organizing code, to make it 
more flexible and easier to maintain (avoid "spaghetti code").
*/

//===============================================================================

/*  
// ==== CLASSES  in Tradidional OOP====

A Class is like a blueprint from which we can create new objects

Objects( instances ) are instantiated from a class, which functions 
like a blueprint

Behavior (methods) is copies from classes to all instances


// ==== The 4 Fundamentals OOP Principles ====

- Abstraction: Ignoring or hiding details that don't matter, allowing 
us to get an overview perspective of the thing we're implementing,
instead of messing with details that don't really matter to out implementation
Acts like a Black Box


-Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as aPublicInterface(API).
Prevents external code from accidentally  maninulating internal properties/state
Allows to change internal implementation without the risk of breaking external code
Only leave essential methods public


-Inheritance: Making all properties and methods of a certain class available 
to a child class, forming a hierarchial relationship between classes. This
allows us to reuse common logic and to model real-world relationships


-Polymorphism: A child class can overwrite a method it inherited from a parent class [it's more complex than that, but enough for our purposes].

*/

//===============================================================================

/*

//  ==== OOP is JavaScript ====

 All objects in JavaScript are linked to a certain Prototype

 Objects are linked to a prototype object

 Prototypal inheritance: the prototype contains methods (behavior) that are accessible to all objects linked to that prototype.

 Objects delegate methods to the linked prototype object

 // ==== 3 Ways of implementing prototypal inheritance in JavaScript

 1. Constructor Functions:
    Technique to create objects from a function
    This is how built-in objects like Arrays, Maps, or Sets are actually implemented

 2. ES6 Classes:
    Modern alternative to constructor function syntax
    "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor 
    functions.
    ES6 Classes do NOT behave like classes in "classical OOP"

 3. Object.create():
    The easiest and most straightforward way of linking an object to a prototype object.
*/

//===============================================================================

/* 

// ==== Constructor Functions and the new Operator ==

*/
// constructor functions always start with a capital letter

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   /* Never create a method inside a constructor function*/
//   //   this.calcAge = function () {
//   //     console.log(2022 - this.birthYear);
//   //   };
// };

/* 
4 steps done behind the scenes:
    1. a New {} (object) is created
    2. function is called, the this keyword equals the new {} (object)
    3. new {} is linked to the prototype
    4. the function automatically returns the {} 
*/

/* the 'new' operator is special and important */

/*
 things creater with  the constructor function are called instances
 max and amanda are an instance of Person
*/
/*
const max = new Person('Max', 1993);
console.log(max);

const amanda = new Person('Amanda', 1995);
console.log(amanda);

console.log(max instanceof Person);
*/
//===============================================================================

/*
// ===== Prototypes =====


const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const max = new Person('Max', 1993);
const amanda = new Person('Amanda', 1995);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
Person.prototype.sayHello = function () {
  console.log(`${this.firstName} says 'sup'`);
};
max.calcAge();
amanda.calcAge();
max.sayHello();
console.log(max.__proto__);
console.log(max.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(max));

// inherited
Person.prototype.species = 'Homo sapiens';
console.log(max.species, amanda.species);

console.log(max.hasOwnProperty('firstName'));
console.log(max.hasOwnProperty('species'));

console.log(max.__proto__); //Person.prototype
console.log(max.__proto__.__proto__); // Object.prototype
console.log(max.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 5, 6, 7];
console.log(arr.__proto__); //Array.prototype
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); //Object.prototype

// dont do this but a great example of how to create things
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

*/
//===============================================================================

/* Coding Challenge 1

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make}'s speed is ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make}'s speed is ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
 */

//===============================================================================

// ===== ES6 Classes =====

// class Expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  }

  //here Methods will be added to the .prototype property and not
  // the constructor
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const sam = new PersonCl('Sam', 1995);
console.log(sam);
sam.calcAge();

console.log(sam.__proto__ === PersonCl.prototype);

// 1. Classes are NOT hoisted
// 2. Classes are also first-class, like  functions
// 3. Classes are executed in strict mode
