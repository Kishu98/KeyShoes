import { useEffect, useState } from "react";
import "./BlogForm.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "code"], // toggled buttons
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
  const [formMethod, setFormMethod] = useState("POST");
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [blogID, setBlogID] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  let lid;

  useEffect(() => {
    const { title = "", body = "", method = "POST", id } = location.state || {};
    setBlogID(id);

    setFormData((prevData) => ({
      ...prevData,
      title,
      body,
    }));

    setFormMethod(method);
    console.log("Reloaded");
  }, []);

  function handleTitleChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      title: e.target.value,
    }));
  }

  function handleBodyChange(content) {
    setFormData((prevData) => ({
      ...prevData,
      body: content,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let url = formMethod === "PUT" ? `http://localhost:8080/blog/${blogID}` : "http://localhost:8080/blog";
    await fetch(url, {
      method: formMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    formMethod === "PUT" ? alert("Blog Updated!") : alert("Blog Created");
    setFormData({ title: "", body: "" });
    if (formMethod === "PUT") {
      navigate(-1);
    }
  }

  function handleClear(e) {
    e.preventDefault();
    setFormData({ title: "", body: "" });
  }

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
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
          onChange={handleTitleChange}
          required
        ></input>
        <ReactQuill
          id='body'
          name='body'
          value={formData.body}
          onChange={handleBodyChange}
          theme='snow'
          modules={modules}
        ></ReactQuill>
        <footer>
          <button type='submit'>{formMethod === "PUT" ? "Update" : "Submit"}</button>
          {formMethod === "PUT" ? (
            <button onClick={handleCancel}>Cancel</button>
          ) : (
            <button onClick={handleClear}>Clear</button>
          )}
        </footer>
      </form>
    </>
  );
}
