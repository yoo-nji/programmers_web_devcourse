//연습문제 1
//1
{
  const printValue = (v: string | number): string | number => {
    if (typeof v === "string") return v;
    else return v;
  };
}
//2
{
  function doubleOrLength(value: string): number;
  function doubleOrLength(value: number): number;
  function doubleOrLength(value: string | number): number {
    if (typeof value === "string") return value.length;
    else return value * 2;
  }
}
{
  const person = { name: "john", age: 20 };
  const employee = { jobTitle: "front", salary: 5000 };

  function mergeObjects(
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number; jobTitle: string; salary: number } {
    return { ...person, ...employee };
  }

  console.log(mergeObjects(person, employee));
}
//4
{
  function getFirstElement(arr: string[]): string;
  function getFirstElement(arr: number[]): number;
  function getFirstElement(
    arr: string[] | number[]
  ): string | number | undefined {
    // if (arr.length === 0) return undefined;
    //!! 배열에 특정 요소가 없으면 undifined 를 반환함 => 위 주석 생략 가능
    return arr[0];
  }
}
//5
{
  const isEqual = (a: string | number, b: string | number): boolean => a === b;
}
//6
{
  function updateAddress(
    obj: { name: string; age: number },
    address?: undefined | string
  ): { name: string; age: number } & { address?: string } {
    if (address) return { ...obj, address };
    else return obj;
  }
  console.log(updateAddress({ name: "John", age: 20 }, "seoul")); // { name : "John", age: 20, address: "seoul"}
  console.log(updateAddress({ name: "John", age: 20 })); // { name : "John", age: 20}
}
//7
{
  function maxValue(
    a: number | string,
    b: number | string
  ): number | string | never {
    if (typeof a === "number" && typeof b === "number") {
      return a === b ? a : Math.max(a, b);
    } else if (typeof a === "string" && typeof b === "string") {
      if (a.length === b.length) return b;
      return a.length > b.length ? a : b;
    }
    throw new Error("같은 타입으로 넣어 주세요");
  }

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // banana
}
//8
{
  function getValue(value: number): string;
  function getValue(value: string): string;
  function getValue(value: number | string): string {
    return `${value}`;
  }
}
//9
{
  function createContact(
    obj1: { name: string; age: number },
    obj2: { email: string }
  ): { name: string; age: number } & { email: string } {
    return { ...obj1, ...obj2 };
  }
  const person = { name: "john", age: 20 };
  const contact = { email: "email@gmail.com" };
  console.log(createContact(person, contact)); // {name: 'john', age:20, email: 'email@gmail.com' }
}
//10
{
  const getAge = (age: string | number): number => {
    if (typeof age === "number") return age;
    else if (typeof age === "string") return Number(age);
    else throw new Error("문자나 숫자로 입력해 주세요");
  };
  console.log(getAge("20")); // 20
  console.log(getAge(20)); // 20
}

//연습문제+
//1
{
  function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") return value.toUpperCase();
    else if (typeof value === "number") return value ** 2;
    else if (typeof value === "boolean") return value === true ? "Yes" : "No";
    else throw new Error("string, number, boolean로 입력해 주세요");
  }
}
//2
{
  function get(value: number): string;
  function get(value: string): string;
  function get(value: number | string): string {
    return value.toString().charAt(0);
  }
}
//3
{
  const combinePersonAndEmployee = (
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number; jobTitle: string; salary: number } => {
    return { ...person, ...employee };
  };

  const person = { name: "john", age: 20 };
  const employee = { jobTitle: "front", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee)); // {name: 'john', age: 20, jobTitle: 'front', salary: 5000 }
}
//4
{
  const getIdValue = (id: number | string): number | string => {
    if (typeof id === "number") return id;
    else return id.length;
  };
}
//5
{
  // 코드를 작성하세요
  function formatDate(date: string | Date): string {
    if (typeof date === "string") return date;
    else {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${day}/${month}/${year}`;
    }
  }

  console.log(formatDate("2024-11-19")); // '2024-11-19'
  console.log(formatDate(new Date(2024, 10, 10))); // "11/19/2025"
}
//6
{
  const numStr = (value: number | string): string | number => {
    if (typeof value == "number") return `${value}`;
    return Number(value);
  };
}
//7
{
  const combinePersonAndAddress = (
    person: { name: string; age: number },
    address: { street: string; city: string; zipcode: number }
  ): { name: string; age: number } & {
    street: string;
    city: string;
    zipcode: number;
  } => ({ ...person, ...address });
}
//8
{
  const compareValues = (a: number | string, b: number | string): boolean => {
    if (typeof a === "string" && typeof b === "string")
      return a.length > b.length ? true : false;
    else return a > b;
  };
}
//9
{
  const checkEvenOdd = (value: number | string): string => {
    if (typeof value === "string")
      return value.length % 2 === 0 ? "Even Length" : "Odd Length";
    else return value % 2 === 0 ? "Even" : "Odd";
  };
}
//10
{
  const mergeContactInfo = (
    obj1: { name: string; age: number },
    obj2: { email?: string; phonNumber?: number }
  ): { name: string; age: number; email?: string; phonNumber?: number } => {
    return { ...obj1, ...obj2 };
  };
}
