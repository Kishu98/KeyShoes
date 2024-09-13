import { Link, useLoaderData } from "react-router-dom";
import "./Blogs.css";

export default function Blogs() {
  const blogList = useLoaderData();

  return (
    <>
      {blogList ? (
        <section>
          <header>
            <h1>List of Blogs</h1>
          </header>
          <ul className='bloglist'>
            {blogList.map((blog) => (
              <li key={blog.id}>
                <Link to={`${blog.id}`}>{blog.title}</Link>
                <time className='time'>{new Date(blog.created_at).toLocaleDateString()}</time>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p>No Blogs</p>
      )}
    </>
  );
}
