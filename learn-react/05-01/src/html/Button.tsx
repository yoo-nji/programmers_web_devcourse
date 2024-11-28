import { twMerge } from "tailwind-merge";

export default function Button(props: React.ComponentPropsWithRef<"button">) {
  const { children, className, ...rest } = props;
  return (
    <>
      {/* 기본색 지정 */}
      <button
        className={twMerge(`w-[77px] h-[44px] text-white rounded-lg text-sm bg-[#4f4f4f] ${className}`)}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
