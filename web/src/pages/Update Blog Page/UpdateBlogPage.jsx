import { useLoaderData, useNavigate } from "react-router-dom";
import "./UpdateBlogPage.css";
import RichEditor from "../../components/RichEditor/RichEditor";

export default function UpdateBlogPage() {
  const blog = useLoaderData();
  const navigate = useNavigate();

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className='updateBlogPage'>
      <RichEditor method='PUT' blog={blog} />
      <button className='cancelBtn' onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}
