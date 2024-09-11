import { useEffect, useState } from "react";
import "./Blog.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Blog() {
  const [blog, setBlog] = useState({});
  const [time, setTime] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getBlog() {
      let res = await fetch(`http://localhost:8080/blog/${id}`);
      if (res.ok) {
        let blog = await res.json();
        // console.log(blog);
        let newTime = new Date(blog.created_at);
        console.log(newTime.toString());
        console.log(newTime.toLocaleDateString());
        console.log(newTime.toTimeString());
        console.log(newTime.toLocaleString());
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
    navigate("/blogs", { replace: true });
  }

  return (
    <>
      <article className='blogContainer'>
        <header>
          <h1 className='title'>{blog.title}</h1>
          <time dateTime={blog.created_at}>11-09-2024</time>
        </header>
        <div className='blogContent' dangerouslySetInnerHTML={{ __html: blog.body }}></div>
        <footer>
          <button className='deleteBtn' onClick={handleDelete}>
            Delete
          </button>
        </footer>
      </article>
    </>
  );
}
