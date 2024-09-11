import { useEffect, useState } from "react";

export function Blogs({ reload, setReload }) {
  const [blogList, setBlogList] = useState([]);
  // const [reload, setReload] = useState(false);

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

  async function handleDelete(e) {
    e.preventDefault();
    let id = e.target.id;
    await fetch(`http://localhost:8080/blog/${id}`, {
      method: "DELETE",
    });
    setReload(!reload);
  }

  return (
    <ul className='blogs'>
      {blogList.map((blog) => (
        <li id={blog.id} className='blog'>
          <h2>{blog.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: blog.body }}></p>
          <button id={blog.id} onClick={handleDelete} className='deleteBtn'>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
