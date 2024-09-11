import { useEffect, useState } from "react";
import "./Blog.css";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Blog() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getBlog() {
      let res = await fetch(`http://localhost:8080/blog/${id}`);
      if (res.ok) {
        let blog = await res.json();
        console.log(blog);
        setBlog(blog);
      } else {
        alert("Error");
      }
    }
    getBlog();
  }, []);

  async function handleDelete(e) {
    e.preventDefault();
    await fetch(`http://localhost:8080/blog/${id}`, {
      method: "DELETE",
    });
    navigate("/blogs");
  }

  return (
    <>
      <h2>{blog.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: blog.body }}></p>
      <button onClick={handleDelete} className='deleteBtn'>
        Delete
      </button>
    </>
  );
}
