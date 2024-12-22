import { ReactNode } from "react";
interface FigureProps {
  class_Name?: string | "No className specified";
  children?: ReactNode | "No children included";
}
const Figure = ({ class_Name, children }: FigureProps) => {
  return <figure className={`${class_Name}`}>{children}</figure>;
};

export default Figure;
