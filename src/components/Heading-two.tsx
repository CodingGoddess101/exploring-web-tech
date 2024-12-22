interface Props {
  class_Name: string;
  text: string;
}
const Heading_Two = ({ class_Name, text }: Props) => {
  return <h2 className={`${class_Name}`}>{text}</h2>;
};

export default Heading_Two;
