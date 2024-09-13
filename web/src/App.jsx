import "./App.css";
import BlogForm from "./pages/Create Blog Page/BlogForm";
import Blogs from "./pages/Blogs Page/Blogs";
import Blog from "./pages/Blog Page/Blog";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/Homepage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getBlogsLoader } from "./loaders/getBlogsLoader";
import { getBlogLoader } from "./loaders/getBlogLoader";
import { action } from "./actions";
import UpdateBlogPage from "./pages/Update Blog Page/UpdateBlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "blogform",
        element: <BlogForm />,
        action: action,
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: getBlogsLoader,
      },
      {
        path: "blogs/:id",
        element: <Blog />,
        action: action,
        loader: getBlogLoader,
      },
      {
        path: "blogs/:id/update",
        element: <UpdateBlogPage />,
        loader: getBlogLoader,
        action: action,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
