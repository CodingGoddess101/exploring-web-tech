import AppComponents from "./components/Components";
import "./header_def.css";
const Header = () => {
  return (
    <header className="header-deff">
      <nav className={`${"side bar"}`}>
        <AppComponents.Lib_Link
          ahref={"/"}
          class_Name={"link side"}
          text={"Home Page"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone1"}
          class_Name={"link side"}
          text={"App1"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone2"}
          class_Name={"link side"}
          text={"App2"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone3"}
          class_Name={"link side"}
          text={"App3"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone4"}
          class_Name={"link side"}
          text={"App4"}
        />
      </nav>
      <nav className={`${"middle bar"}`}>
        <AppComponents.Lib_Link
          ahref={"/"}
          class_Name={"link side"}
          text={"Home Page"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone1"}
          class_Name={"link side"}
          text={"App1"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone2"}
          class_Name={"link side"}
          text={"App2"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone3"}
          class_Name={"link side"}
          text={"App3"}
        />
        <AppComponents.Lib_Link
          ahref={"/zone4"}
          class_Name={"link side"}
          text={"App4"}
        />
      </nav>
    </header>
  );
};

export default Header;
