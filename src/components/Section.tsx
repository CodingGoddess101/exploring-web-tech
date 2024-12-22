import { ReactNode } from "react";

interface Props {
  class_Name: string;
  children: ReactNode;
}
const Section = ({ class_Name, children }: Props) => {
  return <section className={`${class_Name}`}>{children}</section>;
};

export default Section;
