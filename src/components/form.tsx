import Props from "./Props";

const Form = ({ class_Name, children }: Props) => {
  return <form className={`${class_Name}`}>{children}</form>;
};

export default Form;
