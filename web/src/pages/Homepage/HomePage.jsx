import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import "./Homepage.css";
import NavBar from "../../components/navbar/navBar";

export default function HomePage() {
  const blogs = useLoaderData();
  const blog = blogs[blogs.length - 1];

  return (
    <>
      <article className='blogContainer'>
        <h1>Latest Blog</h1>
        <header>
          <h2 className='title'>{blog.title}</h2>
          <time dateTime={blog.created_at}>{new Date(blog.created_at).toLocaleDateString()}</time>
        </header>
        <div className='blogContent' dangerouslySetInnerHTML={{ __html: blog.body }}></div>
      </article>
    </>
  );
}
