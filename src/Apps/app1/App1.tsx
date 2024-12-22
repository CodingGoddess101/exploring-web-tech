import AppComponents from "../../components/Components";
import "./app1.css";
import Header1 from "./Header1";

const App1 = () => {
  return (
    <>
      <Header1 />
      <AppComponents.Section class_Name={"heading containner"}>
        <AppComponents.Heading_One class_Name={"heading-one"} text={"Zone 1"} />
      </AppComponents.Section>
      <AppComponents.Section class_Name={"app-one-content"}>
        <AppComponents.Heading_Two
          class_Name="app-one-heading-two"
          text="Learn CSS3 box-sizing"
        />
        <AppComponents.Section class_Name="box-size-container">
          <nav className="menu">
            <AppComponents.Paragraph class_Name="list-item" text="Main Meals" />
            <AppComponents.Paragraph class_Name="list-item" text="Drinks" />
            <AppComponents.Paragraph class_Name="list-item" text="Desserts" />
            <AppComponents.Paragraph class_Name="list-item" text="Add-Ons" />
            <AppComponents.Paragraph class_Name="list-item" text="Donations" />
          </nav>
          <AppComponents.Section class_Name="menu-data">
            <AppComponents.Heading_Two
              class_Name="menu-data-heading"
              text="Some Data"
            />
          </AppComponents.Section>
        </AppComponents.Section>
      </AppComponents.Section>
    </>
  );
};

export default App1;
