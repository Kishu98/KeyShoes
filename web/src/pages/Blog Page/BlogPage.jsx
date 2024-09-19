import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import "./Blogpage.css";
export default function BlogPage() {
  const blog = useLoaderData();

  return (
    <div className='blogpage'>
      <Blog blog={blog} />
    </div>
  );
}
