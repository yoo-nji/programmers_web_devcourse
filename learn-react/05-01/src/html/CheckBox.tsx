import { twMerge } from "tailwind-merge";
// checkbox 속성 외에 다른 게 올 때 예방법
//Omit, & 사용
type CheckboxProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & { type?: "checkbox" };

export default function CheckBox(props: CheckboxProps) {
  const { children, className, ...rest } = props;
  return (
    <div className=" flex items-center text-white gap-2">
      <input
        type="checkbox"
        id="chk"
        // 💡 twMerge가 중복을 제거해 줌, 뒤에 나오는 게 앞에 있는 것보다 우선시 됨
        className={twMerge(
          `w-5 h-5 appearance-none border border-[#4f4f4f] bg-white checked:bg-[#4f4f4f] rounded-[5px] checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center`,
          className
        )}
        {...rest}
      />
      <label htmlFor="chk">{children}</label>
    </div>
  );
}
