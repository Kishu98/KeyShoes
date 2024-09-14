import { Link, useLoaderData } from "react-router-dom";

export default function BlogPageList() {
  const blogs = useLoaderData();
  console.log("helol");

  return (
    <section>
      <header>
        <h1>List of Blogs</h1>
      </header>
      {blogs ? <BlogList blogs={blogs} /> : <p>No blogs</p>}
    </section>
  );
}

function BlogList({ blogs }) {
  return (
    <ul className='bloglist'>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          <time className='time'>{new Date(blog.created_at).toLocaleDateString()}</time>
        </li>
      ))}
    </ul>
  );
}
