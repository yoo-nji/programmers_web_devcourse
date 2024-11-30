import UseRef from "./components/form-useref/UseRef";
import Checkbox from "./components/form-usestate/Checkbox";
import Input from "./components/form-usestate/Input";
import Radio from "./components/form-usestate/Radio";
import Select from "./components/form-usestate/Select";

export default function App() {
  return (
    <>
      <form>
        <h1>제어 컨트롤러</h1>
        <Input />
        <Select />
        <Checkbox />
        <Radio />
      </form>
      <hr />
      <h1>비제어 컨트롤러</h1>
      <UseRef />
    </>
  );
}
