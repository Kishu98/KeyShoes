import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { BlogView } from "../../components/blogView/BlogView";
import "./Dashboard.css";

export default function Dashboard() {
  const blogs = useLoaderData();
  console.log(blogs);
  const navigate = useNavigate();

  return (
    <>
      <article>
        <header className='dashHead'>
          <h1>Dashboard</h1>
          <button className='createBtn' onClick={() => navigate("create")}>
            Create Post
          </button>
        </header>

        {blogs ? (
          <ul className='blogs'>
            {blogs.map((blog) => (
              <BlogView blog={blog} />
            ))}
          </ul>
        ) : (
          <p>No Blogs</p>
        )}
      </article>
    </>
  );
}
