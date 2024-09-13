import { useState } from "react";
import "./BlogForm.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Form } from "react-router-dom";

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
  const [quillValue, setQuillValue] = useState("");

  function handleBodyChange(content) {
    setQuillValue(content);
  }

  return (
    <>
      <Form method='POST' className='createBlogForm'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' required></input>
        <ReactQuill onChange={handleBodyChange} theme='snow' modules={modules} />
        <input id='body' name='body' value={quillValue} hidden></input>
        <button type='submit'>Post</button>
      </Form>
    </>
  );
}
