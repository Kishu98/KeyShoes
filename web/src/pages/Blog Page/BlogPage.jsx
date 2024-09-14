import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";

export default function BlogPage() {
  const blog = useLoaderData();

  return (
    <>
      <Blog blog={blog} />
    </>
  );
}
