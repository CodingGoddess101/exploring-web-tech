import AppComponents from "../src/components/Components.tsx";
import Header from "../src/Header.tsx";
const HomePage = () => {
  return (
    <>
      <Header />
      <AppComponents.Section class_Name={"home-page content"}>
        <AppComponents.Section class_Name={"content"}>
          <AppComponents.Section class_Name="Main page">
            <AppComponents.Heading_One text="Deep Tech Exploration" />
          </AppComponents.Section>
        </AppComponents.Section>
      </AppComponents.Section>
    </>
  );
};

export default HomePage;
