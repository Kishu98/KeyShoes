import { useState } from "react";
import ReactQuill from "react-quill";
import { Form } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import "./RichEditor.css";

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

export default function RichEditor({ method, blog = { title: "", body: "" } }) {
  const [quillValue, setQuillValue] = useState(blog.body);

  function handleBodyChange(content) {
    setQuillValue(content);
  }

  return (
    <Form method={method} className='blogForm'>
      <label htmlFor='title' className='blogFormLabel'>
        Title:
      </label>
      <input
        className='blogFormInput'
        type='text'
        id='title'
        name='title'
        defaultValue={blog.title}
        required
      ></input>
      <ReactQuill
        className='quillEditor'
        defaultValue={blog.body}
        onChange={handleBodyChange}
        theme='snow'
        modules={modules}
      />
      <input name='body' id='body' value={quillValue} hidden readOnly></input>
      <button className='submitBtn' type='submit'>
        {method === "PUT" ? "Update" : "Post"}
      </button>
    </Form>
  );
}
