import Props from "./Props";
const Label = ({ htmlFor }: Props) => {
  return <label htmlFor={`${htmlFor}`} />;
};

export default Label;
