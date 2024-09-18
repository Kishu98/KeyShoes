import Time from "../time";
import "./Blog.css";

export default function Blog({ blog }) {
  return (
    <article className='blogContainer'>
      <header>
        <h2 className='title'>{blog.title}</h2>
        <Time blog={blog} />
      </header>
      <div className='blogContent' dangerouslySetInnerHTML={{ __html: blog.body }}></div>
    </article>
  );
}
