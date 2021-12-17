import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => (
  <div className="h-screen w-screen flex">
    <Header></Header>
    <Outlet />
  </div>
);

export default App;
