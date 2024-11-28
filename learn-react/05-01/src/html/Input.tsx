import { twMerge } from "tailwind-merge";

export default function Input({ placeText }: { placeText: string }) {
  return (
    <>
      <input
        type="text"
        className={twMerge(`w-60 h-11 rounded-lg pl-4 font-inter text-sm px-4 placeholder:text-[#acacac]`)}
        placeholder={placeText}
      />
    </>
  );
}
