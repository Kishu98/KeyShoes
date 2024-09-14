import { Outlet } from "react-router-dom";
import "./BlogsPage.css";
import BlogPageList from "../../components/BlogPageList/BlogPageList";
import Blog from "../../components/Blog/Blog";

export default function BlogsPage() {
  return (
    <>
      <BlogPageList />
    </>
  );
}
