//class
//자바스크립트 클래스와의 차이점
//1. 타입스크립트 클래스는 속성에 타입을 적용해야 한다
//2. 접근제어자 사용 가능(public(기본), protected, private)
//2.1 public 모두 다 접근 가능
//2.2 protected는 해당 클래스와 상속 클래스에서만 접근 가능
//2.3 private는 해당 클래스에서만 접근 가능
//3. 추상클래스 사용 가능
//어떤 클래스를 정의하기 전에 구조나 골격을 미리 정해두는 클래스

{
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
  }

  const benz = new Benz(100, "Benz");
  console.log(benz.speed); // 100
}

{
  //추상클래스 (abstract)
  //직접적으로 인스턴스 생성 물가
  //특정 클래스에서 구현해야 되는 걸 미리 정의하고 싶을 때 사용
  abstract class CarAbstract {
    abstract name: string;
    abstract color: string;
    abstract start(): void;
    //abstract을 설정하지 않으면 미리 정의해 둘 수 있음
    printInfo() {
      console.log(`${this.name}, ${this.color}`);
    }
  }

  // const car  = new CarAbstract //❌ 추상 클래스로 정의 못함
  //사용법
  class Car extends CarAbstract {
    name: string;
    color: string;
    constructor(name: string, color: string) {
      super(); //상속
      this.name = name;
      this.color = color;
    }

    start() {
      console.log("start!");
    }
  }

  const car = new Car("BMW", "red");
  car.start(); // start!
  console.log(car.name, car.color); // BMW red

  //특정 메서드를 미리 완성시켜 두고 호출할 수도 있음
  car.printInfo();
}
{
  //인터페이스를 구현할 수 있다
  //추상클래스와의 차이
  //인터페이스는 추상클래스처럼 완성되어져 있는 것(함수 등)을 만들 수는 없다

  interface Moveable {
    move(): void;
  }

  //impllements 로 연결관계
  //move()를 무조건 구현해 줘야 됨
  class Car implements Moveable {
    move() {
      console.log("Car is moving!");
    }
  }
}

//클래스 제네릭
{
  class Car<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }
  }

  const car1 = new Car<string>("BMW");
  console.log(car1.value); // BMW

  const car2 = new Car<number>(100);
  console.log(car2.value); // 100
}

//보너스
//유틸리티 타입
{
  //1. Partial<T>
  //속성을 모두 옵셔널 타입으로 바꿔줌
  type User = {
    name: string;
    age: number;
  };

  type OptionalUser = Partial<User>;

  const user: OptionalUser = {
    name: "Alice",
  };

  //2. Required<T>
  //모두 필수 타입으로 변경
  type User2 = {
    name: string;
    age: number;
  };

  type ReadOnlyUser = Required<User2>;

  // const user2: ReadOnlyUser = {
  //   name: "Alice",
  // }; //❌ 에러

  //3. Readonly<T>
  //속성을 readonly로 변경
  type User3 = {
    name: string;
    age: number;
  };
  type ReadOnlyUser2 = Readonly<User3>;
  const user3: ReadOnlyUser2 = {
    name: "Alice",
    age: 30,
  };
  // user3.name = "Bob" //❌ 읽기전용이라 변경 불가

  //4. Pick<T>
  //내가 원하는 객체 속성만 뽑아옴
  type User4 = {
    name: string;
    age: number;
    address: string;
  };

  type PickUser = Pick<User4, "name" | "age">;

  const pickUser: PickUser = {
    name: "Alice",
    age: 30,
  };

  //5. Omit<T, K>
  //내가 원하는 속성 제외
  type User5 = {
    name: string;
    age: number;
    address: string;
  };
  type OmitUser = Omit<User5, "address">;
  const omitUser: OmitUser = {
    name: "Alice",
    age: 30,
  };
}
