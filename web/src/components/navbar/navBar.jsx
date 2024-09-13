import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <nav className='navBar'>
        <div className='navLinks'>
          <Link to='/'>KeyShoe's Blog</Link>
          <Link to='blogs'>Blogs</Link>
          <Link>About</Link>
          {token && (
            <>
              <Link to='dashboard'>Dashboard</Link>
              <button onClick={handleLogout}>Log Out</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
