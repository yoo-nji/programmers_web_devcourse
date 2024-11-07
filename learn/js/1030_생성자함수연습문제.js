//1. 자동차 객체 만들기
{
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function () {
      console.log(`제조사: ${this.make} 모델: ${this.model}`);
    };
  }

  const car = new Car("한국", "모델명", 2020);
  car.drive();
}

//2 학생 객체 만들기
{
  function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.getInfo = function () {
      console.log(`이름: ${this.name} 학년: ${this.grade}`);
    };
  }

  const student = new Student("철수", 3);
  student.getInfo();
}

//3 동물 객체 만들기
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    console.log(`${this.name} ${this.type}`);
  };
}
const animal = new Animal("고양이", "야옹");
animal.speak();

//4 도서 객체 만들기
{
  function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
      console.log(`제목: ${this.title} 저자: ${this.author} 출판년도: ${this.year}`);
    };
  }

  const book = new Book("자바스크립트", "수코딩", 2020);
  book.getSummary();
}

//5 은행 계좌 객체 만들기
{
  function BankAccount(initialBalance) {
    this.initialBalance = initialBalance;
    let result = initialBalance;

    this.deposit = function (amount) {
      result += amount;
      console.log(`${amount}원이 입금되었습니다. 잔액은 ${result}원입니다.`);
    };

    this.withdraw = function (amount) {
      result -= amount;
      console.log(`${amount}원이 출금 되었습니다. 잔액은 ${result}원입니다.`);
    };

    this.getBalance = function () {
      console.log(`잔고는 ${result}원입니다.`);
    };
  }

  const bankAccount = new BankAccount(200);
  bankAccount.deposit(400);
  bankAccount.withdraw(300);
  bankAccount.getBalance();
}

//6 사각형 객체 만들기
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    console.log(width * height);
  };

  this.perimeter = function () {
    console.log(2 * (width + height));
  };
}

const rectangle = new Rectangle(5, 10);
rectangle.area();
rectangle.perimeter();

//7 비행기 객체 만들기
{
  function Airplane(model, capacity) {
    this.model = model;
    this.capacity = capacity;
    this.fly = function () {
      console.log(`model: ${this.model} capacity:${capacity}`);
    };
  }

  const airplane = new Airplane("model", "capacity");
  airplane.fly();
}

//8 팀 객체 만들기
function Team(name) {
  this.name = name;
  this.members = [name];

  this.addMember = function (member) {
    this.members.push(member);
    console.log(`추가: ${member} 팀원: ${this.members}`);
  }
    ;
}

const team = new Team("윤지");
team.addMember("철수");
team.addMember("윤수");
team.addMember("민수");

//9 영화 객체 만들기
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    console.log(`title: ${this.title} director: ${this.director} year: ${this.year}`);
  };
}

const movie = new Movie("제목", "철수", 2020);
movie.getDetails();


// 10 시간 객체 만들기
function Time(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.getTime = function () {
    console.log(`${this.hours}시간 ${this.minutes}분 ${this.seconds}초`);
  };
}

const time = new Time(12, 30, 11);
time.getTime();
