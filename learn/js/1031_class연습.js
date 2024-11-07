
// 프로토타입 상속 연습
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//부모 프로토타입
Person.prototype.greet = function greet() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} `);
};

function Employee(name, age, position) {
  Person.call(this, name, age); // 부모의 constructor 호출
  this.position = position;
}

//프로토타입 상속
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

//자식 프로토타입
Employee.prototype.getJob = function getJob() {
  console.log(`My Job is ${this.position}`);
};

const developer = new Employee("철수", 20, "개발자");
developer.getJob();
console.dir(developer);

//1. 기본 클래스 생성

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  info() {
    return `제조사: ${this.make}, 모델: ${this.model}, 출시년도: ${this.year}`;
  }
}

// 테스트 케이스
const car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.info()); // 2020 Toyota Camry



//2. 상속
class Animal {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `${this.name}입니다.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);

  }
  bark() {
    return "왈왈";
  }
}

// 테스트 케이스
const dog = new Dog('바둑이');
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

//3 정적 메서드 최소값 반환
class MathUtil {
  static min(a, b) {
    return a > b ? b : a;
  }
}

// 테스트 케이스
console.log(MathUtil.min(10, 20));


//4. 접근자 
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    this._width = value < 0 ? 0 : value;
  }
  set height(value) {
    this._height = value < 0 ? 0 : value;
  }
}

// 이렇게 해 두면 밖에서 rect._width로 값을 음수로 변경할 수 없게 됨

// 테스트 케이스
const rect = new Rectangle(5, 10);
console.log(rect.area); // 50



//5. 클래스 메서드
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  getValue() {
    return this.#count;
  }
}
const counter = new Counter(); // 인스턴스 생성
counter.increment(); // 1 증가
console.log(counter.getValue()); // 1


//6 프로토타입 확장
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`${this.name} 안녕`);
  }
}
const person = new Person("이순신");
person.greet();


//7 다형성 
{
  class Shape {
    area() {
      console.log("넓이");
    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    //오버라이딩
    area() {
      return 3.14 * this.radius ** 2;
    }
  }

  class Rect extends Shape {
    constructor(wh) {
      super();
      this.wh = wh;
    }
    area() {
      return this.wh * this.wh;
    }
  }

  const circle = new Circle(5);
  console.log(circle.area());  // 5 * 5 * 3.14 

  const rect = new Rect(5);
  console.log(rect.area()); // 25 (5*5)
}


//8 인스턴스 메서드 체이닝
class Builder {
  constructor() {
    this.value = "";
  }
  append(str) {
    this.value += str;
    return this;
  }
  getValue() {
    return this.value;
  }
}

const builder = new Builder();
const result = builder.append('Hello, ').append('World!').getValue();
console.log(result); // Hello, World!

//9 클래스의 인스턴스 수 추적

class Book {
  static count = 0;
  constructor(title) {
    this.title = title;
    Book.count += 1;
  }
  static getCount() {
    return this.count;
  }
}

// 테스트 케이스
const book1 = new Book('1984');
const book2 = new Book('하이퍼리얼리티');
console.log(Book.getCount()); // 2 

//10 기본값 설정
class User {
  constructor(name, age) {
    this.name = name;
    this.age = 18;
  }
  info() {
    return `${this.name}의 나이는 ${this.age}입니다`;
  }
}

// 테스트 케이스
const user = new User('홍길동');
console.log(user.info()); // 홍길동의 나이는 18세입니다.



{
  const numbers = [1, 2, 3, 4];

  // 누적값(acc), 현재값(cur), 현재인덱스(idx), 배열(arr)
  const result = numbers.reduce((acc, cur, idx, arr) => {
    console.log(`누적값: ${acc}, 현재값: ${cur}, 현재인덱스: ${idx}, 배열: ${arr}`);
    return acc + cur; // 누적값에 현재값을 더한 결과를 반환
  }, 0); // 초기값은 0

  console.log(`최종 결과: ${result}`); // 최종 결과: 10
}
