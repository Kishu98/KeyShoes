import "./App.css";
import BlogForm from "./pages/Create Blog Page/BlogForm";
import Blogs from "./pages/Blogs Page/Blogs";
import Blog from "./pages/Blog Page/Blog";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/Homepage/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} errorElement={<ErrorPage />}>
        <Route path='blogform' element={<BlogForm />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
