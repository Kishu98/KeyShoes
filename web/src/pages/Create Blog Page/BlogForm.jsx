import { useState } from "react";
import "./BlogForm.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
};

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
        <ReactQuill id='body' name='body' onChange={handleChange} theme='snow' modules={modules}></ReactQuill>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
