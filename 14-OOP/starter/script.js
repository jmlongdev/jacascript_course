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

//===============================================================================//

// ===== ES6 Classes ===== //
/*
// class Expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }
  // instance Methods
  //here Methods will be added to the .prototype property and not
  // the constructor
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey There');
    console.log(this);
  }
}
const sam = new PersonCl('Sam Long', 1995);
console.log(sam);
sam.calcAge();
console.log(sam.age);

console.log(sam.__proto__ === PersonCl.prototype);

// 1. Classes are NOT hoisted
// 2. Classes are also first-class, like  functions
// 3. Classes are executed in strict mode

const walter = new PersonCl('walter farts', 1965);
PersonCl.hey();
*/
//===============================================================================//

// ==== Getters and Setters ===== //
/*
const account = {
  owner: 'Max',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  // any setter method need to have exactly one parameter
  set latest(mov) {
    return this.movements.push(mov);
  },
};

// using get the function is treated as if its a property
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

///// ==== Object.create ==== /////

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sara = Object.create(PersonProto);

sara.init('Sara', 1979);
sara.calcAge();
*/
//===============================================================================//
/*
/// === Challenge 2 === ////
class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`The ${this.make}'s speed is ${this.speed}km/h`);
  };
  brake = function () {
    this.speed -= 5;
    console.log(`The ${this.make}'s speed is ${this.speed}km/h`);
  };

  get speedUS() {
    console.log(this.speed / 1.6);
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

ford.speedUS;
ford.speedUS = 50;
console.log(ford);
*/
//===============================================================================//

///// ===== Inheritance Between "Classes": Constructor Functions ===== /////
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype); // Linking prototypes creates the chain betweeen the Student and Person

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
//===============================================================================//

/// === Challenge 3 === ////
/*
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.charge}%`);
};
// polymorphism
EV.prototype.accelerate = function () {
  (this.speed += 20), this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h wiith a charge of ${this.charge}`
  );
};
const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
EV.prototype.constructor = EV;
*/

//===============================================================================//
/*
// ===== Inheritance Between "Classes": ES6 Classes ===== //
class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }
  // instance Methods
  //here Methods will be added to the .prototype property and not
  // the constructor
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey There');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // the constructor function of the parent class. no need to call .call
    // needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };

  calcAge = function () {
    console.log(`I am ${2022 - this.birthYear} years old, and I am a genius.`);
  };
}

// const martha = new StudentCl('Marths Jones', 2021);
const martha = new StudentCl('Marths Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
martha.age;
*/
//===============================================================================//

// ===== Inheritance Between "Classes": Object.create =====
/*
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce();

jay.calcAge();
*/

//===============================================================================//

///// ===== Another Class Example =====/////
/////===== Encapsulation: Protected Properties and Methods =====/////

/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property - means to not touch it outside the class
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Max', 'USD', 1234);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
// acc1.approveLoan();

console.log(acc1.getMovements());
console.log(acc1._pin);
*/
//===============================================================================//

/////===== Encapsulation: Private Class Fields and Methods =====/////

//Public fields //Private fields // Public methods // Private methods
// There are also static versions of the top four.

class Account {
  // 1. Public Fields (instances)
  locale = navigator.language; // how to define a public field

  // 2. Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property - means to not touch it outside the class
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods *a publiic interface (API)

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('helper');
  }

  // Private methods //no browser supposts private methods right now
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Max', 'USD', 1234);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan();
// console.log(acc1.#approveLoan(1)); // Google Chrome see this as a private field at the moment
console.log(acc1.getMovements());
Account.helper();

// protected fields cant be seen outside the class
// console.log(acc1.#pin);
// console.log(#movements);

//===============================================================================//

/////===== Chaining Methods =====/////

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

//===============================================================================//

///// ==== ES6 Classes Summary ==== /////
// **REVIEW** //

//===============================================================================//

/// === Challenge 2 === ////
class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make}'s speed is ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`The ${this.make}'s speed is ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    console.log(this.speed / 1.6);
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const ford = new CarCl('Ford', 120);
// console.log(ford);

// ford.speedUS;
// ford.speedUS = 50;
// console.log(ford);

/// === Challenge 4 === ////

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.#charge}%`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h with a charge of ${this.#charge}`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().brake();
rivian.brake();

/// === Challenge 3 === ////
/*
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.charge}%`);
};
// polymorphism
EV.prototype.accelerate = function () {
  (this.speed += 20), this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h wiith a charge of ${this.charge}`
  );
};
const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
EV.prototype.constructor = EV;
*/
