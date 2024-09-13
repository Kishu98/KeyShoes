import "./Blog.css";
import { Form, useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function Blog({ newBlog }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = useLoaderData();

  async function handleUpdate(e) {
    navigate(`/blogs/${id}/update`);
  }

  return (
    <>
      <article className='blogContainer'>
        <header>
          <h1 className='title'>{blog.title}</h1>
          <time dateTime={blog.created_at}>{new Date(blog.created_at).toLocaleDateString()}</time>
        </header>
        <div className='blogContent' dangerouslySetInnerHTML={{ __html: blog.body }}></div>
      </article>
    </>
  );
}
