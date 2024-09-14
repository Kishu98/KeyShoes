import { Link, NavLink, useNavigate } from "react-router-dom";
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
          <NavLink className='navLink' to='/'>
            KeyShoe's Blog
          </NavLink>
          <NavLink className='navLink' to='blogs'>
            Blogs
          </NavLink>
          <NavLink className='navLink' to='about'>
            About
          </NavLink>
          {token && (
            <>
              <NavLink className='navLink' to='dashboard'>
                Dashboard
              </NavLink>
              <Link className='navLink' onClick={handleLogout}>
                Log Out
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
