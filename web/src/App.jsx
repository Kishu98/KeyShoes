import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
