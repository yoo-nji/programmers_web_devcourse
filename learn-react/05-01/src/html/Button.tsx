import { twMerge } from "tailwind-merge";

export default function Button({
  bgColor,
  fontSize,
  fontColor,
  children,
}: {
  bgColor: string;
  fontSize: string;
  fontColor: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <button
        className={twMerge(
          `w-[77px] h-11 text-white bg-[#4f4f4f] rounded-lg font-inter ${bgColor} ${fontSize} ${fontColor}`
        )}
      >
        {children}
      </button>
    </>
  );
}
