import { Link, Outlet } from "react-router-dom";
import "./Homepage.css";

export default function HomePage() {
  return (
    <>
      <nav className='navBar'>
        <div className='navLinks'>
          <Link to='/'>KeyShoe's Blog</Link>
          <Link to='blogform'>Create Blog</Link>
          <Link to='blogs'>Blogs</Link>
          <Link>About me</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
