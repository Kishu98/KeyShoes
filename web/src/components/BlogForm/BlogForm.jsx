import { useEffect, useState } from "react";
import "./BlogForm.css";
import { Blogs } from "../Blogs/Blogs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [reload, setReload] = useState(false);

  function handleChange(e) {
    if (e.target) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        body: e,
      });
    }
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
            value={formData.title}
            onChange={handleChange}
            required
          ></input>
          <ReactQuill
            id='body'
            name='body'
            value={formData.body}
            onChange={handleChange}
            theme='snow'
            modules={modules}
            formats={formats}
          ></ReactQuill>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Blogs reload={reload} setReload={setReload} />
    </>
  );
}
