import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import "./BlogPage.css";

export default function BlogPage() {
  const blog = useLoaderData();

  return (
    <>
      <Blog blog={blog} />
    </>
  );
}
