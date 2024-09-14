import { useLoaderData } from "react-router-dom";
import BlogList from "../BlogList/BlogList";
import { BlogView } from "../blogView/BlogView";

export default function DashPageList() {
  const blogs = useLoaderData();

  return (
    <section>
      {blogs ? (
        <ul className='blogs'>
          {blogs.map((blog) => (
            <BlogView blog={blog} />
          ))}
        </ul>
      ) : (
        <p>No Blogs</p>
      )}
    </section>
  );
}
