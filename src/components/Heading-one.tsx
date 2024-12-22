import Props from "./Props";
const Heading_One = ({ class_Name, text }: Props) => {
  return <h1 className={`${class_Name}`}>{text}</h1>;
};

export default Heading_One;
