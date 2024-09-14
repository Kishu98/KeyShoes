import "./BlogForm.css";

import RichEditor from "../../components/RichEditor/RichEditor";
import { useNavigate } from "react-router-dom";

export default function BlogForm() {
  const navigate = useNavigate();

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <RichEditor method='POST' />
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
}
