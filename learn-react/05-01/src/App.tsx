import Button from "./html/Button";
import CheckBox from "./html/CheckBox";
import Input from "./html/Input";

export default function App() {
  return (
    <div className="item-middle flex-col gap-4 bg-black">
      <Button fontSize="text-sm" fontColor="text-white" bgColor="bg-[#4f4f4f]">
        Add
      </Button>
      <Input placeText="Enter Todo List" />
      <CheckBox>
        I agree with <em>terms</em> and <em>policies</em>.
      </CheckBox>
    </div>
  );
}
