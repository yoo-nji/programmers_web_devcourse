//Button.tsx

interface ButtonProps {
  label?: string;
  bg?: string;
  fontSize?: string;
  fontColor?: string;
}

export default function Button({
  label = "Button",
  bg = "bg-[#4F4F4F]",
  fontSize = "text-[14px]",
  fontColor = "text-white",
}: ButtonProps) {
  //넓이 높이 고정, 배경색, 글자크기, 글자색 변경
  return (
    <>
      <button
        className={`flex justify-center items-center w-[77px] h-[44px] py-[14px] px-5 rounded-lg font-medium ${bg} ${fontSize} ${fontColor}`}
      >
        {label}
      </button>
    </>
  );
}
