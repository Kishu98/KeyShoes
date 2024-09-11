import { Link, Outlet } from "react-router-dom";
import "./Homepage.css";

export default function HomePage() {
  return (
    <div>
      <nav aria-label='On this page'>
        <h1>
          <Link to='/'>KeyShoes</Link>
        </h1>
        <Link to='blogform'>Create Blog</Link>
        <Link to='blogs'>Blogs</Link>
        <Link>About me</Link>
        <Link>Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
