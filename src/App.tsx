import { Route, Routes } from "react-router-dom";
import AppComponents from "./components/Components";
import AppRouter from "./Apps/App-Routing";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppComponents.HomePage />} />
      <Route path="/zone1" element={<AppRouter.App1 />} />
      <Route path="/zone2" element={<AppRouter.App2 />} />
      <Route path="/zone3" element={<AppRouter.App3 />} />
      <Route path="/zone4" element={<AppRouter.App4 />} />
    </Routes>
  );
}

export default App;
