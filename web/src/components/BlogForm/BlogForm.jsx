import { useEffect, useState } from "react";

export default function BlogForm() {
  const [blogList, setBlogList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:8080/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.value}
            onChange={handleChange}
            required
          ></input>
          <label>Body</label>
          <input
            type='text'
            id='body'
            name='body'
            value={formData.body}
            onChange={handleChange}
            required
          ></input>

          <button type='submit'>Submit</button>
        </form>
      </div>
      <ul>
        {blogList.map((blog) => (
          <li id={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
