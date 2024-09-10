import { useEffect, useState } from "react";
import "./BlogForm.css";
import { Blogs } from "../Blogs/Blogs";

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [reload, setReload] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

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
      <Blogs reload={reload} setReload={setReload} />
    </>
  );
}
