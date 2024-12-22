import Props from "./Props";
import { Link } from "react-router-dom";

const Lib_Link = ({ class_Name, text, ahref }: Props) => {
  return (
    <Link to={`${ahref}`} className={`${class_Name}`}>
      {text}
    </Link>
  );
};

export default Lib_Link;
