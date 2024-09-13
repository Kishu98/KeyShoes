import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Blogs.css";

export default function Blogs() {
  const blogList = useLoaderData();

  return (
    <>
      {blogList ? (
        <ul className='bloglist'>
          {blogList.map((blog) => (
            <li key={blog.id}>
              <Link to={`${blog.id}`}>{blog.title}</Link>
              <time className='time'>{new Date(blog.created_at).toLocaleDateString()}</time>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Blogs</p>
      )}
    </>
  );
}
