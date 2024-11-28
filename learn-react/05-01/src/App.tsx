import Button from "./html/Button";
import CheckBox from "./html/CheckBox";
import Input from "./html/Input";

export default function App() {
  return (
    <div className="item-middle flex-col gap-4 bg-black">
      <Button className="bg-rose-500 ">Add</Button>
      <Input
        type="password"
        className="w-60 h-11 rounded-lg pl-4 font-inter text-sm px-4 placeholder:text-[#acacac]"
        placeholder="Enter Todo List"
        disabled={true}
        maxLength={3}
      />
      {/* ⚠️ 여기서 문제는 체크박스의 타입이 바뀐다면? ui가 무너짐 */}
      {/* Omit 유틸리티타입 사용 */}
      <CheckBox className="checked:bg-blue-500">
        I agree with <em>terms</em> and <em>policies</em>.
      </CheckBox>
    </div>
  );
}
