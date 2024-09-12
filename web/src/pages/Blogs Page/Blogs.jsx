import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

export default function Blogs() {
  const [blogList, setBlogList] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/blog");
      if (res.ok) {
        let blogs = await res.json();
        setBlogList(blogs);
      } else {
        alert("Error" + res.status);
      }
    }
    getData();
  }, []);

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
