import { ReactNode } from "react";
interface DivProps {
  id?: string;
  class_name: string;
  text?: string;
  children?: ReactNode | "No children included";
}
const Div = ({ class_name, children }: DivProps) => {
  return <div className={`${class_name}`}>{children}</div>;
};

export default Div;
