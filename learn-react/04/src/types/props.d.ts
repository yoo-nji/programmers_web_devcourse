interface ChildPropsType {
  name: string;
  age: number;
  foods: string[];
  address: { zipcode: number; city: string };
  greet: (name: string) => void;
}
