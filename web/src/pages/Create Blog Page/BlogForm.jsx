import { useState } from "react";
import "./BlogForm.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code"],
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
  "code",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function BlogForm() {
  const initialState = {
    title: "",
    body: "",
  };

  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    if (e.target) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        title: e.target.value,
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
    await fetch("http://localhost:8080/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    alert("Post created!");
    setFormData(initialState);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
    </>
  );
}
