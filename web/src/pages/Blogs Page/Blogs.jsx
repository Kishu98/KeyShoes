import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../Blog Page/Blog";
import "./Blogs.css";
import BlogForm from "../Create Blog Page/BlogForm";

export default function Blogs() {
  const [blogList, setBlogList] = useState([]);
  // const [reload, setReload] = useState(false);

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
            <li>
              <Link to={`${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Blogs</p>
      )}
    </>
  );
}
