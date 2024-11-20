//연습문제 1
//1
{
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "hi",
    age: 18,
  };
}
//2
{
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "bmw",
    model: "320",
    start() {
      console.log(`${this.brand} ${this.model}`);
    },
  };
}
//3
{
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
}
//4
{
  interface Team {
    name: string;
    members: string[];
  }
}
//5
{
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }
}
//6
{
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  const person: Person = {
    name: "hi",
    age: 10,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };
  console.log(person.greet());
}
//7
{
  interface Shape {
    area(): number;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }
}
//8
{
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  const Contact: Person & Address = {
    name: "HI",
    age: 30,
    street: "123",
    city: "New York",
    zipcode: 12345,
  };
}
//9
{
  interface Dictionary {
    [key: string]: string;
  }
  const dictionary: Dictionary = {
    name: "hi",
    age: "10",
  };
}
//10
{
  interface Operation {
    (a: number, b: number): number;
  }
  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a - b;
}
