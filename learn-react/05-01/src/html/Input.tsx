type InputProps = React.ComponentPropsWithRef<"input">;

export default function Input(props: InputProps) {
  const { ...rest } = props;
  // console.log(rest);
  return (
    <>
      <input {...rest} />
    </>
  );
}
