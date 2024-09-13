import { useState } from "react";
import ReactQuill from "react-quill";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import "./UpdateBlogPage.css";

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

export default function UpdateBlogPage() {
  const blog = useLoaderData();
  const navigate = useNavigate();
  const [quillValue, setQuillValue] = useState(blog.body);

  function handleChange(e) {
    setQuillValue(e);
  }

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <Form method='PUT' state={quillValue} className='updateBlogForm'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' defaultValue={blog.title} required></input>
        <ReactQuill defaultValue={blog.body} onChange={handleChange} theme='snow' modules={modules} />
        {/* Hidden input to pass value of react quill to the Form function's action */}
        <input name='body' id='body' defaultValue={blog.body} value={quillValue} hidden></input>
        <button type='submit'>Update</button>
        <button onClick={handleCancel}>Cancel</button>
      </Form>
    </>
  );
}
