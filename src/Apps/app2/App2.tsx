import "./app2.css";
import AppComponents from "../../components/Components";
import Header2 from "./Header2";
const App2 = () => {
  return (
    <>
      <Header2 />
      <AppComponents.Section class_Name={"app content"}>
        <AppComponents.Section class_Name={"header containner"}>
          <AppComponents.Heading_One
            class_Name={"heading-one"}
            text={"Zone 2"}
          />
        </AppComponents.Section>
      </AppComponents.Section>
    </>
  );
};

export default App2;
