import { useLoaderData } from "react-router-dom";
import "./Homepage.css";
import Blog from "../../components/Blog/Blog";

export default function HomePage() {
  const blogs = useLoaderData();
  const blog = blogs[blogs.length - 1];

  return (
    <>
      <h1>Latest Blog</h1>
      <Blog blog={blog} />
    </>
  );
}
