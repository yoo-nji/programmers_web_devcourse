type InputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  type: "text" | "email | number" | "password" | "tel";
};

export default function Input(props: InputProps) {
  const { ...rest } = props;
  // console.log(rest);
  return (
    <>
      <input {...rest} />
    </>
  );
}
