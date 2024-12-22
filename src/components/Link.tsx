import Props from "./Props";

const Link = ({ class_Name, ahref, text }: Props) => {
  return (
    <a href={`${ahref}`} className={`${class_Name}`}>
      {text}
    </a>
  );
};

export default Link;
