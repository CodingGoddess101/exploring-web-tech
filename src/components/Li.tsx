import Props from "./Props";

const Li = ({ class_Name, children }: Props) => {
  return <li className={`${class_Name}`}>{children}</li>;
};

export default Li;
