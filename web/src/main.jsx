import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage.jsx";
import ErrorPage from "./pages/error-page.jsx";
import BlogForm from "./pages/Create Blog Page/BlogForm.jsx";
import UpdateBlogPage from "./pages/Update Blog Page/UpdateBlogPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { action, loginAction } from "./actions.jsx";
import { getBlogLoader } from "./loaders/getBlogLoader.jsx";
import { getBlogsLoader } from "./loaders/getBlogsLoader.jsx";
import Login from "./pages/Login Page/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import BlogPage from "./pages/Blog Page/BlogPage.jsx";
import BlogsPage from "./pages/Blogs Page/BlogsPage.jsx";
import getTokenLoader from "./loaders/getTokenLoader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: getTokenLoader,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: getBlogsLoader,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
        loader: getBlogsLoader,
      },
      {
        path: "blogs/:id",
        element: <BlogPage />,
        action: action,
        loader: getBlogLoader,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        loader: getBlogsLoader,
        action: action,
      },
      {
        path: "dashboard/create",
        element: (
          <ProtectedRoute>
            <BlogForm />
          </ProtectedRoute>
        ),
        action: action,
      },
      {
        path: "dashboard/:id",
        action: action,
      },
      {
        path: "dashboard/:id/update",
        element: (
          <ProtectedRoute>
            <UpdateBlogPage />
          </ProtectedRoute>
        ),
        loader: getBlogLoader,
        action: action,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
