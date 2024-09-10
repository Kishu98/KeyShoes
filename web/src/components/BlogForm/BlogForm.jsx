import { useEffect, useState } from "react";
import "./BlogForm.css";

export default function BlogForm() {
  const [blogList, setBlogList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/blog");
      if (res.ok) {
        let blogs = await res.json();
        setBlogList(blogs);
        console.log(blogs);
      } else {
        alert("Error" + res.status);
      }
    }

    getData();
  }, [reload]);

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await fetch("http://localhost:8080/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setReload(!reload);
    // setBlogList((blog) => [...blog, formData]);
    // console.log(blogList);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleDelete(e) {
    e.preventDefault();
    let id = e.target.id;
    let res = await fetch(`http://localhost:8080/blog/${id}`, {
      method: "DELETE",
    });
    setReload(!reload);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} method='POST'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.value}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor='body'>Body</label>
          <textarea
            type='text'
            id='body'
            name='body'
            value={formData.body}
            onChange={handleChange}
            required
          ></textarea>

          <button type='submit'>Submit</button>
        </form>
      </div>
      <ul className='blogs'>
        {blogList.map((blog) => (
          <li id={blog.id} className='blog'>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <button id={blog.id} onClick={handleDelete} className='deleteBtn'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
