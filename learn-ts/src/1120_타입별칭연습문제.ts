//연습문제
//1
{
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  const getPersonInfo = (person: Person): void => console.log(person);

  getPersonInfo(person);
}
//2
{
  type Config = (
    host: string,
    port: number,
    ssl: boolean
  ) => { host: string; port: number; ssl: boolean };
  const createConfig: Config = (host, port, ssl) => {
    return {
      host,
      port,
      ssl,
    };
  };

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}
//3
{
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rectangle: Rectangle): void => {
    console.log(rectangle.width * rectangle.height);
  };

  const rectangle = {
    width: 5,
    height: 10,
  };

  calculateArea(rectangle);
}
//4
{
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  const student: Student = {
    name: "Alice",
    age: 20,
    grades: [85, 90, 80],
  };
  function calculateAverageGrade(student: Student): number {
    return (
      student.grades.reduce((sum, grade) => sum + grade) / student.grades.length
    );
  }

  console.log(calculateAverageGrade(student));
}
//5
{
  type Response = {
    [key: string]: string;
  };

  const createResponse = (
    status: string,
    data: string,
    message: string
  ): Response => {
    return {
      status,
      data,
      message,
    };
  };

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}
//6
{
  type Employee = (obj: {
    id: string;
    name: string;
    position: string;
  }) => string;
  const getEmployeeInfo: Employee = (obj) =>
    `${obj.name} works as a ${obj.position} with ID: ${obj.id}.`;
  //code

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}
//7
{
  type Circle = {
    radius: number;
  };
  const calculateCircumference = (circle: Circle): number => {
    return circle.radius * 2 * Math.PI;
  };

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}
//8
{
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(
    product: Product,
    discount: number
  ): number | string {
    if (!product.inStock) {
      return "품절";
    }
    return product.price - product.price * (discount / 100);
  }
  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

//9
{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  const getBookSummary = (book: Book): string =>
    `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}
//10
{
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  const isValidTransaction = (transaction: Transaction): boolean =>
    transaction.amount > 0;
}

//연습문제+
//1
{
  type Action<T> = {
    type: string;
    payload: T;
  };

  function createAction<T>(type: string, payload: T): Action<T> {
    return { type, payload };
  }

  const action1: Action<{ id: number; name: string }> = createAction(
    "ADD_ITEM",
    { id: 1, name: "item" }
  );
  const action2: Action<number> = createAction("UPDATE_ITEM", 42);
  const action3: Action<string> = createAction("SET_STATUS", "success");

  console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
  console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
  console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}

//2
{
  type NumberOrString = string | number;
  const createObject = (
    id: NumberOrString,
    name: NumberOrString
  ): { id: NumberOrString; name: NumberOrString } => {
    return {
      id: id,
      name: name,
    };
  };
  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

//3
//x, y 숫자 거래
{
  type Point = {
    x: number;
    y: number;
  };
  const calculateDistance = (point: Point): number => {
    return Math.sqrt(point.x ** 2 + point.y ** 2);
  };

  const distance = calculateDistance({ x: 2, y: 4 });
  console.log(distance);
}
//?? 4
{
  type FetchRsult = "Loading" | "Success" | "Error";
  const fetchData = () => {};

  const result1 = fetchData();
  const result2 = fetchData();
  const result3 = fetchData();

  console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}

//5
{
  type NullOrUndefined = null | undefined;
  type IsNullOrUndefined<T> = T extends NullOrUndefined ? true : false;

  function getValue<T>(value: T): IsNullOrUndefined<T> {
    return (value === null || value === undefined) as IsNullOrUndefined<T>;
  }

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

//6
{
  const setCoordinates = (x: number, y: number): number[] => [x, y];
  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}
//7
{
  type Person = {
    readonly name: string;
    readonly age: number;
  };
  const createPerson = (name: string, age: number): Person => {
    return { name, age };
  };
  const person: Person = createPerson("John", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  // person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}
//8
{
  type User = {
    id?: string;
    name?: string;
    email?: string;
  };
  function updateUser(user: User, change: User): User {
    return { ...user, ...change };
  }

  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}
//?? 9
{
  type Role = "admin" | "user";
  type UserWithRole = {
    id: string;
    name: string;
    role: Role;
  };

  const assignRole = (user: UserWithRole, role: Role): UserWithRole => {
    return { ...user, role };
  };

  const user1: UserWithRole = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}
//10
{
  type Primitive = string | number;
  function filterString(value: Primitive) {
    if (typeof value === "string") return value;
    else throw new Error("Not a string");
  }
  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
}
