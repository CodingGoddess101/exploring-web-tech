import { ReactNode } from "react";

// This file acts as the input for all functional components
interface Props {
  id?: string | "No id specified";
  text?: string | "Text Not Specified";
  class_Name?: string | "No className specified";
  children?: ReactNode | "No children included";
  src?: string | "No source specified";
  alt?: string | "No alt specified";
  ahref?: string | "No link specified";
  link_target?: string | "Target Page not specified";
  htmlFor?: string | "No label id/name specified";
}
export default Props;
