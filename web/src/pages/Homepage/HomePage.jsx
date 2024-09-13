import { Link, Outlet } from "react-router-dom";
import "./Homepage.css";
import NavBar from "../../components/navbar/navBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
