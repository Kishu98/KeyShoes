import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import Blog from "../../pages/Blog Page/Blog";

export function BlogView({ blog }) {
  const [view, setView] = useState(false);
  function handleView() {
    setView(!view);
  }

  return (
    <>
      <li key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        <button onClick={handleView}>View</button>
        {view && <BlogCheck blog={blog} />}
      </li>
    </>
  );
}

function BlogCheck({ blog }) {
  const navigate = useNavigate();

  async function handleUpdate(e) {
    navigate(`${blog.id}/update`);
  }

  return (
    <article className='blogContainer'>
      <Form method='delete' action={`${blog.id}`}>
        <button className='deleteBtn' type='submit'>
          Delete
        </button>
      </Form>
      <button className='updateBtn' onClick={handleUpdate}>
        Update
      </button>
      <div className='blogContent' dangerouslySetInnerHTML={{ __html: blog.body }}></div>
    </article>
  );
}
