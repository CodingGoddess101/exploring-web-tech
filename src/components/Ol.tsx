import Props from "./Props";

const Ol = ({ class_Name, children }: Props) => {
  return <div className={`${class_Name}`}>{children}</div>;
};

export default Ol;
