import "./Blog.css";

export default function Blog({ blog }) {
  return (
    <article className='blogContainer'>
      <header>
        <h2 className='title'>{blog.title}</h2>
        <time dateTime={blog.created_at}>{new Date(blog.created_at).toLocaleDateString()}</time>
      </header>
      <div className='blogContent' dangerouslySetInnerHTML={{ __html: blog.body }}></div>
    </article>
  );
}
