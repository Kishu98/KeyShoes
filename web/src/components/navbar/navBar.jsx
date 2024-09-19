import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const token = useLoaderData();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <nav className='navBar'>
        <div className='navLinks'>
          <div className='keyshoes'>
            <NavLink className='navLink' to='/'>
              KeyShoe's Blog
            </NavLink>
          </div>
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
