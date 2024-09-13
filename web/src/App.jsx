import "./App.css";
import BlogForm from "./pages/Create Blog Page/BlogForm";
import Blogs from "./pages/Blogs Page/Blogs";
import Blog from "./pages/Blog Page/Blog";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/Homepage/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { getBlogsLoader } from "./loaders/getBlogsLoader";
import { getBlogLoader } from "./loaders/getBlogLoader";
import { action } from "./actions";
import UpdateBlogPage from "./pages/Update Blog Page/UpdateBlogPage";
import Dashboard from "./pages/Dashboard/Dashboard";
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
