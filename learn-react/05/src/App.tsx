import Button from "./components/html/Button";
import CheckBox from "./components/html/CheckBox";
import Input from "./components/html/Input";

export default function App() {
  return (
    <>
      <Button label="Add" />
      <Button label="Cancel" bg="bg-[#ED4848]" />
      <Button label="Success" bg="bg-[#7D48ED]" />
      <Input placeholder="Enter Todo List" />
      <CheckBox text="I agree with terms and policies." />
    </>
  );
}
