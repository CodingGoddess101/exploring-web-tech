interface Props {
  class_Name: string;
  text: string;
  onClick?: () => void;
}
const Paragraph = ({ class_Name, text }: Props) => {
  return <p className={`${class_Name}`}>{text}</p>;
};

export default Paragraph;
