import AppComponents from "../../components/Components";
import "./app4.css";
import Header4 from "./Header4";
const App4 = () => {
  return (
    <>
      <Header4 />
      <AppComponents.Section class_Name={"app content"}>
        <AppComponents.Heading_One text={"Exploring deep css functions"} />
        <AppComponents.Section class_Name={"block one"}>
          <AppComponents.Paragraph
            class_Name={"text-one"}
            text={"This is some paragraph"}
          />
        </AppComponents.Section>
      </AppComponents.Section>
    </>
  );
};

export default App4;
