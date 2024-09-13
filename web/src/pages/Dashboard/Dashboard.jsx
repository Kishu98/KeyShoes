import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BlogView } from "../../components/blogView/BlogView";

export default function Dashboard() {
  const blogs = useLoaderData();
  console.log(blogs);
  const navigate = useNavigate();

  return (
    <>
      <article>
        <header>
          <h1>Dashboard</h1>
        </header>
        <button onClick={() => navigate("create")}>Create Post</button>
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
      <Outlet />
    </>
  );
}
