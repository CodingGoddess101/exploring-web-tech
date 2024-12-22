import Props from "./Props";
const Footer = ({ class_Name, children }: Props) => {
  return <footer className={`${class_Name}`}>{children}</footer>;
};

export default Footer;
