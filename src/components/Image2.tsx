interface Props {
  class_Name: string;
  src: string;
  alt: string;
}
const Image2 = ({ class_Name, src, alt }: Props) => {
  return <img className={`${class_Name}`} src={`${src}`} alt={`${alt}`} />;
};

export default Image2;
