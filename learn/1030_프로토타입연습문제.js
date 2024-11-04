//문제 1
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();

//2
function Car(brand) {
  this.brand = brand;
}
Car.prototype.start = function () {
  console.log(`${this.brand} car has started`);
};

const myCar = new Car("Toyota");
myCar.start();

//3
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(rect.area());

//4
function Animal() { }

// 여기에 speak 메서드를 추가하세요.
Animal.prototype.speak = function () {
  console.log("Animal makes a sound");
};

const animal = new Animal();
animal.speak();

//5
//⚠️
//오버라이드란? speak가 이미 존재를 해도 speak를 덮어버리는 것!
//같은 메서드를 덮는 걸 말한다
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log("먀옹");
};


Dog.prototype.speak = function () {
  console.log("Woof!");
};

const dog = new Dog("Buddy");
dog.speak();


//6
function Student(name) {
  this.name = name;
}

// 여기에 introduce 메서드를 추가하세요.
Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}and I'm a student.`);
};

const student = new Student("Alice");
student.introduce();

//7
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// 여기에 getSummary 메서드를 추가하세요.
Book.prototype.getSummary = function () {
  console.log(`Title: ${title}, Author: ${author}`);
};

const book = new Book("1984", "George Orwell");
console.log(book.getSummary());

//8
function Shape() { }

// 여기에 getType 메서드를 추가하세요.
Shape.prototype.getType = function () {
  return "I am a shape.";
};

const shape = new Shape();
shape.getType();

//9
function Circle(radius) {
  this.radius = radius;
}

// 여기에 getCircumference 메서드를 추가하세요.
Circle.prototype.getCircumference = function () {
  return 2 * 3.14 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getCircumference());


//10
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

// 여기에 getDetails 메서드를 추가하세요.
Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Position: ${this.position}`;
};

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());


//연습문제 +
//1
{
  function Vehicle(speed) {
    this.speed = speed;
  }

  // 여기에 accelerate 메서드를 추가하세요.
  Vehicle.prototype.accelerate = function (num) {
    return this.speed += num;
  };

  const car = new Vehicle(0);
  car.accelerate(10);
  console.log(car.speed); // 10
}

//2
{
  function Shape() { }

  Shape.prototype.getArea = function () {
    throw new Error("getArea() must be implemented");
  };

  function Circle(radius) {
    this.radius = radius;
  }

  Circle.prototype.getArea = function () {
    return 3.14 * this.radius * this.radius;
  };

  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }

  Rectangle.prototype.getArea = function () {
    return this.width * this.height;
  };

  // 여기에 Circle과 Rectangle의 getArea 메서드를 추가하세요.

  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  console.log(circle.getArea()); // 78.54
  console.log(rectangle.getArea()); // 24
}

//3
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// 여기에 fullName 메서드를 추가하세요.
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

//4
function BankAccount(initialBalance) {
  this.balance = initialBalance;
}

// 여기에 deposit 및 withdraw 메서드를 추가하세요.
BankAccount.prototype.deposit = function (n) {
  return this.balance += n;
};
BankAccount.prototype.withdraw = function (n) {
  return this.balance -= n;
};

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120


//5
{
  function Employee(baseSalary, bonus) {
    this.baseSalary = baseSalary;
    this.bonus = bonus;
  }

  // 여기에 getSalary 메서드를 추가하세요.
  Employee.prototype.getSalary = function () {
    return this.baseSalary + this.bonus;
  };

  const employee = new Employee(3000, 500);
  console.log(employee.getSalary()); // 3500
}

//6
function Library() {
  this.books = [];
}

// 여기에 addBook 및 listBooks 메서드를 추가하세요.
Library.prototype.addBook = function (book) {
  this.books.push(book);
};
Library.prototype.listBooks = function () {
  return this.books;
};

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]

//7 🔥
function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}


// 여기에 add, subtract, multiply, divide 메서드를 추가하세요.
Calculator.prototype.add = function () {
  return this.num1 + this.num2;
};
Calculator.prototype.subtract = function () {
  return this.num1 - this.num2;
};
Calculator.prototype.multiply = function () {
  return this.num1 * this.num2;
};
Calculator.prototype.divide = function () {
  if (this.num1 !== 0 || this.num2 !== 0) {
    return this.num1 / this.num2;
  } else return "Cannot divide by zero";
};

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

//8🔥

